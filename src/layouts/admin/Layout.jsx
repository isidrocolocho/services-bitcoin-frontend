import { IconComponent } from "../../components/core/IconComponent.jsx";
import Sidebar from "../../components/core/SidebarComponent.jsx";
import { useMenuStore } from "../../store/menu.store.js";
import useBreakpoints from "../../hooks/useBreakpoints.js";


const LayoutAdmin = ({children}) => {
    const { sidebarMenuVisible, toggleSidebarMenu } = useMenuStore();
    const breakpoints = useBreakpoints();

    return (
        <div className={`flex justify-center`}>
            <Sidebar />      
            <div className={
                `w-full h-full transition-all duration-300 ease-in-out mt-1 me-2 sm:mt-0 sm:me-0 overflow-x-hidden
                ${sidebarMenuVisible ? 'ml-0 sm:ml-64 flex justify-end sm:justify-normal' : 'ml-0'}`                        
            }>
                <div className="absolute transition-all duration-300 ease-in-out p-2 flex overflow-hidden">
                    <div className="card flex justify-end items-end z-40">
                        <IconComponent 
                            className={
                                `transition-all duration-300 ease-in-out cursor-pointer z-50
                                ${breakpoints.smAndUp ? sidebarMenuVisible ? '!text-primary-700' : '!text-primary-700' : sidebarMenuVisible ? '!text-white' : '!text-primary-700'}`
                            }
                            name={sidebarMenuVisible ? (breakpoints.smAndUp ? 'menu_open' : 'close') : 'menu'}
                            size={35} 
                            onClick={() => {
                                toggleSidebarMenu();
                            }}
                        />
                    </div>
                </div>          

                <div className="flex flex-col w-full">
                    {children}
                </div> 
            </div>                                             
        </div>
    );
};

export default LayoutAdmin;

