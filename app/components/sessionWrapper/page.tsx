"use client";
import { SessionProvider } from "next-auth/react";

export const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{childr}</SessionProvider>;
};

//test for git from chandan branch