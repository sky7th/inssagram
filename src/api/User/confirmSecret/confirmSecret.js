import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      if (user.loginSecret === secret) {
        // loginSecret 제거
        await prisma.updateUser({
          where: { id: user.id },
          data: {
            loginSecret: ""
          }
        });
        return generateToken(user.id);
      } else {
        throw Error("인증 문자가 다릅니다.");
      }
    }
  }
}