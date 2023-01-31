import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminariosComponent } from './seminarios.component';

describe('seminariosComponent', () => {
  let component: SeminariosComponent;
  let fixture: ComponentFixture<SeminariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeminariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
