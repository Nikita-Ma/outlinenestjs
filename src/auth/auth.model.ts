import {prop} from "@typegoose/typegoose";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";

export interface AuthModel extends Base {}

export class AuthModel extends TimeStamps{

    @prop({unique: true}) // create index in DB, and unique
    email: string;

    @prop()
    passwordHash: string;

}

