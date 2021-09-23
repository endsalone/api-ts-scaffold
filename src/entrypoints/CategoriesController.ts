import { Request, Response } from "express";

import {Api, Post} from "application/routes/Rest";

import {CategoriesDto} from "core/dtos/CategoriesDto";
import {CategoriesService} from "core/services/CategoriesService";


@Api("/categories")
export class CategoriesController{

  @Post("/")
  async createCategory(req: Request, res: Response) {
    const dto: CategoriesDto = CategoriesDto.fromObject(req.body);
    const saved = await CategoriesService.instance.create(dto.toEntity());
    res.status(201).send(saved);
  }

}
