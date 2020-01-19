import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent {
  @Input() todos;
  @Output() completed = new EventEmitter();

  constructor() {}

  markCompleted(todo) {
    this.completed.emit(todo);
  }
}
