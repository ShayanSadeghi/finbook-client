import { LoaderFunctionArgs, redirect, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAccounts } from "~/api/accounts";
import { getBanks } from "~/api/bank";
import { getCategories, getResources } from "~/api/resources";
import NewTransactionForm from "~/components/NewTransactionForm";
import { getSession } from "~/sessions";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token") || "";
  if (!session.has("token")) {
    return redirect("/login");
  }

  const banks = await getBanks();
  const accounts = await getAccounts(token);
  const categories = await getCategories();
  const resources = await getResources();
  return json({ banks, accounts, categories, resources });
}

function dashboard() {
  const { banks, accounts, categories, resources } =
    useLoaderData<typeof loader>();

  return (
    <div>
      <NewTransactionForm
        banks={banks}
        accounts={accounts}
        resourceCategories={categories}
        resources={resources}
      />
    </div>
  );
}

export default dashboard;
