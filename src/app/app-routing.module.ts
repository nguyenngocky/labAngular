import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeAdminPageComponent } from './view/admin/home-admin-page/home-admin-page.component';
import { ProjectAddPageComponent } from './view/admin/project-add-page/project-add-page.component';
import { ProjectPageComponent } from './view/admin/project-page/project-page.component';
import { SchoolAddPageComponent } from './view/admin/school-add-page/school-add-page.component';
import { SchoolPageComponent } from './view/admin/school-page/school-page.component';
import { SkillAddPageComponent } from './view/admin/skill-add-page/skill-add-page.component';
import { SkillPageComponent } from './view/admin/skill-page/skill-page.component';
import { UserPageComponent } from './view/admin/user-page/user-page.component';
import { UserUpdatePageComponent } from './view/admin/user-update-page/user-update-page.component';
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
        path: 'user',
        component: UserPageComponent
      },
      {
        path: 'user/:id/edit',
        component: UserUpdatePageComponent
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
      {
        path: 'project',
        component: ProjectPageComponent
      },
      {
        path: 'project/create',
        component: ProjectAddPageComponent
      },
      {
        path: 'project/:id/edit',
        component: ProjectAddPageComponent
      },
      {
        path: 'school',
        component: SchoolPageComponent
      },
      {
        path: 'school/create',
        component: SchoolAddPageComponent
      },
      {
        path: 'school/:id/edit',
        component: SchoolAddPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
