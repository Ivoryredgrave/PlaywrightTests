// @ts-check
import { test, expect } from "@playwright/test";
import {
  IniciarSesion,
  ModalAlerta,
  AbrirPagina,
} from "../componentes/componentes";

test.describe("Login", () => {
  test.slow();

  test.beforeEach(async ({ page }) => {
    await AbrirPagina(page, process.env.THE_INTERNET_URL + "/login");
  });

  test("Inicio de sesión con éxito", async ({ page }) => {
    await IniciarSesion(
      page,
      "#username",
      "tomsmith",
      "#password",
      "SuperSecretPassword!",
      "//button[@type='submit']"
    );
    await expect(page).toHaveURL(process.env.THE_INTERNET_URL + "/secure");

    await page.context().storageState({ path: "./storageState.json" });
  });

  test.skip("Cuenta no existe", async ({ page }) => {
    await IniciarSesion(
      page,
      "Input usuario",
      "Texto usuario (correo,etc)",
      "Input clave",
      "Texto clave (contraseña,etc",
      "Boton, submit,etc"
    );
    await ModalAlerta(page, "Ventana, modal,etc", "Mensaje, texto,etc");
  });

  test.skip("Usuario vacio", async ({ page }) => {
    await IniciarSesion(
      page,
      "Input usuario",
      "Texto usuario (correo,etc)",
      "Input clave",
      "Texto clave (contraseña,etc",
      "Boton, submit,etc"
    );

    await ModalAlerta(page, "Ventana, modal,etc", "Mensaje, texto,etc");
  });

  test.skip("Contraseña vacia", async ({ page }) => {
    await IniciarSesion(
      page,
      "Input usuario",
      "Texto usuario (correo,etc)",
      "Input clave",
      "Texto clave (contraseña,etc",
      "Boton, submit,etc"
    );

    await ModalAlerta(page, "Ventana, modal,etc", "Mensaje, texto,etc");
  });
});
