import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Make sure AppRoutingModule is imported here
    ReactiveFormsModule,
    MatSnackBar,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
