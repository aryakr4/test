import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Jobs",
  description:
    "Job openings with Hutt Capital's fund managers and portfolio companies in the blockchain and crypto venture capital space.",
  openGraph: {
    title: "Portfolio Jobs — Hutt Capital",
    description:
      "Job openings with Hutt Capital's fund managers and portfolio companies in the blockchain and crypto venture capital space.",
    url: "https://www.huttcapital.com/portfolio-jobs",
  },
};

export default function PortfolioJobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
