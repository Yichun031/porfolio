// ─────────────────────────────────────────────────────────────
// ALL SITE COPY LIVES HERE.
// Edit words freely without touching layout code.
// Image slots are described with { label, ratio }. Add `src` to swap
// in a real image later, e.g. { label: "...", ratio: "9/16", src: "/img/x.jpg" }
// ─────────────────────────────────────────────────────────────

export const content = {
  meta: {
    name: "Yichun Hou",
    location: "London",
    year: "2026",
    email: "3014048h@gmail.com",
    linkedin: "http://linkedin.com/in/yichun-hou-a63312330",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Morelli's", href: "#morellis" },
    { label: "Tesla", href: "#tesla" },
    { label: "PuXuan", href: "#puxuan" },
    { label: "HSBC", href: "#hsbc" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    title: "Portfolio",
    stack: ["Social Media Marketing", "Creator Operations", "Business Development"],
    tagline: "Content. Creators. Commercial Growth.",
    scroll: "Scroll to explore",
    marquee: [
      "Social Media",
      "Creator Operations",
      "MarCom",
      "Business Development",
      "Rednote",
      "TikTok",
      "Livestream",
      "UGC",
    ],
  },

  about: {
    kicker: "About Me",
    blocks: [
      {
        label: "About",
        body: "I have marketing and business development experience across the UK and China, specialising in social media marketing, creator operations and customer acquisition. My strength is bringing together creative planning, relationship-building, data analysis and client management to help brands grow.",
      },
      {
        label: "Creator Experience",
        body: "I independently grew my TikTok and Rednote accounts to a combined audience of over 30,000 followers. I have worked on both sides of creator partnerships — as a creator working with brands, and as a marketer managing creators for brands.",
      },
      {
        label: "Languages",
        body: "Fluent in Mandarin and English.",
      },
    ],
  },

  work: {
    kicker: "Selected Work",
    sub: "Four case studies across social media, creator operations, MarCom and business development.",
    projects: [
      { num: "01", name: "Morelli's Gelato", dir: "Social Media & Creator Operations", href: "#morellis", visual: "illustration-icecream" },
      { num: "02", name: "Tesla", dir: "Rednote KOS & Livestream Operations", href: "#tesla", visual: "logo-tesla" },
      { num: "03", name: "The PuXuan Hotel", dir: "MarCom & Social Media Campaigns", href: "#puxuan", visual: "illustration-cake" },
      { num: "04", name: "HSBC", dir: "Business Development & Customer Acquisition", href: "#hsbc", visual: "logo-hsbc" },
    ],
  },

  morellis: {
    num: "01",
    title: "Morelli's Gelato",
    subtitle: "Social Media Marketing & Creator Operations",
    intro:
      "Managed social media content across Instagram, TikTok and Rednote, creator and UGC collaborations, website updates and promotional poster design.",
    hero: { label: "Morelli's hero image", ratio: "16/9", src: "/images/morellis-hero.png" },
    sections: [
      {
        num: "01",
        title: "Social Media Content",
        groups: [
          {
            heading: "A) Instagram Product Content",
            slots: [
              { label: "Gelato product", ratio: "9/16", src: "/images/ig-1.webp" },
              { label: "Coffee & drinks", ratio: "9/16", src: "/images/ig-2.webp" },
              { label: "Store / seasonal", ratio: "9/16", src: "/images/ig-3.webp" },
            ],
            caption: "Product, drinks, store and seasonal content across Instagram feed and Reels.",
          },
          {
            heading: "B) Reactive Content — Channel 4's “Four in a Bed”",
            slots: [
              { label: "Show guests at the store", ratio: "9/16", src: "/images/fitb-1.webp" },
              { label: "Reel insights", ratio: "9/16", src: "/images/fitb-3.webp" },
              { label: "Published Reel", ratio: "9/16", src: "/images/fitb-2.webp" },
            ],
            caption: "Created timely social content around Morelli's appearance on Channel 4's Four in a Bed.",
            note: "reactive, not planned",
            resultsBox: {
              main: "55.6%",
              mainLabel: "Non-follower audience",
              supporting: ["2,098 Views", "1,533 Accounts Reached"],
            },
          },
          {
            heading: "C) TikTok — Entertaining Short-form Video",
            slots: [
              { label: "Video cover", ratio: "9/16", src: "/images/tt-1.webp" },
              { label: "Profile grid", ratio: "9/16", src: "/images/tt-2.webp" },
              { label: "Video still", ratio: "9/16", src: "/images/tt-3.webp" },
            ],
            caption: "Produced entertaining short-form videos designed for TikTok's informal and fast-paced content style.",
          },
        ],
      },
      {
        num: "02",
        title: "Creator Operations",
        groups: [
          {
            heading: "A) Organic Customer UGC",
            slots: [
              { label: "Customer Story mention 1", ratio: "9/16", src: "/images/ugc-1.webp" },
              { label: "Customer Story mention 2", ratio: "9/16", src: "/images/ugc-2.webp" },
              { label: "Customer Story mention 3", ratio: "9/16", src: "/images/ugc-3.webp" },
              { label: "Customer Story mention 4", ratio: "9/16", src: "/images/ugc-4.webp" },
            ],
            caption: "Monitored and amplified organic customer content featuring the brand.",
          },
          {
            heading: "B) UGC & Micro-Creator Collaborations",
            slots: [
              { label: "Instagram creator in-store 1", ratio: "9/16", src: "/images/cc-1.webp" },
              { label: "Instagram creator in-store 2", ratio: "9/16", src: "/images/cc-2.webp" },
              { label: "Instagram creator in-store 3", ratio: "9/16", src: "/images/cc-3.webp" },
              { label: "Rednote creator visit 1", ratio: "9/16", src: "/images/cc-4.webp" },
              { label: "Rednote creator visit 2", ratio: "9/16", src: "/images/cc-5.webp" },
              { label: "Rednote creator visit 3", ratio: "9/16", src: "/images/cc-6.webp" },
            ],
            caption: "Coordinated collaborations with Instagram and Rednote creators, and reshared their content through the brand's own channels.",
            note: "two platforms, two audiences",
          },
          {
            heading: "C) Featured Creator Collaboration",
            slots: [
              { label: "Creator profile", ratio: "9/16", src: "/images/feat-z.webp" },
              { label: "Video still", ratio: "9/16", src: "/images/feat-w.webp" },
              { label: "Brand Reel", ratio: "9/16", src: "/images/feat-y.webp" },
              { label: "Results screen", ratio: "9/16", src: "/images/feat-x.webp" },
            ],
            caption: "Identified and approached a TikTok creator with over 180K followers, secured permission and repurposed his organic Morelli's content for the brand's Instagram Reels, generating 6,829 views, reaching 4,523 accounts and achieving a 6.3% like rate.",
            note: "creator content, brand amplification",
            resultsBox: {
              main: "6.3%",
              mainLabel: "Like rate",
              supporting: ["6,829 Views", "4,523 Accounts Reached", "297 Likes"],
            },
          },
          {
            heading: "D) Artist Collaboration",
            slots: [
              { label: "Artist profile", ratio: "4/5", src: "/images/art-1.webp" },
              { label: "Morelli's artwork", ratio: "4/5", src: "/images/art-2.webp" },
              { label: "National Ice Cream Day Story", ratio: "4/5", src: "/images/art-3.webp" },
              { label: "Postcard / greeting card", ratio: "4/5", src: "/images/art-4.webp" },
            ],
            caption: "Adapted Morelli's-themed artwork for seasonal social content and branded postcard and greeting-card designs.",
          },
        ],
      },
    ],
    website: {
      num: "03",
      title: "Website & Poster Design",
      left: {
        heading: "Website Updates & Maintenance",
        slots: [
          { label: "Homepage", ratio: "16/9", src: "/images/web-b.webp" },
          { label: "Our Story page", ratio: "16/9", src: "/images/web-a.webp" },
        ],
        caption: "Updated product listings, prices, opening hours and promotional content on the brand website.",
      },
      right: {
        heading: "Promotional Poster Design",
        slots: [
          { label: "Poster 1", ratio: "4/5", src: "/images/poster-d.webp" },
          { label: "Poster 2", ratio: "4/5", src: "/images/poster-c.webp" },
          { label: "Poster 3", ratio: "4/5", src: "/images/poster-b.png" },
          { label: "Poster 4", ratio: "4/5", src: "/images/poster-a.webp" },
        ],
        caption: "Designed promotional posters and supporting visual assets in line with the brand's visual identity.",
      },
    },
    closing: "Brand-owned content → creator and customer content → website and design.",
  },

  tesla: {
    num: "02",
    title: "Tesla",
    subtitle: "Social Media Operations",
    intro:
      "Supported Tesla's social media operations across Rednote KOS management, Douyin livestreaming and offline event content production.",
    streams: [
      { num: "01", title: "Rednote KOS Operations", body: "Managed content and performance across multiple KOS accounts, covering content review, topic planning, account diagnosis and reporting." },
      { num: "02", title: "Douyin Livestream Operations", body: "Supported livestream preparation, compliance, technical setup, central control and post-stream reporting." },
      { num: "03", title: "Offline Event Operations", body: "Supported event setup, visitor-flow and filming-point design, on-site shooting and same-day content production." },
    ],
    metrics: [
      { value: "~10", label: "KOS Accounts" },
      { value: "3", label: "Workstreams" },
      { value: "5", label: "Months" },
    ],
    kos: {
      num: "01",
      title: "Rednote KOS Operations",
      strap: "Helping frontline teams create consistent, compliant and conversion-focused content.",
      steps: [
        { num: "01", name: "Dashboard", figure: "~10 accounts", desc: "Consolidated Rednote backend data for the whole programme into one weekly view.", chips: ["posts", "impressions", "engagement", "saves", "DMs", "leads"] },
        { num: "02", name: "Content Review", figure: "~20/week", desc: "Checked every post before publication for pricing, performance and promise claims." },
        { num: "03", name: "Topic Bank", figure: "5–6/week", desc: "Turned recurring customer questions into templates the team could use directly." },
        { num: "04", name: "Video Production", figure: "~15/week", desc: "Cut delivery and event footage into vertical video for publishing." },
        { num: "05", name: "Account Diagnosis", figure: "3 patterns", desc: "Sorted accounts by output against conversion, then changed direction for each type." },
        { num: "06", name: "Daily Report", figure: "daily", desc: "Finding, cause, action, next review point." },
      ],
      pullquote: "High output with no results usually indicates a content problem, not an effort problem.",
    },
    live: {
      num: "02",
      title: "Douyin Livestream Operations",
      strap: "A closed-loop workflow from pre-broadcast preparation to performance review.",
      cadence: "2 Livestreams / Month",
      phases: [
        { num: "01", title: "Pre-broadcast", figure: "2h prep", chips: ["script review", "banned words", "cue cards", "equipment test", "promo video"] },
        { num: "02", title: "During", figure: "2–3h live", chips: ["central control", "host support", "issue handling", "question logging"] },
        { num: "03", title: "Post-broadcast", figure: "~8 clips", chips: ["data export", "leads vs target", "segment review", "highlight clipping"] },
        { num: "04", title: "Next Session", figure: "monthly cycle", chips: ["run sheet update", "content rework", "cue card additions"] },
      ],
      signal: {
        title: "Live Signal → Content Improvement",
        steps: [
          { title: "Livestream Metrics & Comments", chips: ["views", "dwell time", "engagement", "leads", "frequent questions"] },
          { title: "Segments & Content Gaps", chips: ["what held viewers", "what to shorten", "what to rework"] },
          { title: "Next Script & Clips", chips: ["updated run sheet", "short-form cuts"] },
        ],
        caption: "Audience behaviour showed us what to keep, what to improve and what to test next.",
      },
    },
    event: {
      num: "03",
      title: "Offline Event Operations",
      strap: "From event planning to same-day social content.",
      timeline: [
        { num: "01", when: "T-14 → T-7", title: "Planning", chips: ["objectives", "venue survey", "production schedule"] },
        { num: "02", when: "T-7 → T-1", title: "Design", chips: ["visitor flow", "filming points", "staffing"] },
        { num: "03", when: "T-0", title: "Event Day", chips: ["setup", "coordination", "shooting"] },
        { num: "04", when: "T-0 → T+1", title: "Delivery", chips: ["same-day edit", "publish", "archive"] },
      ],
      pullquote: "The event was designed not only for the people attending, but also for the audience who would experience it through social media.",
    },
  },

  puxuan: {
    num: "03",
    title: "The PuXuan Hotel",
    subtitle: "MarCom & Social Media Campaigns",
    intro: "Supported three hotel campaigns from content preparation and brand review to multi-channel launch, KOL visits and coverage tracking.",
    keyVisuals: [
      { label: "PuXuan × Guerlain 'Fang Yu' Afternoon Tea", ratio: "4/5", src: "/images/pxk-guerlain-key.png" },
      { label: "'Xuan Yue' Mid-Autumn Gift Box", ratio: "4/5", src: "/images/pxk-b.png" },
      { label: "2022 Christmas Season", ratio: "4/5", src: "/images/pxk-a.png" },
    ],
    workflow: {
      heading: "From Product to Coverage",
      strap: "Turning a hotel product into a campaign people could see, understand and share.",
      steps: [
        { num: "01", title: "Concept & Positioning", items: ["Gathering concept references", "Scanning competitor campaigns", "Developing naming and messaging directions"], body: "Researched campaign concepts, competitor activity and naming directions." },
        { num: "02", title: "Brand Alignment", items: ["Obtaining logo, typography and colour guidelines", "Confirming official product names", "Checking brand expression and visual tone", "Managing two-way review and revisions"], body: "Coordinated campaign materials around hotel and partner-brand guidelines." },
        { num: "03", title: "Content Production", items: ["Recording product names, ingredients and key selling points", "Preparing bilingual copy", "Building the product photography shot list", "Attending the shoot and organising assets", "Preparing 9:16 assets for Rednote and Instagram"], body: "Turned product information into bilingual copy, photography briefs and platform-ready social assets." },
        { num: "04", title: "Multi-channel Launch", items: ["Website", "WeChat", "Weibo", "Rednote", "Instagram", "OTA", "Press"], body: "Adapted campaign messaging and creative across owned social channels, the hotel website, OTA platforms and media materials." },
        { num: "05", title: "KOL & Media Activation", items: ["Selecting suitable KOLs and media", "Scheduling invitations and visits", "Supporting product photography and hosting on site", "Providing campaign story and media materials"], body: "Supported targeted KOL visits and media communication for campaign launches." },
        { num: "06", title: "Publication Tracking", items: ["Following up on KOL and media publication", "Recording publication dates, headlines and links", "Archiving screenshots of coverage", "Consolidating campaign results"], body: "Tracked publication status and archived campaign coverage for future reporting and reference." },
      ],
      pullquote: "One campaign, multiple formats, one consistent brand story.",
    },
    campaigns: {
      heading: "Selected Campaigns",
      items: [
        { num: "01", title: "PuXuan × Guerlain “Fang Yu”", tag: "Brand Collaboration Campaign", meta: "27 Jul – 30 Oct 2022 · Lobby Lounge", ratio: "4/5", label: "PuXuan × Guerlain 'Fang Yu'", src: "/images/pxk-guerlain-key2.png", desc: "An afternoon tea inspired by Guerlain's Aqua Allegoria fragrance collection, presented with Alphonse Mucha's Art Nouveau visual language.", focus: ["External luxury brand guidelines", "Bilingual campaign content", "Product photography and co-branded assets", "Two-way review and coordinated launch", "KOL and media activation"], note: "Supported a luxury brand collaboration requiring strict brand alignment, multi-party review and coordinated launch communication." },
        { num: "02", title: "“Xuan Yue” Mid-Autumn Gift Box", tag: "Seasonal Product & Gifting Campaign", meta: "Aug 2022 · Eight flavours", ratio: "4/5", label: "'Xuan Yue' Mid-Autumn Gift Box", src: "/images/pxk-c2.png", desc: "A Mid-Autumn mooncake gift box of eight flavours, positioned for both consumer and corporate gifting.", focus: ["Product information and copy for eight varieties", "Gift-box packaging and visual materials", "Festival campaign scheduling", "B2B gifting communication"], note: "Supported a time-sensitive seasonal campaign covering product storytelling, gift-box presentation and gifting communication." },
        { num: "03", title: "2022 Christmas Season", tag: "Multi-product Seasonal Campaign", meta: "Dec 2022", ratio: "4/5", label: "2022 Christmas Season", src: "/images/pxk-a.png", desc: "Weekend brunch, Christmas Eve tasting dinner, Christmas afternoon tea and a sweet set, promoted simultaneously.", focus: ["Content across multiple products", "Clear messaging across venues, price points and time slots", "Christmas visual and social content", "Multi-product launch scheduling"], note: "Supported a multi-product campaign requiring clear messaging across different venues, price points and dining occasions." },
      ],
    },
    coverage: {
      heading: "KOL & Media Coverage",
      flow: ["Targeting", "Outreach", "Visit", "Publication", "Tracking"],
      items: [
        { outlet: "Jiemian News", headline: "PuXuan Hotel and Guerlain launch “Fang Yu” afternoon tea", date: "", url: "https://www.jiemian.com/article/7861293.html", ratio: "16/9", src: "/images/coverage-1.png" },
        { outlet: "MICE China", headline: "PuXuan Hotel partners with Guerlain on “Fang Yu” afternoon tea", date: "27 Jul 2022", url: "https://www.micecn.com/articles/show/7849", ratio: "16/9", src: "/images/coverage-mice.png" },
        { outlet: "Sohu", headline: "Beijing hotel co-branded afternoon tea round-up", date: "15 Aug 2022", url: "https://www.sohu.com/a/576882183_121119040", ratio: "16/9", src: "/images/coverage-sohu.png" },
        { outlet: "Jiemian News", headline: "Luxury hotels launch Mid-Autumn mooncake gift boxes", date: "22 Aug 2022", url: "https://www.jiemian.com/article/7947399.html", ratio: "16/9", src: "/images/coverage-mooncake.png" },
      ],
      result: "Contributed to the PuXuan × Guerlain campaign that generated coverage across Jiemian, MICE, Sohu and other lifestyle and industry media.",
    },
    closing: "Product → Campaign → Content → Distribution → Coverage.",
  },

  hsbc: {
    num: "04",
    title: "HSBC",
    subtitle: "Business Development & Customer Acquisition",
    meta: "Beijing · Aug 2023 – Mar 2024",
    intro: "Carried a monthly acquisition target in a high-volume outbound environment, running the full cycle from first contact through to account opening.",
    funnel: [
      "Branch reception & outbound prospecting",
      "Qualification against eligibility criteria",
      "Needs discovery & objection handling",
      "Account opening",
      "Ongoing relationship & referrals (MGM)",
    ],
    metrics: ["20–30 Premier accounts opened per month", "Approximately RMB 10M in new deposits per month"],
    did: [
      "Promoted Premier accounts and overseas banking services through branch reception, customer enquiries and client events",
      "Explained eligibility requirements and cross-border banking benefits",
      "Supported relationship managers in facilitating fund inflows",
      "Ran client events end to end — invitations, on-site engagement and follow-up",
      "Followed up on account opening progress and handled daily client enquiries",
      "Built and worked a referral pipeline",
    ],
    closing: "Outreach with a low response rate, a monthly number, and a long follow-up cycle — the same shape as creator outreach.",
  },

  contact: {
    kicker: "Let's Talk",
    sub: "Open to social media marketing and creator operations roles in London.",
    formNote: "Or drop a note directly —",
  },
};
