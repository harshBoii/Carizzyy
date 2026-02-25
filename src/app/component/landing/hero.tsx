'use client';
import Image from 'next/image';
import { m, fadeUp, staggerContainer, scaleIn, viewportOnce } from './animatedWrapper';
import { Sparkles } from 'lucide-react';

const stats = [
  { value: '64%', label: 'of men feel insecure from\nzero matches' },
  { value: '46%', label: 'of users describe their\nexperience as bad' },
  { value: '11x', label: 'more matches after\nprofile optimization' },
];

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(var(--space-6), 5vw, var(--space-20)) clamp(var(--space-4), 4vw, var(--space-6))',
      position: 'relative',
    }}>

      {/* ── Two-column layout on wide screens ── */}
      <div className="hero-grid">

        {/* Left — text */}
        <div>
          <m.div variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: 'var(--space-6)' }}>
            <span className="badge badge-rose" style={{ fontSize: 'var(--text-sm)', padding: 'var(--space-2) var(--space-4)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} strokeWidth={2} aria-hidden /> AI-Powered Dating Profile Optimizer
            </span>
          </m.div>

          <m.h1
            variants={fadeUp} initial="hidden" animate="visible"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, var(--text-5xl))',
              fontWeight: 'var(--font-bold)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
              marginBottom: 'var(--space-6)',
            }}
          >
            Your profile is{' '}
            <span className="text-gradient">costing you dates.</span>
            <br />We'll show you exactly why.
          </m.h1>

          <m.div variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-8)', maxWidth: '480px' }}
            className="hero-subtitle"
          >
            It's not you. It's your photos, bio, and platform strategy.
            Our AI rebuilds your dating profile like a product launch.
          </m.div>

          <m.div variants={staggerContainer} initial="hidden" animate="visible"
            className="hero-buttons"
            style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}
          >
            <m.button variants={scaleIn} className="btn-primary" style={{ fontSize: 'var(--text-lg)', padding: 'var(--space-4) var(--space-10)' }}>
              Get Free Audit →
            </m.button>
            <m.button variants={scaleIn} className="btn-secondary" style={{ padding: 'var(--space-4) var(--space-8)' }}>
              See How It Works
            </m.button>
          </m.div>

          <m.p variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}
          >
            Free audit · No credit card · Results in 90 seconds
          </m.p>
        </div>

        {/* Right — phone image with glow ring */}
        <m.div
          className="hero-floating-badges"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const, delay: 0.2 } }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          {/* Ambient glow behind the phone */}
          <div style={{
            position: 'absolute',
            inset: '-40px',
            background: 'radial-gradient(ellipse at center, rgba(242,112,156,0.20) 0%, rgba(159,122,234,0.15) 50%, transparent 75%)',
            filter: 'blur(30px)',
            zIndex: 0,
            borderRadius: '50%',
          }} />

          <div style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '420px',
            width: '100%',
          }} className="hero-phone-wrap">
            <Image
              src="/landingPage/heroineJi.png"
              alt="Dating app profile UI"
              width={340}
              height={520}
              style={{ objectFit: 'cover', display: 'block', width: '100%', height: 'auto' }}
              priority
            />
          </div>

          {/* Floating score badge */}
          <m.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="card-rose"
            style={{
              position: 'absolute',
              bottom: '24px',
              right: '-20px',
              padding: 'var(--space-3) var(--space-4)',
              zIndex: 2,
              minWidth: '130px',
            }}
          >
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-1)' }}>Profile Score</div>
            <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', background: 'var(--gradient-brand-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              4/10 → 9/10
            </div>
          </m.div>

          {/* Floating match badge */}
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="card-lavender"
            style={{
              position: 'absolute',
              top: '32px',
              left: '-24px',
              padding: 'var(--space-3) var(--space-4)',
              zIndex: 2,
            }}
          >
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>This week</div>
            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--accent-lavender-light)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              +11 Matches <Sparkles size={18} strokeWidth={2} aria-hidden />
            </div>
          </m.div>
        </m.div>
      </div>

      {/* Stats Row */}
      <m.div
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
        style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'clamp(var(--space-8), 8vw, var(--space-20))', width: '100%', maxWidth: '860px' }}
      >
        {stats.map((s) => (
          <m.div key={s.value} variants={scaleIn} className="card-rose"
            style={{ minWidth: 'min(100%, 170px)', padding: 'var(--space-4) var(--space-6)', textAlign: 'center', flex: '1 1 140px' }}
          >
            <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-bold)', background: 'var(--gradient-brand-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 'var(--space-2)' }}>
              {s.value}
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', whiteSpace: 'pre-line', lineHeight: 'var(--leading-snug)' }}>
              {s.label}
            </div>
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
