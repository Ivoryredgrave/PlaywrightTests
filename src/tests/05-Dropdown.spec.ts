// @ts-check
import { test } from "@playwright/test";
import { Select } from "../componentes/componentes";

test.describe("Option select", async () => {
  test.slow();

  test.beforeEach(async ({ page }) => {
    await page.goto("https://letcode.in/dropdowns");
  });

  test("Test option select", async ({ page }) => {
    await Select(page, 
      "#fruits", 
      "2"
      );
  });
});