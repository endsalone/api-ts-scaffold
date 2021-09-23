import { Max } from "commons/decorators";
import { IDto } from "core/dtos/IDto";
import { Categories } from "core/entities/Categories";
import { MessageErrors } from "core/messages/MessageErrors";

export class CategoriesDto implements IDto{

  id?: string;

  @Max({ value: 100, message: MessageErrors.NAME_MAXIMUM })
  name: string;

  toEntity(): Categories {
    const category: Categories = new Categories();
    category.name = this.name;
    return category;
  }

  static fromObject(object: any): CategoriesDto {
    const dto = new CategoriesDto();
    dto.id = object.id;
    dto.name = object.name;

    return dto;
  }

}
