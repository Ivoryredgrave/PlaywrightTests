import { expect, Page } from "@playwright/test";

const IniciarSesion = async (
  page: Page,
  InputUsuario: string,
  TextoUsuario: string,
  InputClave: string,
  TextoClave: string,
  Boton: string
) => {
  await page.locator(InputUsuario).fill(TextoUsuario);
  await page.locator(InputClave).fill(TextoClave);
  await page.locator(Boton).click();
};

const ModalAlerta = async (
  page: Page,
  VentanaModal: string,
  Mensaje: string
) => {
  await expect(page.locator(VentanaModal)).toHaveText(Mensaje);
};

export { IniciarSesion, ModalAlerta };