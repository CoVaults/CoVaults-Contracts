import Link from "next/link";
import { navItems } from "@/lib/navigation";
import { LayoutDashboard, ArrowRightLeft, Users, FileText } from "lucide-react";

const Icons = {
  Overview: LayoutDashboard,
  Transactions: ArrowRightLeft,
  Signers: Users,
  Docs: FileText,
};

export function NavLinks() {
  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
      {navItems.map((item) => {
        const Icon = Icons[item.label as keyof typeof Icons];
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-150 hover:bg-white/5 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            {Icon && <Icon className="h-4 w-4 opacity-70" />}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
