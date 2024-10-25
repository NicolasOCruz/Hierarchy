import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {

  @Input('file') file?: File;
}
