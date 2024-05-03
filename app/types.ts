export type Bank = {
  id: number;
  title: string;
};

export type Account = {
  id: number;
  title: string;
  account_number: string;
  bank_id: number;
  user_id: number;
};

export type ResourceCategory = {
  id: number;
  title: string;
  is_input: boolean;
};

export type Resource = {
  id: number;
  title: string;
  category_id: number;
};

export type Transaction = {
  id: number | null;
  amount: number;
  title: string;
  description: string;
  resource_id: number;
  account_id: number;
  account_detail: any;
  resource_detail: any;
};
