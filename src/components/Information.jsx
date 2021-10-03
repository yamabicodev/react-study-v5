import { Link } from "react-router-dom";

export const Information = () => {
  return (
    <div>
      <h1>Information</h1>
      <ul>
        <li>
          <Link to="/information/1">info detail1(url param)</Link>
        </li>
        <li>
          <Link to="/information/2?name=test">info detail2(query param)</Link>
        </li>
      </ul>
    </div>
  );
};
