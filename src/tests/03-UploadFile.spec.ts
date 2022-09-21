// @ts-check
import { test } from "@playwright/test";
import { SubirArchivo, AbrirPagina, Boton } from "../componentes/componentes";

test.describe("Upload File", async () => {
  test.slow();

  const filePath0 = "../imagenes/conejos.jpg";

  test.beforeEach(async ({ page }) => {
    await AbrirPagina(page, process.env.THE_INTERNET_URL + "/upload");
  });

  test("Test Upload File", async ({ page }) => {
    await SubirArchivo(page, "#file-upload", filePath0);
    await Boton(page, "#file-submit");
  });
});
