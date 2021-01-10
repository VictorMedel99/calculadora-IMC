import { ComponentFixture, TestBed } from '@angular/core/testing';
import {StorageService} from '../servicios/storage.service';
import { NavbarUsuarioComponent } from './navbar-usuario.component';

describe('NavbarUsuarioComponent', () => {
  let component: NavbarUsuarioComponent;
  let fixture: ComponentFixture<NavbarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call cerrarSsion', () => {

    // Arrange
    let result="";
    // Act
    component.cerrarSesion();
    result=component.result;

    // Assert
    expect(result).toBe("Sesión cerrada");
  });


});
