import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCalculusComponent } from './quiz-calculus.component';

describe('QuizCalculusComponent', () => {
  let component: QuizCalculusComponent;
  let fixture: ComponentFixture<QuizCalculusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCalculusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCalculusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
