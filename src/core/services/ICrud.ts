import { Categories } from "core/entities/Categories";
import { DeleteResult } from "typeorm/query-builder/result/DeleteResult";

export interface ICrud<T> {
  listAll(): Promise<T[]>;
  create(T): Promise<T>;

  findById(id: string): Promise<Categories | undefined>;
  deleteById(id: string): Promise<DeleteResult>;
  exits(id: string): Promise<boolean>;
}
