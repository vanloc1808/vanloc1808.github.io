// Enhanced debug script to check for click blocking issues
function debugClickBlocking() {
  console.log('🔍 Debugging click blocking issues...');

  // 1. Check if dropdown is actually visible
  const themeToggle = document.querySelector('[aria-label*="theme"]');
  console.log('Theme toggle:', themeToggle);

  if (themeToggle) {
    console.log('Clicking theme toggle...');
    themeToggle.click();

    setTimeout(() => {
      // 2. Check dropdown visibility and positioning
      const dropdown = document.querySelector('[role="menu"]');
      console.log('Dropdown element:', dropdown);

      if (dropdown) {
        const dropdownRect = dropdown.getBoundingClientRect();
        console.log('Dropdown position:', {
          top: dropdownRect.top,
          left: dropdownRect.left,
          width: dropdownRect.width,
          height: dropdownRect.height,
          zIndex: getComputedStyle(dropdown).zIndex,
        });

        // 3. Find theme buttons and check their properties
        const themeButtons = dropdown.querySelectorAll('button');
        console.log('Theme buttons in dropdown:', themeButtons.length);

        themeButtons.forEach((btn, index) => {
          const rect = btn.getBoundingClientRect();
          const styles = getComputedStyle(btn);
          console.log(`Button ${index} (${btn.textContent?.trim()}):`, {
            position: rect,
            pointerEvents: styles.pointerEvents,
            zIndex: styles.zIndex,
            display: styles.display,
            visibility: styles.visibility,
          });

          // Add direct event listeners to bypass React
          console.log('🔧 Adding direct event listeners to button', index);
          btn.addEventListener(
            'click',
            e => {
              console.log(
                `🚨 DIRECT CLICK on button ${index}:`,
                btn.textContent?.trim()
              );
              e.stopPropagation();
            },
            true
          );

          btn.addEventListener(
            'mousedown',
            e => {
              console.log(
                `🚨 DIRECT MOUSEDOWN on button ${index}:`,
                btn.textContent?.trim()
              );
            },
            true
          );
        });

        // 4. Check what element is actually at the button position
        const firstButton = themeButtons[0];
        if (firstButton) {
          const rect = firstButton.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const elementAtPoint = document.elementFromPoint(centerX, centerY);
          console.log('Element at button center:', elementAtPoint);
          console.log(
            'Is it the button itself?',
            elementAtPoint === firstButton
          );
        }
      }
    }, 100);
  }
}

// Also add global event monitoring
function addGlobalEventMonitoring() {
  console.log('🚨 Adding global event monitoring...');

  ['click', 'mousedown', 'mouseup'].forEach(eventType => {
    document.addEventListener(
      eventType,
      e => {
        console.log(`🌍 Global ${eventType}:`, e.target);
      },
      true
    );
  });
}

console.log('Run: debugClickBlocking() and addGlobalEventMonitoring()');
