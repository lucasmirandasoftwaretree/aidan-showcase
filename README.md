# Aidan Showcase

Projeto demonstrativo do app **Aidan**, criado para validar a navegação, responsividade, fluxo visual e comportamento das telas em ambiente mobile, principalmente Android.

Esta versão é focada apenas em **telas navegáveis**, sem backend, autenticação real ou persistência de dados. Todo o conteúdo é mockado para apresentação e validação visual.

## Tecnologias usadas

* React Native
* Expo
* Expo Router
* TypeScript
* React Native Animated API
* Assets locais para logo, avatar e ilustrações

## Objetivo do projeto

O objetivo do `aidan-showcase` é demonstrar como o app Aidan se comporta em um celular Android real ou no Expo Web, permitindo navegar pelos principais fluxos antes da implementação do backend.

A demo simula:

* Login inicial
* Login com Google
* Cadastro
* Verificação de código
* Localização
* Tela de boas-vindas
* Home principal
* Menu lateral
* Perfil
* Configurações
* Lista de compras
* Carrinho
* Pedidos
* Mapa interativo
* Comunidade
* Fluxo de economia
* Fluxo de compra/entrega

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Rode no Expo Web:

```bash
npx expo start --clear --web
```

Rode no Android via Expo:

```bash
npx expo start --clear
```

Depois escaneie o QR Code usando o app Expo Go no Android.

## Fluxo inicial do app

Ao abrir o app, a sequência principal é:

```text
Loading inicial
→ Login
→ Continuar com o Google
→ Escolha da conta Dara Vitória
→ Cadastro
→ Verificação de código
→ Localização
→ Ajuste de localização
→ Bem-vindo ao AIDAN
→ Home principal
```

Também é possível iniciar o fluxo clicando em **Cadastre-se** na tela inicial.

## Loading inicial

O app possui uma tela de loading antes do login.

Essa tela exibe uma animação do logo do Aidan, simulando a formação da marca antes de liberar o acesso para a tela inicial.

Após a animação, o app navega automaticamente para a tela de login.

## Tela de login

A tela inicial possui:

* Logo do Aidan
* Botão “Continuar com o Google”
* Campo de email
* Campo de senha
* Link “Esqueceu sua senha?”
* Botão “Entrar”
* Link “Ainda não possui uma conta? Cadastre-se”

O botão de Google abre uma tela mockada de seleção de conta.

## Login com Google

O fluxo de Google é apenas visual e mockado.

A conta usada na demonstração é:

```text
Dara Vitória
dara98dasilva@gmail.com
```

Ao selecionar a conta, o usuário segue para o fluxo de cadastro/verificação/localização.

## Cadastro

A tela de cadastro permite preencher:

* Nome completo
* Nome de usuário
* Celular ou email
* Senha
* Confirmação de senha

Os campos são editáveis apenas para demonstração visual. Nenhum dado é enviado para backend.

## Verificação de código

A tela de verificação possui 5 campos editáveis para o código.

Ela já vem com um código padrão preenchido, mas o usuário pode alterar os dígitos durante a demonstração.

## Localização

A tela de localização permite digitar no campo de endereço.

Mesmo que o usuário digite outro valor, o resultado mockado continua apontando para:

```text
R. Lauro Linhares – Trindade, Florianópolis – SC
```

O fluxo também possui uma tela visual simulando o mapa e a confirmação da localização.

## Tela Bem-vindo ao AIDAN

A tela de boas-vindas apresenta:

* Fundo em degradê/tom verde-azulado
* Texto “BEM-VINDO AO AIDAN”
* Frase “Economizar com inteligência começa agora”
* Ilustração animada de carrinho de compras
* Indicadores visuais de páginas

A animação do carrinho faz a imagem entrar suavemente na tela e parar no centro.

A imagem do carrinho foi adicionada como asset local, sem fundo, para combinar com o estilo visual da tela.

## Home principal

A Home simula a tela inicial do usuário no app.

Ela possui:

* Botão hamburguer
* Logo do Aidan
* Pergunta “O que vamos comprar hoje?”
* Campo de pesquisa
* Botões de categoria
* Botão de escanear cupons
* Navegação inferior

As pesquisas são funcionais de forma mockada: conforme o usuário digita, os itens/categorias são filtrados visualmente.

## Menu lateral

O menu lateral é aberto pelo botão hamburguer.

Ele possui animação suave de entrada e saída, com fundo escurecido.

Opções disponíveis:

* Perfil
* Ganhe comprando ou entregando
* Mapa interativo
* Comunidade
* Configurações
* Sair

O menu pode ser fechado tocando fora da área do menu.

## Perfil

A tela de perfil possui dados mockados da usuária Dara.

Ela permite edição visual de campos como:

* Nome
* Telefone
* Data de nascimento
* Gênero
* Email
* Senha
* Conta para recuperação

Também existe o fluxo para endereço principal.

## Configurações

A tela de configurações possui opções visuais para:

* Notificações
* Privacidade
* Central de ajuda
* Termos de uso
* Política de privacidade
* Sobre o app
* Excluir conta

Os botões com função de sair ou fechar tela usam navegação mockada.

## Lista de compras

A tela de lista possui:

* Campo de pesquisa funcional
* Lista mockada de produtos
* Quantidade de cada item
* Checkboxes nos itens

O usuário pode marcar e desmarcar os itens da lista.

Itens mockados:

* Carne moída
* Alface
* Banana
* Ervilha
* Leite
* Sabonete
* Papel higiênico

## Escolha de perfil de economia

O app possui uma tela para escolher o tipo de economia:

* Economize tempo
* Economize dinheiro

Essa escolha leva para fluxos de carrinho diferentes.

## Carrinho

Existem duas telas de carrinho:

* Carrinho por tempo
* Carrinho por dinheiro

As telas exibem tabelas comparativas de produtos e preços.

Também há a opção:

```text
Quero solicitar entrega via AIDAN
```

Essa opção pode ser marcada e desmarcada pelo usuário.

## Pedidos

A tela de pedidos exibe histórico mockado de compras concluídas e histórico de economia.

Inclui gráfico visual de economia por mês.

## Mapa interativo

O mapa é uma simulação visual.

Ele possui:

* Campo de pesquisa funcional
* Pins de mercados
* Área de raio
* Localização atual
* Tooltip com item encontrado
* Tela de resultados de busca

Conforme o usuário digita no campo de busca, os resultados mockados são filtrados.

## Comunidade

A área de comunidade possui duas telas principais:

* Lista de opiniões da comunidade
* Compartilhar opinião

A busca filtra os dados mockados por:

* Nome
* Marca
* Produto
* Preço

A tela de compartilhar opinião permite digitar:

* Marca
* Nome do produto
* Opinião

Também possui nota visual e botão para compartilhar.

## Ganhe comprando ou entregando

Esse fluxo apresenta opções para a usuária ganhar dinheiro usando o Aidan:

* Comprar para outros
* Entregar pedidos
* Ambos

Também existe uma tela de formulário para completar o perfil e uma tela de dashboard com dados mockados como:

* Total ganho
* Pedidos concluídos
* Avaliação
* Atividades recentes

## Interações mockadas

O projeto possui várias interações visuais sem backend:

* Campos editáveis
* Checkboxes marcáveis
* Pesquisas com filtro local
* Menu lateral animado
* Botões de navegação
* Fechamento de telas
* Fluxos entre páginas
* Dados mockados da Dara
* Animação inicial do logo
* Animação do carrinho na tela de boas-vindas

## Estrutura geral

```text
app/
  index.tsx
  login.tsx
  google-account.tsx
  register.tsx
  verify-code.tsx
  location.tsx
  location-map.tsx
  welcome.tsx
  home.tsx
  menu.tsx
  profile.tsx
  profile-address.tsx
  earn.tsx
  earn-dashboard.tsx
  buy-for-others.tsx
  settings.tsx
  shopping-list.tsx
  economy-choice.tsx
  cart-time.tsx
  cart-money.tsx
  orders.tsx
  map.tsx
  map-search.tsx
  map-result.tsx
  community.tsx
  community-share.tsx
  delivery-success.tsx
  list-success.tsx
  saving-splash.tsx

assets/
  aidan-logo.png
  dara-profile.png
  google-g.png
  shop-cart.png
```

## Geração de APK

O projeto está preparado para build Android com EAS.

Com o EAS configurado e logado:

```bash
npm run build:apk
```

O objetivo desse APK é apenas demonstração visual, sem backend.

## Observações importantes

* Este projeto é uma demo visual.
* Não existe autenticação real.
* Não existe conexão com API.
* Não existe banco de dados.
* Os dados são mockados localmente.
* A conta principal da demonstração é sempre Dara Vitória.
* O foco atual é validar experiência visual, navegação e responsividade.
* A barra de navegação do Android não faz parte das telas do app e deve ser controlada pelo próprio sistema.