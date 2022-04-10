import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

// Controller without argument is the root / path
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): object {
    return { name: 'Max' };
    // return this.appService.getHello();
  }
}
