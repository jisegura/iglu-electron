import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: string[] = [];

  constructor() { }

  public addSuccess(message: string): void{
    console.log(message);
    this.messages.push(message);
  }

  public addError(message: string): void{
    console.error(message);
    this.messages.push(message);
  }

  public clear(): void{
    this.messages = [];
  }

}
