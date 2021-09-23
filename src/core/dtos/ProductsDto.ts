import { Max } from "commons/decorators";
import { IDto } from "core/dtos/IDto";
import { Products } from "core/entities/Products";
import { MessageErrors } from "core/messages/MessageErrors";

export class ProductsDto implements IDto{

  id?: string;

  @Max({ value: 100, message: MessageErrors.NAME_MAXIMUM })
  name: string;

  @Max({ value: 500, message: MessageErrors.DESCRIPTION_MAXIMUM })
  description: string;

  category: string;

  @Max({ value: 30000, message: MessageErrors.PRICE_MAXIMUM })
  price: number;

  @Max({ value: 500000, message: MessageErrors.QUANTITY_MAXIMUM })
  quantity: number;

  isActive: boolean;

  toEntity(): Products {
    const product: Products = new Products();
    product.name = this.name;
    product.description = this.description;
    product.category = this.category;
    product.price = this.price;
    product.quantity = this.quantity;
    product.isActive = this.isActive;
    return product;
  }

  static fromObject(object: any): ProductsDto {
    const dto = new ProductsDto();
    dto.id = object.id;
    dto.name = object.name;
    dto.description = object.description;
    dto.category = object.category;
    dto.price = object.price;
    dto.quantity = object.quantity;
    dto.isActive = object.isActive;

    return dto;
  }

}
