import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()  title: string;
  @Input()  subtitle: string;
  @Input()  description: string;
  @Input()  image: string;
  @Input()  imageLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
