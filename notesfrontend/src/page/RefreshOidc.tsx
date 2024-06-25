import React from 'react';
import { useEffect, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { signinRefresh } from '../auth/user-service';

const SigninOidc: FC<{}> = () => {
    const history = useHistory();
    useEffect(() => {
        async function signinAsync() {
            await signinRefresh();
            history.push('/');
        }
        signinAsync();
    }, [history]);
    return <div>Redirecting...</div>;
};

export default SigninOidc;

