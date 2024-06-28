import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TemplatesService } from './templates.service';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  /**
   * Creates a new template
   * @param {Prisma.TemplateCreateInput} createTemplateDto The template data transfer object
   * @returns - The created template
   */
  @Post()
  create(@Body() createTemplateDto: Prisma.TemplateCreateInput) {
    return this.templatesService.create({ ...createTemplateDto });
  }

  /**
   * Retrieves all templates
   * @returns . An array of all templates
   */
  @Get()
  findAll() {
    return this.templatesService.findAll();
  }

  /**
   * Retrieves a template by ID
   * @param {number} id - The ID of the template to retrieve
   * @returns - The template with the specified ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.templatesService.findOne(id);
  }

  /**
   * Updates a template by ID
   * @param {number} id - The ID of the template to update
   * @param {Prisma.TemplateUpdateInput} updateTemplateDto - The updated template data traansfer object
   * @returns - The updated template
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTemplateDto: Prisma.TemplateUpdateInput,
  ) {
    return this.templatesService.update(id, updateTemplateDto);
  }

  /**
   * Deletes a template by ID
   * @param {number} id - The ID of the template to delete
   * @returns - The deleted template
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.templatesService.remove(id);
  }
}