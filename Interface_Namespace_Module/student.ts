namespace StudentNs{
    export interface studentInt
   {
      fullname:string
      passport:number
      dispDetails():void
   }
   export class Student{
      constructor(public readonly fullname:string, public passport:number){}
          dispDetails():void
          {
              console.log(`Name: ${this.fullname} | Passport: ${this.passport}`);
          }
      }
  }