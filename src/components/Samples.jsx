import { Link, useHistory } from "react-router-dom";
export const Samples = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();
  console.log(history);
  const onClickToDetail2 = () => history.push("/samples/detail2");

  return (
    <>
      <div>
        <h1>Samples</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to={{ pathname: "/samples/detail1", state: arr }}>
              SampleDetail1
            </Link>
          </li>
          <li>
            <Link to="/samples/detail2">SampleDetail2</Link>
          </li>
        </ul>
        <button onClick={onClickToDetail2}>To Detail1</button>
      </div>
    </>
  );
};
