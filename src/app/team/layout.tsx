import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Hutt Capital team. Led by experienced investment professionals with decades of experience across venture capital, private equity, and blockchain.",
  openGraph: {
    title: "Team — Hutt Capital",
    description:
      "Meet the Hutt Capital team. Led by experienced investment professionals with decades of experience across venture capital, private equity, and blockchain.",
    url: "https://www.huttcapital.com/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
