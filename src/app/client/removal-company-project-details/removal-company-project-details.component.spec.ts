import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovalCompanyProjectDetailsComponent } from './removal-company-project-details.component';

describe('RemovalCompanyProjectDetailsComponent', () => {
  let component: RemovalCompanyProjectDetailsComponent;
  let fixture: ComponentFixture<RemovalCompanyProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovalCompanyProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovalCompanyProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
