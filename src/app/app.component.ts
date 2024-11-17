import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from "./components/header-bar/header-bar.component";
import { CardsInseridosComponent } from "./components/cards-inseridos/cards-inseridos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderBarComponent, CardsInseridosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoRPG';
}
