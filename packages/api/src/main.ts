import { NestFactory } from "@nestjs/core";
import { env } from "@sparcs-students/api/env";
import { HttpException } from "@nestjs/common";
import { ZodError } from "zod";
import { AppModule } from "./app.module";
import {
  HttpExceptionFilter,
  UnexpectedExceptionFilter,
  ZodErrorFilter,
} from "./common/util/exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(
    new UnexpectedExceptionFilter(),
    new ZodErrorFilter<ZodError>(),
    new HttpExceptionFilter<HttpException>(),
  ); // 만약 global추가하는 경우 AllExceptionFilter 뒤에 추가하면 됨.
  await app.listen(env.SERVER_PORT);
}
bootstrap();
