const { Given, When, Then } = require("cucumber");
const puppeteer = require('puppeteer');

Given("I navigate to google", {timeout: 60 * 1000}, async function() {
    const browser = await puppeteer.launch({headless: false,});
    const page = await browser.newPage();
    await page.goto('https://www.google.fr/');
    await browser.close();
  });
  