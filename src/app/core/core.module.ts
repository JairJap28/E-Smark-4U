import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaqComponent } from './faq/faq.component';
import { SubscribeDialogComponent } from './subscribe-dialog/subscribe-dialog.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, FaqComponent, SubscribeDialogComponent, ChatbotComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FaqComponent,
    FooterComponent,
    SubscribeDialogComponent,
    ChatbotComponent
  ]
})
export class CoreModule { }
