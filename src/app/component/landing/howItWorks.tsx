'use client';
import Image from 'next/image';
import { m, fadeUp, staggerContainer, scaleIn, viewportOnce } from './animatedWrapper';
import { Sparkles, MessageCircle, Flame, Zap } from 'lucide-react';

const steps = [
  { number: '01', color: 'var(--accent-rose)',     glow: 'var(--glow-rose)',     title: 'Upload your profile',    desc: 'Drop in your photos and bio. No login to dating apps required. Takes 60 seconds.' },
  { number: '02', color: 'var(--accent-lavender)', glow: 'var(--glow-lavender)', title: 'AI runs the full audit', desc: 'We score photos for attractiveness signals, analyze your bio for hook strength, and benchmark you against your competition.' },
  { number: '03', color: 'var(--accent-teal)',     glow: 'var(--glow-teal)',     title: 'Get your score & fixes', desc: 'See exactly what\'s working, what\'s killing your matches, and get a rewritten bio + photo order in 90 seconds.' },
  { number: '04', color: 'var(--accent-rose)',     glow: 'var(--glow-rose)',     title: 'Track & improve',        desc: 'A/B test profile versions, track match rate improvements weekly, and get opener suggestions for every new match.' },
];

// Floating stat chips around the character
const floatingStats = [
  {
    id: 'matches',
    top: '8%', left: '-18%',
    delay: 0,
    duration: 3.2,
    content: (
      <div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>This Week</div>
        <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', gap: '6px' }}>+11 Matches <Sparkles size={18} strokeWidth={2} aria-hidden /></div>
      </div>
    ),
  },
  {
    id: 'score',
    top: '28%', right: '-16%',
    delay: 0.6,
    duration: 3.8,
    content: (
      <div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Profile Score</div>
        <div style={{
          fontSize: '20px', fontWeight: 800,
          background: 'var(--gradient-brand-text)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          4/10 → 9/10
        </div>
      </div>
    ),
  },
  {
    id: 'opener',
    top: '55%', left: '-22%',
    delay: 1.1,
    duration: 4.1,
    content: (
      <div style={{ maxWidth: '160px' }}>
        <div style={{ fontSize: '11px', color: 'var(--accent-rose)', fontWeight: 600, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><MessageCircle size={12} strokeWidth={2} aria-hidden /> AI Opener</div>
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, fontStyle: 'italic' }}>
          "From Nanami's Cool Cousin"
        </div>
      </div>
    ),
  },
  {
    id: 'bio',
    bottom: '18%', right: '-18%',
    delay: 0.3,
    duration: 3.5,
    content: (
      <div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Bio Hook Score</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-lavender-light)' }}>92</div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>/ 100</div>
          <div style={{
            fontSize: '10px', padding: '1px 6px',
            background: 'rgba(159,122,234,0.15)',
            border: '1px solid rgba(159,122,234,0.30)',
            borderRadius: '999px',
            color: 'var(--accent-lavender-light)',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            <Flame size={10} strokeWidth={2.5} aria-hidden /> TOP 5%
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'rizz',
    bottom: '6%', left: '-10%',
    delay: 1.4,
    duration: 3.0,
    content: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-rose)' }}><Zap size={22} strokeWidth={2} aria-hidden /></div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-rose)' }}>Rizz Level</div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Dangerous</div>
        </div>
      </div>
    ),
  },
];

// ── Floating chip component ──────────────────────────────
function FloatingChip({
  stat,
}: {
  stat: typeof floatingStats[0];
}) {
  const { id, top, left, right, bottom, delay, duration, content } = stat;

  return (
    <m.div
      key={id}
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] as const }}
      animate={{ y: [0, -7, 0] }}
      // @ts-ignore — framer accepts this fine at runtime
      style={{
        position: 'absolute',
        top, left, right, bottom,
        zIndex: 10,
      }}
    >
      <m.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
        style={{
          background: 'rgba(13,15,27,0.90)',
          border: '1px solid rgba(242,112,156,0.22)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-3) var(--space-4)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.40), 0 0 20px rgba(242,112,156,0.10)',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Top glow line */}
        <div style={{
          position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(242,112,156,0.40), transparent)',
          borderRadius: '999px',
        }} />
        {content}
      </m.div>
    </m.div>
  );
}

// ── Main export ──────────────────────────────────────────
export default function HowItWorks() {
  return (
    <section className="section section-padding-inline" id="how-it-works" style={{ padding: 'var(--space-20) var(--space-6)' }}>
      <div className="container">

        <m.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{ textAlign: 'center', marginBottom: 'var(--space-14)' }}
        >
          <span className="text-label" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>How It Works</span>
          <h2 className="heading-1">
            From zero matches to <span className="text-gradient">date in 4 steps</span>
          </h2>
        </m.div>

        {/* ── Two column: steps left | character right ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          gap: 'var(--space-16)',
          alignItems: 'center',
          marginBottom: 'var(--space-16)',
        }}
          className="hiw-grid"
        >

          {/* LEFT — Steps */}
          <m.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
          >
            {steps.map((step) => (
              <m.div
                key={step.number}
                variants={scaleIn}
                style={{
                  display: 'grid', gridTemplateColumns: '72px 1fr',
                  gap: 'var(--space-6)', alignItems: 'center',
                  background: 'var(--aurora-card-bg)',
                  border: 'var(--aurora-border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  boxShadow: 'var(--shadow-md)',
                }}
                className="hiw-step-row"
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <div style={{
                  width: '64px', height: '64px',
                  borderRadius: 'var(--radius-lg)',
                  background: `linear-gradient(135deg, ${step.color}22, ${step.color}11)`,
                  border: `1px solid ${step.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)',
                  color: step.color, flexShrink: 0,
                }}>
                  {step.number}
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-1)' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)' }}>
                    {step.desc}
                  </p>
                </div>
              </m.div>
            ))}
          </m.div>

          {/* RIGHT — Mr. Rizzler character */}
          <m.div
            className="hiw-character-column"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '560px',
            }}
          >

            {/* Ambient glow behind character */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              height: '400px',
              background: 'radial-gradient(ellipse at center bottom, rgba(242,112,156,0.22) 0%, rgba(159,122,234,0.14) 40%, transparent 75%)',
              filter: 'blur(24px)',
              zIndex: 0,
              pointerEvents: 'none',
            }} />

            {/* Ground glow ring */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: '20px',
              background: 'radial-gradient(ellipse, rgba(242,112,156,0.35) 0%, transparent 70%)',
              filter: 'blur(8px)',
              zIndex: 0,
            }} />

            {/* Name badge above head */}
            <m.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.6, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
              style={{
                position: 'absolute',
                top: '0px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                textAlign: 'center',
              }}
            >
              <div style={{
                background: 'rgba(13,15,27,0.92)',
                border: '1px solid rgba(242,112,156,0.35)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-5)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 0 20px rgba(242,112,156,0.20)',
                whiteSpace: 'nowrap',
              }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-rose)', letterSpacing: '0.04em' }}>
                  Mr. Rizzler
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  AI Dating Coach
                </div>
              </div>

              {/* Connector line */}
              <div style={{
                width: '1px',
                height: '20px',
                background: 'linear-gradient(to bottom, rgba(242,112,156,0.50), transparent)',
                margin: '0 auto',
              }} />
            </m.div>

            {/* Character image */}
            <m.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative', zIndex: 1, marginTop: '60px' }}
            >
              <Image
                src="/landingPage/rizzlerJi.png"
                alt="Mr. Rizzler — AI Dating Coach"
                width={320}
                height={460}
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center bottom',
                  filter: 'drop-shadow(0 8px 40px rgba(242,112,156,0.25)) drop-shadow(0 0 80px rgba(159,122,234,0.15))',
                }}
              />
            </m.div>

            {/* Floating stat chips */}
            <div className="hiw-floating-chips" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
              {floatingStats.map(stat => (
                <FloatingChip key={stat.id} stat={stat} />
              ))}
            </div>

          </m.div>
        </div>

        {/* ── Before / After Banner ── */}
        <m.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--glow-strong)',
            border: 'var(--aurora-border)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '280px' }} className="hiw-before-after">

            {/* Before */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <Image
                src="/landingPage/Before_V2.png"
                alt="Before optimization"
                fill
                style={{ objectFit: 'cover', filter: 'brightness(0.5) saturate(0.4)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 80%, rgba(12,14,26,0.9))' }} />
              <div style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)' }}>
                <span className="badge badge-rose">Before</span>
              </div>
              <div style={{ position: 'absolute', bottom: 'var(--space-4)', left: 'var(--space-4)' }}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', color: 'var(--accent-rose)' }}>3 / 10</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>1 match / week</div>
              </div>
            </div>

            {/* After */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <Image
                src="/landingPage/After_V2.png"
                alt="After optimization"
                fill
                style={{ objectFit: 'cover', filter: 'brightness(0.8) saturate(1.1)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent 80%, rgba(12,14,26,0.9))' }} />
              <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)' }}>
                <span className="badge badge-teal">After</span>
              </div>
              <div style={{ position: 'absolute', bottom: 'var(--space-4)', right: 'var(--space-4)', textAlign: 'right' }}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', color: 'var(--accent-teal)' }}>9 / 10</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>11 matches / week</div>
              </div>
            </div>
          </div>

          {/* Center pill */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'var(--bg-overlay)',
            border: 'var(--aurora-border-strong)',
            borderRadius: 'var(--radius-full)',
            padding: 'var(--space-2) var(--space-4)',
            boxShadow: 'var(--glow-rose)',
            zIndex: 2,
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-semibold)',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <Sparkles size={14} strokeWidth={2} aria-hidden /> After Carizzmaw
          </div>
        </m.div>

      </div>
    </section>
  );
}
