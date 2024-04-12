import AuthHeader from "./header";
import { Outlet } from "@remix-run/react";

function route() {
  return (
    <div>
      <AuthHeader />
      <Outlet />
    </div>
  );
}

export default route;
