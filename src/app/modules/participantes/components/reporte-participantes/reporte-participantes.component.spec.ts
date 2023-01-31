import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteParticipantesComponent } from './reporte-participantes.component';

describe('ReporteParticipantesComponent', () => {
  let component: ReporteParticipantesComponent;
  let fixture: ComponentFixture<ReporteParticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteParticipantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
