import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeAdminPageComponent } from './view/admin/home-admin-page/home-admin-page.component';
import { SkillAddPageComponent } from './view/admin/skill-add-page/skill-add-page.component';
import { SkillPageComponent } from './view/admin/skill-page/skill-page.component';
import { HomePageComponent } from './view/client/home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    children: [
      {
        path: "",
        component: HomePageComponent,
      },
    ]
  },
  {
    path: "admin",
    component: LayoutsComponent,
    children: [
      {
        path: "",
        redirectTo: 'home-admin',
        pathMatch: 'full'
      },
      {
        path: 'home-admin',
        component: HomeAdminPageComponent
      },
      {
        path: 'skill',
        component: SkillPageComponent
      },
      {
        path: 'skill/create',
        component: SkillAddPageComponent
      },
      {
        path: 'skill/:id/edit',
        component: SkillAddPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
