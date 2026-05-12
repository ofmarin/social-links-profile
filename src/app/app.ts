import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Btn } from './btn/btn';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Btn],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  avatar:string = "images/MaineCoon.png"
  protected readonly title = signal('social-links-profile');
}
