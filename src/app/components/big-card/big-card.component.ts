import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:String =""
  @Input()
  cardTittle:String =""
  @Input()
  cardDescription:String =""
  @Input()
  id:String ="0"

  constructor() { }

  ngOnInit(): void {
  }

}
