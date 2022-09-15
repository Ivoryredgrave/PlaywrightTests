// @ts-check
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
  await page.context().storageState({ path: "../storageState.json" });
};

const ModalAlerta = async (
  page: Page,
  VentanaModal: string,
  Mensaje: string
) => {
  await expect(page.locator(VentanaModal)).toHaveText(Mensaje);
};

const SubirArchivo = async (
  page: Page,
  BotonArchivo: string,
  RutaArchivo: string
) => {
  await page.setInputFiles(BotonArchivo, RutaArchivo);
};

export { IniciarSesion, ModalAlerta, SubirArchivo };