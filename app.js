import { tpl, render, useState, registerComponent } from "./core.js";



function Counter() {
  const [count, setCount] = useState(0);
  return tpl`
    <div style=${{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #0f3c3c, #0b1e2e)",
      fontFamily: "sans-serif",
      color: "#fff"
    }}>
      <!-- Логотип -->
      <div style=${{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        background: "radial-gradient(circle at center, #00bfa5, #00796b)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px",
        boxShadow: "0 0 12px rgba(0,255,255,0.3)"
      }}>
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path d="M30,50 C30,30 50,30 50,50 C50,70 30,70 30,50 Z M70,50 C70,30 50,30 50,50 C50,70 70,70 70,50 Z"
                fill="black" />
        </svg>
      </div>

      <!-- Заголовок -->
      <h1 style=${{
        fontSize: "32px",
        marginBottom: "12px",
        textShadow: "0 2px 6px rgba(0,0,0,0.6)"
      }}>CoreJS</h1>

      <!-- Подзаголовок -->
      <div style=${{
        fontSize: "20px",
        marginBottom: "24px",
        opacity: 0.8
      }}>JavaScript Framework</div>

      <!-- Счётчик -->
      <div style=${{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        background: "#1c2b3a",
        padding: "12px 24px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
      }}>
        <span style=${{
          fontSize: "36px",
          color: "#00e5ff",
          fontWeight: "bold"
        }}>${count}</span>
        <button onClick=${() => setCount(c => c + 1)} style=${{
          background: "linear-gradient(135deg, #00bfa5, #009688)",
          color: "#fff",
          border: "none",
          padding: "10px 18px",
          fontSize: "20px",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
        }}>+1</button>
      </div>
    </div>
  `;
}




function App() {
  return tpl`
  <div>
  ${Counter()}
  </div>
  `;
}

registerComponent("App", App);
registerComponent("Counter", Counter);

render(App, "#app");