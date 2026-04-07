import type { GetServerSideProps } from "next";
import Link from "next/link";
import DashboardLayout from "../../components/DashboardLayout";
import { getAuthedFromReq } from "../../lib/dashboardAuth";
import { listDashboardGalleries } from "../../lib/supabaseServer";

export default function DashboardHome({
  galleries,
}: {
  galleries: Array<{
    id: number;
    key: string;
    title: string | null;
    cover: string | null;
  }>;
}) {
  return (
    <DashboardLayout>
      <div className="dashboard-title">Galleries</div>

      <div className="dashboard-grid">
        {galleries.map((g) => (
          <div key={g.id} className="dashboard-card">
            <img
              className="dashboard-card-cover"
              src={g.cover ? `/images/${g.cover}` : "/images/favicon.png"}
              alt={g.title ?? g.key}
            />
            <div className="dashboard-card-key">{g.key}</div>

            <div className="dashboard-card-actions">
              <Link
                className="dashboard-btn"
                href={`/dashboard/galleries/${g.id}`}
              >
                Editar imagens
              </Link>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const authed = await getAuthedFromReq(ctx.req as any);
  if (!authed) {
    return { redirect: { destination: "/dashboard/login", permanent: false } };
  }

  const galleries = await listDashboardGalleries();

  return {
    props: {
      galleries,
    },
  };
};

