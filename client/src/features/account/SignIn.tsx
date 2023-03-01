import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { signInRequest, signInRequestSuccess } from "../../redux-store/actions/authActions"
import { useDispatch } from 'react-redux';
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import agent from '../../utils/api';

export default function SignIn() {

    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    // const [values, setValues] = React.useState({
    //     username: '',
    //     password: ''
    // });

    async function submitForm(data: FieldValues) {
        let res = await agent.auth.signIn(data);

        if (res) {
            dispatch(signInRequestSuccess(res))
        }

    }


    return (

        <Container component={Paper} maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    autoComplete="email"
                    autoFocus
                    {
                    ...register('username')
                    }

                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    {
                    ...register('password')
                    }


                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    );
}