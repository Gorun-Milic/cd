import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesPartComponent } from './employees-part.component';

describe('EmployeesPartComponent', () => {
  let component: EmployeesPartComponent;
  let fixture: ComponentFixture<EmployeesPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
