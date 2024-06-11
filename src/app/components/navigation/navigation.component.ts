import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() childEvent = new EventEmitter();
  @Output() languageEvent = new EventEmitter();

  isOpened: boolean = false;

  hamburgerClass="hamburger";
  verticalNavigationClass = "vertical-navigation-disabled";
  haveBlanket = "no-blanket";

  dropDownManyClass = "drop-down-many-closed";

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  openCloseVerticalNavigation() {
    this.isOpened = !this.isOpened;
    if (this.isOpened) {
      this.openNavigation();
    }else {
      this.closeNavigation();
    }
  }

  openNavigation() {
    this.hamburgerClass = "hamburger-rotated";
    this.haveBlanket = "blanket";
    this.verticalNavigationClass = "vertical-navigation-closed";
    setTimeout(() => this.verticalNavigationClass = "vertical-navigation-opened", 10);
  }

  closeNavigation() {
    this.hamburgerClass = "hamburger";
    this.haveBlanket = "no-blanket";
    this.verticalNavigationClass = "vertical-navigation-closed";
    setTimeout(() => this.verticalNavigationClass = "vertical-navigation-disabled", 500);
  }

  clickOnBlanket() {
    if (this.isOpened) {
      console.log("blanket");
      this.closeNavigation();
      this.isOpened = !this.isOpened;
    }
  }

  openDropDownMany() {
    if (this.dropDownManyClass==="drop-down-many-closed") {
      this.dropDownManyClass = "drop-down-many-opened";
    }else {
      this.dropDownManyClass = "drop-down-many-closed";
    }
  }

  clickAbout() {
    this.childEvent.emit("about");
  }

  clickServices() {
    this.childEvent.emit("services");
  }

  clickReferences() {
    this.childEvent.emit("references");
  }

  clickContact() {
    this.childEvent.emit("contact");
  }

  changeLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translateService.use(localStorage.getItem('language'));

    this.languageEvent.emit(localStorage.getItem('language'));
  }

  changeLanguageMobile(language: string) {
    localStorage.setItem('language', language);
    this.translateService.use(localStorage.getItem('language'));
    this.openCloseVerticalNavigation();

    this.languageEvent.emit(localStorage.getItem('language'));
  }

}
