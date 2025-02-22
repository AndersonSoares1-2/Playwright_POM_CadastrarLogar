import { expect, Locator, Page } from "@playwright/test";

class Logica {
  /**
   * Logar
   */
  readonly logarEmail: Locator;
  readonly logarSenha: Locator;
  readonly btnAcessar: Locator;
  /**
   * Cadastrar
   */
  readonly btnRegistrar: Locator;
  readonly email: Locator;
  readonly nome: Locator;
  readonly senha: Locator;
  readonly ConfirmarSenha: Locator;
  readonly btnCadastrar: Locator;
  readonly btnFechar: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    /**
     * Logar
     */
    this.logarEmail = this.page
      .locator("form")
      .filter({
        hasText:
          "E-mailSenhaAcessarRegistrarConheça nossos requisitosA aplicação não conta com",
      })
      .getByPlaceholder("Informe seu e-mail");
    this.logarSenha = this.page
      .locator("form")
      .filter({
        hasText:
          "E-mailSenhaAcessarRegistrarConheça nossos requisitosA aplicação não conta com",
      })
      .getByPlaceholder("Informe sua senha");
      this.btnAcessar = this.page.getByRole('button', { name: 'Acessar' });
    /**
     * Cadastrar
     */
    this.btnRegistrar = this.page.getByRole("button", { name: "Registrar" });
    this.email = this.page
      .locator("form")
      .filter({ hasText: "Voltar ao loginE-" })
      .getByPlaceholder("Informe seu e-mail");
    this.nome = this.page.getByRole("textbox", { name: "Informe seu Nome" });
    this.senha = this.page
      .locator("form")
      .filter({ hasText: "Voltar ao loginE-" })
      .getByPlaceholder("Informe sua senha");
    this.ConfirmarSenha = this.page.getByRole("textbox", {
      name: "Informe a confirmação da senha",
    });
    this.btnCadastrar = this.page.getByRole("button", { name: "Cadastrar" });
    this.btnFechar = this.page.getByText("Fechar");
  }

  async cadastrar(
    email: string,
    nome: string,
    senha: string,
    confirmarSenha: string
  ) {
    await this.btnRegistrar.click();
    await this.email.fill(email);
    await this.nome.fill(nome);
    await this.senha.fill(senha);
    await this.ConfirmarSenha.fill(confirmarSenha);
    await this.btnCadastrar.click();
    await this.btnFechar.click();
  }
  async logar(email: string, senha: string) {
    await this.logarEmail.fill(email);
    await this.logarSenha.fill(senha);
    await this.btnAcessar.click();
    await expect(this.page.locator('#textBalance')).toContainText('Saldo em conta R$ 0,00');
  }
}

export default Logica;
