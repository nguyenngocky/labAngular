import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomeAdminPageComponent } from './view/admin/home-admin-page/home-admin-page.component';
import { HomePageComponent } from './view/client/home-page/home-page.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { SkillPageComponent } from './view/admin/skill-page/skill-page.component';
import { SkillAddPageComponent } from './view/admin/skill-add-page/skill-add-page.component';
import { ShowValidateComponent } from './show-validate/show-validate.component';
import { UserPageComponent } from './view/admin/user-page/user-page.component';
import { UserUpdatePageComponent } from './view/admin/user-update-page/user-update-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeAdminPageComponent,
    LayoutsComponent,
    SkillPageComponent,
    SkillAddPageComponent,
    ShowValidateComponent,
    UserPageComponent,
    UserUpdatePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
