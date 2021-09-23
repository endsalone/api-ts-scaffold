import { Products } from "core/entities/Products";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {}
