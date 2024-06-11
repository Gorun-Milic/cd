import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProcessPartComponent } from './work-process-part.component';

describe('WorkProcessPartComponent', () => {
  let component: WorkProcessPartComponent;
  let fixture: ComponentFixture<WorkProcessPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkProcessPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkProcessPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
