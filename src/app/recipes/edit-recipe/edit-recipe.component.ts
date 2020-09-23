import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id: number;
  editMode = false; // add recipe
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe(param => {
      this.id = +param['id']; // get id
      this.editMode = param['id'] != null; // id === edit not id === add
     })
  }

}
