'use client';
import { m, fadeUp, staggerContainer, scaleIn, viewportOnce } from './animatedWrapper';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Find out what\'s broken',
    badge: null,
    card: 'card',
    button: 'btn-ghost',
    buttonLabel: 'Start Free Audit',
    perks: [
      'Bio audit + score',
      '1 photo analyzed',
      'Hook strength report',
      'Platform recommendation',
    ],
  },
  {
    name: 'Pro',
    price: '$9',
    period: 'per month',
    desc: 'Fix everything, fast',
    badge: 'Most Popular',
    card: 'card-rose',
    button: 'btn-primary',
    buttonLabel: 'Get Pro →',
    perks: [
      'Full photo pipeline (unlimited)',
      'Unlimited bio rewrites',
      'Opener generator per match',
      'Platform-specific strategy',
      'Weekly match rate tracking',
    ],
  },
  {
    name: 'Premium',
    price: '$19',
    period: 'per month',
    desc: 'The full arsenal',
    badge: null,
    card: 'card-lavender',
    button: 'btn-secondary',
    buttonLabel: 'Go Premium',
    perks: [
      'Everything in Pro',
      'A/B testing dashboard',
      'Conversation coaching',
      'Weekly profile review',
      'Roast Mode',
      'Priority AI processing',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing" style={{ padding: 'var(--space-20) var(--space-6)' }}>
      <div className="container">

        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: 'center', marginBottom: 'var(--space-14)' }}
        >
          <span className="text-label" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>Pricing</span>
          <h2 className="heading-1" style={{ maxWidth: '560px', margin: '0 auto var(--space-4)' }}>
            Less than one bad date. <span className="text-gradient">Way more value.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', maxWidth: '440px', margin: '0 auto' }}>
            Start free. Upgrade when you see the results.
          </p>
        </m.div>

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-4)',
            maxWidth: '960px',
            margin: '0 auto',
            alignItems: 'start',
          }}
        >
          {plans.map((plan) => (
            <m.div
              key={plan.name}
              variants={scaleIn}
              className={plan.card}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--space-6)',
                position: 'relative',
                ...(plan.badge ? { transform: 'scale(1.03)' } : {}),
              }}
            >
              {plan.badge && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }}>
                  <span className="badge badge-rose" style={{ whiteSpace: 'nowrap' }}>⭐ {plan.badge}</span>
                </div>
              )}

              <div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontWeight: 'var(--font-medium)', marginBottom: 'var(--space-1)' }}>
                  {plan.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                  <span style={{
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 'var(--font-bold)',
                    background: 'var(--gradient-brand-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {plan.price}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>/ {plan.period}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{plan.desc}</p>
              </div>

              <button className={plan.button} style={{ width: '100%', justifyContent: 'center' }}>
                {plan.buttonLabel}
              </button>

              <hr className="divider" style={{ margin: '0' }} />

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {plan.perks.map((perk) => (
                  <li key={perk} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-rose)', fontWeight: 'var(--font-bold)', flexShrink: 0 }}>✓</span>
                    {perk}
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
