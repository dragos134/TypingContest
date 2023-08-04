import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.hacker.phrase();
  solved = false;

  onUserInput(event: Event) {
    let text = (event.target as HTMLInputElement).value;

    if (text === this.randomText) {
      this.solved = true;
    }
  }
}
