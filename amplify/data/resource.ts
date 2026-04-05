import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== 手順 1 ===============================================================
以下のセクションでは、"content" フィールドを持つ Todo データベーステーブルを
作成しています。試しに boolean 型の新しい "isDone" フィールドを追加してみて
ください。下の認可ルールでは、API キーで認証された任意のユーザーが、
"Todo" レコードを "create"、"read"、"update"、"delete" できるように
指定しています。
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    // API キーは a.allow.public() のルールで使用されます
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== 手順 2 ===============================================================
フロントエンドのソースコードへ移動してください。クライアント側のコードから、
テーブルに対して CRUDL リクエストを行うための Data クライアントを生成します。
（このスニペットはフロントエンドのコードファイルでのみ動作します。）

JavaScript や Next.js の React Server Components、Middleware、Server
Actions、Pages Router を使っていますか。これらのユースケース向けに Data
クライアントを生成する方法は、次のドキュメントを確認してください:
https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // CRUDL リクエストにはこの Data クライアントを使用します
*/

/*== 手順 3 ===============================================================
データベースからレコードを取得し、フロントエンドのコンポーネント内で使用します。
（このスニペットはフロントエンドのコードファイルでのみ動作します。）
=========================================================================*/

/* たとえば React コンポーネントでは、このスニペットを関数の
  return 文の中で使用できます */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
