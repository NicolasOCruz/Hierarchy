import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  navigationService = inject(NavigationService);

  goBack() {
    this.navigationService.goBack();
  }

}
