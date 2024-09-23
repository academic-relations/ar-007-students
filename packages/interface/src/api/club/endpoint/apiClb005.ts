import { HttpStatusCode } from "axios";
import { z } from "zod";

/**
 * @version v0.1
 * @description 동아리의 기본 정보를 수정합니다
 */

const url = () => `/student/students/club/{club_id}/brief`;
const method = "PUT";

const requestParam = z.object({
  clubId: z.number().int(), // clubId는 정수형 숫자
});

const requestQuery = z.object({});

const requestBody = z.object({
  description: z.string(),
  roomPassword: z.string().max(20),
});

const responseBodyMap = {
  [HttpStatusCode.Created]: z.object({}),
};

const responseErrorMap = {};

type ApiClb005RequestParam = z.infer<typeof apiClb005.requestParam>;
type ApiClb005RequestQuery = z.infer<typeof apiClb005.requestQuery>;
type ApiClb005RequestBody = z.infer<typeof apiClb005.requestBody>;
type ApiClb005ResponseCreated = z.infer<
  (typeof apiClb005.responseBodyMap)[201]
>;

const apiClb005 = {
  url,
  method,
  requestParam,
  requestQuery,
  requestBody,
  responseBodyMap,
  responseErrorMap,
};

export default apiClb005;

export type {
  ApiClb005RequestParam,
  ApiClb005RequestQuery,
  ApiClb005RequestBody,
  ApiClb005ResponseCreated,
};
