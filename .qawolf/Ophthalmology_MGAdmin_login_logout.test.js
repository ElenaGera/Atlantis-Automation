const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("Ophthalmology_MGAdmin_login_logout", async () => {
  const page = await context.newPage();
  await page.goto("https://demo.eyeqtester.com/", { waitUntil: "domcontentloaded" });
  await page.click("#user_email");
  await page.fill("#user_email", "qawolf@admin.demo");
  await page.click("#user_password");
  await page.fill("#user_password", "changeme");
  await page.click(".btn");
  await page.click(".dropdown-toggle");
  await page.click('.show [href="/users/sign_out"]');
});