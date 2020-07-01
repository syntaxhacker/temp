const playwright = require('playwright');
const path = require('path');

void async function () {
  const browser = await playwright.firefox.launch();
  const page = await browser.newPage();
  await page.goto("https://youtube.com");
  await page.screenshot({ path: path.join(__dirname, 'screenshot.png') });
  await browser.close();
}()
