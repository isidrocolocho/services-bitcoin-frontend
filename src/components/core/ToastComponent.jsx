import {useRef, useEffect} from 'react';
import {Toast} from 'primereact/toast';
import {useToastStore} from '../../store/toast.store';

const ToastComponent = () => {
    const toast = useRef(null);
    const {toastActive} = useToastStore(state => state);
    useEffect(() => {
        if (toastActive.active) {
            toast.current?.show({
                severity: toastActive.severity,
                summary: toastActive.title,
                detail: toastActive.message,
                life: toastActive.time
            });
            useToastStore.getState().setToastActive(false, 'info', '', '', 0);
        }
    }, [toastActive.active, toastActive.message, toastActive.severity, toastActive.time, toastActive.title]);
    return (
        <>
            <Toast ref={toast}/>
            <style>{`
                .p-toast-message-content {
                    border-width: 0px;
                }
            `}</style>        
        </>
        
    );
};

export default ToastComponent;
