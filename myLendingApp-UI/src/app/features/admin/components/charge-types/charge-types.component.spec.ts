import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeTypesComponent } from './charge-types.component';

describe('ChargeTypesComponent', () => {
  let component: ChargeTypesComponent;
  let fixture: ComponentFixture<ChargeTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
