import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposEventosComponent } from './tipos-eventos.component';

describe('TiposEventosComponent', () => {
  let component: TiposEventosComponent;
  let fixture: ComponentFixture<TiposEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
