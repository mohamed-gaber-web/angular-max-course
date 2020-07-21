import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import {ShoppingServices} from '../shopping.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') myNameInput: ElementRef;
  @ViewChild('amountInput') myAmountInput: ElementRef

  // @Output() ingredientsAdded = new EventEmitter<{name: string, amount: number}>();

  constructor(private ingredServ: ShoppingServices) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const inpName = this.myNameInput.nativeElement.value;
    const inpAmount = this.myAmountInput.nativeElement.value;
    const newIngredients = new Ingredients(inpName, inpAmount);
    this.ingredServ.addIngredient(newIngredients);
    // this.ingredientsAdded.emit(newIngredients);
  }
}
