import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

// decorator to attach to a class
@Module({
  imports: [ProductsModule],
  controllers: [AppController], // handle requests
  providers: [AppService], // extra services (e.g. DB client) to inject to controllers
})
export class AppModule {}
