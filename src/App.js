import "./styles.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// react-router-domをnpm/yarmでインストールする。例:"react-router-dom": "5.3.0",
// BrowserRouter: 囲むことでルーティング対象となる。
// Link: a tagライクにリンク生成と遷移行ってくれる。
// Switch：コンポネントレンダリングの出し分けを行う。
// Route どのパスの場合にどのコンポネントを表示するか判断するためのもの
// ROuteでexactを指定するとパスの完全一致の場合、対象と判断されるようになる。
// Homeのパスが「/」なのでexactが付いていないと、どのリンクをクリックしてもHome画面になってしまうので注意。
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
