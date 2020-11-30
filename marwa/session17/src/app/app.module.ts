import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //template driven
import { ReactiveFormsModule } from '@angular/forms'; //reactive form
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddformComponent } from './componentes/user/addform/addform.component';
import { ReactiveAddFormComponent } from './componentes/user/reactive-add-form/reactive-add-form.component';
import { FormBuilderAddComponent } from './componentes/user/form-builder-add/form-builder-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    ReactiveAddFormComponent,
    FormBuilderAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }