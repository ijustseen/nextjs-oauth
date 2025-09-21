import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/SignOutButton";
import { Session } from "next-auth";

export default async function Dashboard() {
  const session = (await getServerSession(authOptions)) as Session | null;

  if (!session) {
    redirect("/auth/signin");
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

          <SignOutButton />
        </div>

        <div className="footer">
          <p className="footer-text">Dashboard • Next.js OAuth Demo</p>
        </div>
      </div>
    </div>
  );
}
