`markdown

<span style="color:limegreen">CORE</span>

`txt
 ██████╗ ██████╗ ██████╗ ███████╗
██╔═══██╗██╔══██╗██╔══██╗██╔════╝
██║   ██║██████╔╝██████╔╝█████╗  
██║   ██║██╔═══╝ ██╔═══╝ ██╔══╝  
╚██████╔╝██║     ██║     ███████╗
 ╚═════╝ ╚═╝     ╚═╝     ╚══════╝
`

> Минималистичный UI‑движок, вдохновлённый React, но работающий без сборки и Babel.  
> Декларативный синтаксис, виртуальный DOM и свобода экспериментов.

---

✨ Возможности

- 🟩 Виртуальный DOM и diff‑алгоритм  
- 🟩 Компоненты и реестр компонентов  
- 🟩 Хук useState  
- 🟩 Шаблонные строки tpl для декларативного описания интерфейсов  
- 🟩 Поддержка фрагментов, списков, условного рендера и спред‑пропсов  
- 🟩 События (onClick, onInput и др.)

---

📂 Структура проекта

`txt
Core/
 ├── index.html
 ├── core.js
 └── app.js
`

---

🚀 Быстрый старт

index.html
`html
<title>Core Test</title>
<script type="module" src="./app.js"></script>
`

app.js
`js
import { tpl, render, useState, registerComponent } from "./core.js";

function Counter() {
  const [count, setCount] = useState(0);
  return tpl<div>
    <span>${count}</span>
    <button onClick=${() => setCount(c => c + 1)}>+1</button>
  </div>;
}

function App() {
  return tpl<div>
    <h1>Пример</h1>
    ${Counter()}
  </div>;
}

registerComponent("Counter", Counter);
registerComponent("App", App);

render(App, "#app");
`

---

🛠 Планы развития

- [ ] 🟩 Добавить useEffect  
- [ ] 🟩 Контекст и глобальное состояние  
- [ ] 🟩 Роутинг  
- [ ] 🟩 Интеграция с Babel для полноценного JSX  

---

💡 Почему Core?

- 🟩 Без сборки и лишних зависимостей  
- 🟩 Лёгкий старт — просто открой index.html  
- 🟩 Отличная площадка для экспериментов с UI‑архитектурой  
`

