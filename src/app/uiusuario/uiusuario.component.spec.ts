import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UIUsuarioComponent } from './uiusuario.component';
import {ImcService} from '../servicios/imc.service';
import { HttpClientModule } from '@angular/common/http';

describe('UIUsuarioComponent', () => {
  let component: UIUsuarioComponent;
  let service: ImcService;
  let fixture: ComponentFixture<UIUsuarioComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [UIUsuarioComponent],
      imports: [HttpClientModule,FormsModule],
      providers: [HttpClientModule,ImcService]
    })
      .compileComponents();
  }));


  /* beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIUsuarioComponent],
      imports: [HttpClientModule,FormsModule],
      providers: [HttpClientModule,ImcService]
    })
    .compileComponents();
  }); */

  beforeEach(() => {
    service = TestBed.get(ImcService);
    fixture = TestBed.createComponent(UIUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call calculaIMC method', () => {

    // Arrange
    let result;
    component.operadorEstatura = 1.35;
    component.operadorPeso = 25;
    component.operadorGenero="mujer";
    component.operadorEdad=13;
    // Act
    component.calculaIMC();
    result = component.result;

    // Assert
    expect(result).toBe('IMC: 13.72\nEstado (Adultos): peso bajo\n\nPeso Mínimo ideal según tu edad e IMC: 27.34 kg\nPeso Máximo ideal según tu edad e IMC: 34.45 kg');
  });

  it('Should set operatorGenero model through ngModel uiUsuario', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operadorGenero"]')).nativeElement;

    // Act 
    inputElement.value = 'hombre';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operadorGenero).toEqual('hombre');
  });

  it('Should set operadorEdad model through ngModel uiUsuario', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operadorEdad"]')).nativeElement;

    // Act 
    inputElement.value = '21';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operadorEdad).toEqual(21);
  });

  it('Should set operadorEstatura model through ngModel uiUsuario', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operadorEstatura"]')).nativeElement;

    // Act 
    inputElement.value = '1.75';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operadorEstatura).toEqual(1.75);
  });

  it('Should set operadorPeso model through ngModel uiUsuario', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operadorPeso"]')).nativeElement;

    // Act 
    inputElement.value = '80';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operadorPeso).toEqual(80);
  });

  it('should add operadorEstatura and operatorPeso when i click the calculaIMC button ', () => {
    // Arrange 
    component.operadorEstatura = 1.75;
    component.operadorPeso = 80;
    component.operadorEdad=22;
    component.operadorGenero="hombre";
    let additionButton = fixture.debugElement.query(By.css('.calculaIMC-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe('IMC: 26.12\nEstado (Adultos): sobrepeso\n\nPeso Mínimo ideal según tu edad e IMC: 56.66 kg\nPeso Máximo ideal según tu edad e IMC: 76.26 kg');

  });

  it('Should call guardarIMC method and result be imcsave', () => {

    // Arrange
    let result;
    component.operadorEstatura = 1.75;
    component.operadorPeso = 80;
    component.operadorEdad=22;
    component.operadorGenero="hombre";
    // Act
    component.guardarIMC();
    result = component.alert;

    // Assert
    expect(result).toBe('IMC Save');
  });




});
