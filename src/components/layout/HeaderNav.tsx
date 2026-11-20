"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Download,
  Mail,
  Menu,
  X,
} from "lucide-react";
import {
  CONTACT_NAV_ITEM,
  PRIMARY_NAVIGATION,
  type NavItem,
} from "@/config/navigation";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import { cn } from "@/lib/utils";
import { buttonStyles } from "@/components/ui/Button";

const emptySubscribe = () => () => {};

function isRouteActive(pathname: string, item: NavItem): boolean {
  if (!pathname) return false;
  if (item.href === "/") {
    return pathname === "/";
  }
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
    return true;
  }
  if (item.children) {
    return item.children.some(
      (child) =>
        !child.href.startsWith("/#") &&
        (pathname === child.href || pathname.startsWith(`${child.href}/`))
    );
  }
  return false;
}

export function HeaderNav() {
  const rawPathname = usePathname() || "/";
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  // Defer active pathname evaluation until client hydration so static /_not-found matches cleanly
  const pathname = isHydrated ? rawPathname : "";
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(
    "research"
  );

  const navContainerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownTriggerRefs = useRef<Record<string, HTMLButtonElement | null>>(
    {}
  );
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const clearPendingClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const closeAllMenus = useCallback(() => {
    clearPendingClose();
    setOpenDropdownId(null);
    setMobileOpen(false);
  }, [clearPendingClose]);

  const scheduleCloseDropdown = useCallback(() => {
    clearPendingClose();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdownId(null);
    }, 140);
  }, [clearPendingClose]);

  // Close menus on browser history navigation, outside pointer click, or Escape
  useEffect(() => {
    const handlePopState = () => closeAllMenus();

    const handlePointerDown = (event: PointerEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdownId(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (openDropdownId) {
        const trigger = dropdownTriggerRefs.current[openDropdownId];
        setOpenDropdownId(null);
        trigger?.focus();
      }

      if (mobileOpen) {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearPendingClose();
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [clearPendingClose, closeAllMenus, mobileOpen, openDropdownId]);

  // Lock background page scroll while mobile drawer is open
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const handleDesktopTriggerKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    item: NavItem
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpenDropdownId(item.id);
      requestAnimationFrame(() => {
        const firstLink = document.querySelector<HTMLAnchorElement>(
          `#dropdown-${item.id} a`
        );
        firstLink?.focus();
      });
    }
  };

  const handleDropdownItemKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement>,
    itemId: string
  ) => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(`#dropdown-${itemId} a`)
    );
    const currentIndex = links.indexOf(event.currentTarget);

    if (event.key === "ArrowDown") {
      event.preventDefault();
      links[(currentIndex + 1) % links.length]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (currentIndex === 0) {
        setOpenDropdownId(null);
        dropdownTriggerRefs.current[itemId]?.focus();
      } else {
        links[(currentIndex - 1 + links.length) % links.length]?.focus();
      }
    }
  };

  const isContactActive =
    pathname === CONTACT_NAV_ITEM.href ||
    pathname.startsWith(`${CONTACT_NAV_ITEM.href}/`);

  return (
    <div ref={navContainerRef} className="flex flex-1 items-center justify-end lg:justify-between gap-4">
      {/* Desktop Navigation */}
      <nav
        aria-label="Primary navigation"
        className="hidden lg:flex items-center gap-1 xl:gap-2"
      >
        {PRIMARY_NAVIGATION.map((item) => {
          const active = isRouteActive(pathname, item);
          const hasChildren = Boolean(item.children?.length);
          const isDropdownOpen = openDropdownId === item.id;

          if (hasChildren && item.children) {
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => {
                  clearPendingClose();
                  setOpenDropdownId(item.id);
                }}
                onMouseLeave={scheduleCloseDropdown}
                onBlur={(e) => {
                  if (
                    e.relatedTarget instanceof Node &&
                    !e.currentTarget.contains(e.relatedTarget)
                  ) {
                    setOpenDropdownId(null);
                  }
                }}
              >
                <button
                  ref={(el) => {
                    dropdownTriggerRefs.current[item.id] = el;
                  }}
                  type="button"
                  aria-current={active ? "page" : undefined}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="menu"
                  aria-controls={`dropdown-${item.id}`}
                  onClick={() =>
                    setOpenDropdownId((prev) =>
                      prev === item.id ? null : item.id
                    )
                  }
                  onKeyDown={(e) => handleDesktopTriggerKeyDown(e, item)}
                  className={cn(
                    "group relative inline-flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
                    active || isDropdownOpen
                      ? "text-primary-navy font-semibold bg-soft-blue/70"
                      : "text-main-text hover:text-primary-navy hover:bg-soft-blue/50"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none",
                      isDropdownOpen && "rotate-180 text-primary-navy"
                    )}
                  />
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 bottom-0.5 h-[2px] rounded-full bg-teal"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-3 bottom-0.5 h-[2px] origin-center scale-x-0 rounded-full bg-teal/70 transition-transform duration-200 [@media(hover:hover)]:group-hover:scale-x-100 motion-reduce:hidden"
                    />
                  )}
                </button>

                {/* Desktop Dropdown Panel */}
                {isDropdownOpen && (
                  <div
                    id={`dropdown-${item.id}`}
                    role="menu"
                    aria-label={`${item.label} submenu`}
                    className="absolute left-0 top-full z-50 pt-2 w-80"
                  >
                    <div className="rounded-2xl border border-border-subtle bg-pure-white p-2 shadow-[var(--shadow-dropdown)]">
                      <div className="px-3 py-2 border-b border-border-subtle/80 mb-1">
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-secondary-text">
                          {item.label} Architecture
                        </p>
                      </div>
                      <ul className="space-y-0.5">
                        {item.children.map((child) => {
                          const childActive =
                            !child.href.startsWith("/#") &&
                            pathname === child.href;
                          return (
                            <li key={child.href} role="none">
                              <Link
                                href={child.href}
                                role="menuitem"
                                onClick={closeAllMenus}
                                onKeyDown={(e) =>
                                  handleDropdownItemKeyDown(e, item.id)
                                }
                                className={cn(
                                  "group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors duration-150",
                                  "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal",
                                  childActive
                                    ? "bg-soft-blue/75 text-deep-navy"
                                    : "hover:bg-cool-white text-main-text"
                                )}
                              >
                                <span className="flex items-center gap-2 text-sm font-medium text-deep-navy">
                                  <span
                                    aria-hidden="true"
                                    className={cn(
                                      "h-1.5 w-1.5 rounded-full transition-colors",
                                      childActive
                                        ? "bg-teal"
                                        : "bg-primary-navy/35 group-hover:bg-teal"
                                    )}
                                  />
                                  {child.label}
                                </span>
                                <span className="pl-3.5 text-xs leading-relaxed text-secondary-text">
                                  {child.description}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={closeAllMenus}
              className={cn(
                "group relative inline-flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
                active
                  ? "text-primary-navy font-semibold"
                  : "text-main-text hover:text-primary-navy hover:bg-soft-blue/50"
              )}
            >
              <span>{item.label}</span>
              {active ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 bottom-0.5 h-[2px] rounded-full bg-teal"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-3 bottom-0.5 h-[2px] origin-center scale-x-0 rounded-full bg-teal/70 transition-transform duration-200 [@media(hover:hover)]:group-hover:scale-x-100 motion-reduce:hidden"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Desktop Right CTA + Mobile Controls */}
      <div className="flex items-center gap-2.5">
        <Link
          href={CONTACT_NAV_ITEM.href}
          aria-current={isContactActive ? "page" : undefined}
          onClick={closeAllMenus}
          className={cn(
            buttonStyles({
              variant: isContactActive ? "deepNavy" : "terracotta",
              size: "sm",
            }),
            "hidden min-[360px]:inline-flex gap-1.5 px-3.5 sm:px-4"
          )}
        >
          <Mail
            aria-hidden="true"
            className={cn(
              "h-3.5 w-3.5",
              isContactActive ? "text-golden-yellow" : "text-terracotta"
            )}
          />
          <span>{CONTACT_NAV_ITEM.label}</span>
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          ref={mobileToggleRef}
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setMobileOpen((prev) => !prev)}
          className={cn(
            "inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-pure-white text-primary-navy transition-colors",
            "hover:bg-soft-blue hover:border-primary-navy/45",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          )}
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-[69px] sm:top-[77px] bottom-0 z-50 lg:hidden overflow-y-auto border-t border-border-subtle bg-cool-white/[0.98] backdrop-blur-md animate-editorial-up motion-reduce:animate-none"
        >
          <div className="mx-auto flex min-h-full max-w-xl flex-col justify-between px-4 py-6 sm:px-6">
            <nav aria-label="Mobile navigation links" className="space-y-1.5">
              {PRIMARY_NAVIGATION.map((item) => {
                const active = isRouteActive(pathname, item);
                const hasChildren = Boolean(item.children?.length);
                const isExpanded = mobileExpandedId === item.id;

                if (hasChildren && item.children) {
                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-border-subtle bg-pure-white overflow-hidden"
                    >
                      <button
                        type="button"
                        aria-current={active ? "page" : undefined}
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setMobileExpandedId((prev) =>
                            prev === item.id ? null : item.id
                          )
                        }
                        className={cn(
                          "flex w-full items-center justify-between px-4 py-3.5 text-left text-base font-medium transition-colors",
                          active
                            ? "text-deep-navy bg-soft-blue/65 font-semibold"
                            : "text-main-text hover:bg-cool-white"
                        )}
                      >
                        <span className="flex items-center gap-2.5">
                          {active && (
                            <span
                              aria-hidden="true"
                              className="h-2 w-2 rounded-full bg-teal"
                            />
                          )}
                          {item.label}
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "h-4 w-4 text-secondary-text transition-transform duration-200",
                            isExpanded && "rotate-180 text-primary-navy"
                          )}
                        />
                      </button>

                      {isExpanded && (
                        <div className="border-t border-border-subtle bg-cool-white/60 px-3 py-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeAllMenus}
                              className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-pure-white"
                            >
                              <div className="text-sm font-medium text-deep-navy">
                                {child.label}
                              </div>
                              <div className="mt-0.5 text-xs text-secondary-text leading-relaxed">
                                {child.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeAllMenus}
                    className={cn(
                      "flex items-center justify-between rounded-2xl border px-4 py-3.5 text-base font-medium transition-colors",
                      active
                        ? "border-primary-navy/45 bg-soft-blue text-deep-navy font-semibold"
                        : "border-border-subtle bg-pure-white text-main-text hover:bg-soft-blue/45"
                    )}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-teal"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Drawer Actions */}
            <div className="mt-8 space-y-3 border-t border-border-subtle pt-6">
              <Link
                href={CONTACT_NAV_ITEM.href}
                aria-current={isContactActive ? "page" : undefined}
                onClick={closeAllMenus}
                className={cn(
                  buttonStyles({
                    variant: "deepNavy",
                    size: "lg",
                    fullWidth: true,
                  }),
                  isContactActive &&
                    "ring-2 ring-terracotta ring-offset-2 ring-offset-cool-white"
                )}
              >
                <Mail aria-hidden="true" className="h-4 w-4 text-golden-yellow" />
                <span>Contact &amp; Academic Inquiries</span>
              </Link>

              <a
                href={ACADEMIC_IDENTITY.cvPath}
                download={ACADEMIC_IDENTITY.cvFileName}
                onClick={closeAllMenus}
                className={buttonStyles({
                  variant: "secondary",
                  size: "lg",
                  fullWidth: true,
                })}
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                <span>Download Academic CV (PDF)</span>
              </a>

              <p className="pt-2 text-center text-xs text-secondary-text">
                {ACADEMIC_IDENTITY.email} · {ACADEMIC_IDENTITY.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
