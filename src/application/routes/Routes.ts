import { log } from "console";

import {App} from "application/server/App";
import {CategoriesController} from "../../entrypoints/CategoriesController";
import {ProductsController} from "../../entrypoints/ProductsController";

import { IController } from "ports/in/IController";

export class Routes {
  static load(): IController[] {
    return [
      new ProductsController(),
      new CategoriesController(),
    ];
  }

  static print() {
    const server = App.instance;
    server.app._router.stack.forEach((value: any) => {
      if(value.route) {
        const method: string = value.route.stack[0].method;
        log(`[${method}] - ${value.route.path}`);
      }
    })
  }
}
