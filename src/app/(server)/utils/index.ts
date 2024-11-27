import { NextRequest } from "next/server";

class UtilityDecorators {
  getPaginatedList(payload: NextRequest) {
    const { limit = 1, page = 1 } = Object.fromEntries(
      payload.nextUrl.searchParams.entries()
    );

    return [
      {
        $skip: (Number(page) - 1) * Number(limit),
      },
      {
        $limit: Number(limit),
      },
    ];
  }
}

const utilityDecorators = new UtilityDecorators();

export default utilityDecorators;
