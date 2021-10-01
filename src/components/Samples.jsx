import { Link } from "react-router-dom";
export const Samples = () => {
  return (
    <>
      <div>
        <h1>Samples</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/samples/detail1">SampleDetail1</Link>
          </li>
          <li>
            <Link to="/samples/detail2">SampleDetail2</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
