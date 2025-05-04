import { AppBar, Stack, Toolbar, Typography, Button ,Box} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { logoutReq, refreshRequest } from '../../redux/auth/authSlice';
import { useEffect } from 'react';

function Navbar() {
    const { user } = useSelector((state: RootState) => state.auth.data);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutReq());
    };

    useEffect(()=>{
           dispatch(refreshRequest());
    },[])

    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between', color: 'white' }}>
                <Typography>Home</Typography>
                <Typography>Posts</Typography>
                <Stack flexDirection={'row'} gap={4} ml={12}>
                    <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={2}>
                        {user.profile &&  <Box component={"img"} src={user.profile} width={50} height={50} borderRadius={"50%"} />}
                       
                        <Typography>{user.username}</Typography>
                    </Stack>
                  
                    {!user.username && (
                        <Link to={'/login'}>
                            <Typography color="white">Login</Typography>
                        </Link>
                    )}
                    {user.username && (
                        <Button size="small" onClick={handleLogout}>
                            <Typography color="white">Logout</Typography>
                        </Button>
                    )}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
