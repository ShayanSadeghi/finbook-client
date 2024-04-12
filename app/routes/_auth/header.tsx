import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

function AuthHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton>
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div">
            Finbook
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AuthHeader;
