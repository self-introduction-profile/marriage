import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarriageprofileComponent } from './marriageprofile/marriageprofile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarriageprofileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'profile';
  imagePath1='../assets/profilePic.jpg';
  imagePath2='../assets/proPic.JPG';
}
