import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';
import {
    checkStatus,
    informacionCuenta,
    informacionMenu,
    informacionPermisos,
    login
} from "../services/auth.service.js";
import { useToastStore } from "../../../../store/toast.store.js";
import { useLoaderStore } from "../../../../store/loader.store.js";

import CryptoJS from 'crypto-js';
const SECRET_TOKEN =  process.env.REACT_APP_API_URL;

const encryptToken = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_TOKEN);
    return ciphertext.toString();
};
const decryptToken = (token) => {
    if (!token) {
        return null;
    }
    try {
        const bytes = CryptoJS.AES.decrypt(token, SECRET_TOKEN);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedData);
    } catch (error) {
        useToastStore.getState().setToastActive(true, 'error', 'Inicie sesión nuevamente', 'Se ha cerrado la sesión', 5000);
        
        return null;
    }
}

const userData = async () => {
    try {
        const userInfo = await informacionCuenta();
        const userMenu = await informacionMenu();
        const userPermissions = await informacionPermisos();
        return {
            userDetails: userInfo.data ? userInfo.data : null,
            userNavigationMenu: userMenu.data ? userMenu.data : null,
            userAccessPermissions: userPermissions.data ? userPermissions.data : null
        };

    } catch (error) {
        console.error(error)
    }
}

const storeApi = (set, get) => ({
    status: 'pending',
    token: undefined,
    loginUser: async (email, password, onSuccess) => {
        try {
            const {data, status} = await login(email, password);
            if (status === 200 || status === 201) {
               
                const object = {token: data.token, refresh_token: data.refresh_token, user: null};
                set({status: 'authorized', token: encryptToken(object),   refresh_token: data.refresh_token});
                // Traer información del usuario
                const userInformacion = await userData();
                if (userInformacion) {
                    object.user = userInformacion;
                    set({status: 'authorized', token: encryptToken(object),  refresh_token: data.refresh_token});
                }
                // useToastStore.getState().setToastActive(true, 'info', 'Inicio de sesión exitoso', 'Bienvenido', 5000);
                onSuccess();
                useLoaderStore.getState().setActive(false);
                return;
            }
        } catch (error) {
            useLoaderStore.setState({active: false});  
            get().cleanStore();
        }
    },

    checkAuthStatus: async () => {
        const data_decrypt = get().decryptToken();
        try {
            const data = await checkStatus(data_decrypt?.refresh_token);
            if (data.status === 400 || data.status === 401) {
                useToastStore.getState().setToastActive(true, 'error', 'Inicie sesión nuevamente', 'Se ha cerrado la sesión', 5000);
                
                get().cleanStore();
                return;
            }
            const {token, refresh_token} = data.data;
            const object = {token: token, refresh_token: refresh_token, user: data_decrypt?.user};
            set({status: 'authorized', token: encryptToken(object),refresh_token});
        } catch (error) {
            get().cleanStore();
        }
    },

    cleanStore: () => {
        set({status: 'unauthorized', token: undefined});
    },

    encryptToken: encryptToken,

    decryptToken: () => {
        const token = get().token;
        return token ? decryptToken(token) : null;
    }
});

export const useAuthStore = create()(
    devtools(
        persist(
            storeApi,
            {name: 'auth-storage'}
        )
    )
);
