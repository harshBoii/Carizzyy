'use client';
import Image from 'next/image';
import { m, fadeUp, staggerContainer, scaleIn, viewportOnce } from './animatedWrapper';

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
      padding: 'var(--space-20) var(--space-6)',
      position: 'relative',
    }}>

      {/* ── Two-column layout on wide screens ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,480px)',
        gap: 'var(--space-16)',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1100px',
      }}
        className="hero-grid"   // add responsive CSS below
      >

        {/* Left — text */}
        <div>
          <m.div variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: 'var(--space-6)' }}>
            <span className="badge badge-rose" style={{ fontSize: 'var(--text-sm)', padding: 'var(--space-2) var(--space-4)' }}>
              ✦ AI-Powered Dating Profile Optimizer
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

          <m.p variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-8)', maxWidth: '480px' }}
          >
            It's not you. It's your photos, bio, and platform strategy.
            Our AI rebuilds your dating profile like a product launch.
          </m.p>

          <m.div variants={staggerContainer} initial="hidden" animate="visible"
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
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--glow-strong)',
            border: 'var(--aurora-border)',
            maxWidth: '340px',
            width: '100%',
          }}>
            <Image
              src="/landingPage/mobile_hero.png"
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
            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--accent-lavender-light)' }}>+11 Matches 🎉</div>
          </m.div>
        </m.div>
      </div>

      {/* Stats Row */}
      <m.div
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
        style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--space-20)', width: '100%', maxWidth: '860px' }}
      >
        {stats.map((s) => (
          <m.div key={s.value} variants={scaleIn} className="card-rose"
            style={{ minWidth: '170px', padding: 'var(--space-6)', textAlign: 'center', flex: '1 1 160px' }}
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
