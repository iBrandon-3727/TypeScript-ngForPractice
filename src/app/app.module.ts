import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactService } from './services/contact.service';

import { SkillsService } from './services/skills.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsService, ContactService],
  bootstrap: [AppComponent, ContactComponent]
})
export class AppModule { }
