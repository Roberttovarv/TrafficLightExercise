# Ejercicio: Semáforo con React

En este ejercicio vas a simular un semáforo en React. La idea es que cada luz (roja, amarilla y verde) pueda encenderse cuando se hace clic en ella, apagando las demás.

---

## 1. Iniciar el proyecto
1. Abre la carpeta del proyecto en tu terminal.  
2. Instala las dependencias con:
```bash
npm install
```

3. Inicia el servidor de desarrollo con:
```bash
npm run dev
```
Esto abrirá la aplicación en tu navegador (normalmente en `http://localhost:5173`).

---

##  2. Lógica del semáforo
- El componente tiene un **estado** que guarda el color activo:

```jsx
const [color, setColor] = useState("");
```

- Cada **`<div>`** representa una luz del semáforo.  
- A cada div se le debe asignar un color (`red`, `yellow`, `green`).  
- Cuando el usuario haga clic en un div, ese color debe guardarse en el estado con `setColor`.

Ejemplo:

```jsx
<div
  className="light red"
  onClick={() => setColor("red")}
/>
```

---

## 3. Estilo condicional
Para que la luz “brille”, debes añadir un condicional al `style={{}}` **solo si el estado `color` coincide con el color del div**.


De esta manera:  
- Si `color` es `"red"`, la luz roja se verá encendida.  
- Si `color` es `"yellow"`, se encenderá la amarilla.  
- Si `color` es `"green"`, se encenderá la verde.  

---

 Objetivo: Que al hacer clic en una luz, **solo esa luz quede encendida**.  
