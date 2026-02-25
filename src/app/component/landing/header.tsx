'use client';

import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features',     href: '#features'     },
  { label: 'Pricing',      href: '#pricing'       },
] as const;

// ─────────────────────────────────────────────
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200, damping: 30, restDelta: 0.001,
  });
  return (
    <m.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[600]
        bg-gradient-to-r from-[var(--accent-rose)] via-[var(--accent-lavender)] to-[var(--accent-teal)]"
    />
  );
}

// ─────────────────────────────────────────────
function AnnouncementBar({ onDismiss }: { onDismiss: () => void }) {
  return (
    <m.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
      className="fixed top-0 left-0 right-0 z-[500] overflow-hidden"
    >
      <div className="
        relative flex items-center justify-center gap-3 px-10 py-2
        bg-gradient-to-r
          from-[rgba(242,112,156,0.10)]
          via-[rgba(159,122,234,0.10)]
          to-[rgba(242,112,156,0.10)]
        border-b border-[rgba(242,112,156,0.14)]
        backdrop-blur-sm
      ">
        <span className="
          inline-flex items-center gap-1.5 px-2.5 py-0.5
          bg-[var(--accent-rose-muted)]
          border border-[rgba(242,112,156,0.30)]
          rounded-full text-[var(--accent-rose)]
          text-[10px] font-semibold tracking-widest uppercase
        ">
          ✦ New
        </span>
        <span className="text-[var(--text-secondary)] text-sm">
          Roast Mode is live — get a brutally honest AI critique of your profile.
        </span>
        <a
          href="#features"
          className="
            text-[var(--accent-rose)] text-sm font-semibold
            underline-offset-2 hover:underline transition-all duration-150
          "
        >
          Try it free →
        </a>
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            w-6 h-6 flex items-center justify-center
            text-[var(--text-muted)] hover:text-[var(--text-primary)]
            rounded-full hover:bg-[rgba(255,255,255,0.07)]
            transition-all duration-150 text-xs leading-none
          "
        >
          ✕
        </button>
      </div>
    </m.div>
  );
}

// ─────────────────────────────────────────────
export default function Header() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showBanner,    setShowBanner]    = useState(true);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const headerTop = showBanner ? 'top-[calc(2.25rem+1rem)]' : 'top-4';
  const drawerTop = showBanner ? 'top-[calc(2.25rem+5rem)]'  : 'top-[4.75rem]';

  return (
    <>
      <ScrollProgressBar />

      <AnimatePresence>
        {showBanner && (
          <AnnouncementBar onDismiss={() => setShowBanner(false)} />
        )}
      </AnimatePresence>

      {/* ── Main Header ── */}
      <m.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
        className={`
          fixed left-1/2 -translate-x-1/2 z-[500]
          w-[calc(100%-2rem)] max-w-5xl
          rounded-[var(--radius-xl)]
          transition-[top,padding,background,border-color,box-shadow]
          duration-300 ease-[var(--ease-smooth)]
          ${headerTop}
          ${scrolled
            ? 'py-2.5 px-5 bg-[rgba(10,12,24,0.92)] border border-[rgba(242,112,156,0.20)] shadow-[0_0_0_1px_rgba(242,112,156,0.06),var(--glow-rose)] backdrop-blur-2xl'
            : 'py-3 px-5 bg-[rgba(12,14,26,0.60)] border border-[rgba(255,255,255,0.08)] shadow-[var(--shadow-md)] backdrop-blur-lg'
          }
        `}
      >
        {/* Top inner glow line */}
        <div className="
          absolute top-0 left-[20%] right-[20%] h-px rounded-full pointer-events-none
          bg-gradient-to-r from-transparent via-[rgba(242,112,156,0.35)] to-transparent
        " />

        {/* 3-zone layout */}
        <div className="flex items-center justify-between gap-6">

          {/* ZONE 1 — Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            <m.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="
                relative w-8 h-8 rounded-[10px] flex items-center justify-center
                bg-gradient-to-br from-[var(--accent-rose)] to-[var(--accent-lavender)]
                shadow-[var(--glow-button)] overflow-hidden flex-shrink-0
              "
            >
              <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
              <span className="relative text-white text-sm font-bold select-none">✦</span>
            </m.div>
            <div className="flex flex-col leading-none gap-[3px]">
              <span className="
                font-bold text-[15px] tracking-tight
                bg-gradient-to-r from-[var(--accent-rose)] to-[var(--accent-lavender-light)]
                bg-clip-text text-transparent
              ">
                Bloom
              </span>
              <span className="text-[9px] tracking-[0.15em] uppercase text-[var(--text-muted)] font-medium">
                Profile AI
              </span>
            </div>
          </a>

          {/* ZONE 2 — Nav chip */}
          <nav
            ref={navRef}
            className="
              hidden md:flex items-center
              rounded-full
              border border-[rgba(255,255,255,0.09)]
              bg-[rgba(255,255,255,0.04)]
              p-[5px] gap-1
            "
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <div key={link.href} className="relative">
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`
                      relative z-10 px-5 py-[9px] rounded-full h-8 w-30
                      text-sm font-medium whitespace-nowrap
                      transition-colors duration-150
                      ${isActive
                        ? 'text-[var(--accent-rose)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }
                    `}
                  >
                    {link.label}
                  </button>
                  {isActive && (
                    <m.div
                      layoutId="nav-active-pill"
                      className="
                        absolute inset-0 rounded-full pointer-events-none
                        bg-gradient-to-r
                          from-[rgba(242,112,156,0.16)]
                          to-[rgba(159,122,234,0.12)]
                        border border-[rgba(242,112,156,0.25)]
                      "
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* ZONE 3 — Auth buttons */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">

            {/* Sign In */}
            <button className="
              px-5 py-[9px] rounded-full
              text-sm font-medium text-[var(--text-secondary)]
              border border-[rgba(255,255,255,0.09)]
              bg-[rgba(255,255,255,0.03)]
              hover:text-[var(--text-primary)]
              hover:bg-[rgba(255,255,255,0.07)]
              hover:border-[rgba(255,255,255,0.14)]
              active:scale-[0.97]
              transition-all duration-150
              whitespace-nowrap
              h-8 w-18
            ">
              Sign In
            </button>

            {/* Free Audit */}
            <m.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="
                relative px-6 py-[9px] rounded-full overflow-hidden
                text-sm font-semibold text-white whitespace-nowrap
                bg-gradient-to-r from-[var(--accent-rose)] to-[var(--accent-lavender)]
                shadow-[var(--glow-button)]
                h-8 w-35
              "
            >
              <span className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
              <span className="relative">Free Audit →</span>
            </m.button>

          </div>

          {/* ── Mobile Hamburger ── */}
          <m.button
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.92 }}
            className="
              md:hidden w-9 h-9 flex flex-col items-center justify-center
              rounded-[10px] flex-shrink-0
              border border-[rgba(255,255,255,0.09)]
              bg-[rgba(255,255,255,0.03)]
              hover:bg-[rgba(242,112,156,0.08)]
              hover:border-[rgba(242,112,156,0.25)]
              transition-all duration-150 gap-[5px]
            "
          >
            {([
              mobileOpen ? { rotate: 45,  y: 6,    opacity: 1 } : { rotate: 0, y: 0, opacity: 1 },
              mobileOpen ? { opacity: 0,  scaleX: 0, rotate: 0, y: 0 } : { opacity: 1, scaleX: 1, rotate: 0, y: 0 },
              mobileOpen ? { rotate: -45, y: -6,   opacity: 1 } : { rotate: 0, y: 0, opacity: 1 },
            ] as const).map((anim, i) => (
              <m.span
                key={i}
                animate={anim}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] as const }}
                className="block w-[15px] h-[1.5px] bg-[var(--text-secondary)] rounded-full origin-center"
              />
            ))}
          </m.button>

        </div>
      </m.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <m.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[490] bg-[rgba(9,11,21,0.75)] backdrop-blur-sm md:hidden"
            />

            <m.div
              key="drawer"
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0,   scale: 1     }}
              exit={{    opacity: 0, y: -16, scale: 0.96  }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
              className={`
                fixed left-4 right-4 z-[495] md:hidden
                rounded-[var(--radius-xl)] overflow-hidden
                bg-[rgba(13,15,27,0.98)] backdrop-blur-2xl
                border border-[rgba(242,112,156,0.18)]
                shadow-[var(--glow-rose),var(--shadow-xl)]
                ${drawerTop}
              `}
            >
              <div className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none
                bg-gradient-to-r from-transparent via-[rgba(242,112,156,0.45)] to-transparent" />

              <div className="p-3 flex flex-col gap-3">
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = activeSection === link.href.slice(1);
                    return (
                      <m.button
                        key={link.href}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{
                          opacity: 1, x: 0,
                          transition: { delay: i * 0.07, duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
                        }}
                        onClick={() => handleNavClick(link.href)}
                        className={`
                          w-full text-left px-4 py-3 rounded-xl
                          text-[15px] font-medium
                          flex items-center justify-between
                          transition-all duration-150
                          ${isActive
                            ? 'text-[var(--accent-rose)] bg-gradient-to-r from-[rgba(242,112,156,0.12)] to-[rgba(159,122,234,0.08)] border border-[rgba(242,112,156,0.20)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.04)]'
                          }
                        `}
                      >
                        <span>{link.label}</span>
                        {isActive
                          ? <span className="text-[var(--accent-rose)] text-[10px]">●</span>
                          : <span className="text-[var(--text-muted)]">›</span>
                        }
                      </m.button>
                    );
                  })}
                </nav>

                <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent mx-1" />

                <m.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.22, duration: 0.25 } }}
                  className="flex flex-col gap-2 px-1"
                >
                  <button className="
                    w-full py-3 rounded-full
                    text-sm font-medium text-[var(--text-secondary)]
                    border border-[rgba(255,255,255,0.09)]
                    hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.04)]
                    transition-all duration-150
                  ">
                    Sign In
                  </button>
                  <button className="
                    relative w-full py-3 rounded-full overflow-hidden
                    text-sm font-semibold text-white
                    bg-gradient-to-r from-[var(--accent-rose)] to-[var(--accent-lavender)]
                    shadow-[var(--glow-button)] active:scale-[0.98] transition-all duration-150
                  ">
                    <span className="absolute inset-0 px-6 py-2 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
                    <span className="relative">Get Free Audit →</span>
                  </button>
                </m.div>

                <m.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.30 } }}
                  className="text-center text-[11px] text-[var(--text-muted)] pb-1 tracking-wide"
                >
                  Free audit · No credit card · 90 seconds
                </m.p>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
