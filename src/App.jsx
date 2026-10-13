import { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import InvitationSection from './components/InvitationSection';
import Countdown from './components/Countdown';
import VenueSection from './components/VenueSection';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';

const navItems = [
  { label: 'Invitation', href: '#invitation' },
  { label: 'Countdown', href: '#countdown' },
  { label: 'Location', href: '#location' },
  { label: 'RSVP', href: '#rsvp' },
];

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 260);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInvitation = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const invitation = document.getElementById('invitation');

    if (!invitation) {
      return;
    }

    invitation.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="page-shell">
      <nav className="top-nav" aria-label="Main navigation">
        <div className="nav-brand">Christine &amp; Mayukha</div>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <LandingPage onOpenInvitation={handleOpenInvitation} />
      <InvitationSection />
      <Countdown />
      <VenueSection />
      <RSVPForm />
      <Footer />

      {showBackToTop && (
        <button
          type="button"
          className="back-to-top"
          aria-label="Back to top"
          onClick={() => {
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({
              top: 0,
              behavior: reduceMotion ? 'auto' : 'smooth',
            });
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
