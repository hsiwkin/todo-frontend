import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TaskService } from "../_services/task.service";

@Component({
  selector: "app-completed-tasks",
  templateUrl: "./completed-tasks.component.html",
  styleUrls: ["./completed-tasks.component.scss"]
})
export class CompletedTasksComponent implements OnInit {
  @Input() completedTasks;
  @Output() deleteCompleted = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  deleteCompletedTasks() {
    this.deleteCompleted.emit();
  }
}
