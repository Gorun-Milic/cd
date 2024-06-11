import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPartComponent } from './about-us-part.component';

describe('AboutUsPartComponent', () => {
  let component: AboutUsPartComponent;
  let fixture: ComponentFixture<AboutUsPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
