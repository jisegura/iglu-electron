import { Injectable } from '@angular/core';
import { HttpSnackBarService } from './http-snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: string[] = [];

  constructor(public httpSnackBarService: HttpSnackBarService) { }

  public addSuccess(message: string): void{
    console.log(message);
    this.messages.push(message);
    this.httpSnackBarService.openSnackBar(message, "OK");
  }

  public addError(message: string): void{
    console.log(message);
    this.messages.push(message);
    this.httpSnackBarService.openSnackBar(message, "ERROR");
  }

  public clear(): void{
    this.messages = [];
  }

}
