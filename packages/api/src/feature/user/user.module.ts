import { Module } from "@nestjs/common";
import { DrizzleModule } from "src/drizzle/drizzle.module";
import { UserRepository } from "@sparcs-students/api/common/repository/user.repository"; // 추가된 부분
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [DrizzleModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
