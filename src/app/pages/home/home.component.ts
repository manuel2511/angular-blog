import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from "../../../../data/date";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// homePhoto: string = ""
// homeTitle: string = ""
// homeDescription: string = ""
// private id :string|number|null = "0"
// constructor(
//   private route: ActivatedRoute
// ) { }

// ngOnInit(): void {
//   this.route.paramMap.subscribe( value =>
//     this.id = value.get("id")
//   )
//   this.setValuesToComponent(this.id)
// }

// setValuesToComponent(id:string|number|null){
//   const result = data.filter(home => home.id === id)[0]

//   this.homePhoto = result.photo
//   this.homeTitle = result.title
//   this.homeDescription = result.description
//   console.log(this.id);
// }
// }
