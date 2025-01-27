import {create} from 'zustand';


const storeLoader = (set) => ({
    active: false,

    setActive: (active) => {
        set({active});
    }
});

export const useLoaderStore = create(storeLoader);
