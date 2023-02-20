import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSeminarioComponent } from './agregar-seminario.component';

describe('AgregarSeminarioComponent', () => {
  let component: AgregarSeminarioComponent;
  let fixture: ComponentFixture<AgregarSeminarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSeminarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSeminarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
