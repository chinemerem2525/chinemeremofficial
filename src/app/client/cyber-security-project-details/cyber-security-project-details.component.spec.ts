import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurityProjectDetailsComponent } from './cyber-security-project-details.component';

describe('CyberSecurityProjectDetailsComponent', () => {
  let component: CyberSecurityProjectDetailsComponent;
  let fixture: ComponentFixture<CyberSecurityProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberSecurityProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberSecurityProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
