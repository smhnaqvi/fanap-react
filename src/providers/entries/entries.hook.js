import React from "react";
import { EntriesContext } from "./Entries.provider";

export default function useEntries() {
  const entries = React.useContext(EntriesContext);
  if (entries === undefined) {
    throw new Error("useEntries must be used with in EntriesProvider");
  }
  return entries;
}
