import { hasuraGraphql, handleHasuraError } from "./_utils/";
import { NextApiResponse, NextApiRequest } from "next";

import { is } from "typescript-is";
import { CreateUserMutationVariables } from "generated/hasuraTypes";

type Params = {
  action: {
    name: "register";
  };
  input: CreateUserMutationVariables;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).end();
  if (!is<Params>(req.body)) return res.status(400).send({ message: "Insufficient parameters passed" });

  try {
    const data = await hasuraGraphql.CreateUser(req.body.input);
    if (!data.insert_users_one?.id) throw data;

    // Todo: Dont send the user id when registering
    return res.send({ id: data.insert_users_one.id });
  } catch (e) {
    handleHasuraError(e, res);
  }
};
