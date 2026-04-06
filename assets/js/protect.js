(function () {

  // 🔒 Inject CSS (disable selection + highlight)
  const style = document.createElement('style');
  style.innerHTML = `
    * {
      -webkit-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    }

    body {
      -webkit-touch-callout: none !important;
    }
  `;
  document.head.appendChild(style);

  // 🚫 Disable Right Click
  document.addEventListener('contextmenu', e => e.preventDefault());

  // 🚫 Disable Copy / Cut / Paste
  ['copy', 'cut', 'paste'].forEach(event => {
    document.addEventListener(event, e => e.preventDefault());
  });

  // 🚫 Disable Text Selection & Drag
  document.addEventListener('selectstart', e => e.preventDefault());
  document.addEventListener('dragstart', e => e.preventDefault());

  // 🚫 Disable Keyboard Shortcuts
  document.onkeydown = function (e) {
    // F12
    if (e.keyCode === 123) return false;

    // Ctrl+Shift+I/J/C
    if (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) return false;

    // Ctrl+U / Ctrl+S / Ctrl+P
    if (e.ctrlKey && [85, 83, 80].includes(e.keyCode)) return false;

    // Ctrl+C / X / V / A
    if (e.ctrlKey && [67, 88, 86, 65].includes(e.keyCode)) return false;
  };

  // 🧠 DevTools Detection (basic)
  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;

    if (widthThreshold || heightThreshold) {
      document.body.innerHTML = "<h1 style='text-align:center;margin-top:20%;font-family:sans-serif;'>🚫 Inspect Not Allowed</h1>";
    }
  }, 1000);

  // 🧨 Debugger trap
  setInterval(() => {
    debugger;
  }, 2000);

  // 🔍 Detect console open (trick)
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function () {
      document.body.innerHTML = "<h1 style='text-align:center;margin-top:20%;'>🚫 Console Disabled</h1>";
    }
  });
  console.log(element);

  // 📸 PrintScreen detection with alert
  document.addEventListener('keyup', function(e) {
    if (e.key === "PrintScreen") {
      alert("Screenshots are disabled on this page!");
      // Optional: clear clipboard (works in some browsers)
      if (navigator.clipboard) {
        navigator.clipboard.writeText("");
      }
    }
  });

})();