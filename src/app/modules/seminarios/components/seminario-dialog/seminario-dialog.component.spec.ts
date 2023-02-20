import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarioDialogComponent } from './seminario-dialog.component';

describe('SeminarioDialogComponent', () => {
  let component: SeminarioDialogComponent;
  let fixture: ComponentFixture<SeminarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarioDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeminarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
