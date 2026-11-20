export const initGiftsetTabs = () => {
  const tabsRoot = document.querySelector("[data-tabs]");
  if (!tabsRoot) return;

  const buttons = tabsRoot.querySelectorAll("[data-tab-btn]");
  const panels = tabsRoot.querySelectorAll("[data-tab-panel]");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.tabBtn;

      buttons.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isMatch = panel.dataset.tabPanel === targetId;
        panel.classList.toggle("is-active", isMatch);
        panel.hidden = !isMatch;
      });
    });
  });
};
