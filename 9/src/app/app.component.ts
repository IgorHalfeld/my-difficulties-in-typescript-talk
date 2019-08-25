import { Component } from '@angular/core';

interface Organizer {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Igor Halfeld';

  typescriptBrOrganizers: Organizer[] = [
    { name: 'Lucas' },
    { name: 'Vitor' },
    { name: 'Roz' },
  ];

  greeting(name: string): void {
    this.name = name;
  }
}
