import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManagerComponent } from './pages/manager/manager.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'manager', component: ManagerComponent}
];
