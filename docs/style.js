function scrollToTop() {
  const currentPath = window.location.pathname;
  if (currentPath.includes("privacy.html")) {
    window.location.href = "./index.html";
  } else {
    window.scrollTo(0, 0);
    history.replaceState(null, null, window.location.pathname);
  }
}

function loadHeader() {
  return `
    <div id="nav-logo">
      <button onclick="scrollToTop()">
        <img src="./static/leetcode-repetition.png" alt="LeetCode Repetition Extension" />
        <h3 class="navbar-name">LeetCode Repetition</h3>
      </button>
    </div>
    <div id="nav-sections">
      <ul>
        <li><a href="./index.html#Steps">Steps</a></li>
        <li><a href="./index.html#Demo">Demo</a></li>
        <li><a href="./index.html#Features">Features</a></li>
        <li><a href="./index.html#FAQ">FAQ</a></li>
      </ul>
    </div>
    <div id="nav-links">
      <a href="https://github.com/leetcode-repetition" target="_blank" rel="noreferrer">
        <img src="./static/github.svg" alt="GitHub" />
      </a>
      <a href="mailto:leetcode-repetition@murrah.dev" title="Mail">
        <img src="./static/mail.svg" alt="Mail" />
      </a>
      <a href="https://www.linkedin.com/in/jacobmurrah/" target="_blank" rel="noreferrer">
        <img src="./static/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://buymeacoffee.com/jmurrah" target="_blank" rel="noreferrer">
        <img src="./static/coffee.svg" alt="LinkedIn" />
      </a>
    </div>
  `;
}

function loadFooter() {
  return `
    <div id="footer-wrapper">
      <div id="footer-logo">
        <div>
          <img src="./static/leetcode-repetition.png" alt="LeetCode Repetition Extension" />
          <h3>LeetCode Repetition</h3>
        </div>
        <p>
          The LeetCode Repetition extension follows your chosen intervals to keep tricky problems
          fresh, making sure you're always ready for your next technical interview.
        </p>
      </div>

      <div id="footer-content">
        <div id="footer-links">
          <div class="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="mailto:leetcode-repetition@murrah.dev">Contact</a></li>
              <li><a href="./privacy.html">Privacy Policy</a></li>
              <li><a href="./index.html#FAQ">FAQ</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Download</h4>
            <ul>
              <li><a href="https://chromewebstore.google.com/" target="_blank" rel="noreferrer">Chrome</a></li>
              <li><a href="https://addons.mozilla.org/en-US/firefox/" target="_blank" rel="noreferrer">Firefox</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <div class="status">
              <span class="status-dot"></span>
              <h4>Operational</h4>
            </div>
            <div class="social-links">
              <a href="https://github.com/leetcode-repetition" target="_blank" rel="noreferrer">
                <img src="./static/github.svg" alt="GitHub" />
              </a>
              <a href="mailto:leetcode-repetition@murrah.dev" title="Mail">
                <img src="./static/mail.svg" alt="Mail" />
              </a>
              <a href="https://www.linkedin.com/in/jacobmurrah/" target="_blank" rel="noreferrer">
                <img src="./static/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://buymeacoffee.com/jmurrah" target="_blank" rel="noreferrer">
                <img src="./static/coffee.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("header").innerHTML = loadHeader();
  document.querySelector("footer").innerHTML = loadFooter();
});
