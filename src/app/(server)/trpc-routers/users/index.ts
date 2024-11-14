import { StatusCodes } from "http-status-codes";
import commonDecorators from "../../_common";
import { publicProcedure, router } from "../../trpc";
import userService from "../../_services/user.service";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import { GETTRPCResponse } from "@/types/response";
import { UserInterFace } from "@/types/user";
import { UserValidator } from "@/validators/user.validator";

const { trpcResponser } = commonDecorators;

export const userRouter = router({
  add: publicProcedure.input(UserValidator).mutation(async (request) => {
    try {
      await userService.add(request.input);
      return trpcResponser(MESSAGE.users.add, StatusCodes.CREATED);
    } catch (error) {
      return trpcResponser(error as Error, StatusCodes.BAD_REQUEST);
    }
  }),
  getall: publicProcedure.query(async (): GETTRPCResponse<UserInterFace[]> => {
    try {
      const users = await userService.getAll();
      return trpcResponser(MESSAGE.users.getAll, StatusCodes.OK, users);
    } catch (error) {
      return trpcResponser(error as Error, StatusCodes.BAD_REQUEST);
    }
  }),
});
