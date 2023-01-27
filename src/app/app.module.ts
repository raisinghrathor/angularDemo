import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentComponent } from './Student/student.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { OninitComponent } from './oninit/oninit.component';
import { BComponent } from './BComponent/BComponent.component';
import { CComponent } from './BComponent/CComponent.component';
import { AComponent } from './BComponent/AComponent.component';
import { CustomBorder } from './customdirective/customborder.directive';
import { ElementClick } from './customdirective/elementclick.directive';
import { ChangeColorDirective } from './customdirective/changecolor.directive';
import { ButtonPressDirective } from './customdirective/buttonpress.directive';
import { FriendComponent } from './friend/friend.component';
import { BookDirective } from './customdirective/book.directive';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StudentComponent,
    ChildComponent,
    HomeComponent,
    OninitComponent,
    BComponent,
    CComponent,
    AComponent,
    CustomBorder,
    ElementClick,
    ChangeColorDirective,
    ButtonPressDirective,
    FriendComponent,
    BookDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
