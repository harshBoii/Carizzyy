import { MotionProvider } from './animatedWrapper';
import Hero        from './hero';
import PainSection from './painSection';
import HowItWorks  from './howItWorks';
import Features    from './features';
import Pricing     from './pricing';
import Footer      from './footer';
import Header      from './header';

export default function LandingPage() {
  return (
    <MotionProvider>
      {/* Aurora ambient background — fixed, behind everything */}
      <Header />
      <div className="aurora-layer" aria-hidden="true" />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <PainSection />
        <HowItWorks />
        <Features />
        <Pricing />
        <Footer />
      </main>
    </MotionProvider>
  );
}
