import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateProjectDetailsComponent } from './realestate-project-details.component';

describe('RealestateProjectDetailsComponent', () => {
  let component: RealestateProjectDetailsComponent;
  let fixture: ComponentFixture<RealestateProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealestateProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
