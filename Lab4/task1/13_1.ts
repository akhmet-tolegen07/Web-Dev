import { Routes } from "@angular/router";

import { Home } from "./13_2";
import { User } from "./13_3";

export const routes: Routes = [
  {
    path: "",
    title: "App Home Page",
    component: Home,
  },
  {
    path: "user",
    title: "App User Page",
    component: User,
  },
];
