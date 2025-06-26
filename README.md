# Frontend - Webpage Portfolio (Angular)

This project is the **frontend** for my personal portfolio website, developed with **Angular** and deployed via **Vercel**. It showcases my fullstack capabilities through a responsive and modular design, secure authentication flows, and integration with backend APIs powered by **FastAPI**.

---

## 📦 Project Structure

```
frontend-webpage/
├── src/
│   ├── app/               # Angular components and views
│   ├── assets/            # Static images and resources
│   └── environments/      # Environment-specific configs
├── scripts/               # Utility scripts (env var handling, etc.)
├── angular.json           # Angular CLI configuration
├── package.json           # Dependencies and commands
├── README.md              # This file
```

---

## 🌐 Deployment Links

| Environment | URL                                                                 |
|-------------|---------------------------------------------------------------------|
| Production  | [Production webpage](https://chatbot-arelia-frontend.vercel.app)   |
| QA-Staging  | [QA Webpage](https://frontend-webpage-qa.vercel.app)              |

---

## 🧠 What This Project Demonstrates

- 💬 **Chatbot Integration**: The app includes a complete chatbot interface where users can log in and chat with an AI assistant. The chat is stored persistently in **PostgreSQL**, and the backend constructs prompts with user history and a predefined persona before sending requests to **OpenAI API**.

- 🔐 **Authentication Flow**: Features **JWT-based** login, registration, and route guards. After successful registration or login, users are redirected to `/chatbot/chat`. If not authenticated, they are rerouted to `/chatbot/login`.

- 📖 **Interactive Tutorials**: The site features an educational step-by-step tutorial system (Steps 1–4), visually styled and embedded in the layout to explain the frontend/backend behavior.

- 🛠️ **Account Management**: Authenticated users can access `/account` to update their email and password or delete their account. These are sent as PUT/DELETE requests and are protected via JWT.

- 📋 **MyWork Section**: A visually styled section with dynamic filtering (Projects vs Certifications), showcasing a scalable card system with thumbnails, metadata, bullets, collapsible content, and links.

---

## ⚙️ Environment Configuration

| Variable   | Description                              |
|------------|------------------------------------------|
| BASE_URL   | Dynamically injected backend API URL     |

### Generated File

`src/environments/env.js` → created via `scripts/write-env.js`.

### Example `.env`

```env
# .env (production)
BASE_URL=https://production.backend.url

# .env.staging (QA)
BASE_URL=https://qa.backend.url
```

> These files are ignored by Git and must be manually configured.

---

## 🚀 Development & Builds

### 🛠️ Local Development

```bash
npm install
ts-node scripts/write-env.ts && ng serve
```

### 🧪 QA-Staging Build

```bash
ts-node scripts/write-env.ts && ng build --configuration=qa-staging
```

### 🏭 Production Build

```bash
ts-node scripts/write-env.ts && ng build --configuration=production
```

---

## ✅ Automatic Deployment

- **QA-Staging** → triggered on `qa-staging` branch push.
- **Production** → triggered on `main` branch push.

Environment variables are set via Vercel settings.

---

## 📂 Branch Structure (GitHub)

| Branch         | Purpose                      |
|----------------|------------------------------|
| `dev`          | Active development            |
| `qa-staging`   | QA testing deployments        |
| `main`         | Production releases           |

---

## 🧾 Related Projects

- 🔙 [Backend Repository](https://github.com/RobertoRiveraT/backend-rrt-portfolio-webpage)

---

## 🧪 Testing

No unit tests implemented yet, but **Jasmine** and **Karma** setup is planned.

---

## 👨‍💻 Author

Built by [Roberto Rivera](https://github.com/RobertoRiveraT) as part of the fullstack chatbot-portfolio showcase.