import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';


// Creamos el store para gustrar su estado
const storeApi = (set) => ({
  sidebarMenuVisible: false,
  toggleSidebarMenu: () => set((state) => ({ sidebarMenuVisible: !state.sidebarMenuVisible })),
  resetSidebarMenu: () => set(() => ({ sidebarMenuVisible: false })),  
});

// Exportamos el store para su uso en la aplicación
export const useMenuStore = create()(
  devtools(
    persist(
      storeApi,
      { name: 'menu-storage' }
    ),
    { name: 'MenuStore' } // Este nombre aparecerá en Redux DevTools
  )
);
