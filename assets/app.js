// CPG Growth Studio: menu, sticky header, reveals, YouTube facades, logo fallbacks.
(function () {
  document.documentElement.classList.add('js');

  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? 'Close' : 'Menu';
  });

  var header = document.querySelector('.site-header');
  var onScroll = function () { if (header) header.classList.toggle('is-stuck', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // YouTube: show the thumbnail, load the player only when clicked.
  document.querySelectorAll('.yt[data-id]').forEach(function (el) {
    var id = el.getAttribute('data-id');
    el.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)';
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (el.classList.contains('playing')) return;
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      f.title = el.getAttribute('aria-label') || 'Video';
      f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      el.appendChild(f);
      el.classList.add('playing');
    });
  });

  // Logos: if an image fails to load, show the name as text instead.
  document.querySelectorAll('.logo img').forEach(function (img) {
    var swap = function () {
      var s = document.createElement('span');
      s.className = 'txt';
      s.textContent = img.alt;
      img.replaceWith(s);
    };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener('error', swap);
  });

  // Photos: if one fails to load, show a labelled placeholder instead.
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    var swap = function () {
      var d = document.createElement('div');
      d.className = 'ph';
      d.textContent = img.getAttribute('data-fallback');
      img.replaceWith(d);
      var cap = d.parentNode && d.parentNode.querySelector('figcaption');
      if (cap) cap.remove();
    };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener('error', swap);
  });

  var els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach(function (e) { io.observe(e); });
})();
