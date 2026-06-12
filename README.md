# aidan-showcase

Showcase mobile do projeto Aidan feito com Expo + React Native.

O objetivo desta versão é demonstrar telas navegáveis em um Android real, sem backend, usando dados mockados.

## Stack

- Expo
- React Native
- Expo Router
- TypeScript
- EAS Build para APK

## Requisitos

- Node.js LTS
- npm
- Expo Go instalado no Android para teste rápido
- Conta Expo para gerar APK com EAS Build

## Rodar localmente

```bash
cd aidan-showcase
npm install
npx expo start
```

No Android, abra o Expo Go e escaneie o QR Code.

## Gerar APK preview

```bash
npm install -g eas-cli
eas login
eas build:configure
npm run build:apk
```

Quando o build terminar, o Expo vai mostrar um link para baixar o APK.

## Estrutura principal

```text
app/
  _layout.tsx
  index.tsx
  onboarding.tsx
  summary.tsx
  (tabs)/
    _layout.tsx
    home.tsx
    assistant.tsx
    showcase.tsx
    profile.tsx
  task/
    [id].tsx
src/
  components/
  data/
  hooks/
  theme/
```

## Onde alterar as telas

- Fluxo inicial: `app/onboarding.tsx`
- Home: `app/(tabs)/home.tsx`
- Conversa com Aidan: `app/(tabs)/assistant.tsx`
- Mapa de telas: `app/(tabs)/showcase.tsx`
- Perfil: `app/(tabs)/profile.tsx`
- Textos e dados mockados: `src/data/mockScreens.ts`
- Cores globais: `src/theme/colors.ts`

## Próximo passo

Enviar os prints das telas. A partir deles, os placeholders serão substituídos pelos layouts finais.
