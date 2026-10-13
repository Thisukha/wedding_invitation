function LandingPage({ onOpenInvitation }) {
  return (
    <header className="landing-page" aria-label="Wedding invitation landing page">
      <div className="page-ornament ornament-top" aria-hidden="true" />
      <div className="landing-inner">
        <p className="eyebrow serif">A Celebration of Love</p>
        <div className="hero-portrait" aria-label="Wedding portrait placeholder"></div>
        <h1 className="hero-title serif">Christine <span>&</span> Mayukha</h1>

        <button type="button" className="primary-button hero-button" onClick={onOpenInvitation}>
          Open Wedding Invitation
        </button>

        <div className="scroll-cue" aria-hidden="true">
          <span>Continue below</span>
        </div>
      </div>
      <div className="page-ornament ornament-bottom" aria-hidden="true" />
    </header>
  );
}

export default LandingPage;
