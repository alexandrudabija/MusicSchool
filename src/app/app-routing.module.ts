import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CampusComponent } from './pages/campus/campus.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { UserComponent } from './pages/user/user.component';
import { StudioComponent } from './pages/studio/studio.component';
const routes: Routes = [

  {path : 'index', component : IndexComponent},
  {path : 'shop', component : ShopComponent},
  {path : 'academy', component : AcademyComponent},
  {path : 'campus', component : CampusComponent},
  {path : 'courses', component : CoursesComponent},
  {path : 'studio', component : StudioComponent},
  {path : 'user', component : UserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const arrayObject =[IndexComponent,ShopComponent,CampusComponent,AcademyComponent,CoursesComponent,UserComponent,StudioComponent]
