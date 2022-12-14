import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustRegnComponent } from './cust-regn.component';

describe('CustRegnComponent', () => {
  let component: CustRegnComponent;
  let fixture: ComponentFixture<CustRegnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustRegnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustRegnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
