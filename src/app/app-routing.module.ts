import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeampageComponent } from './pages/teampage/teampage.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'team',component:TeamComponent},
{path:'team/:id',component:TeampageComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
