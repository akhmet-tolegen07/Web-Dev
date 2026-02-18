import { Component } from "@angular/core";
import { User } from "./8_1";

@Component({
  selector: "app-root",
  template: ` <app-user name="Simran" /> `,
  imports: [User],
})
export class App {}
