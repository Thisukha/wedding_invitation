function FamilyDetails() {
  return (
    <div className="family-grid" aria-label="Family details">
      <article className="family-card">
        <h3 className="family-name serif">Christine Ernadno</h3>
        <p className="family-role">The loving daughter of</p>
        <p className="family-parents">
          Bradley Christostom Ravindra De Coonghe
          <span>and</span>
          Margaret Grace De Coonghe
        </p>
      </article>

      <article className="family-card">
        <h3 className="family-name serif">Mayukha De Silva</h3>
        <p className="family-role">The loving son of</p>
        <p className="family-parents">
          Panini De Silva
          <span>and</span>
          Nishadi De Silva
        </p>
      </article>
    </div>
  );
}

export default FamilyDetails;
