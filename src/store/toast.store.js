import {create} from 'zustand';

const storeToast = (set) => ({
    toastActive: {
        active: false,
        severity: 'info',
        message: '',
        title: '',
        time: 0,
    },
    setToastActive: (active, severity, message, title, time) => {
        set({toastActive: {active, severity, message, title, time}});
    }
});

export const useToastStore = create(storeToast);
