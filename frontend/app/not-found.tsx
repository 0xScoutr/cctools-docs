import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center animate-fade-in">
      <div className="text-[4rem] font-heading font-bold text-t4 mb-2">
        404
      </div>
      <h1 className="font-heading font-bold text-[var(--text-xl)] text-t1 mb-2">
        Page not found
      </h1>
      <p className="text-t2 text-[var(--text-md)] mb-8 max-w-[360px]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-2.5 bg-lime text-navy font-heading font-bold text-[var(--text-sm)] rounded-[var(--radius-pill)] hover:bg-lime-hover transition-colors"
      >
        <ArrowLeft size={14} />
        Back to Docs
      </Link>
    </div>
  );
}
