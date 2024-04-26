import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { useActionData } from "@remix-run/react";

import LoginForm from "~/components/LoginForm";

import { loginApi } from "~/api/auth";
import { getSession, commitSession } from "../sessions";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("token")) {
    return redirect("/dashboard");
  }

  const data = { error: session.get("error") };

  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  const res = await loginApi(userData);
  if (!res.token) {
    session.flash("error", "invalid email/password");
    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  session.set("token", res.token);

  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

function login() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}

export default login;
