import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumpageComponent } from './forumpage.component';

describe('ForumpageComponent', () => {
  let component: ForumpageComponent;
  let fixture: ComponentFixture<ForumpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
