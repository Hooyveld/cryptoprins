import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansAndPricingComponent } from './plansandpricing.component';

describe('PlansAndPricingComponent', () => {
  let component: PlansAndPricingComponent;
  let fixture: ComponentFixture<PlansAndPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansAndPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansAndPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
