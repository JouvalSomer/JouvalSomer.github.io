// Dark/light theme toggle
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var root = document.documentElement;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// Close mobile nav when a link is tapped
(function () {
  var toggle = document.getElementById('nav-toggle');
  if (!toggle) return;
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    a.addEventListener('click', function () { toggle.checked = false; });
  });
})();
