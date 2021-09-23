import { EntityRepository, Repository } from "typeorm";

import { Categories } from "core/entities/Categories";

@EntityRepository(Categories)
export class CategoriesRepository extends Repository<Categories> {}
