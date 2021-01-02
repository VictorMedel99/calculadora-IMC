import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { UsersApi } from "../models/usersapi";

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

});