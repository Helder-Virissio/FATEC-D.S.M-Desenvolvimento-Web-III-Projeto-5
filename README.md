# Projeto: Cálculo de Média Escolar

Trabalho prático em dupla desenvolvido em **Node.js** para a faculdade FATEC. O objetivo é calcular a média de um aluno através das notas passadas pelo link da página e exibir se ele foi aprovado ou reprovado.

---

## 📋 Como Funciona

- O sistema recebe as notas **P1** e **P2** direto pelo link do navegador.
- Calcula a média: **(P1 + P2) / 2**
- **Regra de Nota:**
  - Média **6.0 ou maior**: Exibe a tela de **Aprovado** (verde).
  - Média **menor que 6.0**: Exibe a tela de **Reprovado** (vermelha).
- Possui mensagens amigáveis caso as notas não sejam informadas ou o endereço digitado esteja errado.

---

## 🚀 Como Testar no Navegador

Após iniciar o projeto com `npm start`, acesse no seu navegador:

- **Teste de Aprovado:** [http://localhost:3000/media?p1=7.5&p2=5.0](http://localhost:3000/media?p1=7.5&p2=5.0)
- **Teste de Reprovado:** [http://localhost:3000/media?p1=4.0&p2=5.0](http://localhost:3000/media?p1=4.0&p2=5.0)

---

## 👥 Integrantes

- Helder Virissio Araujo
- Vitor Bernardo