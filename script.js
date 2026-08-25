/* Ester Neves — tema, menu, brilho do cursor, fotos e revelação */

(function () {
  'use strict';

  var reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── tema claro / escuro ──
     Abre sempre no claro: creme e azul são a identidade da marca.
     O escuro é escolha do visitante e fica guardada no navegador. */
  var raiz = document.documentElement;
  var tema = document.getElementById('tema');

  var aplicarTema = function (nome) {
    if (nome === 'escuro') raiz.setAttribute('data-tema', 'escuro');
    else raiz.removeAttribute('data-tema');
    tema.setAttribute('aria-pressed', String(nome === 'escuro'));
  };

  try {
    aplicarTema(localStorage.getItem('ester-tema') || 'claro');
  } catch (e) {
    aplicarTema('claro');
  }

  tema.addEventListener('click', function () {
    var novo = raiz.getAttribute('data-tema') === 'escuro' ? 'claro' : 'escuro';
    aplicarTema(novo);
    try { localStorage.setItem('ester-tema', novo); } catch (e) { /* modo privado */ }
  });

  /* ── nav ganha fundo depois do topo ── */
  var nav = document.getElementById('nav');
  var aoRolar = function () { nav.classList.toggle('is-stuck', window.scrollY > 40); };
  aoRolar();
  window.addEventListener('scroll', aoRolar, { passive: true });

  /* ── menu mobile ── */
  var burger = document.getElementById('burger');
  var links = document.getElementById('navlinks');

  burger.addEventListener('click', function () {
    var aberto = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(aberto));
    burger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  links.addEventListener('click', function (e) {
    if (e.target.tagName !== 'A') return;
    links.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menu');
  });

  /* ── brilho que segue o cursor ──
     Só em ponteiro fino: num toque o "cursor" fica preso onde o dedo saiu. */
  var brilho = document.getElementById('brilho');
  var fino = window.matchMedia('(pointer: fine)').matches;

  if (fino && !reduzido) {
    var alvoX = 0, alvoY = 0, x = 0, y = 0, rodando = false;

    var quadro = function () {
      x += (alvoX - x) * 0.12;
      y += (alvoY - y) * 0.12;
      brilho.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      if (Math.abs(alvoX - x) > 0.5 || Math.abs(alvoY - y) > 0.5) requestAnimationFrame(quadro);
      else rodando = false;
    };

    window.addEventListener('pointermove', function (e) {
      alvoX = e.clientX; alvoY = e.clientY;
      brilho.classList.add('is-on');
      if (!rodando) { rodando = true; requestAnimationFrame(quadro); }
    }, { passive: true });
  }

  /* ── fotografia: marca o slot quando o arquivo real existe,
        para o monograma da chapa sair de cena ── */
  document.querySelectorAll('[data-slot]').forEach(function (el) {
    var src = getComputedStyle(el).getPropertyValue('--src').trim();
    var achado = src.match(/url\(["']?(.+?)["']?\)/);
    if (!achado) return;

    var teste = new Image();
    teste.onload = function () { el.classList.add('is-loaded'); };
    teste.src = achado[1];
  });

  /* ── revelação no scroll ── */
  var alvos = document.querySelectorAll('[data-reveal]');

  if (reduzido || !('IntersectionObserver' in window)) {
    alvos.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add('is-in');
      io.unobserve(entrada.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  alvos.forEach(function (el) { io.observe(el); });
})();
