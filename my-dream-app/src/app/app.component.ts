import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email; //: string;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;
  constructor(){
    console.log("Constructor working...");
    this.name = "Jeferson Joao";
    this.email = "jbasurco@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programación","Netflix"];
    this.showHobbies = false;
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
