import { useLocation } from "react-router-dom";

export const SampleDetail1 = () => {
  const location = useLocation();
  console.log(location);
  const { state } = location;
  console.log(state);
  return (
    <div>
      <h1>SampleDetail1</h1>
    </div>
  );
};
