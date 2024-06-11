import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReferencesPartComponent } from '../references-part/references-part.component';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  @ViewChild("about", { static: false }) divAbout: ElementRef;
  @ViewChild("services", { static: false }) divServices: ElementRef;
  @ViewChild("references", { static: false }) divReferences: ElementRef;
  @ViewChild("contact", { static: false }) divContact: ElementRef;

  @ViewChild("refpart", { static: false }) referencesPart: ReferencesPartComponent;

  public language = "";

  constructor() { }

  ngOnInit() {
  }

  

  navigationClicked(element) {

    switch (element) {
      case "about":
          this.divAbout.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
          break;
      case "services":
          this.divServices.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
          break;
      case "references":
          this.divReferences.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
          break;
      case "contact":
          this.divContact.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
          break;
    }
  }

  languageChanged(language) {
    this.referencesPart.changeLanguage();
  }

}
