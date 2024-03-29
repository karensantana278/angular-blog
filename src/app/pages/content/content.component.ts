import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  photoCover: string = '';

  contentTitle: string = '';

  contentDescription: string = '';

  private id: string | null = '0';

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"]
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(
      article => article.id === id
      )[0]

      this.photoCover = result.photoCover
      this.contentTitle = result.title
      this.contentDescription = result.description
  }

}
