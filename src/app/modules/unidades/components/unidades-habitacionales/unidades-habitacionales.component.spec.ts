import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesHabitacionalesComponent } from './unidades-habitacionales.component';

describe('UnidadesHabitacionalesComponent', () => {
  let component: UnidadesHabitacionalesComponent;
  let fixture: ComponentFixture<UnidadesHabitacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesHabitacionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesHabitacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
