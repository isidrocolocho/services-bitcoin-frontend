import {lazy} from "react";

export const routesLanding = [
    {
        path: "",
        name: "Inicio",
        icon: "dashboard",
        Component: lazy(async () => await import("../home/Home")),
    },
    {
        path: "somos",
        name: "quienes-somos",
        icon: "dashboard",
        Component: lazy(async () => await import("../AboutUs/AboutUs")),
    },
    {
        path: "servicios",
        name: "Servicios",
        icon: "dashboard",
        Component: lazy(async () => await import("../Servicios/Servicios")),
    },
    {
        path: "login",
        name: "Login",
        icon: "dashboard",
        Component: lazy(async () => await import("../login/login")),
    },
    {
        path: "registro",
        name: "Registro",
        icon: "dashboard",
        Component: lazy(async () => await import("../registro/registro")),
    },
    {
        path: "*",
        name: "No encontrado",
        icon: "error",
    }
];
