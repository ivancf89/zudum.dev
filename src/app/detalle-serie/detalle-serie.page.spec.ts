import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleSeriePage } from './detalle-serie.page';

describe('DetalleSeriePage', () => {
  let component: DetalleSeriePage;
  let fixture: ComponentFixture<DetalleSeriePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSeriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
