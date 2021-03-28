import { NextApiResponse } from "next";

export const handleHasuraError = (e: any, res: NextApiResponse) => {
  if (e.response) {
    const { errors } = e.response || {};
    if (errors) {
      return res.status(400).send({ code: errors[0].extensions.code, message: errors[0].message });
    }
  }
  return res.status(400).send({ message: e.message });
};
