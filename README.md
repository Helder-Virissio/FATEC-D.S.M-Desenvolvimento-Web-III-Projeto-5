# Projeto: Cálculo de Média Escolar

Trabalho prático desenvolvido para a faculdade **FATEC**. O objetivo da aplicação é receber as notas P1 e P2 através do link da página (URL), calcular a média do aluno e exibir automaticamente se ele foi **Aprovado** ou **Reprovado**.

---

## 📋 Como Funciona

- O sistema lê as notas **P1** e **P2** direto da URL enviada pelo navegador.
- Calcula a média: `MÉDIA = (P1 + P2) / 2`
- **Regras de Avaliação:**
  - **Média igual ou maior que 6.0:** Exibe a página verde de **Aprovado**.
  - **Média menor que 6.0:** Exibe a página vermelha de **Reprovado**.
- Conta com validação básica para impedir notas vazias, textos inválidos e rotas inexistentes (Erro 404).

---

## 💻 Como Baixar e Executar o Projeto

1. **Clonar o Repositório:**
   Abra o terminal e baixe o código fonte para o seu computador:
   ```bash
   git clone https://github.com/Helder-Virissio/FATEC-D.S.M-Desenvolvimento-Web-III-Projeto-5.git
   ```

2. **Acessar a pasta do projeto:**
   ```bash
   cd FATEC-D.S.M-Desenvolvimento-Web-III-Projeto-5
   ```

3. **Instalar/Sincronizar o projeto:**
   ```bash
   npm install
   ```

4. **Iniciar o servidor:**
   ```bash
   npm start
   ```

---

## 🚀 Como Testar no Navegador

Com o servidor rodando, abra o seu navegador e acesse um dos links abaixo:

- 🟢 **Aluno Aprovado:** [http://localhost:3000/media?p1=7.5&p2=5.0](http://localhost:3000/media?p1=7.5&p2=5.0)
- 🔴 **Aluno Reprovado:** [http://localhost:3000/media?p1=4.0&p2=5.0](http://localhost:3000/media?p1=4.0&p2=5.0)

---

## 👥 Integrantes

- Helder Virissio Araujo
