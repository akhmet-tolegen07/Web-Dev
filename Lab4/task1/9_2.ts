import { Component } from "@angular/core";
import { Child } from "./9_1";

@Component({
  selector: "app-root",
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
    @for (item of items; track item.id) {
      {{ item }}
    }
  `,
  imports: [Child],
})
export class App {
  items = new Array();
  addItem(item: string) {
    this.items.push(item);
  }
}
