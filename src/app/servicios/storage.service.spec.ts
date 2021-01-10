import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('storageService', () => {
    //let service: StorageService;

    beforeEach(() => TestBed.configureTestingModule({
        //TestBed.configureTestingModule({});
        //service = TestBed.inject(StorageService);
    }));

    it('should call get apiUrl method', () => {
        // Arrange
        const service: StorageService = TestBed.get(StorageService);

        // Act
        expect(service.getApiUrl()).toBe('https://jwt-api-imc.herokuapp.com/');
    });

    it('should call sessionDeleteall method', () => {
        // Arrange
        const service: StorageService = TestBed.get(StorageService);

        // Act
        expect(service.sessionDeleteAll()).toBe('sesionStorage clear');
    });

    it('should call setSession method', () => {
        // Arrange
        const service: StorageService = TestBed.get(StorageService);

        // Act
        expect(service.setSession("token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWN0b3IiLCJpYXQiOjE2MDk2MTA4MTQsImV4cCI6MTYwOTY5NzIxNH0.0NwIGyd5s7Yfs2sWIqM3Gj20_qwvfkTDzQCD_bnDr4XUXG90DKlb56-a3QDBV1YM5E5bJcrOVn0f_v21pxLaMw")).toBe('key guardado');
    });

    it('should call islogged method', () => {
        // Arrange
        const service: StorageService = TestBed.get(StorageService);

        // Act
        service.setSession("token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWN0b3IiLCJpYXQiOjE2MDk2MTA4MTQsImV4cCI6MTYwOTY5NzIxNH0.0NwIGyd5s7Yfs2sWIqM3Gj20_qwvfkTDzQCD_bnDr4XUXG90DKlb56-a3QDBV1YM5E5bJcrOVn0f_v21pxLaMw");
        expect(service.islogged()).toBe(true);
    });

    it('should call cerrarSesion method', () => {
        // Arrange
        const service: StorageService = TestBed.get(StorageService);

        // Act
        service.cerrarSesion();
    });

    it('should call getSesion method', () => {
        // Arrange
        const service: StorageService = TestBed.get(StorageService);

        // Act
        service.getSession("token");
    });

});