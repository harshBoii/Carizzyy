'use client';
import Image from 'next/image';
import { m, fadeUp, staggerContainer, scaleIn, viewportOnce } from './animatedWrapper';
import { useState } from 'react';

const pains = [
  {
    emoji: '📉',
    title: 'Swiping into the void',
    desc: 'You swipe right constantly. The matches just don\'t come. You start wondering if something\'s wrong with you.',
    solveEmoji: '🎯',
    solveTitle: 'No more guessing.',
    solveDesc: 'We track exactly which photo is tanking your swipe rate and tell you the precise fix — not a guess, a data-backed answer.',
  },
  {
    emoji: '👻',
    title: 'Matches that ghost',
    desc: 'You finally match. You message. They read it. Nothing. The silence is worse than the rejection.',
    solveEmoji: '💬',
    solveTitle: 'Our AI Coach makes the dead speak.',
    solveDesc: 'Paste their profile, get 3 personalized openers crafted from their actual bio. They can\'t help but reply.',
  },
  {
    emoji: '😩',
    title: 'Same bad photos, forever',
    desc: 'You don\'t know which photo is killing your profile. So nothing changes, week after week.',
    solveEmoji: '📸',
    solveTitle: 'Every photo, scored and ranked.',
    solveDesc: 'Our vision AI scores each photo for lighting, expression, context, and energy. You\'ll know exactly which one to swap first.',
  },
  {
    emoji: '✍️',
    title: 'Bio that says nothing',
    desc: '"I like to travel and have fun." Every other profile says the same thing. You blend into the noise.',
    solveEmoji: '✨',
    solveTitle: 'A bio they actually remember.',
    solveDesc: 'We rewrite your bio using hook psychology and platform-specific copy that stops the scroll and invites a reply.',
  },
  {
    emoji: '💸',
    title: 'Paying for Boost, getting nothing',
    desc: 'You spend money on premium features and boosts. Still no dates. The platform wins. You lose.',
    solveEmoji: '📊',
    solveTitle: 'Spend less. Match more.',
    solveDesc: 'Fix the profile first, then boost. A strong profile turns $5 of boost into 10x the results of a weak one.',
  },
  {
    emoji: '🔁',
    title: 'Starting over every few weeks',
    desc: 'You delete the app. You reinstall. Same profile. Same results. The loop never breaks.',
    solveEmoji: '🚀',
    solveTitle: 'Break the loop for good.',
    solveDesc: 'Our A/B dashboard tracks every version of your profile. You\'ll know what changed, why it worked, and never reset blind again.',
  },
];

// ── Individual flip card ──────────────────────────────────
function FlipCard({ pain }: { pain: typeof pains[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      style={{
        perspective: '1000px',
        height: '220px',
        cursor: 'pointer',
      }}
    >
      <m.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
      >

        {/* ── FRONT ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--aurora-card-bg)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: 'var(--shadow-md)',
          padding: 'var(--space-6)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: 'var(--space-2)',
          transition: 'border 0.3s ease, box-shadow 0.3s ease',
        }}>
          <div style={{ fontSize: '2rem', lineHeight: 1 }}>{pain.emoji}</div>
          <h3 style={{
            fontSize: 'var(--text-lg)',
            fontWeight: 'var(--font-semibold)',
            color: 'var(--text-primary)',
            marginTop: 'var(--space-1)',
          }}>
            {pain.title}
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-sm)',
            lineHeight: 'var(--leading-relaxed)',
          }}>
            {pain.desc}
          </p>

          {/* Hover hint */}
          <div style={{
            position: 'absolute',
            bottom: 'var(--space-4)',
            right: 'var(--space-4)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            hover to see fix
            <span style={{ fontSize: '10px' }}>→</span>
          </div>
        </div>

        {/* ── BACK ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--aurora-card-bg-active)',
          border: '1px solid rgba(242,112,156,0.30)',
          boxShadow: 'var(--glow-rose)',
          padding: 'var(--space-6)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 'var(--space-3)',
        }}>
          {/* Top glow line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '15%',
            right: '15%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(242,112,156,0.50), transparent)',
            borderRadius: '999px',
          }} />

          <div style={{ fontSize: '2rem', lineHeight: 1 }}>{pain.solveEmoji}</div>

          <div>
            <div style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--accent-rose)',
              marginBottom: 'var(--space-1)',
            }}>
              The Fix
            </div>
            <h3 style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 'var(--font-bold)',
              color: 'var(--text-primary)',
              lineHeight: 'var(--leading-snug)',
              marginBottom: 'var(--space-2)',
              background: 'var(--gradient-brand-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {pain.solveTitle}
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-sm)',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              {pain.solveDesc}
            </p>
          </div>
        </div>

      </m.div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────
export default function PainSection() {
  return (
    <section className="section" id="pain" style={{ padding: 'var(--space-20) var(--space-6)' }}>
      <div className="container">

        {/* ── Split layout: text left, image right ── */}
        <div
          className="pain-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 420px',
            gap: 'var(--space-12)',
            alignItems: 'center',
            marginBottom: 'var(--space-16)',
          }}
        >
          <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="text-label" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>
              The Real Problem
            </span>
            <h2 className="heading-1" style={{ marginBottom: 'var(--space-4)' }}>
              Does any of this sound <span className="text-gradient">familiar?</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '440px',
            }}>
              You're not the problem. Your profile is. And that's actually great news — because we can fix it.
            </p>
          </m.div>

          {/* Image */}
          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } }}
            viewport={viewportOnce}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: 'var(--aurora-border)',
              boxShadow: 'var(--glow-rose)',
            }}>
              <Image
                src="/landingPage/depressed.png"
                alt="Frustrated with dating apps"
                width={420}
                height={320}
                style={{
                  objectFit: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '300px',
                  filter: 'brightness(0.85)',
                }}
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: 'var(--space-4)',
              left: 'var(--space-4)',
              background: 'rgba(12,14,26,0.85)',
              border: 'var(--aurora-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-2) var(--space-4)',
              backdropFilter: 'blur(8px)',
            }}>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-rose)' }}>
                😤 115 swipes. 0 matches. This week.
              </span>
            </div>
          </m.div>
        </div>

        {/* ── Flip Cards ── */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {pains.map((p) => (
            <m.div key={p.title} variants={scaleIn}>
              <FlipCard pain={p} />
            </m.div>
          ))}
        </m.div>

        {/* ── Callout ── */}
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="card-score"
          style={{
            textAlign: 'center',
            marginTop: 'var(--space-12)',
            maxWidth: '640px',
            marginInline: 'auto',
          }}
        >
          <p style={{
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-semibold)',
            lineHeight: 'var(--leading-snug)',
          }}>
            "The average guy gets a match every{' '}
            <span style={{ color: 'var(--accent-rose)', fontWeight: 'var(--font-bold)' }}>115 swipes.</span>
            <br />Our users get one every{' '}
            <span style={{ color: 'var(--accent-teal)', fontWeight: 'var(--font-bold)' }}>14."</span>
          </p>
        </m.div>

      </div>
    </section>
  );
}
