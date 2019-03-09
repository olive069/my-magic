import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { TypesService } from 'src/app/shared/services/types.service';
import { TypesModel } from 'src/app/shared/models/magicthegathering/types-model'

@Component({
  selector: 'my-magic-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})



export class TypeListComponent implements OnInit {

  @Output() onTypeSelected: EventEmitter<string>;
  title: string;
  types: string[];

  constructor(private typesService: TypesService ) {
    this.onTypeSelected = new EventEmitter;
  }

  ngOnInit() {
    this.typesService.getTypes().subscribe(
      (data: TypesModel) => this.types = data.types );   
  }
  onClickType(clickedType: string) {
  this.onTypeSelected.emit(clickedType)    
  }

}

