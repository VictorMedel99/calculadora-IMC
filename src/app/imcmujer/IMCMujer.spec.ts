import {EstadoMujer, IMCMujer, pesoMaxMujer, pesoMinMujer,} from "./IMCMujer"

describe('IMCMujer uni tests', () => {
    
    it('Should IMC estatura: 1.35, peso: 25 = IMC: 13.72 , peso bajo' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCMujer(25,1.35) +', '+ EstadoMujer(IMCMujer(25,1.35)) ;

        //Assert
        expect(result).toBe('IMC: 13.72, peso bajo');

    })

    it('Should peso ideal de la estatura: 1.35 y edad 13 = Tu rango de peso ideal 27.34 kg - 34.45 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinMujer(13,1.35)+' - '+pesoMaxMujer(13,1.35);

        //Assert
        expect(result).toBe('Tu rango de peso es 27.34 kg - 34.45 kg');

    })

    it('Should IMC estatura: 1.45, peso: 50 = IMC: 23.78, peso normal' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCMujer(50,1.45) +', '+ EstadoMujer(IMCMujer(50,1.45)) ;

        //Assert
        expect(result).toBe('IMC: 23.78, peso normal');

    })

    it('Should peso ideal de la estatura: 1.45 y edad 18 = Tu rango de peso es 34.69 kg - 45.62 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinMujer(18,1.45)+' - '+pesoMaxMujer(18,1.45);

        //Assert
        expect(result).toBe('Tu rango de peso es 34.69 kg - 45.62 kg');

    })

    it('Should IMC estatura: 1.85, peso: 90 = IMC: 26.3, sobrepeso' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCMujer(90,1.85) +', '+ EstadoMujer(IMCMujer(90,1.85)) ;

        //Assert
        expect(result).toBe('IMC: 26.3, sobrepeso');

    })
   
    it('Should peso ideal de la estatura: 1.85 y edad 30= Tu rango de peso ideal 63.32 kg - 85.22 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinMujer(30,1.85)+' - '+pesoMaxMujer(30,1.85);

        //Assert
        expect(result).toBe('Tu rango de peso es 63.32 kg - 85.22 kg');

    })

    it('Should IMC estatura: 1.62, peso: 90 = IMC: 34.29, obesidad grado 1' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCMujer(90,1.62) +', '+ EstadoMujer(IMCMujer(90,1.62)) ;

        //Assert
        expect(result).toBe('IMC: 34.29, obesidad grado 1');

    })
   
    it('Should peso ideal de la estatura: 1.62 y edad 45= Tu rango de peso ideal 48.55 kg - 65.35 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinMujer(45,1.62)+' - '+pesoMaxMujer(45,1.62);

        //Assert
        expect(result).toBe('Tu rango de peso es 48.55 kg - 65.35 kg');

    })

    it('Should IMC estatura: 1.60, peso: 90 = IMC: 35.16, obesidad grado 2' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCMujer(90,1.60) +', '+ EstadoMujer(IMCMujer(90,1.60)) ;

        //Assert
        expect(result).toBe('IMC: 35.16, obesidad grado 2');

    })
   
    it('Should peso ideal de la estatura: 1.60 y edad 40= Tu rango de peso ideal 48.55 kg - 65.35 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinMujer(45,1.62)+' - '+pesoMaxMujer(45,1.62);

        //Assert
        expect(result).toBe('Tu rango de peso es 48.55 kg - 65.35 kg');

    })

    it('Should IMC estatura: 1.60, peso: 105 = IMC: 41.02, obesidad grado 3 (obesidad mórbida)' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCMujer(105,1.60) +', '+ EstadoMujer(IMCMujer(105,1.60)) ;

        //Assert
        expect(result).toBe('IMC: 41.02, obesidad grado 3 (obesidad mórbida)');

    })
   
    it('Should peso ideal de la estatura: 1.60 y edad 35= Tu rango de peso ideal 47.36 kg - 63.74 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinMujer(35,1.60)+' - '+pesoMaxMujer(35,1.60);

        //Assert
        expect(result).toBe('Tu rango de peso es 47.36 kg - 63.74 kg');

    })

})
