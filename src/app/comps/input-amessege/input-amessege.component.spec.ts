import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAMessegeComponent } from './input-amessege.component';

describe('InputAMessegeComponent', () => {
  let component: InputAMessegeComponent;
  let fixture: ComponentFixture<InputAMessegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAMessegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAMessegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
