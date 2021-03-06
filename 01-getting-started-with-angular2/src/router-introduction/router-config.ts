import {AllLessons} from "./all-lessons.component";
import {Home} from "./home.component";
import {RouterConfig, Route} from "@angular/router";
import {coursesRouterConfig} from "./courses-router-config";


const indexRoute:Route = {
    path: "",
    component: Home
};

const fallbackRoute:Route = {
    path: '**',
    component: Home
};

export const routeConfig:RouterConfig = [
    {
        path: 'home',
        component: Home
    },
    ...coursesRouterConfig,
    {
        path: 'lessons',
        component: AllLessons
    },
    fallbackRoute,
    indexRoute
];
