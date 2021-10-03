import { Information } from "../components/Information";
import { UrlParameter } from "../components/UrlParameter";
export const InformationRoutes = [
  {
    path: "/",
    exact: true,
    childlen: <Information />
  },
  {
    path: "/:id",
    exact: false,
    childlen: <UrlParameter />
  }
];
