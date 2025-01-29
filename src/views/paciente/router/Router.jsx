import {lazy} from "react";

export const routesPaciente = [
    {
        path: "calendario",
        name: "Calendario",
        meta: {
            title: "Calendario",
            icon: "dashboard",
            requiresAuth: true,
            show: true,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../Calendario/Calendario")),
    },
    {
        path: "catalogo",
        name: "Catalogo",
        meta: {
            title: "Catalogo de medico",
            icon: "dashboard",
            requiresAuth: true,
            show: true,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../Catalogo/Catalogo")),
    },
    {
        path: "citas-anteriores",
        name: "CitasAnteriores",
        meta: {
            title: "Citas Atendidas",
            icon: "dashboard",
            requiresAuth: true,
            show: true,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../Citas/CitasAnteriores")),
    },
    {
        path: "crear-citas",
        name: "CrearCitas",
        meta: {
            title: "Crear Citas",
            icon: "dashboard",
            requiresAuth: true,
            show: false,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../Citas/CrearCitas")),
    },
    {
        path: "perfil",
        name: "Perfil",
        meta: {
            title: "Perfil",
            icon: "dashboard",
            requiresAuth: true,
            show: false,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../perfil/perfil")),
    },
    {
        path: "*",
        name: "No encontrado",
        meta: {
            title: "No encontrado",
            icon: "error",
            requiresAuth: true,
            show: false,
            canAccess: true,
        },
        Component: lazy(async () => await import("../../NoEncontrado")),
    }
];
