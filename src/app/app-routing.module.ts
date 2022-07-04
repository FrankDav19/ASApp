import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './components/build/build.component';
import { DocsComponent } from './components/docs/docs.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'docs', component: DocsComponent},
  {path: 'build', component: BuildComponent},
  {path: 'myAccount', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
