import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConcursoDialogComponent } from './add-concurso-dialog.component';

describe('AddConcursoDialogComponent', () => {
  let component: AddConcursoDialogComponent;
  let fixture: ComponentFixture<AddConcursoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConcursoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConcursoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
