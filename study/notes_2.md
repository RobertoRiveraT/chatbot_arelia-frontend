# 📘 study/notes_2.md — Conexión del frontend Angular con el backend en Railway

---

## ✅ Objetivo

Configurar el frontend Angular (`chatbot_arelia-frontend`) para comunicarse correctamente con el backend FastAPI desplegado en Railway, utilizando la URL pública generada por Railway.

---

## 🌐 Dominio del backend en producción

- Se generó automáticamente en Railway:
  ```
  https://chatbotarelia-backend-production.up.railway.app
  ```

- Esta URL se usa como `BASE_URL` en el frontend Angular para llamadas HTTP como:
  - `/register`
  - `/login`
  - `/chat`
  - `/messages`

---

## 🧱 Configuración de entornos en Angular

Se establecieron archivos de entorno para separar la configuración de desarrollo y producción:

### `src/environments/environment.ts`

```ts
export const environment = {
  production: false,
  baseUrl: 'http://localhost:8000'
};
```

### `src/environments/environment.prod.ts`

```ts
export const environment = {
  production: true,
  baseUrl: 'https://chatbotarelia-backend-production.up.railway.app'
};
```

Esto permite que Angular utilice automáticamente el `baseUrl` correcto según el entorno (`ng serve` vs deploy en Vercel).

---

## 🔧 Actualización en `api.service.ts`

Se reemplazó la constante fija `BASE_URL = 'http://localhost:8000'` por:

```ts
import { environment } from '../../environments/environment';
const BASE_URL = environment.baseUrl;
```

✅ Esto hace que el servicio API de Angular funcione tanto en desarrollo como en producción, sin necesidad de cambiar manualmente la URL.

---

## ✅ Resultado

- Angular quedó preparado para consumir el backend en Railway
- El código es limpio y adaptable a cualquier entorno
- Se puede usar Vercel para producción sin ajustes adicionales

---

## 📌 Observación

La URL de Railway del backend **no es la misma que la de PostgreSQL**.

- PostgreSQL tiene una URL privada para el backend (`postgresql://...`)
- El frontend **nunca se conecta directamente a PostgreSQL**, solo al backend HTTP

---