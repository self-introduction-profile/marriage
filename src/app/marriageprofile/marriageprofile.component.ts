import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-marriageprofile',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './marriageprofile.component.html',
  styleUrls : ['./marriageprofile.component.css']
})

export class MarriageprofileComponent {

  whatsappPath='assets/whatsapp.png'; 
  finImg='assets/flower.jpg';
  openwhastapp() {
    window.open('https://wa.me/918928285072');
  }

  updateLiveValue(): string {
    const dtOfBirth = new Date('1993-07-05T22:11:00');
    const nowdt = new Date();
    const age = nowdt.getTime()-dtOfBirth.getTime();

    const year = Math.floor(age/(1000*60*60*24*365.25));
    const months = Math.floor((age%(1000*60*60*24*365.25))/(1000*60*60*24*30.44));
    const day = Math.floor((age%(1000*60*60*24*30.44))/(1000*60*60*24)); 
    const hours = Math.floor((age%(1000*60*60*24))/(1000*60*60)); 
    const minutes = Math.floor((age%(1000*60*60))/(1000*60)); 
    const seconds = Math.floor((age%(1000*60))/(1000)); 

    // const ageis =`${year}y ${months}m ${day}d ${hours}h:${minutes}m:${seconds}s`;
    return `${year}y ${months}m  ${day}d ${hours}h:${minutes}m:${seconds}s`;
  }

}
