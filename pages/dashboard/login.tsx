import type { GetServerSideProps } from "next";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "../../components/DashboardLayout";
import { getAuthedFromReq } from "../../lib/dashboardAuth";

export default function DashboardLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/dashboard/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) throw new Error("Unauthorized");
      router.push("/dashboard");
    } catch (err) {
      setError("Senha inválida");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="dashboard-title">Dashboard login</div>
      <form onSubmit={submit}>
        <div className="dashboard-form-row">
          <div className="dashboard-input">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        {error ? <p style={{ color: "#b3261e" }}>{error}</p> : null}
        <button className="dashboard-btn" disabled={loading} type="submit">
          {loading ? "Enviando..." : "Entrar"}
        </button>
      </form>
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const authed = await getAuthedFromReq(ctx.req as any);
  if (authed) {
    return { redirect: { destination: "/dashboard", permanent: false } };
  }
  return { props: {} };
};

