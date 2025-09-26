// Make envelopes open/close on click or Enter/Space.
// Also toggles aria-expanded for accessibility.

document.addEventListener('DOMContentLoaded', () => {
  const envelopes = document.querySelectorAll('.envelope');

  envelopes.forEach(env => {
    // On click / tap
    env.addEventListener('click', (e) => {
      toggleEnv(env);
      e.stopPropagation();
    });

    // Keyboard support (Enter or Space)
    env.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleEnv(env);
      }
    });
  });

  // Click outside to close all (optional)
  document.addEventListener('click', (e) => {
    envelopes.forEach(env => {
      if (env.classList.contains('open')) {
        env.classList.remove('open');
        env.setAttribute('aria-expanded', 'false');
      }
    });
  });

  function toggleEnv(el) {
    // Close others if you want solo-open behavior:
    // document.querySelectorAll('.envelope.open').forEach(x => { x.classList.remove('open'); x.setAttribute('aria-expanded','false') });

    const isOpen = el.classList.toggle('open');
    el.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
});
