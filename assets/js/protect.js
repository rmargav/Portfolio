(function () {
  "use strict";

  /* =========================
   🔒 CSS Protection Layer
========================= */
  const style = document.createElement("style");
  style.innerHTML = `
* {
  -webkit-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

img {
  pointer-events: none;
  -webkit-user-drag: none;
}
`;
  document.head.appendChild(style);

  /* =========================
   🚫 Disable Right Click
========================= */
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  /* =========================
   🚫 Block Copy Actions
========================= */
  ["copy", "cut", "paste"].forEach((event) => {
    document.addEventListener(event, (e) => e.preventDefault());
  });

  /* =========================
   🚫 Disable Selection & Drag
========================= */
  document.addEventListener("selectstart", (e) => e.preventDefault());
  document.addEventListener("dragstart", (e) => e.preventDefault());

  /* =========================
   ⌨️ Keyboard Protection
========================= */
  document.addEventListener("keydown", function (e) {
    if (e.key === "F12") e.preventDefault();

    if (e.ctrlKey) {
      const blockedKeys = ["u", "s", "p", "c", "x", "v", "a"];
      if (blockedKeys.includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    }

    if (e.ctrlKey && e.shiftKey) {
      const blocked = ["i", "j", "c"];
      if (blocked.includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    }
  });

  /* =========================
   📸 Screenshot Awareness
========================= */
  document.addEventListener("keyup", function (e) {
    if (e.key === "PrintScreen") {
      showWarning("Screenshots are discouraged on this page.");
    }
  });

  /* =========================
   🔔 Warning UI
========================= */
  function showWarning(message) {
    let warning = document.createElement("div");
    warning.innerText = message;

    warning.style.position = "fixed";
    warning.style.bottom = "20px";
    warning.style.left = "50%";
    warning.style.transform = "translateX(-50%)";
    warning.style.background = "rgba(0,0,0,0.8)";
    warning.style.color = "#fff";
    warning.style.padding = "10px 20px";
    warning.style.borderRadius = "8px";
    warning.style.zIndex = "9999";
    warning.style.fontSize = "14px";

    document.body.appendChild(warning);

    setTimeout(() => warning.remove(), 3000);
  }

  /* =========================
   🖼️ Protect Images (SAFE)
========================= */
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("draggable", "false");
  });
})();
