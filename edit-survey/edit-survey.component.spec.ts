import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSurveyComponent } from './edit-survey.component';

describe('EditSurveyComponent', () => {
  let component: EditSurveyComponent;
  let fixture: ComponentFixture<EditSurveyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditSurveyComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
