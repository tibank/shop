import {CategoryModel} from './category.model';

export class ProductModel {
  constructor(public id: number,
              public name: string,
              public category: CategoryModel
              ) {
  }

}
