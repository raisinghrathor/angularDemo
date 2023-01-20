import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentComponent } from './Student/student.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StudentComponent,
    ChildComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
