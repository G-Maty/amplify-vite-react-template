import { defineAuth } from "@aws-amplify/backend";

/**
 * 認証リソースを定義して設定します
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
