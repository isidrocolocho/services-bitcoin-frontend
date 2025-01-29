import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useMenuStore } from "../../store/menu.store.js";
import { routesMedico } from "../../views/medico/router/Router.jsx";
import { routesPaciente } from "../../views/paciente/router/Router.jsx";
import { useAuthStore } from "../../views/client/auth/store/auth.store.js";
import { logout } from "../../views/client/auth/services/auth.service.js";
import { useToastStore } from "../../store/toast.store.js";
import useBreakpoints from "../../hooks/useBreakpoints.js";
import { useLoaderStore } from '../../store/loader.store.js';

const logo = "/logo512.png";


export default function SidebarComponent() {
  const { sidebarMenuVisible, toggleSidebarMenu, resetSidebarMenu } = useMenuStore();  
  const breakpoints = useBreakpoints();
  const MenuRoutes = [
      ...routesMedico,
      ...routesPaciente
  ];  

  useEffect(() => {
    // useLoaderStore.setState({active: false});      
      // Resetea el sidebar al cargar la página
      resetSidebarMenu();

      // Para mostrar siempre el sidebar al cargar la página, solo cuando sea lgAndUp (en dispositivos móviles/tablet no se mostrará por defecto)
      if(breakpoints.lgAndUp) {
        toggleSidebarMenu();
      }
  }, [breakpoints.lgAndUp, resetSidebarMenu, toggleSidebarMenu]); // Esto es para que se ejecute solo una vez al cargar la página

  const logoutSession = async () => {
    useLoaderStore.getState().setActive(true);
    try {
        const response = await logout();
        if (response.status === 200 || response.status === 201) {            
            useToastStore.getState().setToastActive(true, 'info', response?.data?.message, 'Hasta luego', 5000);
            useLoaderStore.getState().setActive(false);
        }
        useAuthStore.getState().cleanStore();
    } catch (error) {
        useAuthStore.getState().cleanStore();
        useLoaderStore.getState().setActive(false);    
    }
}

  return (
    <>    
      {/* Estructura principal del Sidebar Menu */}
      <div className=" md:flex">
        <div className={
          `fixed overflow-auto custom-scroll-bar h-full bg-primary-700 text-black transition-all duration-300 ease-in-out z-40
          ${sidebarMenuVisible ? 'w-full sm:w-64' : 'w-0'}`
        }>
          {sidebarMenuVisible && 
            <>
              <div className={`overflow-y-clip p-0`}>
                <div className="flex justify-center items-center p-2 mt-5">
                  <img src={logo} alt="logo"className={`cursor-pointer p-4`}/>
                </div>
                <ul className='pt-5'>
                  {MenuRoutes.filter(Menu => Menu.meta?.show).map((Menu, index) => (
                    <li key={index} className="px-2 cursor-pointer transition-all duration-300 ease-in-out text-black text-sm items-center py-2 hover:bg-[#f5f5f5] hover:text-primary-700">
                      <NavLink to={Menu.path || '/'} className="flex justify-start items-center w-full p-2">
                        <span className="origin-left duration-200 material-icons">
                          {Menu.meta?.icon}
                        </span>
                        <span className="origin-left duration-200 pl-4">
                          {Menu.meta?.title}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                  </ul>              
              </div>                      
              <div className="absolute bottom-0 w-full mb-2">
                <ul>
                  <li className="px-2 flex cursor-pointer transition-all duration-300 ease-in-out text-black text-sm items-center py-2 hover:bg-[#f5f5f5] hover:text-primary-700"
                    onClick={() => logoutSession()}>
                    <template className="flex justify-start items-center w-full p-2">
                      <span className="origin-left duration-200 material-icons">
                        logout
                      </span>
                      <span className="origin-left duration-200 pl-4">
                        Cerrar sesión
                      </span>
                    </template>
                  </li>
                </ul>
              </div>    
            </>        
          }
        </div>
      </div>
    </>
  );
}