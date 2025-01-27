import {useToastStore} from '../store/toast.store.js';
import {useAuthStore} from '../views/client/auth/store/auth.store.js';
import {
    UNAUTHORIZED,
    FORBIDDEN,
    UNPROCESSABLE_ENTITY,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
} from './constants/httpStatusCodes.js';

export const statusHandlers = {
    [UNAUTHORIZED]: () => {
        useToastStore.getState().setToastActive(true, 'error', 'Se ha cerrado la sesión', 'error', 5000);
        useAuthStore.getState().cleanStore();
        // window.location.href = '/iniciar-sesion';
    },
    [FORBIDDEN]: () => {
        useToastStore.getState().setToastActive(true, 'error', 'No tienes permisos para realizar esta acción', 'error', 5000);
    },
    [UNPROCESSABLE_ENTITY]: (message) => useToastStore.getState().setToastActive(true, 'error', message, 'error', 5000),
    [NOT_FOUND]: (message) => useToastStore.getState().setToastActive(true, 'error', message, 'warn', 5000),
    [INTERNAL_SERVER_ERROR]: (message) => useToastStore.getState().setToastActive(true, 'error', message, 'error', 5000),
};
