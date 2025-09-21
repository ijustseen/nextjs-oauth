"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <button onClick={() => router.push("/")} className="btn">
        ← Back to Home
      </button>

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="btn btn-primary"
      >
        Sign Out
      </button>
    </div>
  );
}
