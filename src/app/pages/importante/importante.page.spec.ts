import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImportantePage } from './importante.page';

describe('ImportantePage', () => {
  let component: ImportantePage;
  let fixture: ComponentFixture<ImportantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImportantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
