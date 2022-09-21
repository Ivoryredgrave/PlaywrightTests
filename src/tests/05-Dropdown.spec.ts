// @ts-check
import { test } from "@playwright/test";
import { Select, AbrirPagina } from "../componentes/componentes";

test.describe("Option select", async () => {
  test.slow();

  test.beforeEach(async ({ page }) => {
    await AbrirPagina(page, process.env.LETCODE_URL + "/dropdowns");
  });

  test("Test option select", async ({ page }) => {
    await Select(page, "#fruits", "2");
  });
});