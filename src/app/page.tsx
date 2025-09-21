"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="page-container">
        <div className="loading-container">
          <div className="spinner"></div>
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="card">
          <div className="logo">N</div>
          <h1 className="title">Next.js OAuth</h1>
          <p className="description">Authentication demo</p>

          {session ? (
            <div className="space-y-4">
              <div className="user-info">
                <div className="user-info-label">Welcome back</div>
                <div className="user-info-value">
                  {session.user?.name || session.user?.email}
                </div>
              </div>

              <button
                onClick={() => router.push("/dashboard")}
                className="btn btn-primary"
              >
                Go to Dashboard
              </button>

              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="btn"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => router.push("/auth/signin")}
              className="btn btn-primary"
            >
              Sign In
            </button>
          )}
        </div>

        <div className="footer">
          <p className="footer-text">Built with Next.js and NextAuth.js</p>
        </div>
      </div>
    </div>
  );
}
