/* ============================================================
   Vulpix deck navigation
   - Side dot indicator (built from .slide nodes)
   - Up / Down arrow buttons (fixed bottom-right)
   - Keyboard: Arrow keys, Page Up/Down, Space, Home/End
   - IntersectionObserver tracks the active slide,
     fires entry transitions and updates URL hash + dark-bar styling
   ============================================================ */

(function () {
  'use strict';

  const slides = Array.from(document.querySelectorAll('.slide'));
  if (!slides.length) return;

  const dotnav  = document.getElementById('dotnav');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let activeIndex = 0;          // 0-based
  let suppressHash = false;     // avoid hashchange-driven re-scrolls

  /* -------- Dot indicator -------- */
  const dots = slides.map((slide, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', `Ir a diapositiva ${i + 1}`);
    btn.addEventListener('click', () => scrollToSlide(i));
    dotnav.appendChild(btn);
    return btn;
  });

  function setActive(index) {
    if (index === activeIndex) return;
    activeIndex = index;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));

    // Cover slide (slide-1) is dark — invert dot border colors
    const isDark = slides[index].dataset.theme === 'dark';
    dotnav.classList.toggle('on-dark', isDark);

    // Arrow disabled states
    prevBtn.disabled = (index === 0);
    nextBtn.disabled = (index === slides.length - 1);

    // URL hash (replaceState to avoid history spam)
    const id = slides[index].id;
    if (id && !suppressHash) {
      history.replaceState(null, '', '#' + id);
    }
  }

  /* -------- Programmatic scroll -------- */
  function scrollToSlide(index) {
    const target = slides[Math.max(0, Math.min(slides.length - 1, index))];
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  prevBtn.addEventListener('click', () => scrollToSlide(activeIndex - 1));
  nextBtn.addEventListener('click', () => scrollToSlide(activeIndex + 1));

  /* -------- Keyboard nav -------- */
  document.addEventListener('keydown', (e) => {
    // Don't hijack typing inside form fields
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        scrollToSlide(activeIndex + 1);
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        scrollToSlide(activeIndex - 1);
        break;
      case 'Home':
        e.preventDefault();
        scrollToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        scrollToSlide(slides.length - 1);
        break;
    }
  });

  /* -------- IntersectionObserver: active slide + entry animations -------- */
  const io = new IntersectionObserver((entries) => {
    // Find the entry with the largest intersection ratio
    let best = null;
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible'); // sticky reveal
      }
      if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
    }
    if (best && best.isIntersecting && best.intersectionRatio >= 0.55) {
      const idx = slides.indexOf(best.target);
      if (idx !== -1) setActive(idx);
    }
  }, {
    threshold: [0.25, 0.55, 0.8]
  });

  slides.forEach((s) => io.observe(s));

  /* -------- Initial state -------- */
  // If page loaded with a hash, jump there once layout is ready
  function syncFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const idx = slides.findIndex((s) => s.id === hash);
    if (idx > -1) {
      suppressHash = true;
      slides[idx].scrollIntoView({ behavior: 'auto', block: 'start' });
      requestAnimationFrame(() => { suppressHash = false; });
      setActive(idx);
    }
  }

  window.addEventListener('load', syncFromHash);
  window.addEventListener('hashchange', syncFromHash);

  // Prime dot 0 active state immediately
  dots[0].classList.add('is-active');
  if (slides[0].dataset.theme === 'dark') dotnav.classList.add('on-dark');
  prevBtn.disabled = true;
})();
