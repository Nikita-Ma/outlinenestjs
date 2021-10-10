import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";

export interface PreviewModel extends Base {

}

export class PreviewModel extends TimeStamps {
    @prop()
    name: string;
    @prop()
    title: string;
    @prop()
    description: string;
    @prop()
    rating: number;
    @prop()
    created: Date;
}
