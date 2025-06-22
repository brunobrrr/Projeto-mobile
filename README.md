
# 📱 MobileApp (React Native + Expo Router)

Aplicativo mobile desenvolvido com **React Native**, **Expo**, e **TypeScript**, utilizando navegação moderna via **Expo Router**.

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- Expo CLI (local ou global)
- Expo Go (app no celular Android/iOS)

### 1. Instalar dependências

```bash
npm install
````

### 2. Iniciar o servidor de desenvolvimento

```bash
npx expo start
```

Use o QR Code no terminal com o app **Expo Go**.

---

## 🧪 Testes

```bash
npm test
```

---

## 🛠️ Scripts disponíveis

| Comando           | Ação                                   |
| ----------------- | -------------------------------------- |
| `npm start`       | Inicia projeto com Expo                |
| `npm run android` | Roda no emulador Android               |
| `npm run ios`     | Roda no emulador iOS                   |
| `npm run web`     | Executa versão web do app              |
| `npm run test`    | Roda os testes                         |
| `npm run lint`    | Lint do código (verificação de estilo) |

---

## 🧰 Principais Tecnologias

* React Native `^0.79.2`
* Expo `^53.0.0`
* Expo Router `~5.0.7`
* React Navigation
* TypeScript
* Jest

---

## 📂 Estrutura básica

```
Projeto-mobile/
├── app/                # Rotas e telas via Expo Router
├── assets/             # Imagens, fontes, etc.
├── components/         # Componentes reutilizáveis
├── package.json
├── app.json
└── tsconfig.json
```