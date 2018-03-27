import {Component, Input} from '@angular/core';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  PostListComponent =[

    {
      title: 'Mon premier post',
      content: 'je suis cheikh tourad ',
      loveIts: 2,
      created_at: Date()
    },
    {
      title: 'Mon deuxiem post',
      content: 'je suis mohamedou',
      loveIts: -1,
      created_at: Date()
    },
    {
      title: 'Encore un post',
      content: 'je personne ',
      loveIts: 0,
      created_at: Date()
    }
  ];
}
