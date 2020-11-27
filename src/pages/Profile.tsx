import React from "react";
import { useAuth } from "components/Auth";

export default function Profile() {
  const { user } = useAuth();

  return <h1>{user?.name}</h1>;
}
