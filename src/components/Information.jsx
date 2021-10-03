import { Link } from "react-router-dom";
import { UrlParameter } from "./UrlParameter";

export const Information = () => {
  return (
    <div>
      <h1>Information</h1>
      <ul>
        <li>
          <Link to="/information/1">info detail1</Link>
        </li>
        <li>
          <Link to="/information/2">info detail2</Link>
        </li>
        <li>
          <Link to="/information/3">info detail3</Link>
        </li>
      </ul>
    </div>
  );
};
