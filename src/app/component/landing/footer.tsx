    'use client';
import Image from 'next/image';
import { m, fadeUp, viewportOnce } from './animatedWrapper';

export default function Footer() {
  return (
    <footer style={{ padding: 'clamp(var(--space-8), 5vw, var(--space-16)) var(--space-6)', borderTop: 'var(--divider-rose)' }} className="section-padding-inline">
      <div className="container">

        {/* ── Emotional closing image ── */}
        <m.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{
            position: 'relative', borderRadius: 'var(--radius-xl)',
            overflow: 'hidden', marginBottom: 'var(--space-12)',
            boxShadow: 'var(--glow-strong)', border: 'var(--aurora-border)',
            maxHeight: 'min(340px, 50vh)',
          }}
        >
          <Image
            src="/landingPage/happy.png"
            alt="Happy couple on a date"
            width={1200}
            height={340}
            style={{ objectFit: 'cover', width: '100%', height: 'min(300px, 45vh)', display: 'block', filter: 'brightness(0.6) saturate(0.9)' }}
          />
          {/* Text overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(12,14,26,0.85) 40%, rgba(12,14,26,0.30) 100%)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: 'clamp(var(--space-4), 4vw, var(--space-10))',
          }}>
            <h2 className="heading-1" style={{ marginBottom: 'var(--space-4)', maxWidth: '480px', fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-4xl))' }}>
              Still swiping into <span className="text-gradient">the void?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', marginBottom: 'var(--space-6)', maxWidth: '400px' }}>
              We found 3 things wrong with the average profile in 90 seconds.
              Want to know what yours looks like?
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ fontSize: 'var(--text-base)', padding: 'var(--space-3) var(--space-8)' }}>
                Get Your Free Audit →
              </button>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)', marginTop: 'var(--space-3)' }}>
              No credit card · No app login · Just results.
            </p>
          </div>
        </m.div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4" style={{ paddingTop: 'var(--space-8)', borderTop: 'var(--divider)' }}>
          <div style={{ textAlign: 'center', marginBottom: '0' }}>
            <span style={{ fontWeight: 'var(--font-bold)', fontSize: 'var(--text-lg)' }}>
              <span className="text-gradient">Carizzmaw</span>
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', marginLeft: 'var(--space-3)' }}>
              © 2026 · AI Dating Profile Optimizer
            </span>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a key={link} href="#"
                style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-rose)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
