import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cd-app';

  constructor(
    private translateService: TranslateService
  ) {
    const language = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(language);
  }
}
