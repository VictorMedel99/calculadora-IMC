import {EstadoHombre, IMCHombre, pesoMaxHombre, pesoMinHombre,} from "./IMCHombre"


describe('IMCHombre uni tests', () => {
    
    it('Should IMC estatura: 1.35, peso: 25 = IMC: 13.72 , peso bajo' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCHombre(25,1.35) +', '+ EstadoHombre(IMCHombre(25,1.35)) ;

        //Assert
        expect(result).toBe('IMC: 13.72, peso bajo');

    })

    it('Should peso ideal de la estatura: 1.35 y edad 13 = Tu rango de peso ideal 27.34 kg - 33.53 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinHombre(13,1.35)+' - '+pesoMaxHombre(13,1.35);

        //Assert
        expect(result).toBe('Tu rango de peso es 27.34 kg - 33.53 kg');

    })

    it('Should IMC estatura: 1.45, peso: 50 = IMC: 23.78, peso normal' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCHombre(50,1.45) +', '+ EstadoHombre(IMCHombre(50,1.45)) ;

        //Assert
        expect(result).toBe('IMC: 23.78, peso normal');

    })

    it('Should peso ideal de la estatura: 1.45 y edad 18 = Tu rango de peso es 36.58 kg - 45.62 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinHombre(18,1.45)+' - '+pesoMaxHombre(18,1.45);

        //Assert
        expect(result).toBe('Tu rango de peso es 36.58 kg - 45.62 kg');

    })

    it('Should IMC estatura: 1.85, peso: 90 = IMC: 26.3, sobrepeso' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCHombre(90,1.85) +', '+ EstadoHombre(IMCHombre(90,1.85)) ;

        //Assert
        expect(result).toBe('IMC: 26.3, sobrepeso');

    })
   
    it('Should peso ideal de la estatura: 1.85 y edad 30= Tu rango de peso ideal 63.32 kg - 85.22 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinHombre(30,1.85)+' - '+pesoMaxHombre(30,1.85);

        //Assert
        expect(result).toBe('Tu rango de peso es 63.32 kg - 85.22 kg');

    })

    it('Should IMC estatura: 1.62, peso: 90 = IMC: 34.29, obesidad grado 1' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCHombre(90,1.62) +', '+ EstadoHombre(IMCHombre(90,1.62)) ;

        //Assert
        expect(result).toBe('IMC: 34.29, obesidad grado 1');

    })
   
    it('Should peso ideal de la estatura: 1.62 y edad 45= Tu rango de peso ideal 48.55 kg - 65.35 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinHombre(45,1.62)+' - '+pesoMaxHombre(45,1.62);

        //Assert
        expect(result).toBe('Tu rango de peso es 48.55 kg - 65.35 kg');

    })

    it('Should IMC estatura: 1.60, peso: 90 = IMC: 35.16, obesidad grado 2' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCHombre(90,1.60) +', '+ EstadoHombre(IMCHombre(90,1.60)) ;

        //Assert
        expect(result).toBe('IMC: 35.16, obesidad grado 2');

    })
   
    it('Should peso ideal de la estatura: 1.60 y edad 40= Tu rango de peso ideal 48.55 kg - 63.74 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinHombre(45,1.62)+' - '+pesoMaxHombre(45,1.62);

        //Assert
        expect(result).toBe('Tu rango de peso es 48.55 kg - 65.35 kg');

    })

    it('Should IMC estatura: 1.60, peso: 105 = IMC: 41.02, obesidad grado 3 (obesidad mórbida)' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'IMC: '+ IMCHombre(105,1.60) +', '+ EstadoHombre(IMCHombre(105,1.60)) ;

        //Assert
        expect(result).toBe('IMC: 41.02, obesidad grado 3 (obesidad mórbida)');

    })
   
    it('Should peso ideal de la estatura: 1.60 y edad 35= Tu rango de peso ideal 47.36 kg - 63.74 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Tu rango de peso es '+pesoMinHombre(35,1.60)+' - '+pesoMaxHombre(35,1.60);

        //Assert
        expect(result).toBe('Tu rango de peso es 47.36 kg - 63.74 kg');

    })
})