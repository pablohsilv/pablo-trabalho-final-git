Pablo Henrique da Silva 23/09/2026
# Fluent 360

Landing page do **Fluent 360**, um programa de inglês corporativo desenvolvido para profissionais que desejam desenvolver sua comunicação em situações do ambiente de trabalho.

O projeto apresenta uma página comercial completa, com apresentação do método, módulos do programa, benefícios, depoimentos, oferta, garantia, perguntas frequentes e chamadas para inscrição.

---

## 📌 Sobre o projeto

O Fluent 360 foi desenvolvido como uma **landing page responsiva**, com foco em apresentar o programa de maneira clara e profissional.

A página foi estruturada em diferentes seções:

* Apresentação do programa
* Identificação dos principais problemas do público
* Apresentação do método Fluent 360
* Resultados e métricas
* Módulos do curso
* Materiais e bônus
* Prova social e depoimentos
* Apresentação do especialista
* Oferta e condições de pagamento
* Garantia de 30 dias
* Perguntas frequentes
* Chamada final para inscrição
* Rodapé com links institucionais

---

## 🛠️ Tecnologias utilizadas

O projeto utiliza tecnologias web básicas:

* **HTML5** — estrutura e conteúdo da página
* **CSS3** — estilização, layout e responsividade
* **JavaScript** — interações e comportamentos dinâmicos
* **LocalStorage** — armazenamento local do prazo da oferta

Não são utilizadas bibliotecas ou frameworks externos.

---

## 📁 Estrutura do projeto

```text
fluent-360/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Arquivo responsável pela estrutura principal da landing page.

Contém as seções de apresentação, problemas, método, módulos, prova social, oferta, garantia, FAQ e chamada final.

### `style.css`

Arquivo responsável pela aparência visual do projeto.

Inclui:

* Tipografia
* Cores
* Espaçamentos
* Botões
* Cards
* Seções
* Responsividade
* Estados de interação
* Modal
* Animações

A página já possui regras específicas para dispositivos menores, incluindo breakpoints de `768px` e `480px`.

### `script.js`

Arquivo responsável pelas funcionalidades interativas da página.

Entre elas:

* Rolagem automática para a área de inscrição
* FAQ expansível
* Animações durante a rolagem
* Contador da oferta
* Modal de inscrição
* Feedback visual
* Interação com o placeholder de vídeo
* Botão de retorno ao topo
* Tratamento básico dos dados do formulário

---

## 🚀 Como executar

Não é necessário instalar dependências.

Basta abrir o arquivo:

```text
index.html
```

diretamente no navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

---

## 💻 Funcionalidades

### FAQ interativo

As perguntas frequentes podem ser abertas e fechadas pelo usuário.

O JavaScript controla a exibição das respostas para manter a interface organizada.

---

### Modal de inscrição

Os botões de chamada para ação direcionam o usuário para o processo de inscrição.

O formulário solicita:

* Nome
* E-mail

Após o preenchimento, uma mensagem de confirmação é exibida.

> Atualmente, o formulário funciona como uma demonstração de interface. Os dados não são enviados para um servidor ou plataforma de pagamento.

---

### Contador de oferta

A página possui um contador relacionado à oferta de 30 dias.

O prazo é armazenado utilizando:

```javascript
localStorage
```

Isso permite manter o mesmo prazo no navegador mesmo depois que a página é atualizada.

---

### Animações

As seções da página possuem animações de entrada durante a rolagem.

O comportamento utiliza:

```javascript
IntersectionObserver
```

para detectar quando uma seção entra na área visível da tela.

---

### Rolagem suave

Os botões de chamada para ação utilizam rolagem suave para levar o usuário até a área correspondente da página.

---

### Responsividade

O projeto foi desenvolvido para funcionar em:

* Computadores
* Notebooks
* Tablets
* Smartphones

O CSS possui ajustes específicos para telas menores, incluindo alteração de tamanhos de títulos, espaçamentos e botões.

---

## 🎨 Identidade visual

A interface utiliza uma estética corporativa, com:

* Fundo claro
* Tons de azul
* Tons neutros
* Destaques em vermelho
* Cards com bordas discretas
* Tipografia limpa
* Espaçamento amplo

A proposta visual busca transmitir uma aparência profissional e adequada ao público corporativo.

---

## 📱 Compatibilidade

O projeto pode ser executado nos principais navegadores modernos:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

## ⚠️ Observações

Este projeto é uma **landing page demonstrativa**.

Alguns elementos atualmente são apenas representações de interface, incluindo:

* Sistema de pagamento
* Envio real do formulário
* Área de alunos
* Sistema de login
* Vídeo de apresentação
* Links institucionais
* Integração com banco de dados
* Backend

Para transformar a página em uma aplicação comercial completa, seria necessário implementar um backend e integrar os serviços necessários.

---

## 🔮 Possíveis melhorias futuras

Algumas funcionalidades podem ser adicionadas posteriormente:

* Integração com gateway de pagamento
* Banco de dados para inscrições
* Sistema de login
* Área exclusiva para alunos
* Integração com e-mail
* Vídeo real de apresentação
* Painel administrativo
* Sistema de gerenciamento de alunos
* Analytics
* SEO
* Formulário conectado a uma API
* Política de privacidade e termos reais

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido como uma landing page para apresentação do programa **Fluent 360**.

### Versão

```text
1.0.0
```

### Ano

```text
2026
```

---

## 📄 Licença

Este projeto é destinado a fins demonstrativos e acadêmicos.

A utilização comercial dos conteúdos, marcas, depoimentos ou informações apresentadas deve ser autorizada pelos respectivos responsáveis.
