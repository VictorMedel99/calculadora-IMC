import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarSesionComponent } from './iniciar-sesion.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//services
import { UsersService } from '../servicios/users.service';
import { StorageService } from "../servicios/storage.service";
import { RouterTestingModule } from '@angular/router/testing';

describe('IniciarSesionComponent', () => {
  let component: IniciarSesionComponent;
  let fixture: ComponentFixture<IniciarSesionComponent>;
  let usersService: UsersService;
  let storageService: StorageService;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [IniciarSesionComponent],
      imports: [RouterTestingModule,FormsModule,HttpClientModule],
      providers:[HttpClientModule,UsersService,StorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should set operatorNombreUsuario model through ngModel iniciarSesion', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="nombreUsuario"]')).nativeElement;

    // Act 
    inputElement.value = 'victor';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.nombreUsuario).toEqual('victor');
  });

  it('Should set contrasenia model through ngModel iniciarSesion', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="contrasenia"]')).nativeElement;

    // Act 
    inputElement.value = '123456789';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.contrasenia).toEqual('123456789');
  });

  it('Should call iniciarSesion method and result be USUARIO Y CONTRASEÑA REQUERIDOS', () => {

    // Arrange
    let result;
    component.nombreUsuario = "";
    component.contrasenia = "";
    // Act
    component.iniciarSesion();
    result = component.alert;

    // Assert
    expect(result).toBe('USUARIO Y CONTRASEÑA REQUERIDOS');
  });

  it('Should call iniciarSesion method and result be logged', () => {

    // Arrange
    let result;
    component.nombreUsuario = "victor";
    component.contrasenia = "123456789";
    // Act
    component.iniciarSesion();
    result = component.alert;

    // Assert
    expect(result).toBe('logged');
  });

});
