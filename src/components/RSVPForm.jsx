import { useState } from 'react';
import { submitRSVP } from '../services/rsvpService';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  attendance: 'yes',
};

function RSVPForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    } else if (!/^\+?[0-9\s().-]{7,}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number with at least 7 digits.';
    }

    if (!['yes', 'no'].includes(formData.attendance)) {
      nextErrors.attendance = 'Please choose whether you can attend.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitState('error');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await submitRSVP(formData);
      setErrors({});
      setSubmitState('success');
      setSuccessMessage(response.message);
      setFormData(initialForm);
    } catch (error) {
      setSubmitState('error');
      setSuccessMessage('Something went wrong while submitting your RSVP. Please try again.');
    }
  };

  return (
    <section className="section rsvp-section" id="rsvp">
      <div className="section-shell">
        <p className="section-tag">RSVP</p>
        <h2 className="section-title serif">Kindly Respond</h2>

        {successMessage ? (
          <div className="success-panel" role="status" aria-live="polite">
            <p>{successMessage}</p>
            <div className="success-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  const invitation = document.getElementById('invitation');
                  invitation?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Return to Invitation
              </button>
              <button type="button" className="ghost-button" disabled>
                Contact the Family
              </button>
            </div>
          </div>
        ) : (
          <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && <span id="fullName-error" className="field-error">{errors.fullName}</span>}
            </div>

            <div className="form-row">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && <span id="phone-error" className="field-error">{errors.phone}</span>}
            </div>

            <fieldset className="attendance-group">
              <legend>Attendance confirmation</legend>
              <div className="radio-row">
                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={formData.attendance === 'yes'}
                    onChange={handleChange}
                  />
                  <span>Joyfully accepts / Yes, I will attend</span>
                </label>
              </div>

              <div className="radio-row">
                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={formData.attendance === 'no'}
                    onChange={handleChange}
                  />
                  <span>Regretfully declines / No, I cannot attend</span>
                </label>
              </div>
              {errors.attendance && <span className="field-error">{errors.attendance}</span>}
            </fieldset>

            {submitState === 'error' && (
              <p className="form-alert" role="alert">
                Please correct the highlighted details and try again.
              </p>
            )}

            <button type="submit" className="primary-button submit-button">
              Send RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default RSVPForm;
