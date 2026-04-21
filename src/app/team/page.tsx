"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  {
    name: "Brooke Pollack",
    title: "Managing Partner",
    image: "/headshots/brooke_pollack_headshot(1x1).jpg",
    imageClass: "aspect-square",
    socials: [
      { platform: "x", url: "https://x.com/bhpollack" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/brookepollack/" },
    ],
    bio: [
      "Brooke is the Founder & Managing Partner of Hutt Capital, a blockchain venture capital fund of funds platform.",
      "Prior to Hutt Capital, Brooke spent a decade investing across private fund, secondary and direct strategies with leading global investment firms. Most recently, he spent 4+ years with Greenspring Associates, a venture capital platform with >$17 billion under management where he worked on transactions representing over $750 million of invested or committed capital, and spearheaded their blockchain and crypto efforts.",
      "Earlier in his career, Brooke was at Hamilton Lane (NASDAQ: HLNE), a global private equity advisory and asset management firm, where he focused on private equity secondary transactions. Prior, he was at CTC Consulting, an investment consulting firm for ultra high net worth individuals and families, where he focused on sourcing, diligence and monitoring of fund investments across a wide range of private market strategies.",
      "Brooke lives in Portland, OR with his wife and three kids.",
    ],
  },
  {
    name: "Sandra Familet",
    title: "Partner & COO",
    imageClass: "aspect-square",
    socials: [
      { platform: "x", url: "https://x.com/sandrafamilet" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/sandrafamilet" },
    ],
    image: "/headshots/sandra_headshot(1x1).jpg",
    bio: [
      "With experience spanning over two decades including working with the top decile private equity and venture managers, playing a pivotal role in BlackRock\u2019s massive growth (now recognized as the world\u2019s largest asset manager) from its inception to post-IPO, and being one of the first female executives on the equity, fixed income, commodity and forex trading floors of major investment banks such as Merrill Lynch and Goldman Sachs, Sandra\u2019s diverse skill set was the perfect background to found a market intelligence firm and build her own family office in the last ten years. As Co-CIO along with her husband, Sandra has been investing in numerous venture funds as well as seed to growth equity stage companies in three main areas: Blockchain, Enterprise SaaS and Artificial Intelligence.",
      "Prior, Sandra was a Director and Senior Distribution Banker in Merrill Lynch\u2019s Private Equity Funds Group within the firm\u2019s Investment Banking Division. Before that, Sandra worked with the original eight founders of BlackRock while it was still under the Blackstone name to distribute their very first closed-end bond fund traded on the equity stock exchange; she then joined them full time in building BlackRock\u2019s brand, diversifying its clientele, and winning over $9 billion in new assets under management catapulting the firm to IPO.",
      "Prior to joining BlackRock, Sandra was a Derivatives Sales Trader in London and New York for Goldman Sachs, where she was responsible for the creation and marketing of commodity and foreign currency linked products. Sandra began her career at Merrill Lynch in the Private Resources Group where she structured private placement financings as well as spearheaded the firm\u2019s strategic Entrepreneur of the Year sponsorship interest, built relationships with emerging blue-chip companies and took them public. She later became one of the first women to join the firm\u2019s Client Strategies Group on Merrill\u2019s Fixed Income Trading Floor.",
      "Sandra has her MBA from the Amos Tuck School at Dartmouth and a Bachelor of Science from St. Peter\u2019s College where she graduated Valedictorian, summa cum laude in cursu honorum, with a double major in Accounting and Marketing and minor in Economics.",
      "Sandra also oversees her own family foundation, a charitable organization dedicated to improving quality of life with a special focus on education and healthcare, serves on several boards, is a frequent speaker at family office gatherings, an associate with The Milken Foundation/Faster Cures, a fellow of The Aspen Institute, and one of the earliest supporters of both The Robin Hood Foundation and TED (Technology, Entertainment, Design).",
      "While she is a Series 7, 24, 63 and 82 registered representative with Weild & Co., Member FDIC/SIPC, Sandra is acting as Partner & COO for Hutt Capital, not as a registered person.",
      "Sandra lives in West Palm Beach, FL with her husband, Chauncey.",
    ],
  },
];

const bioFade = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Team() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <main className="px-10 md:px-20 lg:px-32 pb-20">
      <div className="max-w-5xl mx-auto mt-12 lg:mt-20">
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-coral text-3xl md:text-4xl mb-16 md:mb-24"
        >
          Our Team
        </motion.h1>

        <div className="space-y-16 md:space-y-28">
          {teamMembers.map((member, idx) => {
            const reversed = idx % 2 === 1;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              >
                {/* Photo & Socials */}
                <div
                  className={`flex flex-col items-center md:items-start ${
                    reversed ? "md:order-2" : ""
                  }`}
                >
                  <div
                    className={`relative w-full max-w-[280px] md:max-w-none overflow-hidden ${member.imageClass}`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      quality={100}
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 280px, 40vw"
                    />
                  </div>
                  {member.socials.length > 0 && (
                    <div className="flex gap-5 mt-5">
                      {member.socials.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-coral transition-colors p-2 -m-2"
                          title={social.platform === "linkedin" ? "LinkedIn" : "X"}
                        >
                          {social.platform === "linkedin" && (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          )}
                          {social.platform === "x" && (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bio */}
                <div className={reversed ? "md:order-1" : ""}>
                  <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="font-serif text-coral text-3xl md:text-5xl mb-2"
                  >
                    {member.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-coral text-xs tracking-[0.2em] font-semibold mb-8 uppercase"
                  >
                    {member.title}
                  </motion.p>

                  <div className="space-y-6">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={bioFade}
                      className="text-white/80 text-sm leading-7 tracking-wide font-medium"
                    >
                      {member.bio[0]}
                    </motion.p>

                    <button
                      onClick={() =>
                        setExpanded((prev) => ({
                          ...prev,
                          [member.name]: !prev[member.name],
                        }))
                      }
                      className="flex items-center gap-1.5 text-coral text-xs tracking-[0.15em] uppercase font-semibold hover:text-coral/70 transition-colors"
                    >
                      {expanded[member.name] ? "Read less" : "Read more"}
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${expanded[member.name] ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {/* Collapsible remaining paragraphs */}
                    <AnimatePresence initial={false}>
                      {expanded[member.name] && (
                        <motion.div
                          key="expanded"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="space-y-6">
                            {member.bio.slice(1).map((paragraph, i) => (
                              <p
                                key={i}
                                className="text-white/80 text-sm leading-7 tracking-wide font-medium"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </main>
  );
}
