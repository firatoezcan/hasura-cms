import { sign } from "jsonwebtoken";

const daysInMilliseconds = 1000 * 60 * 60 * 24;

type UserForToken = {
  id: string;
  role: string;
};

export const createToken = (user: UserForToken) => {
  if (!process.env.HASURA_JWT_SECRET) throw new Error(`You need to set an access token via the environment variable "HASURA_JWT_SECRET"`);
  return sign(
    {
      "https://hasura.io/jwt/claims": {
        "X-Hasura-Default-Role": user.role,
        "x-Hasura-Allowed-Roles": [user.role],
        "X-Hasura-User-Id": user.id,
        "X-Hasura-Jwt-Version": "1",
      },
      expiresIn: 14 * daysInMilliseconds,
      iss: process.env.HASURA_JWT_ISSUER,
    },
    process.env.HASURA_JWT_SECRET
  );
};
