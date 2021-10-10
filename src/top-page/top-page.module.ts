import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import {TypegooseModule} from "nestjs-typegoose";
import { TopPageModel } from './top-page.model';


@Module({
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: TopPageModel, //use Model Product (class)
                schemaOptions: { // Schema
                    collection: 'Top-page' // Name collection
                }
            }
        ])
    ],
    controllers: [TopPageController],
    providers: [],
})
export class TopPageModule {}
