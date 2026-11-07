const { test, expect } = require('@playwright/test');

// Serve the repository root with a local HTTP server and set Playwright baseURL.
// These tests are supplied for execution; they have not been run in this session.
test('first-time orientation records nickname and stable intern ID', async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
  await page.goto('/');
  const overlay = page.locator('#internOrientation');
  const next = page.locator('#internNext');
  const name = page.locator('#internNameInput');
  await expect(overlay).toBeVisible();
  await next.click();
  await next.click();
  await next.click();
  await expect(name).toBeVisible();
  await name.fill('Dr. Pink');
  for (let i = 0; i < 12 && await overlay.isVisible(); i++) await next.click();
  await expect(overlay).toBeHidden();
  const profile = await page.evaluate(() => JSON.parse(localStorage.getItem('petri-panic-intern-v1')));
  expect(profile).toMatchObject({ name: 'Dr. Pink', orientationDone: true });
  expect(profile.id).toBeTruthy();
});

test('real fresh Experiment 1 shows tutorial, real droplet and BioBits hooks complete it', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.clear();
    localStorage.setItem('petri-panic-intern-v1', JSON.stringify({id:'intern-test',name:'Test Intern',orientationDone:true}));
  });
  await page.goto('/');
  await page.evaluate(() => { selected='adventure'; chosenLevel=1; begin(); });
  const banner = page.locator('#exp1TutorialBanner');
  await expect(banner).toContainText('water droplet');
  // Invoke the real click handler with a valid dish coordinate; no reward is simulated.
  await page.evaluate(() => click(310,290));
  await expect(banner).toContainText('BioBits bubbles');
  // Use an actual bubble collected through the existing collect(b) function.
  await page.evaluate(() => { const b={x:310,y:290,value:12,r:12,life:4}; bubbles.push(b); collect(b); });
  await expect(banner).toContainText('You collected BioBits');
  const profile = await page.evaluate(() => JSON.parse(localStorage.getItem('petri-panic-intern-v1')));
  expect(profile.id).toBe('intern-test');
  expect(profile.exp1TutorialDone).toBe(true);
});

test('Continue restores a real checkpoint without restarting tutorial', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('petri-panic-intern-v1', JSON.stringify({id:'intern-restore',name:'Returning',orientationDone:true}));
  });
  await page.goto('/');
  // Generate the checkpoint through the game itself, avoiding fabricated Glob fixtures.
  const snapshot = await page.evaluate(() => {
    selected='adventure';chosenLevel=1;begin();
    coins=450;saveCheckpoint();
    return JSON.parse(localStorage.getItem('petri-panic-active-run-v1'));
  });
  expect(snapshot.version).toBe(1);
  expect(snapshot.globs.length).toBeGreaterThan(0);
  await page.reload();
  const resume = page.locator('#continueRun');
  await expect(resume).toBeVisible();
  await resume.click();
  const restored = await page.evaluate(() => ({coins,activeLevel,globCount:globs.length,state}));
  expect(restored.coins).toBe(450);
  expect(restored.activeLevel).toBe(1);
  expect(restored.globCount).toBe(snapshot.globs.length);
  await expect(page.locator('#exp1TutorialBanner')).toBeHidden();
});
