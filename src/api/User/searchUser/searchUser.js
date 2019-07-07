import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchUser: async (_, args) => {
      const { term } = args;
      if (term.length > 0) {
        const users = await prisma.users({
          where: {
            OR: [
              { userName_contains: args.term },
              { firstName_contains: args.term },
              { lastName_contains: args.term }
            ]
          }
        });
        return users;
      } else {
        throw Error("검색하고자 할 이름을 입력해주세요.");
      }
    }
  }
};