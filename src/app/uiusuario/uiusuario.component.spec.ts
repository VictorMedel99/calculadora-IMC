import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIUsuarioComponent } from './uiusuario.component';

describe('UIUsuarioComponent', () => {
  let component: UIUsuarioComponent;
  let fixture: ComponentFixture<UIUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UIUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
