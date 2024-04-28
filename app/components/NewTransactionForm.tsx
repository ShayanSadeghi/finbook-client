import { Form } from "@remix-run/react";
import {
  Grid,
  Select,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";

import { Bank, Account, ResourceCategory, Resource } from "~/types";

function NewTransactionForm({
  banks,
  accounts,
  resourceCategories,
  resources,
}: Props) {
  return (
    <Form method="post" id="transaction-form">
      <Grid
        container
        justifyContent="start"
        justifyItems="center"
        marginTop="10vh"
        gap={10}
        marginLeft={5}
      >
        <Grid item xs={8} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="bank-select-label">Bank</InputLabel>
            <Select labelId="bank-select-label" name="bank" label="Bank">
              {banks.map((bank) => (
                <MenuItem key={bank.id} value={bank.id}>
                  {bank.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="account-select-label">Account</InputLabel>
            <Select
              labelId="account-select-label"
              name="account"
              label="Account"
            >
              {accounts.map((account) => (
                <MenuItem key={account.id} value={account.id}>
                  {account.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={8} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="resourceCat-select-label">Category</InputLabel>
            <Select
              labelId="resourceCat-select-label"
              name="resource_category"
              label="Category"
            >
              {resourceCategories?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={8} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="resource-select-label">Resource</InputLabel>
            <Select
              labelId="resource-select-label"
              name="resource"
              label="Resource"
            >
              {resources?.map((resource) => (
                <MenuItem key={resource.id} value={resource.id}>
                  {resource.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={8} lg={3}>
          <TextField type="number" name="amount" label="Amount" fullWidth />
        </Grid>

        <Grid item xs={8} lg={3}>
          <TextField name="title" label="Title" fullWidth />
        </Grid>

        <Grid item xs={10}>
          <TextField
            name="description"
            label="Description"
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" size="large">
            submit
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}

type Props = {
  banks: Bank[];
  accounts: Account[];
  resourceCategories: ResourceCategory[];
  resources: Resource[];
};

export default NewTransactionForm;
