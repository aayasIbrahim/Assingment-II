import type { JwtPayload } from "jsonwebtoken";

export const USER_ROLE = {
  contributor: "contributor",
  maintainer: "maintainer",
} as const;
export type Roles = "contributor" | "maintainer";
export type TokenPayload = JwtPayload & {
  id: number;
  email: string;
  role: Roles;
};