import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { signoutRedirectCallback } from "../auth/user-service"

const SignoutOidc: FC<{}> = () => {
    const useNavigate = useHistory();
    useEffect(() => {
        const signoutAsync = async () => {
            await signoutRedirectCallback();
            useNavigate.push('/');
        };
        signoutAsync();
    }, [history]);
    return <div>Redirecting...</div>;
};

export default SignoutOidc;
