"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/auth/signin");
  }, [session, status, router]);

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

  if (!session) {
    return null;
  }

  return (
    <div className="page-container">
      <div className="content-wrapper dashboard-container">
        <div className="card">
          <div className="logo">N</div>
          <h1 className="title">Dashboard</h1>
          <p className="description">Protected page for authenticated users</p>

          <div className="user-info">
            <div className="user-info-label">User</div>
            <div className="user-info-value">
              {session.user?.name || session.user?.email}
            </div>
          </div>

          {session.user?.email && (
            <div className="user-info">
              <div className="user-info-label">Email</div>
              <div className="user-info-value">{session.user.email}</div>
            </div>
          )}

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
        </div>

        <div className="footer">
          <p className="footer-text">Dashboard • Next.js OAuth Demo</p>
        </div>
      </div>
    </div>
  );
}
