import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TaskService } from "../_services/task.service";

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.scss"]
})
export class NewTaskComponent implements OnInit {
  @Output() newTask = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    const taskDescription = f.value["task-description"];

    this.taskService.newTask(taskDescription).subscribe(result => {
      f.reset();
      this.newTask.emit({
        _id: result.id,
        description: taskDescription
      });
    });
  }
}
