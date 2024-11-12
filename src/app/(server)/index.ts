import { StatusCodes } from "http-status-codes";
import { RESPONSE_MESSAGE as MESSAGE } from "../lib/constant";
import commonDecorators from "./_common";
import { publicProcedure, router } from "./trpc";
import roleService from "./_services/role.service";
import connectDb from "@/dbConfig";
import { RoleInterFace } from "@/types/role";
import { GETTRPCResponse } from "@/types/response";

const { trpcResponser } = commonDecorators;
await connectDb();

export const appRouter = router({
  "get-role": publicProcedure.query(
    async (): GETTRPCResponse<RoleInterFace[]> => {
      try {
        const roles = await roleService.getAll();
        return trpcResponser(MESSAGE.roles.getAll, StatusCodes.OK, roles);
      } catch (error) {
        return trpcResponser(`${error}`, StatusCodes.BAD_REQUEST);
      }
    }
  ),
});

export type AppRouter = typeof appRouter;
