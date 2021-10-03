import { Home } from "../components/Home";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Switch, Route } from "react-router-dom";
import { SampleRoutes } from "./SampleRoutes";
import { InformationRoutes } from "./InformationRoutes";
import { NotFound } from "../components/NotFound";

// Switch：コンポネントレンダリングの出し分けを行う。
// Route どのパスの場合にどのコンポネントを表示するか判断するためのもの
// Routeでexactを指定するとパスの完全一致の場合、対象と判断されるようになる。
// Homeのパスが「/」なのでexactが付いていないと、どのリンクをクリックしてもHome画面になってしまうので注意。
export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      {/** renderはpropsを引数として受け取れる 
      render={(props) => (・・・)}
      propsの中のmatchオブジェクトの中のurlを取得する。
      props.match.urlではなく、引数部分で({match: { url } }でurlを取り出せる。
    */}
      <Route
        path="/samples"
        render={({ match: { url } }) => (
          <Switch>
            {SampleRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.childlen}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/information"
        render={({ match: { url } }) => (
          <Switch>
            {InformationRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.childlen}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
