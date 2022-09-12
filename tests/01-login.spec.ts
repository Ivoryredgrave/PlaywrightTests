// @ts-check
import { test, expect } from "@playwright/test";
import { IniciarSesion, ModalAlerta } from "../componentes/componentes";

test.describe("Login", () => {
  test.slow();

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/auth/login");
    await expect(page).toHaveURL("http://localhost:3000/auth/login");
  });

  test("Inicio de sesión con éxito", async ({ page }) => {
    await IniciarSesion(
      page,
      "xpath=(//label[text()='Nombre de usuario']/following::input)[1]",
      "admin",
      "xpath=//label[text()='Contraseña']/following::input",
      "1234",
      "xpath=//button[@type='submit']"
    );
    await expect(page).toHaveURL("http://localhost:3000/inicio");
  });

  test("Cuenta no existe", async ({ page }) => {
    await IniciarSesion(
      page,
      "xpath=(//label[text()='Nombre de usuario']/following::input)[1]",
      "admin",
      "xpath=//label[text()='Contraseña']/following::input",
      "123468g",
      "xpath=//button[@type='submit']"
    );
    await ModalAlerta(
      page,
      "div.swal2-container.swal2-center",
      "×          ErrorUsuario y/o contraseña incorrectosOKNoCancel"
    );
  });

  test("Usuario vacio", async ({ page }) => {
    await IniciarSesion(
      page,
      "xpath=(//label[text()='Nombre de usuario']/following::input)[1]",
      "",
      "xpath=//label[text()='Contraseña']/following::input",
      "1234",
      "xpath=//button[@type='submit']"
    );

    await ModalAlerta(
      page,
      "xpath=//div[@role='alert']",
      "¡Por favor escribe un nombre de usuario!"
    );
  });

  test("Contraseña vacia", async ({ page }) => {
    await IniciarSesion(
      page,
      "xpath=(//label[text()='Nombre de usuario']/following::input)[1]",
      "asdasdas",
      "xpath=//label[text()='Contraseña']/following::input",
      "",
      "xpath=//button[@type='submit']"
    );

    await ModalAlerta(
      page,
      "xpath=//div[@role='alert']",
      "¡Por favor escribe una contraseña!"
    );
  });

});