import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HortifrutiPage } from './hortifruti.page';

describe('HortifrutiPage', () => {
  let component: HortifrutiPage;
  let fixture: ComponentFixture<HortifrutiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HortifrutiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
