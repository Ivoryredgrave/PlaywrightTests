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
  await expect(page.locator(InputUsuario)).toBeVisible();
  await expect(page.locator(InputClave)).toBeVisible();
  await expect(page.locator(Boton)).toBeVisible();

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
  await expect(page.locator(VentanaModal)).toBeVisible();
  await expect(page.locator(VentanaModal)).toHaveText(Mensaje);
};

const SubirArchivo = async (
  page: Page,
  BotonArchivo: string,
  RutaArchivo: string
) => {
  await expect(page.locator(BotonArchivo)).toBeVisible();
  await page.setInputFiles(BotonArchivo, RutaArchivo);
};

const Boton = async (page: Page, Boton: string) => {
  await expect(page.locator(Boton)).toBeVisible();
  await page.locator(Boton).click();
};

const Input = async (page: Page, Input: string, Texto: string) => {
  await expect(page.locator(Input)).toBeVisible();
  await page.locator(Input).fill(Texto);
};

const Checkbox = async (page: Page, checkbox: string) => {
  await expect(page.locator(checkbox)).toBeVisible();
  await page.locator(checkbox).check();
  expect(await page.locator(checkbox).isChecked()).toBeTruthy();
};

const Select = async (page: Page, select: string, valor: string) => {
  await expect(page.locator(select)).toBeVisible();
  await page.locator(select).selectOption(valor);
};

export {
  IniciarSesion,
  ModalAlerta,
  SubirArchivo,
  Boton,
  Input,
  Checkbox,
  Select,
};
