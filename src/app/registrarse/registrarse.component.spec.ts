import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarseComponent } from './registrarse.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('RegistrarseComponent', () => {
  let component: RegistrarseComponent;
  let fixture: ComponentFixture<RegistrarseComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarseComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('Should set operatorNombre model through ngModel Registrarse', async () => {
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


});
