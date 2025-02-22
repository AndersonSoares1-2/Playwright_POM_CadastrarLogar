import { test, expect } from "@playwright/test";
import Logica from "../pages/logica";

test("Cadastrar e logar", async ({ page }) => {
  await page.goto("https://bugbank.netlify.app/");
  const logica = new Logica(page);
  await logica.cadastrar("teste@gmail.com", "teste", "1234", "1234");
  await logica.logar("teste@gmail.com", "1234");
});
