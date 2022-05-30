import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";

const APP_ROUTES:Routes = [
    {path: "Home", component:HomeComponent},
    {path: "About", component:AboutComponent},
    {path: "Contact", component:ContactComponent},


    {path: "**", pathMatch:"full", redirectTo:"home"}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);