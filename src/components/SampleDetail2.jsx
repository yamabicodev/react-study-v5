import { useHistory } from "react-router-dom";

export const SampleDetail2 = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>SampleDetail2</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
