import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { CardModel } from 'src/app/shared/models/magicthegathering/card.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { Router } from '@angular/router';
import { TypesService } from 'src/app/shared/services/types.service'


@Component({
  selector: 'my-magic-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {

  @Input() type: string;
  @Output() onBeforeCards: EventEmitter<Boolean>;
  @Output() onLoadCards: EventEmitter<Boolean>;

  public cards: CardModel[];
  public types: string[];
  public load: boolean;
  public errors : string;


  constructor(private MagicTheGatheringService: MagicTheGatheringService,
    private typesService: TypesService,
    private router: Router) {
    this.onBeforeCards = new EventEmitter;
    this.onLoadCards = new EventEmitter;
    this.cards = [];
  }

  ngOnInit() { }


  ngOnChanges() {
    this.typesService.getTypes();
    if (!this.type) { 
      console.log("vide");     
      this.onBeforeCards.emit(true);
      this.MagicTheGatheringService.getCards().subscribe(
        (data: CardListModel) => this.cards = data.cards);
        this.onLoadCards.emit(true);
      // this.type = "Cartes par défaut";
    }
    if (this.typesService.isType(this.type)) {

      this.router.navigate(['/cards']);
      return
    }
    this.loadCards();

  }
  loadCards() {
    this.onBeforeCards.emit(true);
    this.MagicTheGatheringService.getCardsByType(this.type).subscribe(
      (data: CardListModel) => {
        this.cards = data.cards;
        this.onLoadCards.emit(true);
        console.log("cartes chargées");

      }
      ,
      () => {});
  }
}