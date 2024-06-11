import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPanelsPartComponent } from './solar-panels-part.component';

describe('SolarPanelsPartComponent', () => {
  let component: SolarPanelsPartComponent;
  let fixture: ComponentFixture<SolarPanelsPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarPanelsPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarPanelsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
