
  
  (function() {
    // Select the elements to hide/show
    const controlsSelector = ".ytp-chrome-bottom, .ytp-chrome-top";
    const elements = document.querySelectorAll(controlsSelector);
  
    if (elements.length) {
      const isHidden = elements[0].style.opacity === "0";
      elements.forEach((el) => {
        el.style.opacity = isHidden ? "1" : "0"; // Toggle visibility
      });
    }
  })();
  