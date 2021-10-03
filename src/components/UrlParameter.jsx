import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  console.log(search);
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameter　Request Test</h1>
      <p>パラメータの値は{id}です。</p>
      <p>クエリパラメータの値は{query.get("name")}です。</p>
    </div>
  );
};
