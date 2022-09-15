// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Load Login Storage", async () => {
  
  test.slow();

  test.use({ storageState: "../storageState.json" });

  test.beforeEach(async ({ page }) => {
    await page.goto("url");
  });

  test("Test Login Storage", async ({ page }) => {
    await expect(page).toHaveURL("url");
  });
});