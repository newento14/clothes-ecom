import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ProductsService } from './products.service';
import { CreateProductDto } from "./dto/createProduct.dto";
import { clotheType, sortType } from "./sort.type";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAllWithSort( @Query('type') clotheType: clotheType, @Query('sortType') type?: sortType ) {
    return this.productsService.findAll(clotheType, type);
  }

  @Get('search')
  findAllBySearchTerm(@Query('searchTerm') searchTerm?: string) {
    return this.productsService.bySearchTerm(searchTerm)
  }

  @Get('/slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.productsService.findBySlug(slug)
  }

  @Get('/relatives/:id')
  findRelatives(@Param('id') id: string) {
    return this.productsService.findRelatives(+id)
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.productsService.findById(+id)
  }
}
