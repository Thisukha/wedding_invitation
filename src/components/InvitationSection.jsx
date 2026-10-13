import FamilyDetails from './FamilyDetails';

function InvitationSection() {
  return (
    <main className="section invitation-section" id="invitation">
      <div className="section-shell">
        <p className="invitation-intro script-text">With the blessings of our families,</p>
        <p className="invitation-ask">we joyfully invite you to celebrate the wedding of</p>

        <h2 className="invitation-headline serif">
          Christine Ernadno
          <span className="ampersand">&amp;</span>
          Mayukha De Silva
        </h2>

        <p className="invitation-subheading">Together with their loving families</p>

        <FamilyDetails />

        <div className="date-divider" aria-label="Wedding date">
          <span className="divider-line" aria-hidden="true"></span>
          <p className="date-display serif">27th January 2027</p>
          <span className="divider-line" aria-hidden="true"></span>
        </div>
      </div>
    </main>
  );
}

export default InvitationSection;
