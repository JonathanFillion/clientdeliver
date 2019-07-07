import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messages-displayer',
  templateUrl: './messages-displayer.component.html',
  styleUrls: ['./messages-displayer.component.css']
})
export class MessagesDisplayerComponent implements OnInit {

  @Input() title;
  @Input() message;

  constructor() { }

  ngOnInit() {
  }

}
