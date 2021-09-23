import { Api, Get, Post } from "application/routes/Rest";
import { Request, Response } from "express";

import { ProductsDto } from "core/dtos/ProductsDto";
import { Products } from "core/entities/Products";
import { ProductsService } from "core/services/ProductsService";
import { IController } from "ports/in/IController";

@Api("/products")
export class ProductsController implements IController {

  @Get("/")
  async listProducts(req: Request, res: Response) {
    const response = await ProductsService.instance.listAll();
    res.status(200).send(response);
  }

  @Get("/:id")
  async getProduct(req: Request, res: Response) {
    const id = req.params.id;
    const response = await ProductsService.instance.findById(id);
    res.status(200).send(response);
  }

  @Post("/")
  async createProduct(req: Request, res: Response) {
    const dto: ProductsDto = ProductsDto.fromObject(req.body);
    const saved: Products = await ProductsService.instance.create(dto.toEntity());
    res.status(201).send(ProductsDto.fromObject(saved));
  }

}
