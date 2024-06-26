import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tab,
} from "@mui/material";

import { Transaction } from "~/types";

function TransactionsList({ transactions }: Props) {
  console.log(transactions);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Bank</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Resource</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions?.map((trx, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{trx.title}</TableCell>
              <TableCell>{trx.amount}</TableCell>
              <TableCell>{trx.account_detail.title}</TableCell>
              <TableCell>{trx.resource_detail.category_detail.title}</TableCell>
              <TableCell>{trx.resource_detail.title}</TableCell>
              <TableCell>{trx.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionsList;

export type Props = {
  transactions: Transaction[];
};
