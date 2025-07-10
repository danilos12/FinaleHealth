import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigserviceModule } from './configservice/configservice.module';


@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true, 
        }),
        ConfigserviceModule,


    ],
})
export class ConfigModule {}
