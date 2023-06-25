import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  //Component properties
  num1: any;
  num2: any;
  res: any = 0;
  operator: string;
  history: any[] = [];

  //Constructor
  constructor() {}

  //Method to save the operation in the history array
  saveOperation(operator: string): void{
    const operation = {
      num1: this.num1,
      num2: this.num2,
      operator: operator,
      res: this.res
    };
    this.history.push(operation);
  }

  //Method to calculate the sum
  sum(): void {
    if (this.num1 !== undefined && this.num2 !== undefined) {
      this.res = +this.num1 + +this.num2;
      this.saveOperation('+');
    }
  }

  //Method to calculate the substration
  subs(): void {
    if (this.num1 !== undefined && this.num2 !== undefined) {
      this.res = +this.num1 - +this.num2;
      this.saveOperation('-');
    }
  }

  //Method to calculate the multiplication
  multi(): void {
    if (this.num1 !== undefined && this.num2 !== undefined) {
      this.res = +this.num1 * +this.num2;
      this.saveOperation('*');
    }
  }

  //Method to calculate the division
  div(): void {
    if (this.num1 !== undefined && this.num2 !== undefined) {
      this.res = +this.num1 / +this.num2;
      if(Number.isNaN(this.res)){
        this.res = 'Oops! Can\'t divide by zero!'
      }
      this.saveOperation('/');
    }
  }

  //Method to process the operations based on the operator clicked
  calcRes(): void {
    switch (this.operator) {
      case '+':
        this.sum();
        break;
      case '-':
        this.subs();
        break;
      case '*':
        this.multi();
        break;
      case '/':
        this.div();
        break;
      default:
        break;
    }
  }

  //Method to clear the historial array
  clearHistory(): void{
    this.history = [];
  }

  //Method to clear all the input fields in the HTML template
  clearInputs(num1: HTMLInputElement, num2: HTMLInputElement): void{
    num1.value = '';
    num2.value = '';
    this.num1 = undefined;
    this.num2 = undefined;
    this.res = 0;
  }

}
