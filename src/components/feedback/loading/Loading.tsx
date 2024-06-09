import { TLoading } from "@components/types/shardTypes";

type LoadingProps = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
};

const styles: React.CSSProperties = { textAlign: "center", marginTop: "1rem" };

export default function Loading({ loading, error, children }: LoadingProps) {
  if (loading === "pending") {
    return <div style={styles}>Loading Please Wait ...</div>;
  }
  if (loading === "failed") {
    return <p style={styles}>{error}</p>;
  }
  return <>{children}</>;
}
