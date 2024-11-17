import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  imagem: String =
    'https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg';

  @Input()
  title: String = 'Title';

  @Input()
  texto: String =
    'texto inserido aquiLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officia, iure nulla voluptatum obcaecati eveniet nesciunt voluptate quam ut! Voluptatibus blanditiis ab esse laborum quod, voluptas animi fugit corporis natus?';

  @Input()
  idade: Number = 0;

  @Input()
  elemento: String = "elemento aqui"


}
