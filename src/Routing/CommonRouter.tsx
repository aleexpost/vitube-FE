import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CommonLayout from "Layouts/CommonLayout";
import Home from "screens/Home";
import Profile from "screens/Profile";
import Videos from "screens/Videos";

import { ROUTES } from "../constants/routes";

function CommonRouter() {
  return (
    <Router>
      <CommonLayout>
        <Routes>
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.VIDEOS} element={<Videos />} />
        </Routes>
      </CommonLayout>
    </Router>
  );
}

export default CommonRouter;
