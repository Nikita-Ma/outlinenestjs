import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {PreviewModel} from "./preview.model";

@Controller('preview')
export class PreviewController {

    @Post('create')
    async create(@Body() dto: Omit<PreviewModel, '_id'>) {

    }

    @Delete(':id')
    async delete(@Param(':id') id: string) {

    }

    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId: string) {

    }

}
