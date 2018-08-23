import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abootstrap';

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Add article title here ${title.value}`);
    return false;
  }
}
