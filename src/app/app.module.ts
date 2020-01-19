import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [AppComponent, NewTaskComponent, CompletedTasksComponent, TodosComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
