import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'todo', component: TodoComponent }, // Todo route
];