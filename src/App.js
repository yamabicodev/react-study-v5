import "./styles.css";
// react-router-domをnpm/yarmでインストールする。例:"react-router-dom": "5.3.0",
// BrowserRouter: 囲むことでルーティング対象となる。
// Link: a tagライクにリンク生成と遷移行ってくれる。
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/samples">Samples</Link>
          <br />
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <Router />
    </BrowserRouter>
  );
}
