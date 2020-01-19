import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

import { TaskService } from "./_services/task.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "todo-frontend";
  todos: {
    completed: Array<any>;
    notCompleted: Array<any>;
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getData();
  }

  onNewTask(task) {
    this.getData();
  }

  onCompleted(todo) {
    this.taskService.markCompleted(todo._id).subscribe(result => {
      this.getData();
    });
  }

  onDeleteCompleted() {
    this.taskService.deleteCompleted().subscribe(result => this.getData());
  }

  getData() {
    this.taskService
      .getAll()
      .pipe(
        map(values => {
          return values.reduce(
            (acc, value) => {
              if (value.completed) {
                acc.completed.push(value);
              } else {
                acc.notCompleted.push(value);
              }
              return acc;
            },
            { completed: [], notCompleted: [] }
          );
        })
      )
      .subscribe(result => (this.todos = result));
  }
}
