import { getCustomRepository } from "typeorm";
import { DeleteResult } from "typeorm/query-builder/result/DeleteResult";

import { Categories } from "core/entities/Categories";
import { CategoriesRepository } from "core/repositories/CategoriesRepository";
import { ICrud } from "core/services/ICrud";

export class CategoriesService implements ICrud<Categories> {

  private static _instance: CategoriesService;
  _repository: CategoriesRepository;

  constructor() {
    this._repository = getCustomRepository(CategoriesRepository);
  }

  static get instance() {
    return this._instance || (this._instance = new CategoriesService());
  }

  create(T): Promise<Categories> {
    return this._repository.save(T);
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this._repository.delete(id);
  }

  async exits(id: string): Promise<boolean> {
    const doesExists: Categories[] = await this._repository.find({ id });
    return doesExists.length > 0;
  }

  findById(id: string): Promise<Categories | undefined> {
    return this._repository.findOne({ id });
  }

  listAll(): Promise<Categories[]> {
    return this._repository.find();
  }

}
