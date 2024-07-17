import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-dream-app';
  name : string = "Jeferson Joao";
  age : number = 19;
  email; //: string;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;
  users = ['ryan','joe','cameron','john'];
  activated = false;
  constructor(){
    console.log("Constructor working...");
    this.name = "Jeferson Joao";
    this.email = "jbasurco@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programación","Netflix"];
    this.showHobbies = false;
  }
  sayHello() {
    alert("Hola Desde app.component");
  }
  deleteUser(user:any){
    for (let i=0; i<this.users.length; i++){
      if (user==this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
  addUser(newUser:any){
    //console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value='';
    newUser.focus();
    return false;
  }
  showhobbies (){
    return true;
  }
  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
  newHobby(hobby:any){
    //console.log(hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value="";
    return false;
  }
}
