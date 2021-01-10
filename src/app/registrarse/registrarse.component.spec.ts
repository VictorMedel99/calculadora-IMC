import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarseComponent } from './registrarse.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
//services
import { UsersService } from '../servicios/users.service';
import { UsersRegisterApi } from "../models/usersregisterapi";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RegistrarseComponent', () => {
  let component: RegistrarseComponent;
  let fixture: ComponentFixture<RegistrarseComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarseComponent],
      imports: [RouterTestingModule,HttpClientModule,FormsModule],
      providers:[HttpClientModule,UsersService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should set operatorNombre model through ngModel Registrarse', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="nombre"]')).nativeElement;

    // Act 
    inputElement.value = 'victor medel';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.nombre).toEqual('victor medel');
  });

  it('Should set operatorNombreUsuario model through ngModel Registrarse', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="nombreUsuario"]')).nativeElement;

    // Act 
    inputElement.value = 'victor99';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.nombreUsuario).toEqual('victor99');
  });

  it('Should call registrarUsuario method and result be usuario registrado', () => {

    // Arrange
    let result;
    component.nombre = "victor";
    component.nombreUsuario = "vic99";
    component.correo="victor.medelito@gmail.com";
    component.contrasenia="123456789";
    // Act
    component.registrarUsuario();
    result=component.alert;
    // Assert
    expect(result).toBe('usuario registrado');
  });

  it('Should call registrarUsuario method and result be DATOS REQUERIDOS NO SE ACEPTAN CAMPOS VACIOS', () => {

    // Arrange
    let result;
    component.nombre = "victor";
    component.nombreUsuario = "vic99";
    component.correo="";
    component.contrasenia="";
    // Act
    component.registrarUsuario();
    result=component.alert;
    // Assert
    expect(result).toBe('DATOS REQUERIDOS NO SE ACEPTAN CAMPOS VACIOS');
  });

});
