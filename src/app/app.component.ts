import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeColourOnHoverDirective } from './shared/change-colour-on-hover.directive';
import { DraggableElementDirective } from './shared/draggable-element.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChangeColourOnHoverDirective, DraggableElementDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unionInsuranceAssessmentAppDirectives';
}
