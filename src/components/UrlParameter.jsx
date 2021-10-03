import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameter　Request Test</h1>
      <p>パラメータの値は{id}です。</p>
    </div>
  );
};
