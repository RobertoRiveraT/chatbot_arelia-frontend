# 📘 study/notes_3.md — Estilos no aplicados en Angular: `login.component.css`

---

## 🧪 Problema

Aunque los estilos en `login.component.css` estaban bien escritos, **no se aplicaban al componente**. Por ejemplo:

- `.full-width` no afectaba a los elementos
- `:host` no centraba el `mat-card`
- No se aplicaba ningún cambio visual

---

## 🔍 Causa

En el archivo `login.component.ts`, faltaba la línea:

```ts
styleUrls: ['./login.component.css']
```

Esto es obligatorio para que Angular cargue los estilos locales del componente.

---

## ✅ Solución aplicada

Se corrigió la definición del decorador `@Component` en `login.component.ts`, quedando así:

```ts
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // ✅ se añadió esta línea
})
```

---

## 🧪 Validación visual

- Se añadió un color de fondo temporal con `:host` para verificar que el CSS se aplicaba
- Una vez confirmado, se restauró el diseño final con `flex` y `mat-card` centrado

---

## ✅ Resultado

Los estilos definidos en `login.component.css` se aplicaron correctamente:
- El formulario ahora está centrado vertical y horizontalmente
- Los campos y botones se muestran en columnas
- `.full-width` se respeta

---

## 📌 Nota importante

Angular **no carga automáticamente `*.component.css`** si no se lo indicas explícitamente en el decorador `@Component`.

Siempre asegúrate de incluir:

```ts
styleUrls: ['./nombre-del-archivo.component.css']
```

Cuando creas o editas componentes manualmente.

---