/* app-routing.module.ts */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { AfterAuthGuard } from './guards/after-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", canActivate: [AuthGuard], pathMatch: 'full', component: DummyComponent }, //https://github.com/angular/angular/issues/18605
  { path: "address", children: [
    { path: "", component: ListAddressComponent },
    { path: "create", component: AddAddressComponent },
    { path: "edit/:id", component: EditAddressComponent },
  ] , canActivate: [AuthGuard]},
  { path: "login", component: LoginComponent, canActivate: [AfterAuthGuard] },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
