// @ts-check
import { test } from "@playwright/test";
import { AbrirPagina } from "../componentes/componentes";

test.describe("Load Login Storage", async () => {
  test.slow();

  test.use({ storageState: "./storageState.json" });

  test("Test Login Storage", async ({ page }) => {
    await AbrirPagina(page, process.env.THE_INTERNET_URL + "/secure");
  });
});
