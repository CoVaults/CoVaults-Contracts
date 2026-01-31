import Link from "next/link";
import { Castle } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground"
      aria-label="StacksFort home"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shadow-lg shadow-amber-500/20 transition-transform duration-200 group-hover:scale-105">
        <Castle className="h-6 w-6 text-zinc-900" />
      </div>
      <span className="leading-tight">
        <span className="block text-base">StacksFort</span>
        <span className="block text-xs font-normal text-slate-400">
          Multisig Vault
        </span>
      </span>
    </Link>
  );
}
