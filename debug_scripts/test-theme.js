import puppeteer from 'puppeteer';

async function testThemeSwitcher() {
  console.log('Starting theme switcher test...');

  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  try {
    // Navigate to the site
    console.log('Navigating to localhost:3001...');
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle2' });

    // Debug: Check what's on the page
    const title = await page.title();
    console.log('Page title:', title);

    // Debug: Look for any theme-related elements
    const themeElements = await page.$$eval(
      '[aria-label*="theme"], [aria-label*="Theme"], button',
      elements =>
        elements.map(el => ({
          tagName: el.tagName,
          ariaLabel: el.getAttribute('aria-label'),
          textContent: el.textContent?.trim().substring(0, 50),
          className: el.className,
        }))
    );
    console.log('Found elements with theme or button:', themeElements);

    // Wait for the page to load and try different selectors
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('Waiting complete, checking for theme button...');

    // Check initial theme
    const initialTheme = await page.evaluate(() => {
      return localStorage.getItem('theme') || 'system';
    });
    console.log('Initial theme:', initialTheme);

    // Check if dark class is present initially
    const initialDarkClass = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });
    console.log('Initial dark class present:', initialDarkClass);

    // Find the theme button
    const themeButton = await page.$('[aria-label*="Current theme"]');
    if (!themeButton) {
      throw new Error('Theme button not found');
    }

    // Click to open theme menu
    console.log('Clicking theme button...');
    await themeButton.click();

    // Wait for theme menu to appear
    await page.waitForSelector('[role="menu"][aria-label*="Theme selection"]', {
      timeout: 5000,
    });
    console.log('Theme menu opened');

    // Test Light theme
    console.log('Testing Light theme...');
    const lightButton = await page.$('[aria-label="Switch to light theme"]');
    if (!lightButton) {
      throw new Error('Light theme button not found');
    }

    await lightButton.click();
    await page.waitForTimeout(500); // Wait for theme to apply

    const lightTheme = await page.evaluate(() => {
      return localStorage.getItem('theme');
    });
    const lightDarkClass = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    console.log(
      'After clicking Light - theme:',
      lightTheme,
      'dark class:',
      lightDarkClass
    );
    if (lightTheme !== 'light' || lightDarkClass !== false) {
      throw new Error(
        `Light theme failed. Expected: theme='light', dark=false. Got: theme='${lightTheme}', dark=${lightDarkClass}`
      );
    }

    // Re-open theme menu for next test
    await themeButton.click();
    await page.waitForSelector('[role="menu"][aria-label*="Theme selection"]', {
      timeout: 5000,
    });

    // Test Dark theme
    console.log('Testing Dark theme...');
    const darkButton = await page.$('[aria-label="Switch to dark theme"]');
    if (!darkButton) {
      throw new Error('Dark theme button not found');
    }

    await darkButton.click();
    await page.waitForTimeout(500);

    const darkTheme = await page.evaluate(() => {
      return localStorage.getItem('theme');
    });
    const darkDarkClass = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    console.log(
      'After clicking Dark - theme:',
      darkTheme,
      'dark class:',
      darkDarkClass
    );
    if (darkTheme !== 'dark' || darkDarkClass !== true) {
      throw new Error(
        `Dark theme failed. Expected: theme='dark', dark=true. Got: theme='${darkTheme}', dark=${darkDarkClass}`
      );
    }

    // Re-open theme menu for next test
    await themeButton.click();
    await page.waitForSelector('[role="menu"][aria-label*="Theme selection"]', {
      timeout: 5000,
    });

    // Test System theme
    console.log('Testing System theme...');
    const systemButton = await page.$(
      '[aria-label="Use system theme preference"]'
    );
    if (!systemButton) {
      throw new Error('System theme button not found');
    }

    await systemButton.click();
    await page.waitForTimeout(500);

    const systemTheme = await page.evaluate(() => {
      return localStorage.getItem('theme');
    });
    const systemDarkClass = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });
    const systemPrefersDark = await page.evaluate(() => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    console.log(
      'After clicking System - theme:',
      systemTheme,
      'dark class:',
      systemDarkClass,
      'system prefers dark:',
      systemPrefersDark
    );
    if (systemTheme !== 'system') {
      throw new Error(
        `System theme failed. Expected: theme='system'. Got: theme='${systemTheme}'`
      );
    }
    if (systemDarkClass !== systemPrefersDark) {
      throw new Error(
        `System theme class mismatch. Expected dark class to match system preference (${systemPrefersDark}). Got: ${systemDarkClass}`
      );
    }

    console.log('✅ All theme tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

testThemeSwitcher().catch(console.error);
