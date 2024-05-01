import {
  LoaderFunctionArgs,
  ActionFunctionArgs,
  redirect,
  json,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAccounts } from "~/api/accounts";
import { getBanks } from "~/api/bank";
import { getCategories, getResources } from "~/api/resources";
import { addTransaction, getTransactions } from "~/api/transactions";
import NewTransactionForm from "~/components/NewTransactionForm";
import TransactionsList from "~/components/TransactionsList";
import { getSession } from "~/sessions";
// TODO: Auth handling.
// TODO: Error Handling

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
  const transactions = await getTransactions(token);
  return json({ banks, accounts, categories, resources, transactions });
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token") || "";

  const formData = await request.formData();

  const trxData = Object.fromEntries(formData);
  const trxFormData = {
    amount: Number(trxData.amount),
    title: String(trxData.title),
    description: String(trxData.description),
    resource_id: Number(trxData.resource_id),
    account_id: Number(trxData.account_id),
  };
  const res = await addTransaction(token, trxFormData);

  return json({ res });
}

function dashboard() {
  const { banks, accounts, categories, resources, transactions } =
    useLoaderData<typeof loader>();

  return (
    <div>
      <NewTransactionForm
        banks={banks}
        accounts={accounts}
        resourceCategories={categories}
        resources={resources}
      />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default dashboard;
