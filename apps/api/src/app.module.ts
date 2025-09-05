import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '@employee-management/db';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [User],
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      type: 'postgresql',
      // Automatically create schema in development.
      // In production, you should use migrations.
      autoSchemaSync: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
