// @ts-check
import { test } from "@playwright/test";
import { Checkbox } from "../componentes/componentes";

test.describe("Select checkbox", async () => {
  test.slow();

  test.beforeEach(async ({ page }) => {
    await page.goto("https://letcode.in/radio");
  });

  test("Test select checkbox", async ({ page }) => {
    await Checkbox(page, "#no");
    await Checkbox(page, "#one");
    await Checkbox(page, "#foo");
    await Checkbox(page, "(//input[@type='checkbox'])[2]");
  });
});