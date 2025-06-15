import { useNavigate } from 'react-router-dom';
import { useEffect, FC } from 'react';
import { signinRefresh } from '../../auth/user-service';

const SigninOidc: FC<{}> = () => {
    const navigate  = useNavigate();
    useEffect(() => {
        async function signinAsync() {
            await signinRefresh();
            navigate('/');
        }
        signinAsync();
    }, [navigate]);
    return <div>Redirecting...</div>;
};

export default SigninOidc;

