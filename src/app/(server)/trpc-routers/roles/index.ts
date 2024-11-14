import { StatusCodes } from "http-status-codes";
import { RoleInterFace } from "@/types/role";
import { GETTRPCResponse } from "@/types/response";
import { RoleValidator } from "@/validators/role.validator";
import commonDecorators from "../../_common";
import roleService from "../../_services/role.service";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import { publicProcedure, router } from "../../trpc";
import { z } from "zod";

const { trpcResponser } = commonDecorators;

export const rolesRouter = router({
  "add-role": publicProcedure.input(RoleValidator).mutation(async (req) => {
    try {
      await roleService.add(req.input);
      return trpcResponser(MESSAGE.roles.add, StatusCodes.CREATED);
    } catch (error) {
      return trpcResponser(error as Error, StatusCodes.BAD_REQUEST);
    }
  }),
  getall: publicProcedure.query(async (): GETTRPCResponse<RoleInterFace[]> => {
    try {
      const roles = await roleService.getAll();
      return trpcResponser(MESSAGE.roles.getAll, StatusCodes.OK, roles);
    } catch (error) {
      return trpcResponser(error as Error, StatusCodes.BAD_REQUEST);
    }
  }),
  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async (request): GETTRPCResponse<RoleInterFace> => {
      try {
        const role = await roleService.get(request.input.id);
        return trpcResponser(MESSAGE.roles.get, StatusCodes.OK, role);
      } catch (error) {
        return trpcResponser(error as Error, StatusCodes.BAD_REQUEST);
      }
    }),
});

export type AppRouter = typeof rolesRouter;
