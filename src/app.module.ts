import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://asad:123@cluster0.mpfckh9.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


