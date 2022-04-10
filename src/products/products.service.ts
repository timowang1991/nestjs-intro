import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const [product] = this.findProduct(productId);
    return {...product};
  }

  updateProduct(productId: string, title: string, desc: string, price: number) {
    const [product, index] = this.findProduct(productId);
    this.products[index] = {
      ...product,
      title: title || product.title,
      description: desc || product.description,
      price: price || product.price,
    }
  }

  deleteProduct(productId: string) {
    const [product, index] = this.findProduct(productId);
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIdx = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIdx];
    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return [product, productIdx];
  }
}
