import {lazy} from "react";

export const routesMedico = [
    {
        path: "dashboard",
        name: "Dashboard",
        meta: {
            title: "Panel ",
            icon: "Home",
            requiresAuth: false,
            show: true,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../dashboard/dashboard")),
    },
    {
        path: "perfil",
        name: "Perfil",
        meta: {
            title: "Perfil de medico",
            icon: "Home",
            requiresAuth: true,
            show: false,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../perfil/perfil")),
    },
    {
        path: "proximas-citas",
        name: "ProximasCitas",
        meta: {
            title: "Proximas citas de medico",
            icon: "Home",
            requiresAuth: true,
            show: true,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../citas/proximasCitas")),
    },
    {
        path: "citas-atendidas",
        name: "CitasAtendidas",
        meta: {
            title: "Citas Atendidas de medico",
            icon: "Home",
            requiresAuth: true,
            show: true,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../citas/citasAtendidas")),
    },
    {
        path: "calificacion",
        name: "Calificaciones",
        meta: {
            title: "Calificaciones de medico",
            icon: "Home",
            requiresAuth: true,
            show: true,
            canAccess: ["VER_DASHBOARD"],
        },
        Component: lazy(async () => await import("../calificacion/calificacion")),
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
