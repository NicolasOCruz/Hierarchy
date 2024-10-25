import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LevelComponent } from "./pages/level/level.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LevelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
