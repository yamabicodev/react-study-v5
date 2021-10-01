import { SampleDetail1 } from "../components/SampleDetail1";
import { SampleDetail2 } from "../components/SampleDetail2";
import { Samples } from "../components/Samples";
export const SampleRoutes = [
  {
    path: "/",
    exact: true,
    childlen: <Samples />
  },
  {
    path: "/detail1",
    exact: false,
    childlen: <SampleDetail1 />
  },
  {
    path: "/detail2",
    exact: false,
    childlen: <SampleDetail2 />
  }
];
