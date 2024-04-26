import { Form } from "@remix-run/react";
import { Button, Grid, TextField } from "@mui/material";

function LoginForm() {
  return (
    <Form method="post" id="login-form">
      <Grid
        container
        justifyContent="center"
        justifyItems="center"
        marginTop="10vh"
      >
        <Grid item xs={11} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="email" label="Username" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField name="password" label="Password" fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" fullWidth>
                Sign-up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
}

export default LoginForm;
