import { useState } from "react";

export default function useAuthentication() {
  const [authenticated, setAuthenticated] = useState(true);

  const isLogin = () => {
    setAuthenticated(true);
  };

  return { authenticated, isLogin };
}
