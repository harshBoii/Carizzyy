'use client';
import Image from 'next/image';
import { m, fadeUp, staggerContainer, scaleIn, viewportOnce } from './animatedWrapper';
import { useState } from 'react';
import {
  TrendingDown,
  Target,
  Ghost,
  MessageCircle,
  Frown,
  Camera,
  Sparkles,
  DollarSign,
  BarChart3,
  Repeat,
  Rocket,
  PenLine,
} from 'lucide-react';

const painIconSize = 32;

const pains = [
  {
    EmojiIcon: TrendingDown,
    title: 'Swiping into the void',
    desc: 'You swipe right constantly. The matches just don\'t come. You start wondering if something\'s wrong with you.',
    SolveIcon: Target,
    solveTitle: 'No more guessing.',
    solveDesc: 'We track exactly which photo is tanking your swipe rate and tell you the precise fix — not a guess, a data-backed answer.',
    bokehColor: 'rgba(242,112,156',
  },
  {
    EmojiIcon: Ghost,
    title: 'Matches that ghost',
    desc: 'You finally match. You message. They read it. Nothing. The silence is worse than the rejection.',
    SolveIcon: MessageCircle,
    solveTitle: 'Our AI Coach makes the dead speak.',
    solveDesc: 'Paste their profile, get 3 personalized openers crafted from their actual bio. They can\'t help but reply.',
    bokehColor: 'rgba(159,122,234',
  },
  {
    EmojiIcon: Frown,
    title: 'Same bad photos, forever',
    desc: 'You don\'t know which photo is killing your profile. So nothing changes, week after week.',
    SolveIcon: Camera,
    solveTitle: 'Every photo, scored and ranked.',
    solveDesc: 'Our vision AI scores each photo for lighting, expression, context, and energy. You\'ll know exactly which one to swap first.',
    bokehColor: 'rgba(242,112,156',
  },
  {
    EmojiIcon: PenLine,
    title: 'Bio that says nothing',
    desc: '"I like to travel and have fun." Every other profile says the same thing. You blend into the noise.',
    SolveIcon: Sparkles,
    solveTitle: 'A bio they actually remember.',
    solveDesc: 'We rewrite your bio using hook psychology and platform-specific copy that stops the scroll and invites a reply.',
    bokehColor: 'rgba(118,228,247',
  },
  {
    EmojiIcon: DollarSign,
    title: 'Paying for Boost, getting nothing',
    desc: 'You spend money on premium features and boosts. Still no dates. The platform wins. You lose.',
    SolveIcon: BarChart3,
    solveTitle: 'Spend less. Match more.',
    solveDesc: 'Fix the profile first, then boost. A strong profile turns $5 of boost into 10x the results of a weak one.',
    bokehColor: 'rgba(159,122,234',
  },
  {
    EmojiIcon: Repeat,
    title: 'Starting over every few weeks',
    desc: 'You delete the app. You reinstall. Same profile. Same results. The loop never breaks.',
    SolveIcon: Rocket,
    solveTitle: 'Break the loop for good.',
    solveDesc: 'Our A/B dashboard tracks every version of your profile. You\'ll know what changed, why it worked, and never reset blind again.',
    bokehColor: 'rgba(242,112,156',
  },
];

// Bokeh dots config per card
const bokehDots = [
  { w: 80,  h: 80,  top: '-10%', left: '-5%',  opacity: 0.5, blur: 28 },
  { w: 50,  h: 50,  top: '60%',  left: '80%',  opacity: 0.4, blur: 20 },
  { w: 120, h: 120, top: '50%',  left: '-15%', opacity: 0.25, blur: 40 },
  { w: 40,  h: 40,  top: '10%',  left: '75%',  opacity: 0.55, blur: 16 },
  { w: 60,  h: 60,  top: '75%',  left: '40%',  opacity: 0.30, blur: 24 },
  { w: 30,  h: 30,  top: '30%',  left: '60%',  opacity: 0.45, blur: 12 },
];

// ── Individual flip card ──────────────────────────────────
function FlipCard({ pain }: { pain: typeof pains[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card-wrapper"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onClick={() => setFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      style={{ perspective: '1000px', minHeight: '220px', height: '220px', cursor: 'pointer' }}
    >
      <m.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const }}
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
        }}>
          <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-rose)' }}>
            <pain.EmojiIcon size={painIconSize} strokeWidth={1.5} aria-hidden />
          </div>
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
            {/* Hover/tap hint */}
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
            <span className="flip-hint-hover">hover to see fix</span>
            <span className="flip-hint-tap" style={{ display: 'none' }}>tap to see fix</span>
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
          // Deep dark base — near black with very slight navy tint
          background: 'linear-gradient(145deg, #0a0b14 0%, #0d0f1e 60%, #0a0b14 100%)',
          border: `1px solid ${pain.bokehColor},0.28)`,
          boxShadow: `0 0 40px ${pain.bokehColor},0.18), 0 8px 32px rgba(0,0,0,0.65)`,
          padding: 'var(--space-6)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 'var(--space-3)',
          overflow: 'hidden',
        }}>

          {/* ── Bokeh layer ── */}
          {bokehDots.map((dot, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: dot.w,
                height: dot.h,
                top: dot.top,
                left: dot.left,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${pain.bokehColor},${dot.opacity}) 0%, ${pain.bokehColor},0) 70%)`,
                filter: `blur(${dot.blur}px)`,
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
          ))}

          {/* Extra large deep bokeh blob center-bottom */}
          <div style={{
            position: 'absolute',
            width: 180,
            height: 180,
            bottom: '-30%',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${pain.bokehColor},0.20) 0%, ${pain.bokehColor},0) 70%)`,
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          {/* Top glow line */}
          <div style={{
            position: 'absolute',
            top: 0, left: '15%', right: '15%',
            height: '1px',
            background: `linear-gradient(to right, transparent, ${pain.bokehColor},0.55), transparent)`,
            borderRadius: '999px',
            zIndex: 1,
          }} />

          {/* ── Content — sits above bokeh ── */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>

            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-rose)' }}>
              <pain.SolveIcon size={painIconSize} strokeWidth={1.5} aria-hidden />
            </div>

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
                lineHeight: 'var(--leading-snug)',
                marginBottom: 'var(--space-2)',
                background: 'var(--gradient-brand-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {pain.solveTitle}
              </h3>
              <p style={{
                color: 'rgba(240,238,255,0.60)',
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                {pain.solveDesc}
              </p>
            </div>

          </div>
        </div>

      </m.div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────
export default function PainSection() {
  return (
    <section className="section section-padding-inline" id="pain" style={{ padding: 'var(--space-20) var(--space-6)' }}>
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
            className="pain-grid-image"
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
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-rose)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Frown size={16} strokeWidth={2} aria-hidden /> 115 swipes. 0 matches. This week.
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
