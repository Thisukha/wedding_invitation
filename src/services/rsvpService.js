export async function submitRSVP({ fullName, email, phone, attendance }) {
  const payload = {
    fullName: fullName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    attendance: attendance === 'yes' ? 'Joyfully accepts' : 'Regretfully declines',
  };

  return {
    success: true,
    payload,
    previewMode: true,
    message:
      "Thank you for your response. This invitation's RSVP system is currently in preview mode, so your response has not been saved or sent. Please contact the family directly to confirm your attendance.",
  };
}
