function scrollToTop() {
  window.scrollTo(0, 0);
  history.replaceState(null, null, window.location.pathname);
}

function loadNavbar() {
  return `
    <navbar class="fixed h-16 bg-white w-full border-b-2 border-accent-color flex items-center px-10">
      <div id="nav-logo" class="flex justify-start gap-2 basis-1/3">
        <button onclick="scrollToTop()" class="cursor-pointer flex items-center">
          <img src="./static/leetcode-repetition.png" alt="LeetCode Repetition Extension" class="h-14 w-auto" />
          <h3 class="navbar-name text-xl">LeetCode Repetition</h3>
        </button>
      </div>
      <div id="nav-sections" class="basis-1/3">
        <ul class="flex gap-5 font-bold justify-center">
          <li><a href="/#Steps" class="hover:text-primary-color">Steps</a></li>
          <li><a href="/#Demo" class="hover:text-primary-color">Demo</a></li>
          <li><a href="/#Features" class="hover:text-primary-color">Features</a></li>
          <li><a href="/#FAQ" class="hover:text-primary-color">FAQ</a></li>
        </ul>
      </div>
      <div id="nav-links" class="flex justify-end gap-4 basis-1/3">
        <a href="https://github.com/leetcode-repetition" target="_blank" rel="noreferrer">
          <img src="./static/github.svg" alt="GitHub" class="h-6 w-auto hover:text-primary-color" />
        </a>
        <a href="mailto:leetcode-repetition@murrah.dev" title="Mail">
          <img src="./static/mail.svg" alt="Mail" class="h-6 w-auto hover:text-primary-color" />
        </a>
        <a href="https://www.linkedin.com/in/jacobmurrah/" target="_blank" rel="noreferrer">
          <img src="./static/linkedin.svg" alt="LinkedIn" class="h-6 w-auto hover:text-primary-color" />
        </a>
        <a href="https://buymeacoffee.com/jmurrah" target="_blank" rel="noreferrer">
          <img src="./static/coffee.svg" alt="LinkedIn" class="h-6 w-auto hover:text-primary-color" />
        </a>
      </div>
    </navbar>
  `;
}

function loadFooter() {
  return `
    <footer class="mt-64 border-t-2 border-accent-color py-8 flex flex-wrap justify-center mt-10 bg-white">
      <div id="footer-wrapper" class="flex flex-wrap w-10/12 justify-between gap-6">
        <div id="footer-logo" class="space-y-4 max-w-96">
          <div class="flex items-center gap-2">
            <img
              src="./static/leetcode-repetition.png"
              alt="LeetCode Repetition Extension"
              class="h-8 w-auto"
            />
            <h3 class="text-xl">LeetCode Repetition</h3>
          </div>
          <p class="text-sm">
            The LeetCode Repetition extension follows your chosen intervals to keep tricky problems
            fresh, making sure you're always ready for your next technical interview.
          </p>
        </div>

        <div class="flex-1">
          <div id="footer-links" class="ml-24 flex justify-around gap-6">
            <div class="space-y-2 flex-1">
              <h4>Support</h4>
              <ul class="space-y-1">
                <li>
                  <a href="mailto:leetcode-repetition@murrah.dev" class="text-sm">Contact</a>
                </li>
                <li>
                  <a href="./privacy.html" class="text-sm">Privacy&nbsp;Policy</a>
                </li>
                <li>
                  <a href="./index.html#FAQ" class="text-sm">FAQ</a>
                </li>
              </ul>
            </div>

            <div class="space-y-2 flex-1">
              <h4>Download</h4>
              <ul class="space-y-1">
                <li>
                  <a
                    href="https://chromewebstore.google.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-sm"
                    >Chrome</a
                  >
                </li>
                <li>
                  <a
                    href="https://addons.mozilla.org/en-US/firefox/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-sm"
                    >Firefox</a
                  >
                </li>
              </ul>
            </div>

            <div class="space-y-4 flex-1">
              <div class="flex items-center gap-2">
                <!-- temp! change this to actually monitor status -->
                <span class="h-2 w-2 rounded-full bg-secondary-color"></span>
                <h4>Operational</h4>
              </div>
              <div class="flex items-center gap-4">
                <a href="https://github.com/leetcode-repetition" target="_blank" rel="noreferrer">
                  <img src="./static/github.svg" alt="GitHub" class="h-5 w-auto" />
                </a>
                <a href="mailto:leetcode-repetition@murrah.dev" title="Mail">
                  <img src="./static/mail.svg" alt="Mail" class="h-5 w-auto" />
                </a>
                <a href="https://www.linkedin.com/in/jacobmurrah/" target="_blank" rel="noreferrer">
                  <img src="./static/linkedin.svg" alt="LinkedIn" class="h-5 w-auto" />
                </a>
                <a href="https://buymeacoffee.com/jmurrah" target="_blank" rel="noreferrer">
                  <img
                    src="./static/coffee.svg"
                    alt="LinkedIn"
                    class="h-6 w-auto hover:text-primary-color"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}
