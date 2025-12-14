import { IProduct } from "../productos/types/product.types";

export interface ICart extends IProduct {
  count: number;
}
