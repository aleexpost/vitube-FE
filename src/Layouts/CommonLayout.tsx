import { Link } from "react-router-dom";

import { ROUTES } from "constants/routes";

type PropsType = { children: React.ReactNode };

export default function CommonLayout(props: PropsType) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.PROFILE}>Profile</Link>
          </li>
          <li>
            <Link to={ROUTES.VIDEOS}>Videos</Link>
          </li>
        </ul>
      </nav>
      <main>{props.children}</main>
    </>
  );
}
