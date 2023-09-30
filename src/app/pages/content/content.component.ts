import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from "../../../../data/date";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contentPhoto: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id :string|number|null = "0"
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|number|null){
    const result = data.filter(article => article.id === id)[0]
    this.contentPhoto = result.photo
    this.contentTitle = result.title
    this.contentDescription = result.description
  }
}
