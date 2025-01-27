export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface IForm {
  name: string;
  email: string;
  password: string;
}

export interface IProductResponse {
  message: string;
  result: boolean;
  data: IProductDetail[];
}

export interface IProductDetail {
  productId: number;
  productSku: string;
  productName: string;
  productPrice: number;
  productShortName: string;
  productDescription: string;
  createdDate: string;
  deliveryTimeSpan: string;
  categoryId: number;
  productImageUrl: string;
  categoryName: string;
}

export interface IProductRequestBody {
  ProductId?: number;
  ProductSku?: string;
  ProductName?: string;
  ProductPrice?: number;
  ProductShortName?: string;
  ProductDescription?: string;
  CreatedDate?: string;
  DeliveryTimeSpan?: string;
  CategoryId?: number;
  ProductImageUrl?: string;
}

export interface IProductRequestBody2 {
  ProductSku?: string;
  ProductName?: string;
  ProductPrice?: number;
  ProductShortName?: string;
  ProductDescription?: string;
  ProductImageUrl?: string;
}

export interface IPost {
  userId: number;
  id?: number;
  title: string;
  body: string;
}
