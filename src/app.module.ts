import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { DecryptMiddleware } from './middleware/decrypt.middleware';
import {ConfigModule} from '@nestjs/config'
import { PrismaService } from 'prisma/prisma.service';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({isGlobal: true}),
    UsersModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DecryptMiddleware).forRoutes('*'); // Apply middleware globally
  }
}