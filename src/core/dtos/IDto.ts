import {BaseEntity} from "typeorm";

export interface IDto {
  toEntity(): BaseEntity;
}
