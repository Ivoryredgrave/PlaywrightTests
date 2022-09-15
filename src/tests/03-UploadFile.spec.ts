// @ts-check
import { test } from "@playwright/test";
import { SubirArchivo } from "../componentes/componentes";

test.describe("Upload File", async () => {
  const filePath0 = "../imagenes/conejos.jpg";

  test.slow();

  test.beforeEach(async ({ page }) => {
    await page.goto("https://kitchen.applitools.com/ingredients/file-picker");
  });

  test("Test Upload File", async ({ page }) => {
    SubirArchivo(page, "#photo-upload", filePath0);
  });
});