function VenueSection() {
  return (
    <section className="section venue-section" id="location">
      <div className="section-shell">
        <p className="section-tag">Location</p>
        <h2 className="section-title serif">Join Us for Our Special Day</h2>

        <div className="venue-card">
          <div className="location-icon" aria-hidden="true">📍</div>
          <p className="venue-date serif">27th January 2027</p>
          <p className="venue-text">
            We would be honoured to celebrate with you on this unforgettable day. Venue details will be shared as they become available, and you can explore the location below.
          </p>

          <a
            href="https://maps.app.goo.gl/oUH3SJKJpxUPckPC9"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            View Location on Google Maps
          </a>

          <p className="map-note">This map opens in a new browser tab.</p>
        </div>
      </div>
    </section>
  );
}

export default VenueSection;
