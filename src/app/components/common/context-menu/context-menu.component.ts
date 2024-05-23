import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss'
})
export class ContextMenuComponent {

  @Input('nodeName') nodeName:string = "";
  @Output('onDeleteOrDetachNode') deleteOrDetachNode: EventEmitter<string> = new EventEmitter();
  @Output('onMenuClose') closeMenu: EventEmitter<null> = new EventEmitter();
  
  constructor(){

  }

  onClickAction(actionType){
    this.deleteOrDetachNode.emit(actionType)
  }

  onCloseAction(){
    this.closeMenu.emit(null)
  }

}
