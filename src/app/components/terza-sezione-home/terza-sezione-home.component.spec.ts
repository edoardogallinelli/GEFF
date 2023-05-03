import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzaSezioneHomeComponent } from './terza-sezione-home.component';

describe('TerzaSezioneHomeComponent', () => {
  let component: TerzaSezioneHomeComponent;
  let fixture: ComponentFixture<TerzaSezioneHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerzaSezioneHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerzaSezioneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
