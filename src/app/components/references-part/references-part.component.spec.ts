import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesPartComponent } from './references-part.component';

describe('ReferencesPartComponent', () => {
  let component: ReferencesPartComponent;
  let fixture: ComponentFixture<ReferencesPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencesPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
