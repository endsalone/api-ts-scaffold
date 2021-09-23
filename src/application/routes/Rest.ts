import { Routes } from "application/routes/Types";
import { App } from "application/server/App";

const server: App = App.instance;

const cacheRoutes: Routes[] = [];

export function Get(path: string): Function {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    cacheRoutes.push({
      descriptor: descriptor.value,
      method: "get",
      name,
      path
    });
  }
}

export function Post(path: string): Function {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    cacheRoutes.push({
      descriptor: descriptor.value,
      method: "post",
      name,
      path
    });
  }
}

export function Put(path: string): Function {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    cacheRoutes.push({
      descriptor: descriptor.value,
      method: "put",
      name,
      path
    });
  }
}

export function Patch(path: string): Function {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    cacheRoutes.push({
      descriptor: descriptor.value,
      method: "patch",
      name,
      path
    });
  }
}

export function Delete(path: string): Function {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    cacheRoutes.push({
      descriptor: descriptor.value,
      method: "delete",
      name,
      path
    });
  }
}

export function Api(path: string): Function {
  return (target: any) => {
    cacheRoutes.map((route: Routes, index: number) => {
      const hasProperty: boolean = target.prototype.hasOwnProperty(route.name)
      if(hasProperty){
        server.app[route.method](path.concat(route.path), route.descriptor)
        delete cacheRoutes[index];
      }
    });
  };
}
