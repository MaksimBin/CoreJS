import { tpl, render, useState, registerComponent } from "./core.js";

//import {Houm} from './houm.js';
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "styles.css";
document.head.appendChild(link);










function LinkExplicit() {
  const go = (e) => {
    // если хочешь уважить кастомную логику — не делай preventDefault здесь
    const href = "https://github.com/MaksimBin/CoreJS";
    const target = "_blank";
    if (target === "_blank") window.open(href, "_blank", "noopener,noreferrer");
    else window.location.assign(href);
  };
  
  return tpl`
    <a href="https://example.com" target="_blank" rel="noopener noreferrer"
       onClick=${go}
       style=${{ color: "#00e5ff", textDecoration: "underline", cursor: "pointer" }}>
      Docs Core.dev
    </a>
  `;
}



function Counter() {
  const [count, setCount] = useState(0);
  
  const getCountNext = () => {
    setCount(count + 1)
  }
  
  const getCountBack = () => {
    setCount(count - 1)
  }
  
  return tpl`
    <div style=${{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      height: "100vh",
      background: "linear-gradient(135deg, #009688, #0b1e2e)",
      fontFamily: "sans-serif",
      color: "#fff",
      padding:"0px 50px",
    }}>
      <!-- Логотип -->
      <div style=${{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        background: "radial-gradient(circle at center, #00bfa5, #00796b)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "16px",
        boxShadow: "0 0 12px rgba(0,255,255,0.3)"
      }}>
        <div class="logo"></div>
      </div>

      <!-- Заголовок -->
      <h1 class="title" style=${{
        fontSize: "42px",
        marginBottom: "12px",
        textShadow: "0 2px 6px rgba(0,0,0,0.6)"
      }}>Core</h1>

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
       <button onClick=${() => getCountBack()} style=${{
          background: "linear-gradient(135deg, #00bfa5, #009688)",
          color: "#fff",
          border: "none",
          padding: "10px 18px",
          fontSize: "20px",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
        }}>-1</button>
        <span style=${{
          fontSize: "36px",
          color: "#00e5ff",
          fontWeight: "bold"
        }}>${count}</span>
        <button onClick=${() => getCountNext()} style=${{
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
      
      <div class="a" style=${{marginTop:"30px"}}>
     ${LinkExplicit()}
      </div>
      <div class="pre"></div>
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
registerComponent("LinkExplicit", LinkExplicit);
registerComponent("Counter", Counter);

//registerComponent("Houm", Houm);

render(App, "#app");