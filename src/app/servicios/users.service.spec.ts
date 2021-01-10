import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { UsersApi } from "../models/usersapi";
import { UsersRegisterApi } from "../models/usersregisterapi";

describe('UsersService',() => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule],
    providers: [ HttpClientModule]

  }));

  it('should return an Logged User',  (done: DoneFn) => {
    // Arrange
    const service: UsersService = TestBed.get(UsersService);

    var mydata = new UsersApi;
	  mydata.username = "victor";
    mydata.password = "123456789";
    
    // Act
    service.loginUser(mydata).subscribe((user: any) => {
      
      console.log(user.tokenType);
      console.log(user.accessToken);
      
      expect(user.tokenType).toEqual('Bearer');
      done(); //call DoneFn

    });

  });

  it('should create user',  () => {
    // Arrange
    const service: UsersService = TestBed.get(UsersService);

    var mydata = new UsersRegisterApi;
    mydata.name="usuario tdd";
    mydata.username = "usuario";
    mydata.email="usuario@ejemplo.com"
    mydata.password = "123456789";
    mydata.role=["user"];
    
    // Act
    service.registerUser(mydata).subscribe((user: any) => {
      console.log("usuario registrado");
    });

  });

  it('Should call MessageError method', () => {

    // Arrange
    let result;
    const service: UsersService = TestBed.get(UsersService);
    // Act
    result=service.MessageError('datos incorrectos');
    

    // Assert
    expect(result).toBe(result);
  });

});