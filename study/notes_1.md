# 📘 study/notes_1.md — Error con `@types/node` y solución en proyecto Angular

---

## 🧪 Problema

Al intentar correr `ng serve` por primera vez en el proyecto `RRT Portfolio Webpage`, Angular compilaba casi todo, pero arrojaba errores tipo:

```
TS2502: 'ReadableByteStreamController' is referenced directamente o indirectamente en su propia anotación de tipo.
TS2502: 'ReadableStreamBYOBReader' is referenced directamente o indirectamente en su propia anotación de tipo.
TS2502: 'ReadableStreamBYOBRequest' is referenced directamente o indirectamente en su propia anotación de tipo.
```

---

## 🔍 Causa

Angular estaba usando una versión reciente de `@types/node` (como `20.x`) incompatible con su versión actual de TypeScript. Esto provocaba errores circulares de tipos en `stream/web.d.ts`.

---

## ✅ Solución aplicada

### 1. Eliminar node_modules y lockfile:

```bash
rd /s /q node_modules
del package-lock.json
```

---

### 2. Instalar una versión estable de `@types/node`:

```bash
npm install --save-dev @types/node@18.15.11
```

> Esta versión evita los errores TS2502 y es completamente compatible con Angular 17 y TypeScript 5.x.

---

### 3. Editar `tsconfig.app.json`:

Se eliminó cualquier línea que dijera:

```json
"types": ["node"]
```

> Esto previene la inyección de tipos de Node en el contexto de Angular donde no se necesita.

---

### 4. Reinstalar dependencias y servir:

```bash
npm install
ng serve
```

---

## ✅ Resultado

Angular compiló exitosamente sin errores y abrió `http://localhost:4200/` correctamente.  
El entorno quedó listo para comenzar el desarrollo del frontend de `chatbot_arelia`.