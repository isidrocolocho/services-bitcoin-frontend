import {useAuthStore} from "../views/client/auth/store/auth.store.js";
import {fromUnixTime} from 'date-fns';
import {jwtDecode} from "jwt-decode"
import {Navigate} from "react-router-dom";

const isTokenExpired = (token) => {
    const decoded = jwtDecode(token);
    const {exp} = decoded;
    const expiration = fromUnixTime(exp);
    const now = new Date();
    return now > expiration;
}

const AuthGuard = ({children}) => {
    const {status, decryptToken, checkAuthStatus} = useAuthStore(state => state);
    const decryptedToken = decryptToken();
    const token = decryptedToken?.token;
    if (!token || isTokenExpired(token)) {
        if (token !== undefined) {
            checkAuthStatus();
            if (status === 'unauthorized') {
                return <Navigate to='/login'/>
            }
        } else {
            return <Navigate to='/login'/>
        }
    }

    return <>{children}</>;
}
export default AuthGuard;
