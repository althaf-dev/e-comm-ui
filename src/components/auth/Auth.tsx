import {
  Button,
  FormControl,
  TextField,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, signupRequest } from "../../redux/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useEffect } from "react";

interface AuthProps {
  mode: string;
}

function Auth({ mode }: AuthProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data,error } = useSelector((state:RootState)=>state.auth);
  const { accessToken } =  data;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      profiler:formData.get('profile')
    };
     mode === 'login' && dispatch(loginRequest(data));
     mode !== 'login' && dispatch(signupRequest(formData));
  };

 useEffect(()=>{
    if(accessToken)  navigate("/");
 },[accessToken])

  return (
    <Box
      sx={{
        border: "1px solid grey",
        padding: "24px",
        borderRadius: "8px",
        width: "40vw",
        background:"rgb(0,0,0,0.2)"
      }}
    >
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormControl fullWidth>
          <Typography mb={4} variant="h5">
            {mode === "login" ? "Login" : "Signup"}
          </Typography>
          <TextField
            name="username"
            size="small"
            sx={{
              mb: 4,
              "& .MuiInputLabel-root": { color: "white",fontSize:16 }, // Default label color
              "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // Label color on focus
            }}
            label="username"
          />
          <TextField
            name="password"
            type="password"
            size="small"
            sx={{
              mb: 4,
              "& .MuiInputLabel-root": { color: "white",fontSize:16 }, // Default label color
              "& .MuiInputLabel-root.Mui-focused": { color: "white" },
            }}
            label="password"

          />
          {mode !== 'login' && 
          <>
            <TextField name="profile" color="primary" type="file" sx={{border:"1px solid grey",color:"blue"}}/>
          
          </>}
          <Button type="submit">{mode === "login" ? "Login" : "Signup"}</Button>
          <Typography color="error">{error}</Typography>
        </FormControl>
      </form>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        {mode === "login" && (
          <>
            <Typography>Not created account?</Typography>
            <Link to={"/signup"}>signup</Link>
          </>
        )}

        {mode === "signup" && (
          <>
            <Typography>Already have an account</Typography>
            <Link to={"/login"}>login</Link>
          </>
        )}
      </Stack>
    </Box>
  );
}

export default Auth;
