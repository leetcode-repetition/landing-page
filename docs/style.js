function scrollToTop() {
  const currentPath = window.location.pathname;
  if (currentPath.includes("/privacy")) {
    window.location.href = "../";
  } else {
    window.scrollTo(0, 0);
    history.replaceState(null, null, window.location.pathname);
  }
}

function loadHeader() {
  const currentPath = window.location.pathname;
  const isSubpage = currentPath.includes("/privacy");
  const basePath = isSubpage ? "../" : "./";

  return `
    <div id="nav-logo">
      <button onclick="scrollToTop()">
        <img src="${basePath}static/leetcode-repetition.png" alt="LeetCode Repetition Extension" />
        <h3 class="navbar-name">LeetCode Repetition</h3>
      </button>
    </div>
    <div id="nav-sections">
      <ul>
        <li><a href="${basePath}#Steps">Steps</a></li>
        <li><a href="${basePath}#Demo">Demo</a></li>
        <li><a href="${basePath}#Features">Features</a></li>
        <li><a href="${basePath}#FAQ">FAQ</a></li>
      </ul>
    </div>
    <div id="nav-links">
      <a href="https://github.com/leetcode-repetition" target="_blank" rel="noreferrer">
        <img src="${basePath}static/github.svg" alt="GitHub" />
      </a>
      <a href="mailto:leetcode-repetition@murrah.dev" title="Mail">
        <img src="${basePath}static/mail.svg" alt="Mail" />
      </a>
      <a href="https://www.linkedin.com/in/jacobmurrah/" target="_blank" rel="noreferrer">
        <img src="${basePath}static/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://buymeacoffee.com/jmurrah" target="_blank" rel="noreferrer">
        <img src="${basePath}static/coffee.svg" alt="LinkedIn" />
      </a>
    </div>
  `;
}

function loadFooter() {
  const currentPath = window.location.pathname;
  const isSubpage = currentPath.includes("/privacy");
  const basePath = isSubpage ? "../" : "./";

  return `
    <div id="footer-wrapper">
      <div id="footer-logo">
        <div>
          <img src="${basePath}static/leetcode-repetition.png" alt="LeetCode Repetition Extension" />
          <h3>LeetCode Repetition</h3>
        </div>
        <p>
          The LeetCode Repetition extension follows your chosen intervals to keep tricky problems
          fresh, making sure you're always ready for your next technical interview.
        </p>
        <p>&copy; 2025 LeetCode Repetition. All rights reserved.</p>
      </div>

      <div id="footer-content">
        <div id="footer-links">
          <div class="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="mailto:leetcode-repetition@murrah.dev">Contact</a></li>
              <li><a href="${basePath}privacy/">Privacy Policy</a></li>
              <li><a href="${basePath}#FAQ">FAQ</a></li>
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
                <img src="${basePath}static/github.svg" alt="GitHub" />
              </a>
              <a href="mailto:leetcode-repetition@murrah.dev" title="Mail">
                <img src="${basePath}static/mail.svg" alt="Mail" />
              </a>
              <a href="https://www.linkedin.com/in/jacobmurrah/" target="_blank" rel="noreferrer">
                <img src="${basePath}static/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://buymeacoffee.com/jmurrah" target="_blank" rel="noreferrer">
                <img src="${basePath}static/coffee.svg" alt="LinkedIn" />
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
