import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import {DocumentController} from './document/document.controller'
import { AppService } from './app.service';
import { DocumentService } from './document/document.service';
import TestService from './service/test.service';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController,DocumentController],
  providers: [AppService, DocumentService, TestService]
})
export class AppModule {}