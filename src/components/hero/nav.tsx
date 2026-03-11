import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";

const navItems = [
  {
    label: "Features",
    href: "/#features",
  },
  {
    label: "Partner Mode",
    href: "/#partner-mode",
  },
  {
    label: "Privacy",
    href: "/privacy-policy",
  },
];

export function Nav() {
  return (
    <>
      <MobileNav className="flex md:hidden" items={navItems} />
      <DesktopNav className="hidden md:flex" items={navItems} />
    </>
  );
}
