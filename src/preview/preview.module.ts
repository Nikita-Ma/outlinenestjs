import {Module} from "@nestjs/common";
import {PreviewController} from "./preview.controller";
import {TypegooseModule} from "nestjs-typegoose";
import {PreviewModel} from "./preview.model";

@Module({
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: PreviewModel, //use Model Product (class)
                schemaOptions: { // Schema
                    collection: 'Preview' // Name collection
                }
            }
        ])
    ],
    controllers: [PreviewController],
    providers: [],
})
export class PreviewModule {
}
