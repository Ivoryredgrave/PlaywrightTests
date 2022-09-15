// @ts-check
import { test, expect } from "@playwright/test";
import { IniciarSesion, ModalAlerta } from "../componentes/componentes";

test.describe("Login", () => {
  
  test.slow();

  test.beforeEach(async ({ page }) => {
    await page.goto("url");
    await expect(page).toHaveURL("url");
  });

  test("Inicio de sesión con éxito", async ({ page }) => {
    await IniciarSesion(
      page,
      "Input usuario",
      "Texto usuario (correo,etc)",
      "Input clave",
      "Texto clave (contraseña,etc",
      "Boton, submit,etc"
    );
    await expect(page).toHaveURL("url logueado");
  });

  test("Cuenta no existe", async ({ page }) => {
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

  test("Usuario vacio", async ({ page }) => {
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

  test("Contraseña vacia", async ({ page }) => {
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
