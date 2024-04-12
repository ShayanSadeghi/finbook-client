import { Outlet } from "@remix-run/react";

import { Box } from "@mui/material";

import AuthHeader from "./header";

function route() {
  return (
    <div>
      <AuthHeader />
      <Outlet />
    </div>
  );
}

export default route;
