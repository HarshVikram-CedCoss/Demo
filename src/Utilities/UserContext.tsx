import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Low Jack",
}) as any;
export default UserContext;
