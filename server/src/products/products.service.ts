import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from '../prisma.service';
import { clotheType, sortType } from "./sort.type";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  bySearchTerm(searchTerm?: string) {
    return this.prisma.product.findMany(
      searchTerm
        ? {
            where: {
              OR: [
                {
                  name: {
                    contains: searchTerm,
                  },
                },
                {
                  description: {
                    contains: searchTerm,
                  },
                },
              ],
            },
          }
        : undefined,
    );
  }

  async findAll(clotheType: clotheType, type?: sortType) {
    const isByPrice = type === 'high-to-low' || type === 'low-to-high';
    const isAsc = type === 'oldest' || type === 'low-to-high';

    const orderBy = {
      [isByPrice ? 'price' : 'createdAt']: isAsc ? 'asc' : 'desc',
      // createdAt: type === 'oldest' ? 'asc' : 'desc'
      // price: type === 'high-to-low' ? 'desc' : 'asc'
    } as any;

    return this.prisma.product.findMany({
      where: {type: clotheType},
      orderBy,
    });
  }

  async findById(id: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        reviews: true,
      },
    });

    if (!product) throw new NotFoundException('Product not found!');

    return product;
  }

  async findBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        slug,
      },
      include: {
        reviews: true,
      },
    });

    if (!product) throw new NotFoundException('Product not found!');
    return product;
  }

  findRelatives(currentProductId: number) {
    return this.prisma.product.findMany({
      where: {
        id: {
          not: currentProductId,
        },
      },
    });
  }
}
