import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarSesionComponent } from './iniciar-sesion.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('IniciarSesionComponent', () => {
  let component: IniciarSesionComponent;
  let fixture: ComponentFixture<IniciarSesionComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [IniciarSesionComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('Should set operatorNombreUsuario model through ngModel calculaIMC', async () => {
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

  xit('Should call iniciarSesion method', () => {

    // Arrange
    let result;
    component.nombreUsuario = "";
    component.contrasenia = "";
    // Act
    component.iniciarSesion();
    result = component.result;

    // Assert
    expect(result).toBe('USUARIO Y CONTRASEÑA REQUERIDOS');
  });

});
