import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HierarchyComponent } from "./pages/hierarchy/hierarchy.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HierarchyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
