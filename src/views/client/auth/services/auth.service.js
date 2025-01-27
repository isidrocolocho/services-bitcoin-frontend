// import { useAuthStore } from '@/store';
import network from "../../../../services/network"

// import { AxiosResponse} from "axios"

export const getUsers = async (page = 1, perPage = 10) => {
    return await network.get('api/v1/admin/usuarios', {
        params: {
            per_page: perPage,
            page: page
        }
    })
}

export const login = async (email, password) => {
    return await network.post('public/auth/iniciar-sesion', {email, password});
}

export const checkStatus = async (refresh_token) => {
    return await network.post('public/auth/refresh-token', {refresh_token});
}

export const logout = async () => {
    return await network.post('api/v1/auth/cerrar-sesion');
}

export const informacionCuenta = async () => {
    return await network.get('api/v1/auth/cuenta');
}

export const informacionMenu = async () => {
    return await network.get('api/v1/auth/menu');
}

export const informacionPermisos = async () => {
    return await network.get('api/v1/auth/permisos');
}



