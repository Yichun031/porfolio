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
    kos: {
      num: "01",
      title: "Rednote KOS Operations",
      strap: "Helping frontline teams create consistent, compliant and conversion-focused content.",
      context:
        "KOS (Key Opinion Sales) were sales and delivery specialists who used their personal Rednote accounts to share delivery stories, answer customer questions and generate leads. I worked as the content operations hub — reviewing performance, ensuring compliance, building weekly topic templates and helping underperforming accounts improve.",
      workflow: ["Dashboard", "Content Review", "Topic Bank", "Video Production", "Account Diagnosis", "Daily Report"],
      blocks: [
        { title: "Performance Dashboard", body: "Exported data from the Rednote business backend and consolidated it in spreadsheets, tracking post volume, impressions, engagement, saves, DMs and leads. Rather than relying on overall averages, I identified accounts with high content output but limited results, as well as low-volume accounts with strong conversion potential." },
        { title: "Content Review", body: "Reviewed KOS content before publication, focusing on pricing, performance and promise claims, and provided directly usable revisions when compliance or messaging issues were identified." },
        { title: "Weekly Topic Bank", body: "Turned frequently asked customer questions into weekly content templates that sales and delivery teams could use directly.", diagram: ["Hook", "Structure", "Reference", "Cover"] },
        { title: "Video Editing & Publishing", body: "Edited vertical videos from delivery and event footage and adapted content for WeChat Channels distribution." },
        { title: "Account Diagnosis", body: "Diagnosed underperforming KOS accounts and provided practical content recommendations for testing and improvement." },
        { title: "Daily Reporting", body: "Produced action-focused daily reports covering performance findings, possible causes, actions taken and the next review point.", diagram: ["Finding", "Cause", "Action", "Review Point"] },
      ],
      pullquote: "High output with no results usually indicates a content problem, not an effort problem.",
    },
    live: {
      num: "02",
      title: "Douyin Livestream Operations",
      strap: "A closed-loop workflow from pre-broadcast preparation to performance review and continuous improvement.",
      phases: [
        { num: "01", title: "Pre-broadcast", sub: "Compliance, content and technical preparation", items: ["Livestream qualification and creator filing confirmation", "Script pre-review and banned-word checks", "Host cue cards and run sheet preparation", "Streaming, lighting, camera and equipment testing", "Pre-live promotional video published"], caption: "Script review, compliance checks, livestream setup and pre-live promotion." },
        { num: "02", title: "During", sub: "Central control and on-site support", items: ["Central-control operation", "Supporting the host through the run sheet", "Monitoring equipment and stream status", "Handling issues as they arose", "Logging frequent audience questions and key content moments"], caption: "Central-control support, livestream coordination and real-time issue handling." },
        { num: "03", title: "Post-broadcast", sub: "Performance review and content repurposing", items: ["Exporting and organising livestream data", "Comparing leads and results against targets", "Reviewing segment-by-segment performance", "Clipping delivery moments and owner reactions", "Producing reports and improvement recommendations"], caption: "Performance analysis, highlight clipping and post-stream reporting." },
        { num: "04", title: "Next Session", sub: "Findings feed the next livestream plan", items: ["Adjusting the next run sheet", "Refining the opening segment", "Reworking lower-performing content blocks", "Keeping the delivery stories and reactions that held attention", "Adding frequent questions to the next cue card"], caption: "Insights from each review informed the next script, run sheet and content plan." },
      ],
      pullquote: "A closed loop, not a one-off. What we learned from each livestream shaped the next run sheet.",
      signal: {
        title: "Live Signal → Content Improvement",
        steps: [
          { title: "Livestream Metrics & Audience Comments", body: "views, dwell time, engagement, leads, frequent questions" },
          { title: "High-performing Segments & Content Gaps", body: "which segments held viewers, which needed shortening or reworking" },
          { title: "Next Script, Run Sheet & Content Clips", body: "review conclusions applied to the next stream; strong moments cut into short-form video" },
        ],
        caption: "Audience behaviour showed us what to keep, what to improve and what to test next.",
      },
      supported: ["Script preparation and compliance review", "Pre-live promotional video publishing", "Streaming tests and livestream-room setup", "Central-control and on-site support", "Performance reporting and highlight clipping"],
    },
    event: {
      num: "03",
      title: "Offline Event Operations",
      strap: "From event planning and on-site delivery to same-day social content production.",
      intro: "Supported Tesla's offline event setup and operations, with a focus on visitor-flow design, filming-point planning, on-site shooting and same-day content production.",
      timeline: [
        { num: "01", when: "T-14 to T-7 — Planning", sub: "Objectives, venue and production requirements", items: ["Defining event objectives and target audience", "Venue survey", "Confirming space, equipment and on-site constraints", "Setting the materials and content production schedule"], caption: "Defined event requirements and assessed the venue, production needs and delivery schedule." },
        { num: "02", when: "T-7 to T-1 — Experience & Content Design", sub: "Designing the space for both visitors and content production", items: ["Visitor-flow design", "Planning check-in, experience and activity zones", "Setting filming points in advance", "Confirming on-site staffing and contingency plans", "Tracking materials and build progress"], caption: "Planned visitor flow, filming positions and on-site arrangements to support both the guest experience and content capture." },
        { num: "03", when: "T-0 — Event-day Operations", sub: "On-site setup, coordination and shooting", items: ["Supporting build and inspection", "Maintaining visitor flow and on-site order", "Coordinating between activity segments", "Shooting guests, vehicles and event footage", "Handling changes as they happened"], caption: "Supported on-site setup and event delivery while capturing key moments for social content." },
        { num: "04", when: "T-0 to T+1 — Content Delivery & Review", sub: "Turning event footage into timely social content", items: ["Selecting and organising footage", "Editing event short-form video", "Same-day content published", "Archiving assets and reviewing the event"], caption: "Turned event footage into same-day social content and organised assets for future use." },
      ],
      pullquote: "The event was designed not only for the people attending, but also for the audience who would experience it through social media.",
      signal: {
        title: "Event Space → Content Output",
        steps: ["Visitor Flow & Experience", "Filming Points & Content Capture", "Same-day Social Content"],
        caption: "Planning the filming points in advance made content production faster and reduced disruption during the event.",
      },
      supported: ["Venue and event setup planning", "Visitor-flow and filming-point design", "Materials and schedule coordination", "On-site shooting and event support", "Same-day content production"],
    },
  },

  puxuan: {
    num: "03",
    title: "The PuXuan Hotel",
    subtitle: "MarCom & Social Media Campaigns",
    intro: "Supported three hotel campaigns from content preparation and brand review to multi-channel launch, KOL visits and coverage tracking.",
    keyVisuals: [
      { label: "PuXuan × Guerlain 'Fang Yu' Afternoon Tea", ratio: "4/5", src: "/images/pxk-c2.png" },
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
        { num: "01", title: "PuXuan × Guerlain “Fang Yu”", tag: "Brand Collaboration Campaign", meta: "27 Jul – 30 Oct 2022 · Lobby Lounge", ratio: "4/5", label: "PuXuan × Guerlain 'Fang Yu'", src: "/images/pxk-c2.png", desc: "An afternoon tea inspired by Guerlain's Aqua Allegoria fragrance collection, presented with Alphonse Mucha's Art Nouveau visual language.", focus: ["External luxury brand guidelines", "Bilingual campaign content", "Product photography and co-branded assets", "Two-way review and coordinated launch", "KOL and media activation"], note: "Supported a luxury brand collaboration requiring strict brand alignment, multi-party review and coordinated launch communication." },
        { num: "02", title: "“Xuan Yue” Mid-Autumn Gift Box", tag: "Seasonal Product & Gifting Campaign", meta: "Aug 2022 · Eight flavours", ratio: "4/5", label: "'Xuan Yue' Mid-Autumn Gift Box", src: "/images/pxk-b.png", desc: "A Mid-Autumn mooncake gift box of eight flavours, positioned for both consumer and corporate gifting.", focus: ["Product information and copy for eight varieties", "Gift-box packaging and visual materials", "Festival campaign scheduling", "B2B gifting communication"], note: "Supported a time-sensitive seasonal campaign covering product storytelling, gift-box presentation and gifting communication." },
        { num: "03", title: "2022 Christmas Season", tag: "Multi-product Seasonal Campaign", meta: "Dec 2022", ratio: "4/5", label: "2022 Christmas Season", src: "/images/pxk-a.png", desc: "Weekend brunch, Christmas Eve tasting dinner, Christmas afternoon tea and a sweet set, promoted simultaneously.", focus: ["Content across multiple products", "Clear messaging across venues, price points and time slots", "Christmas visual and social content", "Multi-product launch scheduling"], note: "Supported a multi-product campaign requiring clear messaging across different venues, price points and dining occasions." },
      ],
    },
    coverage: {
      heading: "KOL & Media Coverage",
      flow: ["Targeting", "Outreach", "Visit", "Publication", "Tracking"],
      items: [
        { outlet: "Jiemian News", headline: "PuXuan Hotel and Guerlain launch “Fang Yu” afternoon tea", date: "", url: "https://www.jiemian.com/article/7861293.html", ratio: "16/9" },
        { outlet: "MICE China", headline: "PuXuan Hotel partners with Guerlain on “Fang Yu” afternoon tea", date: "27 Jul 2022", url: "https://www.micecn.com/articles/show/7849", ratio: "16/9" },
        { outlet: "Sohu", headline: "Beijing hotel co-branded afternoon tea round-up", date: "15 Aug 2022", url: "https://www.sohu.com/a/576882183_121119040", ratio: "16/9" },
        { outlet: "Sina", headline: "“Fang Yu” afternoon tea", date: "5 Aug 2022", url: "https://www.sina.cn/news/detail/4799171627849226.html", ratio: "16/9" },
        { outlet: "Jiemian News", headline: "Luxury hotels launch Mid-Autumn mooncake gift boxes", date: "22 Aug 2022", url: "https://www.jiemian.com/article/7947399.html", ratio: "16/9" },
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
