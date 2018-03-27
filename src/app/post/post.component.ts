import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title : String;
  @Input() content: String;
  @Input() loveIts: number;
  @Input() created_at :Date;

  constructor() { }

  ngOnInit() {
  }

  @Input() post: PostComponent;

  onAddLoveIt() {
    this.post.loveIts = this.post.loveIts + 1;
    return console.log(this.post.loveIts);

  }

  onAddDontLoveIt() {
    this.post.loveIts = this.post.loveIts - 1;
    console.log(this.post.loveIts);
  }



}
