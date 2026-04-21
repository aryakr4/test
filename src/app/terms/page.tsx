type Section = {
  title: string;
  content: string;
  email?: string;
};

const sections: Section[] = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using the Hutt Capital website (huttcapital.com), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.",
  },
  {
    title: "2. Informational Purposes Only",
    content:
      "The content on this website is provided for informational purposes only and does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation for any security, investment product, or investment strategy. Nothing on this website should be construed as investment, legal, tax, or other professional advice. Past performance is not indicative of future results.",
  },
  {
    title: "3. Not an Offer of Securities",
    content:
      "Nothing on this website constitutes an offer to sell or solicitation of an offer to buy any securities. Any such offer or solicitation will be made only by means of a confidential private placement memorandum or similar offering document and only to accredited investors in accordance with applicable securities laws.",
  },
  {
    title: "4. No Investment Advice",
    content:
      "Hutt Capital does not provide investment advice through this website. The information presented is general in nature and is not tailored to the specific investment objectives, financial situation, or particular needs of any individual. You should consult with qualified professionals before making any investment decisions.",
  },
  {
    title: "5. Forward-Looking Statements",
    content:
      "This website may contain forward-looking statements, including statements about market trends, investment strategies, and fund performance. These statements involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially from those expressed or implied. Hutt Capital undertakes no obligation to update any forward-looking statements.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, images, and software, is the property of Hutt Capital or its licensors and is protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent from Hutt Capital.",
  },
  {
    title: "7. Third-Party Links",
    content:
      "This website may contain links to third-party websites. These links are provided for convenience only and do not imply endorsement or approval of the linked sites. Hutt Capital is not responsible for the content, accuracy, or practices of any third-party websites.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      'This website and its content are provided "as is" and "as available" without warranties of any kind, either express or implied. Hutt Capital shall not be liable for any damages arising from your use of, or inability to use, this website or any content therein, including but not limited to direct, indirect, incidental, consequential, or punitive damages.',
  },
  {
    title: "9. Privacy",
    content:
      "Hutt Capital respects your privacy. Any personal information collected through this website will be handled in accordance with applicable privacy laws. We do not sell or share your personal information with third parties for marketing purposes.",
  },
  {
    title: "10. Governing Law",
    content:
      "These Terms of Use shall be governed by and construed in accordance with the laws of the State of Oregon, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Multnomah County, Oregon.",
  },
  {
    title: "11. Changes to Terms",
    content:
      "Hutt Capital reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website following any changes constitutes your acceptance of the revised terms.",
  },
  {
    title: "12. Contact",
    content: "If you have any questions about these Terms of Use, please contact us at ",
    email: "brooke@huttcapital.com",
  },
];

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Hutt Capital website.",
};

export default function Terms() {
  return (
    <main className="px-10 md:px-20 lg:px-32 pb-20">
      <div className="max-w-3xl mx-auto mt-16 lg:mt-24">
        <h1 className="font-serif text-coral text-3xl md:text-4xl mb-4">
          Terms of Use
        </h1>

        <p className="text-white/40 text-sm tracking-wide mb-12">
          Last updated: April 1, 2026
        </p>

        <div>
          {sections.map((section, i) => (
            <div
              key={i}
              className="border-t border-white/10 py-8"
            >
              <h2 className="text-coral text-base font-semibold tracking-wide mb-3">
                {section.title}
              </h2>
              <p className="text-white/70 text-sm leading-7 tracking-wide">
                {section.content}
                {section.email && (
                  <a
                    href={`mailto:${section.email}`}
                    className="text-coral hover:text-coral/70 transition-colors"
                  >
                    {section.email}
                  </a>
                )}
              </p>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>

    </main>
  );
}
