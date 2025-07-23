import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuroPage } from './muro.page';

describe('MuroPage', () => {
  let component: MuroPage;
  let fixture: ComponentFixture<MuroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
