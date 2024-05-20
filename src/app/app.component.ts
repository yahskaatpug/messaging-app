import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { NgToastModule } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'messaging-app';
}
