import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNamsComponent } from './list-nams.component';

describe('ListNamsComponent', () => {
  let component: ListNamsComponent;
  let fixture: ComponentFixture<ListNamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
