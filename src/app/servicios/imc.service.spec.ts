import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ImcService } from './imc.service';
import { ImcApi } from "../models/imcapi";

describe('storageService', () => {
    
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [HttpClientModule]
    }));

    it('should create imc historial', () => {
        // Arrange
        const service: ImcService = TestBed.get(ImcService);

        var mydata = new ImcApi;
        mydata.imc = "23.94";
        mydata.estado = "peso normal";
        mydata.peso_min = "54.10 kg";
        mydata.peso_max = "72.81 kg";
        mydata.username = "victor";

        // Act
        service.createImc(mydata).subscribe((user: any) => {
            console.log("imc registrado");
        });
    });

    xit('should get imc historiales', () => {
        // Arrange
        let imcApi$: ImcApi[];
        const service: ImcService = TestBed.get(ImcService);

        // Act
        service.getPesos().subscribe(data => imcApi$ = data)
    });

    it('Should call MessageError method', () => {

        // Arrange
        let result;
        const service: ImcService = TestBed.get(ImcService);
        // Act
        result=service.MessageError('datos incorrectos');
        
    
        // Assert
        expect(result).toBe(result);
      });

});