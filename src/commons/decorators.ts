import "reflect-metadata";

type Value = {
  value: number,
  message: string,
};

export function Max(limit: Value): Function {
  return (target: any, propertyKey: string) => {
    let value: any;
    const setter = (newValue: any): any => {
      if(typeof newValue === "string" && newValue.length > limit.value) {
        throw new Error(limit.message);
      }
      if(typeof newValue === "number" && newValue > limit.value) {
        throw new Error(limit.message);
      }
      value = newValue;
      Reflect.defineMetadata(`max:${propertyKey}`, newValue, target);
      return newValue;
    };


    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get(): any {
        return Reflect.getMetadata(`max:${propertyKey}`, target, propertyKey);
      },
      set(newValue): void {
        value = setter(newValue);
      },
    })
  }
}
