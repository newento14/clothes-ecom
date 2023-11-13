export interface IProduct {
  id: number,
  name: string,
  description: string,
  slug: string,
  type: ClotheType,
  price: number,
  images: string[]
}

export type ClotheType = 'men' | 'women';