import { useNavigate } from 'react-router-dom';
import { useEffect, FC } from 'react';
import { signinRedirectCallback } from '../../auth/user-service';

const SigninOidc: FC<{}> = () => {
    const navigate  = useNavigate();
    useEffect(() => {
        async function signinAsync() {
            await signinRedirectCallback();
            navigate('/');
        }
        signinAsync();
    }, [navigate]);
    return <div>Redirecting...</div>;
};

export default SigninOidc;
