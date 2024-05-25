import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marriageprofile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './marriageprofile.component.html',
  styleUrl: './marriageprofile.component.css'
})
export class MarriageprofileComponent {
  whatsappPath='marriage/assets/whatsapp.png'; 
  finImg='marriage/assets/flower.jpg';
  
  openwhastapp() {
    window.open('https://wa.me/918928285072');
  }
}
