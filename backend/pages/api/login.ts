import { createToken, handleHasuraError } from "./_utils/";
import { NextApiResponse, NextApiRequest } from "next";

import { is } from "typescript-is";
import { hasuraGraphql } from "./_utils/hasuraGraphql";
import { GetUserQueryVariables } from "generated/hasuraTypes";

type Params = {
  action: {
    name: "login";
  };
  input: GetUserQueryVariables;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).end();
  if (!is<Params>(req.body)) return res.status(400).send("Insufficient parameters passed");

  try {
    const { input } = req.body;
    const data = await hasuraGraphql.GetUser(input);
    if (!data.users_by_pk?.id) throw new Error(`No user found with id "${input.id}"`);

    const token = createToken({ id: data.users_by_pk.id, role: "user" });
    return res.send({ token });
  } catch (e) {
    handleHasuraError(e, res);
  }
};
