import {
  Box,
  Button,
  CardContent,
  Checkbox,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import React from "react";
import "./style.css";

const InputLogin = styled(TextField)({
  "*.Mui-focused": {
    borderColor: "transparent",
    outline: "none",
  },
});

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <div
        className="bg"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "300px", height: "400px", background: "" }}>
          <CardContent sx={{ width: "100%", height: "100%" }}>
            <Typography
              sx={{
                marginTop: "10px",
                textAlign: "center",
                fontSize: "26px",
              }}
            >
              Welcome back
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "auto",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <InputLogin
                // id="standard-multiline-flexible"
                label="Username"
                maxRows={4}
                variant="standard"
                sx={{
                  width: "100%",
                }}
              />
              <FormControl sx={{ width: "100%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button variant="contained" size="small" sx={{ width: "100%" }}>
                Sign in
              </Button>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: "0",
                marginTop: "20px",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox size="small" color="default" sx={{ padding: 0 }} />
                <Typography sx={{ fontSize: "12px" }}>Remember me</Typography>
              </Stack>

              <Button
                size="small"
                sx={{
                  fontSize: "12px",
                  textTransform: "lowercase",
                  color: "black",
                  m: 0,
                  p: 0,
                }}
              >
                Forgot password?
              </Button>
            </Stack>
          </CardContent>
        </Box>
      </div>
    </>
  );
}

export default Login;
