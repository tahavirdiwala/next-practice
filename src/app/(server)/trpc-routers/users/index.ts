import { StatusCodes } from "http-status-codes";
import commonDecorators from "../../_common";
import { publicProcedure, router } from "../../trpc";
import userService from "../../_services/user.service";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";

const { trpcResponser } = commonDecorators;

export const userRouter = router({
  getall: publicProcedure.query(async () => {
    try {
      const users = await userService.getAll();
      return trpcResponser(MESSAGE.users.getAll, StatusCodes.OK, users);
    } catch (error) {
      return trpcResponser(error as Error, StatusCodes.BAD_REQUEST);
    }
  }),
});