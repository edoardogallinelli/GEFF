import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAreaUtenteComponent } from './menu-area-utente.component';

describe('MenuAreaUtenteComponent', () => {
  let component: MenuAreaUtenteComponent;
  let fixture: ComponentFixture<MenuAreaUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAreaUtenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAreaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
