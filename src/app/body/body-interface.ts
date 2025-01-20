export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Items {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: Category
}

export interface Category {
  id: number
  name: string
  image: string
  creationAt: string
  updatedAt: string
}
