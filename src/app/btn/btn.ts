import { Component, input } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.html',
  styleUrls: ['./btn.css'],
})

export class Btn {
  name= input<string>();
  linkName = input<string>();
  }

