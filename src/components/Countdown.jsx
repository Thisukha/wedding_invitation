import { useEffect, useMemo, useState } from 'react';

const WEDDING_TARGET = new Date('2027-01-27T00:00:00+05:30');

function getTimeRemaining() {
  const difference = WEDDING_TARGET.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownItems = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds },
    ],
    [timeLeft],
  );

  return (
    <section className="section countdown-section" id="countdown">
      <div className="section-shell compact-shell">
        <p className="section-tag">The celebration awaits</p>
        <h2 className="section-title serif">Countdown to our day</h2>

        {timeLeft.isComplete ? (
          <div className="countdown-message" role="status" aria-live="polite">
            We are delighted to celebrate this special day with you.
          </div>
        ) : (
          <div className="countdown-grid" aria-live="polite">
            {countdownItems.map((item) => (
              <div key={item.label} className="countdown-card" aria-label={`${item.label} remaining`}>
                <span className="countdown-value serif">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="countdown-label">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Countdown;
