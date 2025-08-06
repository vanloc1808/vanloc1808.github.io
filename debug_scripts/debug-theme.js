// Test script to run in browser console on localhost:3002
function testThemeSystem() {
  console.log('🧪 Starting theme system test...');

  // Check initial state
  console.log('🔍 Initial localStorage theme:', localStorage.getItem('theme'));

  // Try to find theme buttons
  const buttons = document.querySelectorAll('button');
  console.log('🔍 Found', buttons.length, 'buttons on page');

  // Look for theme-related buttons
  const themeButtons = Array.from(buttons).filter(
    btn =>
      btn.textContent &&
      (btn.textContent.includes('Light') ||
        btn.textContent.includes('Dark') ||
        btn.textContent.includes('System'))
  );

  console.log('🎯 Found theme buttons:', themeButtons.length);
  themeButtons.forEach((btn, index) => {
    console.log(
      `Button ${index}:`,
      btn.textContent?.trim(),
      'onclick:',
      !!btn.onclick
    );
  });

  // Try to find theme toggle button (the one that opens the dropdown)
  const themeToggle = document.querySelector('[aria-label*="theme"]');
  console.log('🔍 Theme toggle button:', themeToggle);

  // Try to click the theme toggle to open dropdown
  if (themeToggle) {
    console.log('🖱️ Clicking theme toggle button...');
    themeToggle.click();

    // Wait a bit and check again for theme buttons
    setTimeout(() => {
      const newThemeButtons = Array.from(
        document.querySelectorAll('button')
      ).filter(
        btn =>
          btn.textContent &&
          (btn.textContent.includes('Light') ||
            btn.textContent.includes('Dark') ||
            btn.textContent.includes('System'))
      );
      console.log(
        '🎯 After opening dropdown, found theme buttons:',
        newThemeButtons.length
      );

      // Try clicking the Light button if available
      const lightButton = newThemeButtons.find(btn =>
        btn.textContent?.includes('Dark')
      );
      if (lightButton) {
        console.log('🖱️ Attempting to click Light button...');
        lightButton.click();

        setTimeout(() => {
          console.log(
            '✅ After clicking Dark, localStorage theme:',
            localStorage.getItem('theme')
          );
        }, 100);
      }
    }, 100);
  }

  return {
    initialTheme: localStorage.getItem('theme'),
    totalButtons: buttons.length,
    themeButtons: themeButtons.length,
    themeToggle: !!themeToggle,
  };
}

// Instructions
console.log('📋 Copy and paste this into browser console on localhost:3002:');
console.log('testThemeSystem()');
