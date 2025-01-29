// import { useAuthStore } from '@/store';
import network from "../../../../services/network"

// import { AxiosResponse} from "axios"

export const getUsers = async (page = 1, perPage = 10) => {
    return await network.get('/usuarios', {
        params: {
            per_page: perPage,
            page: page
        }
    })
}

export const login = async (email, password) => {
    return await network.post('/auth/login', {email, password});
}
export const register = async (dataToSend) => {
    return await network.post('/auth/register', dataToSend);
}

export const checkStatus = async (refresh_token) => {
    return await network.post('/auth/refresh-token', {refresh_token});
}

export const logout = async () => {
    return await network.post('/auth/logout');
}

export const informacionCuenta = async () => {
    return await network.get('/auth/usuario');
}

export const informacionMenu = async () => {
    return await network.get('/auth/menu');
}

export const informacionPermisos = async () => {
    return await network.get('/auth/permisos');
}



