export default function RootPage() {
  // Cloudflare _redirects handles / -> /en at the edge.
  // This is a fallback for local dev only.
  return (
    <meta httpEquiv="refresh" content="0;url=/en" />
  );
}
