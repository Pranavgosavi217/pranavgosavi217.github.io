/**
 * Small interactions for the portfolio home page.
 * No framework or external dependencies are needed.
 */
(() => {
  'use strict';

  const menuButton = document.querySelector('#menuBtn');
  const navigation = document.querySelector('#navlinks');
  const preview = document.querySelector('#lightbox');
  const previewImage = document.querySelector('#lightboxImg');
  const previewCaption = document.querySelector('#lightboxCaption');
  const previewClose = document.querySelector('#lightboxClose');
  const pageRegions = [
    document.querySelector('header'),
    document.querySelector('main'),
    document.querySelector('footer'),
  ].filter(Boolean);

  let lastGalleryButton = null;

  function toggleMenu(isOpen) {
    navigation.classList.toggle('open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu',
    );
    menuButton.textContent = isOpen ? 'CLOSE ✕' : 'MENU ☰';
  }

  menuButton.addEventListener('click', () => {
    toggleMenu(!navigation.classList.contains('open'));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('click', (event) => {
    if (navigation.classList.contains('open') && !event.target.closest('.nav')) {
      toggleMenu(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760 && navigation.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  function lockPage(locked) {
    document.body.classList.toggle('lightbox-open', locked);
    // The close button remains keyboard-accessible while the gallery is open.
    if ('inert' in HTMLElement.prototype) {
      pageRegions.forEach((region) => { region.inert = locked; });
    }
  }

  function openPreview(button) {
    const thumbnail = button.querySelector('img');
    if (!thumbnail) return;

    lastGalleryButton = button;
    previewImage.src = thumbnail.currentSrc || thumbnail.src;
    previewImage.alt = thumbnail.alt;
    previewCaption.textContent = button.dataset.caption || thumbnail.alt;

    preview.classList.add('open');
    preview.setAttribute('aria-hidden', 'false');
    lockPage(true);
    previewClose.focus();
  }

  function closePreview() {
    if (!preview.classList.contains('open')) return;

    preview.classList.remove('open');
    preview.setAttribute('aria-hidden', 'true');
    lockPage(false);
    previewImage.removeAttribute('src');

    if (lastGalleryButton?.isConnected) {
      lastGalleryButton.focus();
    }
  }

  document.querySelectorAll('[data-lightbox]').forEach((button) => {
    button.addEventListener('click', () => openPreview(button));
  });

  previewClose.addEventListener('click', closePreview);
  preview.addEventListener('click', (event) => {
    if (event.target === preview) closePreview();
  });

  document.addEventListener('keydown', (event) => {
    if (preview.classList.contains('open')) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePreview();
      } else if (event.key === 'Tab') {
        // The preview has only one interactive control.
        event.preventDefault();
        previewClose.focus();
      }
      return;
    }

    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      toggleMenu(false);
      menuButton.focus();
    }
  });
})();
