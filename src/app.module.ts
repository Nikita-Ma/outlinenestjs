import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypegooseModule } from "nestjs-typegoose";
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { PreviewModule } from './preview/preview.module';
import {ConfigModule, ConfigService} from '@nestjs/config'
import {getMongoConfig} from "./configs/mongo.config";

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypegooseModule.forRootAsync({
          imports:[ConfigModule],
          inject:[ConfigService],
          useFactory: getMongoConfig
      }), // async lib
      AuthModule, TopPageModule, ProductModule, PreviewModule]
})
export class AppModule { }
