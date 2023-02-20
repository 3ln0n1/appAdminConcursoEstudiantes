import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosFormularioSeminarioComponent } from './documentos-formulario-seminario.component';

describe('DocumentosFormularioSeminarioComponent', () => {
  let component: DocumentosFormularioSeminarioComponent;
  let fixture: ComponentFixture<DocumentosFormularioSeminarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosFormularioSeminarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosFormularioSeminarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
