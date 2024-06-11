import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Reference } from 'src/app/model/reference';

@Component({
  selector: 'app-references-part',
  templateUrl: './references-part.component.html',
  styleUrls: ['./references-part.component.css']
})
export class ReferencesPartComponent implements OnInit {

  @ViewChild("tableStart", { static: false }) table: ElementRef;

  currentPage = 1;
  take = 6;
  start = 0;
  end = this.start + this.take;

  duzinaNiza = 0;

  references: Reference[] = [];

  pageLeftButton = 'page-left';
  pageRightButton = 'page-right';

  referencesEnglish = [
    {
      "id": 1,
      "client": 'Hotel Constantin',
      "location": 'Belgrade',
      "description": 'The main project of telecommunication systems and systems of technical protection',
      "area": '5.500'
    },
    {
      "id": 2,
      "client": 'RESEARCH LABORATORY AND CONTROL Health Actavis Company',
      "location": 'Leskovac',
      "description": 'The main project of telecommunication and signaling systems for adaptation of physico-chemical laboratories.',
      "area": '/'
    },
    {
      "id": 3,
      "client": 'Sports Arena',
      "location": 'Padinska Skela',
      "description": 'The main project of telecommunication systems and systems of technical protection',
      "area": '5.500'
    },
    {
      "id": 4,
      "client": 'TQ City',
      "location": 'Budva',
      "description": 'The main project of telecommunication systems and systems of technical protection',
      "area": '49.000'
    },
    {
      "id": 5,
      "client": 'ETB HOLDING',
      "location": 'Belgrade',
      "description": 'Detail design of systems for technical protection and integration',
      "area": '25.000'
    },
    {
      "id": 6,
      "client": 'Zavala',
      "location": 'Budva',
      "description": 'External telecommunication infrastructure system',
      "area": '/'
    },
    {
      "id": 7,
      "client": 'Zavala',
      "location": 'Budva',
      "description": 'Smart Home systems',
      "area": '/'
    },
    {
      "id": 8,
      "client": 'RESEARCH LABORATORY AND CONTROL Health Actavis Company',
      "location": 'Leskovac',
      "description": 'The main project of telecommunication and signaling systems for adaptation of physico- chemical laboratories.',
      "area": '/'
    },
    {
      "id": 9,
      "client": 'Radovanac Hotel',
      "location": 'Belgrade',
      "description": 'Main design of telecommunication and security systems',
      "area": '5.500'
    },
    {
      "id": 10,
      "client": 'Dragiša Mišović',
      "location": 'Belgrade',
      "description": 'The main project of telecommunication systems and systems of technical protection for Hospital',
      "area": '/'
    },
    {
      "id": 11,
      "client": 'Skočidevojka',
      "location": 'Montenegro',
      "description": 'Conceptual solution of telecommunication and technical protection systems for hotel-tourist complex',
      "area": '130.000'
    },
    {
      "id": 12,
      "client": 'Casino',
      "location": 'Bar',
      "description": 'The main project of telecommunication systems and systems of technical protection for Casino',
      "area": '1.133'
    },
    {
      "id": 13,
      "client": 'Grundfos',
      "location": 'Inđija',
      "description": 'Detail design of telecommunication and signaling systems',
      "area": '20.000'
    },
    {
      "id": 14,
      "client": 'Nikola Tesla Airport',
      "location": 'Belgrade',
      "description": 'The main project for adaptation of video surveillance system',
      "area": '/'
    }
  ];

  referencesSerbian = [
    {
      "id": 1,
      "client": 'Hotel Konstantin',
      "location": 'Beograd',
      "description": 'Glavni projekat telekomunikacionih sistema i sistema tehničke zaštite',
      "area": '5.500'
    },
    {
      "id": 2,
      "client": 'Istraživačka labaratorija i kontrola zdravlja, kompanija Actavis',
      "location": 'Leskovac',
      "description": 'Glavni projekat telekomunikacionih i signalnih sistema za adaptaciju fizičko-hemijskih laboratorija.',
      "area": '/'
    },
    {
      "id": 3,
      "client": 'Sportska Arena',
      "location": 'Padinska Skela',
      "description": 'Glavni projekat telekomunikacionih sistema i sistema tehničke zaštite',
      "area": '5.500'
    },
    {
      "id": 4,
      "client": 'TQ City',
      "location": 'Budva',
      "description": 'Glavni projekat telekomunikacionih sistema i sistema tehničke zaštite',
      "area": '49.000'
    },
    {
      "id": 5,
      "client": 'ETB HOLDING',
      "location": 'Beograd',
      "description": 'Detaljno projektovanje sistema za tehničku zaštitu i integraciju',
      "area": '25.000'
    },
    {
      "id": 6,
      "client": 'Zavala',
      "location": 'Budva',
      "description": 'Eksterni telekomunikacioni infrastrukturni sistem',
      "area": '/'
    },
    {
      "id": 7,
      "client": 'Zavala',
      "location": 'Budva',
      "description": 'Sistem pametnih domova',
      "area": '/'
    },
    {
      "id": 8,
      "client": 'Istrazivacka labaratorija i kontrola zdravlja, kompanija Actavis',
      "location": 'Leskovac',
      "description": 'Glavni projekat telekomunikacionih i signalnih sistema za adaptaciju fizičko-hemijskih laboratorija.',
      "area": '/'
    },
    {
      "id": 9,
      "client": 'Radovanac Hotel',
      "location": 'Beograd',
      "description": 'Glavni projekat telekomunikacionih i sigurnosnih sistema',
      "area": '5.500'
    },
    {
      "id": 10,
      "client": 'Dragiša Mišović',
      "location": 'Beograd',
      "description": 'Glavni projekat telekomunikacionih sistema i sistema tehničke zaštite bolnice',
      "area": '/'
    },
    {
      "id": 11,
      "client": 'Skočidevojka',
      "location": 'Crna Gora',
      "description": 'Idejno rešenje telekomunikacionih i tehničkih sistema zaštite hotelsko-turističkog kompleksa',
      "area": '130.000'
    },
    {
      "id": 12,
      "client": 'Kazino',
      "location": 'Bar',
      "description": 'Glavni projekat telekomunikacionih sistema i sistema tehničke zaštite kazina',
      "area": '1.133'
    },
    {
      "id": 13,
      "client": 'Grundfos',
      "location": 'Inđija',
      "description": 'Detaljni projekat telekomunikacionih i signalnih sistema',
      "area": '20.000'
    },
    {
      "id": 14,
      "client": 'Nikola Tesla Aerodrom',
      "location": 'Beograd',
      "description": 'Glavni projekat adaptacije sistema video nadzora',
      "area": '/'
    }
  ];

  changeLanguage() {
    const language = localStorage.getItem('language') || 'en';
    if (language==='sr') {
      this.references = this.referencesSerbian;
    }else {
      this.references = this.referencesEnglish;
    }
  }


  constructor() { }

  ngOnInit() {
    this.changeLanguage();
    this.duzinaNiza = this.references.length;
    this.disableEnableButtons();
  }

  nextPageNormal() {
    if (this.references.length > this.end) {
      this.currentPage++;
      this.start = this.end;
      if (this.references.length >= this.start + this.take) {
        this.end = this.start + this.take;
      }else {
        this.end = this.references.length;
      }
    }
    this.disableEnableButtons();
  }

  previousPageNormal() {
    if (this.currentPage>1) {
      this.currentPage--;
      this.start = this.start - this.take;
      this.end = this.start + this.take;
    }
    this.disableEnableButtons();
  }

  disableEnableButtons() {
    if (this.currentPage>1) {
      this.pageLeftButton = 'page-left';
    }else {
      this.pageLeftButton = 'page-left-disabled';
    }

    if (this.references.length > this.currentPage*this.take) {
      this.pageRightButton = 'page-right';
    }else {
      this.pageRightButton = 'page-right-disabled';
    }
  }



  nextPageMobile() {
    if (this.references.length > this.end) {
      this.table.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
      this.currentPage++;
      this.start = this.end;
      if (this.references.length >= this.start + this.take) {
        this.end = this.start + this.take;
      }else {
        this.end = this.references.length;
      }
    }
    this.disableEnableButtons();
  }

  previousPageMobile() {
    if (this.currentPage>1) {
      this.table.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
      this.currentPage--;
      this.start = this.start - this.take;
      this.end = this.start + this.take;
    }
    this.disableEnableButtons();
  }

}
