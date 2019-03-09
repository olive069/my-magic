import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypesService } from '../shared/services/types.service';
import { TypesModel } from '../shared/models/magicthegathering/types-model';
import { Location } from '@angular/common';

@Component({
  selector: 'my-magic-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

  public query: string; //on déclare query
  public title: string;
  public types: string[];
  public isLoading: boolean


  constructor(private ActiveRoute: ActivatedRoute, private typesService: TypesService) {
    this.title = "My Magic";
    this.query = null;
    this.isLoading = false;
    this.typesService.getTypes().subscribe(
      (data: TypesModel) => this.types = data.types);
    }

  ngOnInit() { //on instancie query avec l'activeroute  
    if (null === this.query) {
      this.ActiveRoute.url.subscribe(
        () => {
          this.query = this.ActiveRoute.snapshot.params["query"];
        },
      )
    }
  }

  toggleLoading() {
    console.log(this.isLoading);
    this.isLoading = !this.isLoading;    
  }
}
