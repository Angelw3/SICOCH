import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PisoPage } from './piso.page';

describe('PisoPage', () => {
  let component: PisoPage;
  let fixture: ComponentFixture<PisoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PisoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
