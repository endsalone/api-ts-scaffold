import { getCustomRepository } from "typeorm";
import { DeleteResult } from "typeorm/query-builder/result/DeleteResult";

import { Categories } from "core/entities/Categories";
import { Products } from "core/entities/Products";

import { ProductsRepository } from "core/repositories/ProductsRepository";
import { ICrud } from "core/services/ICrud";

export class ProductsService implements ICrud<Products> {
  private static _instance: ProductsService;
  _repository: ProductsRepository;

  constructor() {
    this._repository = getCustomRepository(ProductsRepository);
  }

  static get instance() {
    return this._instance || (this._instance = new ProductsService());
  }

  create(T): Promise<Products> {
    return this._repository.save(T);
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this._repository.delete(id);
  }

  async exits(id: string): Promise<boolean> {
    const doesExists: Products[] = await this._repository.find({ id });
    return doesExists.length > 0;
  }

  findById(id: string): Promise<Categories | undefined> {
    return this._repository.findOne({ id });
  }

  listAll(): Promise<Products[]> {
    return this._repository.find();
  }

}
