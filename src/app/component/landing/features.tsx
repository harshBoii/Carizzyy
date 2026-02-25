'use client';
import { m, fadeUp, staggerContainer, scaleIn, viewportOnce } from './animatedWrapper';

const features = [
  {
    icon: '📸',
    badge: { label: 'Photo AI', color: 'badge-rose' },
    title: 'Photo Intelligence Engine',
    desc: 'Scores every photo for attractiveness signals, eye contact, context, and variety. Tells you the exact order that maximizes first impressions.',
    bullets: ['Face symmetry & expression analysis', 'Scene classification (gym vs travel vs social)', 'Photo set diversity score'],
  },
  {
    icon: '✍️',
    badge: { label: 'NLP', color: 'badge-lavender' },
    title: 'Bio Optimizer',
    desc: 'Analyzes your bio for hook strength, emotional triggers, and readability. Then rewrites it using platform-specific templates that get replies.',
    bullets: ['Hook strength classifier', 'Emotion trigger audit', 'Instant AI rewrite with character limit'],
  },
  {
    icon: '🎯',
    badge: { label: 'Strategy', color: 'badge-teal' },
    title: 'Platform Strategy',
    desc: 'Each app has different mechanics. We optimize your profile specifically for Tinder, Hinge, Bumble, and OkCupid — not a generic one-size-fits-all.',
    bullets: ['Tinder: photo rank priority', 'Hinge: prompt engineering for openers', 'Bumble: approachability signals'],
  },
  {
    icon: '💬',
    badge: { label: 'Conversation AI', color: 'badge-rose' },
    title: 'Match Conversation Coach',
    desc: 'Paste a match\'s profile and get 3 personalized openers — funny, curious, or compliment-based. Never stare at a blank message box again.',
    bullets: ['Opener generator per match', 'Reply coaching with tone analysis', 'Psychology-backed message strategy'],
  },
  {
    icon: '📊',
    badge: { label: 'Analytics', color: 'badge-lavender' },
    title: 'A/B Testing Dashboard',
    desc: 'Track your match rate per profile version. We tell you when there\'s enough data to call a winner and what to swap next.',
    bullets: ['Weekly match rate tracking', 'Conversion: match → conversation', 'Statistically significant swap alerts'],
  },
  {
    icon: '🔥',
    badge: { label: 'Viral', color: 'badge-teal' },
    title: 'Roast Mode',
    desc: 'Brutally honest AI critique of your entire profile. Designed to be screenshot-worthy. Users love it. Dates follow.',
    bullets: ['No sugarcoating', 'Shareable score card', 'Specific, actionable callouts'],
  },
];

export default function Features() {
  return (
    <section className="section" id="features" style={{ padding: 'var(--space-20) var(--space-6)' }}>
      <div className="container">

        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: 'center', marginBottom: 'var(--space-14)' }}
        >
          <span className="text-label" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>The Arsenal</span>
          <h2 className="heading-1" style={{ maxWidth: '560px', margin: '0 auto var(--space-4)' }}>
            Every weapon you need to <span className="text-gradient">win the date</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', maxWidth: '480px', margin: '0 auto' }}>
            Not just a bio rewriter. A complete profile overhaul system.
          </p>
        </m.div>

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {features.map((f) => (
            <m.div
              key={f.title}
              variants={scaleIn}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
              whileHover={{
                borderColor: 'rgba(242,112,156,0.35)',
                boxShadow: '0 0 40px rgba(242,112,156,0.15), 0 4px 24px rgba(0,0,0,0.45)',
                y: -4,
                transition: { duration: 0.25 }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '2rem' }}>{f.icon}</span>
                <span className={`badge ${f.badge.color}`}>{f.badge.label}</span>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                  {f.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
                  {f.desc}
                </p>
              </div>
              <hr className="divider" style={{ margin: '0' }} />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {f.bullets.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-rose)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
