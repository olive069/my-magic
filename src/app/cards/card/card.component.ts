import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from 'src/app/shared/models/magicthegathering/card.model';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { trigger,style,state,transition,animate } from '@angular/animations';


@Component({
  selector: 'my-magic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],

  animations: [trigger('zoomEffect', [
    state('initial', style({
      transform: 'scale(1)'
    })),
    state('final', style({
      transform: 'scale(1.1)'
    })),
    // transition('final=>initial', animate('300ms')),
    transition('initial=>final', animate('300ms'))
  ]),
  ]
})



export class CardComponent implements OnInit {

  @Input() id: string;
  public card: CardModel[];
  public name: string;
  public type: string;
  public rarity: string;
  public imageUrl: string;
  constructor(private MagicTheGatheringService: MagicTheGatheringService) {
    this.card = [];

  }
  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  
  ngOnInit() {

  }

  ngOnChanges() {

    if (this.id) {
      this.MagicTheGatheringService.getCardsById(this.id).subscribe(
        (data: CardListModel) => {
          this.card = data.cards;
          this.name = this.card[0].name;
          this.type = this.card[0].type;
          this.rarity = this.card[0].rarity;
          this.imageUrl = this.card[0].imageUrl;
        },
        () => { });
    }
  }
}

