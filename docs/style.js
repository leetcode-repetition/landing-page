function scrollToTop() {
  window.scrollTo(0, 0);
  history.replaceState(null, null, window.location.pathname);
}
