import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  template: ` Username: {{ username }} `,
})
export class User {
  username = "Akhmet";
}

@Component({
  selector: "app-root",
  template: `<strong
    ><em><app-user /></em
  ></strong>`,
  imports: [User],
})
export class App {}
