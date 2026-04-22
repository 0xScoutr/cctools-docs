import {
  BookOpen,
  Wallet,
  Globe,
  Zap,
  Shield,
  Trophy,
  Star,
  Settings,
  HelpCircle,
  Users,
  Newspaper,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   Centralized content — single source of truth
   All categories, articles, and content live here.
   Pages are generated dynamically from this data.
   ═══════════════════════════════════════════════════════════ */

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  sections: ArticleSection[];
  tags: string[];
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  colorDim: string;
  articles: Article[];
}

export const categories: Category[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "New to CCTools? Start here. Learn how to create your account and explore the platform.",
    icon: BookOpen,
    color: "var(--lime)",
    colorDim: "var(--lime-dim)",
    articles: [
      {
        slug: "what-is-cctools",
        title: "What is CCTools?",
        summary: "Learn what CCTools is and how it helps you navigate the Canton Network ecosystem.",
        tags: ["basics", "overview"],
        sections: [
          {
            heading: "Overview",
            body: "CCTools is the leading multi-tool platform for the Canton Network ecosystem. It provides everything you need to track your portfolio, discover projects, earn rewards, monitor network stats, and stay up to date with the Canton ecosystem.\n\nWhether you're a DeFi user, a validator, or just getting started with Canton, CCTools gives you a single dashboard to manage it all.",
          },
          {
            heading: "Key Features",
            body: "**Portfolio Tracker** — Connect your wallets and see your full Canton portfolio with real-time prices, P&L, rewards, and transfer history.\n\n**Ecosystem Directory** — Browse hundreds of projects building on Canton Network, filterable by category, role, and status. Upvote your favorites.\n\n**Explore** — Unified discovery hub that surfaces projects, validators, and rewards side by side.\n\n**Compare** — Compare up to 4 projects (Pro) or validators side by side.\n\n**Earn** — Complete tasks, discover opportunities, and join campaigns to earn XP and climb the leaderboard.\n\n**Academy** — Read curated articles and hands-on guides about Canton and CCTools, written by the community. Publish your own with the post submission flow.\n\n**News** — Canton-focused news feed with LLM summaries, plus a community feed of member-submitted posts. Search, filter, and subscribe to new content notifications.\n\n**Learn Paths** — Multi-step structured learning tracks that guide you through Canton, CCTools, and related topics.\n\n**Rewards Calculator** — Calculate potential rewards as an App Builder, Validator, or CC Holder.\n\n**Network Stats** — Real-time Canton Network metrics with TradingView integration.\n\n**Governance** — Track Super Validator votes and governance proposals.\n\n**Leaderboard** — See where you rank among other CCTools users with standard, weekly, and bracket views.\n\n**Reputation** — A second progression track alongside XP/levels, measuring the quality of your submissions and community contributions.",
          },
          {
            heading: "Who is it for?",
            body: "CCTools is designed for:\n\n- **New users** exploring the Canton Network for the first time\n- **DeFi users** tracking portfolio performance across Canton apps\n- **Community members** earning XP and badges through engagement\n- **Project teams** looking for visibility through sponsored listings\n- **Researchers** analyzing Canton Network on-chain data",
          },
        ],
      },
      {
        slug: "create-account",
        title: "Creating Your Account",
        summary: "Step-by-step guide to creating your CCTools account and connecting your wallet.",
        tags: ["account", "signup", "wallet"],
        sections: [
          {
            heading: "Sign Up",
            body: "Go to **cctools.network** and click **Sign Up** in the top right corner. You can create an account using:\n\n- **Email + Password** — Standard email registration with email verification\n- **Google** — One-click signup with your Google account\n- **Twitter/X** — Connect your X account directly\n- **Discord** — Sign up with your Discord account\n\nAfter signing up, verify your email to activate your account.",
          },
          {
            heading: "Connect Your Wallet",
            body: "Once logged in, go to **Portfolio** and click **Connect Wallet**. CCTools supports:\n\n- Any Canton Network compatible wallet address\n- You can add multiple wallets to track your full portfolio\n\nSimply paste your wallet address and CCTools will automatically scan and display your holdings.",
          },
          {
            heading: "Complete Your Profile",
            body: "Head to **Settings** to complete your profile:\n\n- Add a display name\n- Set your avatar\n- Add your Twitter/X handle (optional, helps with community features)\n- Enable notifications for the features you care about",
          },
        ],
      },
      {
        slug: "navigating-the-platform",
        title: "Navigating the Platform",
        summary: "Learn how to use the sidebar, search, and navigate between CCTools features.",
        tags: ["navigation", "ui", "basics"],
        sections: [
          {
            heading: "Sidebar Navigation",
            body: "The left sidebar is your main navigation hub. It contains links to all major sections:\n\n- **Overview** — Your personalized dashboard\n- **Portfolio** — Wallet tracking and P&L\n- **Ecosystem** — Project directory with hundreds of projects\n- **Explore** — Unified hub for projects, validators, and rewards in one view\n- **Earn** — Quests, campaigns, and opportunities\n- **Academy** — Community articles and guides about Canton and CCTools\n- **News** — Canton news feed and community posts\n- **Learn** — Educational content and multi-step learning paths\n- **Governance** — Super Validator votes and proposals\n- **Network Stats** — On-chain analytics and TradingView charts\n- **Leaderboard** — Community rankings (standard, weekly, bracket)\n- **$CC Token** — Token info, burn/mint charts\n- **Validators** — Validator list and performance\n- **Compare** — Side-by-side project comparison (2 free, 4 Pro)\n- **Calculator** — App Builder, Validator, and CC Holder calculators\n\nYou can collapse the sidebar by clicking the collapse icon at the bottom.",
          },
          {
            heading: "Global Search",
            body: "Press `Cmd+K` (Mac) or `Ctrl+K` (Windows) to open the global search. You can search for:\n\n- Projects in the ecosystem\n- Specific pages and features\n- Help articles and documentation\n\nSearch is the fastest way to find anything on CCTools.",
          },
        ],
      },
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description: "Track your Canton Network holdings, P&L, and transaction history.",
    icon: Wallet,
    color: "var(--green)",
    colorDim: "var(--green-dim)",
    articles: [
      {
        slug: "adding-wallets",
        title: "Adding Wallets",
        summary: "How to add and manage multiple wallet addresses in your portfolio.",
        tags: ["wallet", "portfolio", "setup"],
        sections: [
          {
            heading: "Add a Wallet",
            body: "Navigate to **Portfolio** and click the **Add Wallet** button. Paste your Canton wallet address and give it a label (e.g., \"Main Wallet\", \"DeFi Wallet\").\n\nCCTools will automatically scan your wallet and display:\n\n- Token balances\n- Current value in USD\n- 24h change\n- Historical performance",
          },
          {
            heading: "Multiple Wallets",
            body: "You can add multiple wallet addresses to track your full portfolio:\n\n- **Free plan**: Up to 3 wallets\n- **Pro plan**: Up to 10 wallets\n\nThe portfolio view aggregates all wallets into a single view, so you can see your total holdings across all wallets. Each wallet can be individually labeled (up to 50 characters) and supports CNS names.",
          },
          {
            heading: "Removing a Wallet",
            body: "To remove a wallet, go to **Portfolio > Settings** (gear icon) and click the remove button next to the wallet you want to delete. This only removes tracking — it does not affect your actual wallet.",
          },
        ],
      },
      {
        slug: "understanding-pnl",
        title: "Understanding P&L",
        summary: "How CCTools calculates your profit and loss across your portfolio.",
        tags: ["pnl", "portfolio", "analytics"],
        sections: [
          {
            heading: "How P&L Works",
            body: "CCTools calculates your Profit & Loss based on your transaction history. For each token:\n\n- **Cost basis** is calculated using the average acquisition price\n- **Current value** uses real-time market prices\n- **P&L** = Current Value - Cost Basis\n\nP&L is shown both in absolute USD terms and as a percentage.",
          },
          {
            heading: "Export Options",
            body: "You can export your portfolio data in CSV format for:\n\n- Tax reporting (compatible with Koinly and other tax tools)\n- Personal record keeping\n- Spreadsheet analysis\n\nGo to **Portfolio** and click the **Export** button in the top right.\n\n**Note:** Full history and tax report export are Pro features. Free users get 7-day balance history, Pro users get 30-day history.",
          },
        ],
      },
      {
        slug: "rewards-tracking",
        title: "Rewards Tracking",
        summary: "Track validator rewards, staking yields, and other Canton Network rewards.",
        tags: ["rewards", "staking", "validators"],
        sections: [
          {
            heading: "Rewards Dashboard",
            body: "The Rewards section in your Portfolio shows all rewards earned from:\n\n- **Validator staking** — CC tokens earned from delegating to validators\n- **Protocol rewards** — Any rewards from DeFi protocols on Canton\n\nRewards are tracked automatically once your wallet is connected.",
          },
          {
            heading: "Historical Rewards",
            body: "View your rewards history over time with the rewards chart. You can filter by:\n\n- Time period (7d, 30d, 90d, all time)\n- Reward type (staking, protocol, etc.)\n- Specific wallet",
          },
        ],
      },
    ],
  },
  {
    slug: "ecosystem",
    title: "Ecosystem",
    description: "Discover projects building on Canton Network. Explore DeFi, RWA, infrastructure, and more.",
    icon: Globe,
    color: "var(--blue)",
    colorDim: "var(--blue-dim)",
    articles: [
      {
        slug: "browsing-projects",
        title: "Browsing Projects",
        summary: "How to discover and explore projects in the Canton ecosystem.",
        tags: ["ecosystem", "projects", "discovery"],
        sections: [
          {
            heading: "Ecosystem Directory",
            body: "The Ecosystem page is a curated directory of all projects building on Canton Network. Each project listing includes:\n\n- Project name, logo, and description\n- Category (DeFi, RWA, Infrastructure, Wallet, Bridge, etc.)\n- Links to website, Twitter, and docs\n- Community ratings and upvotes\n- CCTools score based on activity and engagement",
          },
          {
            heading: "Filtering & Sorting",
            body: "Use the filter bar at the top to narrow down projects:\n\n- **Category** — DeFi, Stablecoin, Exchange, Tokenized Assets, Payments, Wallet, Bridge, Infrastructure, Gaming, Social, Analytics, Compliance, Security, Custody, and more\n- **Status** — Live, Building, Announced\n- **Role** — Super Validator, Validator, Builder, Featured App, Foundation Member, and others\n- **Sort** — By score, newest, most upvoted, alphabetical\n\nYou can also use the search bar to find specific projects by name.",
          },
          {
            heading: "Upvoting Projects",
            body: "If you find a project interesting, upvote it to help others discover it.\n\n- Upvoting requires **Level 4** on CCTools\n- There is a daily limit on upvotes to keep engagement organic\n- Each upvote earns you XP\n\nUpvotes contribute to the project's visibility and ranking in the directory.",
          },
        ],
      },
      {
        slug: "compare",
        title: "Compare Tool",
        summary: "How to compare projects or validators side by side.",
        tags: ["compare", "ecosystem", "analysis"],
        sections: [
          {
            heading: "Comparing Projects",
            body: "The Compare tool lets you put projects side by side to evaluate them:\n\n1. Go to **Ecosystem > Compare** or click **Compare** in the sidebar\n2. Select 2 projects (free) or up to 4 projects (Pro)\n3. View a detailed comparison including category, role, status, social metrics, token data, and community scores\n\nThis is especially useful when researching which projects to engage with or invest in.",
          },
          {
            heading: "Comparing Validators",
            body: "You can also compare validators using the same tool:\n\n1. Switch to the **Validators** tab in Compare\n2. Select validators to compare\n3. View performance metrics, uptime, rewards, and other data side by side\n\nThis helps you make informed decisions about validator delegation.",
          },
        ],
      },
      {
        slug: "explore-hub",
        title: "The Explore Hub",
        summary: "Explore is a unified discovery page that surfaces projects, validators, and rewards side by side.",
        tags: ["explore", "discovery", "ecosystem"],
        sections: [
          {
            heading: "What Explore Is",
            body: "**Explore** is a hub page designed for discovery. Instead of jumping between Ecosystem, Validators, and Earn separately, Explore pulls the most relevant slice of each into a single scroll:\n\n- **Projects** — A live grid of featured, trending, and newly-added projects\n- **Validators** — Top-ranked validators by rewards and uptime\n- **Rewards & Opportunities** — The current best earn picks\n\nIt's the fastest way to see \"what's worth clicking on right now\" across the whole Canton ecosystem.",
          },
          {
            heading: "How It Stays Fresh",
            body: "Explore is backed by a **warm graph cache** that rebuilds every 5 minutes behind the scenes. Data never looks stale, and the page loads instantly even when there are thousands of underlying records to rank and filter.",
          },
          {
            heading: "When to Use Explore vs Ecosystem",
            body: "- Use **Explore** when you want a quick, opinionated surface — \"show me what's interesting now\"\n- Use **Ecosystem** when you want to browse the full directory with filters, search, and detailed compare tools",
          },
        ],
      },
      {
        slug: "sponsored-listings",
        title: "Sponsored Listings",
        summary: "How sponsored ecosystem listings work and how to get one for your project.",
        tags: ["sponsored", "ecosystem", "projects"],
        sections: [
          {
            heading: "What are Sponsored Listings?",
            body: "Sponsored listings give projects premium visibility in the ecosystem directory. Sponsored projects appear at the top of their category with a **Sponsored** badge.\n\nThis is a great way for new or launching projects to get visibility in front of active Canton Network users.",
          },
          {
            heading: "How to Apply",
            body: "If you're a project team looking for a sponsored listing, fill out the form at **cctools.network/contact** with:\n\n- Project name and description\n- Category\n- Desired campaign duration\n- Links (website, Twitter, docs)\n\nWe'll review your application and get back to you within 48 hours.",
          },
        ],
      },
    ],
  },
  {
    slug: "earn",
    title: "Earn & XP",
    description: "Complete quests, earn XP, climb the leaderboard, and unlock badges.",
    icon: Zap,
    color: "var(--amber)",
    colorDim: "var(--amber-dim)",
    articles: [
      {
        slug: "earn-opportunities",
        title: "Earn Opportunities",
        summary: "Browse and discover earning opportunities across the Canton ecosystem.",
        tags: ["earn", "opportunities", "rewards"],
        sections: [
          {
            heading: "What are Opportunities?",
            body: "The **Earn** page lists earning opportunities from across the Canton ecosystem. These can include:\n\n- **App Rewards** — Rewards from using Canton applications\n- **Validator Rewards** — Staking and delegation rewards\n- **Staking** — Token staking opportunities\n- **Exchange Campaigns** — Promotions from exchanges listing Canton tokens\n- **Grants** — Funding opportunities for builders\n- **Community** — Community-driven reward programs\n- **Learn & Earn** — Educational quests with rewards\n\nEach opportunity shows the provider, difficulty level (easy/medium/hard), estimated value, and status.",
          },
          {
            heading: "Filtering Opportunities",
            body: "Use the tabs at the top to filter opportunities:\n\n- **All** — Everything available\n- **Active** — Currently available to participate\n- **Upcoming** — Coming soon\n- **Ending Soon** — Last chance to participate\n- **Permanent** — Always available\n\nVerified opportunities are marked with a badge. Sponsored opportunities appear at the top.",
          },
          {
            heading: "Showing Interest",
            body: "Click the interest button on any opportunity to save it and show your engagement. Showing interest:\n\n- Requires **Level 4**\n- Helps the community see which opportunities are popular\n- Counts toward your referral tasks (3 interests needed)\n- Earns XP",
          },
        ],
      },
      {
        slug: "xp-system",
        title: "How the XP System Works",
        summary: "Understand how XP is earned, daily resets, and how levels are calculated.",
        tags: ["xp", "levels", "gamification"],
        sections: [
          {
            heading: "Earning XP",
            body: "XP (Experience Points) is the core engagement metric on CCTools. You earn XP by:\n\n- **Daily check-in** — Log in every day to earn streak XP with milestone bonuses\n- **Upvoting projects** — Earn XP for voting on ecosystem projects (daily limit applies)\n- **Viewing projects** — Earn XP for exploring the ecosystem\n- **Following @cantontools on X** — One-time XP reward\n- **Adding a wallet** — XP for connecting your portfolio\n- **Referring friends** — XP when your referral completes all tasks and reaches Level 4\n- **Completing campaigns** — XP varies by campaign\n\n**Pro users** receive an **XP multiplier** on all actions.",
          },
          {
            heading: "Daily Resets & Streaks",
            body: "Some XP actions reset daily at midnight UTC:\n\n- **Daily check-in** — Earns base XP + streak bonus\n- **Upvotes** — Limited number of upvotes per day\n- **Project views** — View XP resets daily\n\n**Streak milestones** reward bonus XP and exclusive badges at key intervals (7, 14, 30, 60, 90, 100, 180, and 365 days). The longer your streak, the bigger the rewards.\n\nMissing a day resets your streak, so consistency is key!",
          },
          {
            heading: "Levels",
            body: "Your total XP determines your level (max Level 50). Each level has a title:\n\n- **Level 1-5** — Newcomer\n- **Level 6-10** — Explorer\n- **Level 11-15** — Analyst\n- **Level 16-20** — Strategist\n- **Level 21-25** — Operator\n- **Level 26-30** — Architect\n- **Level 31-35** — Validator\n- **Level 36-40** — Governor\n- **Level 41-45** — Syndicate\n- **Level 46-50** — Canton OG\n\n**Level 4** is the key milestone: it unlocks upvoting, referrals, and badge eligibility. XP required per level increases progressively.",
          },
        ],
      },
      {
        slug: "badges",
        title: "Badges & Achievements",
        summary: "Learn about the badge system, rarity tiers, and how to earn them.",
        tags: ["badges", "achievements", "gamification"],
        sections: [
          {
            heading: "Badge Types",
            body: "Badges are collectible achievements that showcase your engagement. There are several categories:\n\n**Adopter Badges** (limited supply, all require Level 4 with organic XP):\n- **OG Adopter** — First 500 users (fully claimed)\n- **Early Adopter** — First 2,000 users\n- **Pioneer** — First 10,000 users\n- **Day One** — Accounts created before May 2026\n\n**Level-Up Badges** (earned automatically at milestones):\n- Level 5 — First Steps\n- Level 10 — Rising Star\n- Level 20 — Power User\n- Level 35 — Whale Status\n- Level 50 — Canton OG\n\n**Streak Badges** (earned for consecutive daily check-ins):\n- 7, 14, 30, 60, 90, 100, 180, and 365 day streaks\n\n**Activity Badges** (earned through platform engagement):\n- **X Follower** — Follow @cantontools on X\n- **Eco Explorer** — View multiple different projects\n- **Deep Diver** — Visit all major sections of the platform\n- **Comparator** — Use the compare feature multiple times\n- **Opp Hunter** — Show interest in multiple opportunities\n- **Opp Scout** — Suggest an opportunity\n- **Verified Scout** — Get multiple opportunity suggestions approved\n\n**Referral Badges** — Awarded at referral milestones as you invite more users.",
          },
          {
            heading: "Badge Showcase",
            body: "You can showcase your favorite badges on your profile:\n\n- **Free users**: Up to 3 badges on display\n- **Pro users**: Up to 6 badges on display\n\nBadges are displayed with their rarity color on your profile and leaderboard entry.",
          },
        ],
      },
      {
        slug: "referral-program",
        title: "Referral Program",
        summary: "How to invite friends and earn rewards through the referral program.",
        tags: ["referral", "rewards", "invite"],
        sections: [
          {
            heading: "How Referrals Work",
            body: "Share your unique referral code (format: `CC-XXXXXX`) with friends. When they sign up using your code, the referral enters **pending** status.\n\nThe referred user must then complete **all 5 required tasks** to confirm the referral:\n\n1. **Follow @cantontools** on X\n2. **Maintain a 2-day daily streak**\n3. **Add a wallet** to their portfolio\n4. **Upvote 3 ecosystem projects**\n5. **Show interest in 3 Earn opportunities**\n\nEach task awards XP. Once all tasks are complete and the referred user reaches **Level 4**, the referral is confirmed.",
          },
          {
            heading: "XP Rewards",
            body: "- **Referred user** receives bonus XP immediately when signing up with a code\n- **Referrer** receives XP when the referral is fully confirmed (all tasks done + Level 4)\n\nReferral badges are awarded as you reach referral milestones.",
          },
          {
            heading: "Rules",
            body: "- You must be **Level 4** or higher to have an active referral code\n- The referred user must complete **all 5 tasks** (not just one)\n- No self-referrals or fake accounts\n- Referral codes cannot be reused by another user\n\nWe have anti-abuse systems in place to ensure fair referrals.",
          },
        ],
      },
      {
        slug: "leaderboard",
        title: "Leaderboard",
        summary: "How the leaderboard ranks users and what determines your position.",
        tags: ["leaderboard", "ranking", "competition"],
        sections: [
          {
            heading: "How Rankings Work",
            body: "The leaderboard ranks users by total XP earned. Your position is updated in real-time.\n\nThe leaderboard displays:\n\n- Your current rank\n- Display name and avatar\n- Level and level title\n- Total XP\n- Current streak\n- Top 5 rarest badges\n- Confirmed referral count\n\nThere are multiple leaderboard views:\n\n- **Standard** — All-time total XP\n- **Weekly** — XP earned in the last 7 days\n- **Bracket** — XP earned in the last 30 days",
          },
          {
            heading: "Seasons (Coming Soon)",
            body: "In the future, CCTools will introduce seasonal leaderboards that reset periodically. This gives everyone a fresh start and rewards consistent engagement over time.\n\nSeason rewards may include exclusive badges, early access features, and more.",
          },
        ],
      },
      {
        slug: "reputation",
        title: "Reputation System",
        summary: "Reputation is a quality signal separate from XP — earned through approved submissions and community contributions.",
        tags: ["reputation", "quality", "submissions"],
        sections: [
          {
            heading: "Reputation vs XP",
            body: "Reputation is a second progression track that runs alongside XP and levels. Where **XP** measures activity (logins, upvotes, views), **Reputation** measures the **quality of your contributions** to the platform.\n\nReputation is shown on your profile and next to your username in places like Academy author cards, community posts, and comments — so others can quickly see how trusted your contributions are.",
          },
          {
            heading: "How You Earn Reputation",
            body: "You gain reputation when the community and moderators validate your contributions:\n\n- **Approved project submissions** — Suggest a project to the Ecosystem and get it approved\n- **Approved ecosystem edits** — Submit accurate edits to existing project data\n- **Approved Earn opportunities** — Suggest opportunities that get added\n- **Published Academy posts** — Write articles or guides that pass editorial review\n- **Approved news submissions** — Community posts that get accepted into the news feed\n- **Helpful feedback** — Bug reports and feedback that lead to improvements\n\nEach approved contribution awards reputation points. The value scales with the type and quality of the contribution.",
          },
          {
            heading: "Reputation Penalties & Decay",
            body: "Reputation goes down as well as up:\n\n- **Rejected submissions** — Spammy or low-quality submissions lose reputation\n- **Auto-penalty** — Multiple rejections in a short window trigger an automatic reputation hit\n- **Inactivity decay** — A small amount of reputation decays during long periods of inactivity, so leaderboards stay fresh\n\nThis ensures reputation reflects current, genuine contribution — not historical activity that stopped long ago.",
          },
          {
            heading: "Reputation Tiers",
            body: "Reputation is grouped into ten tiers, each with its own name and color, shown as a colored pill next to your name:\n\n- Newcomer → Contributor → Trusted → Established → Veteran → Authority → Expert → Elite → Legendary → Mythic\n\nHigher tiers unlock community trust — for example, curators and trusted reviewers tend to come from higher reputation tiers. Future features (weighted upvotes, moderation queues, featured authorship) will use reputation as a signal.",
          },
        ],
      },
      {
        slug: "learn-paths",
        title: "Learn Paths",
        summary: "Multi-step structured learning tracks that guide you through Canton, CCTools, and related topics.",
        tags: ["learn", "education", "paths"],
        sections: [
          {
            heading: "What are Learn Paths?",
            body: "Learn Paths are **structured multi-step courses** available in the **Learn** section. Each path is a curated sequence of lessons that takes you from zero to competent on a specific topic — Canton fundamentals, building on Canton, using CCTools like a power user, understanding governance, and more.\n\nUnlike one-off articles, paths track your progress step by step, so you always know where to pick up.",
          },
          {
            heading: "Following a Path",
            body: "To start a path:\n\n1. Go to **Learn** in the sidebar\n2. Browse the list of available paths\n3. Click a path to open its overview and step list\n4. Start at step 1 or jump to any unlocked step\n\nAs you complete steps, your progress is saved to your account. You can pause and resume paths freely — CCTools remembers where you stopped.",
          },
          {
            heading: "Rewards for Completion",
            body: "Completing a path earns XP, and selected paths award dedicated badges. New content (paths, steps, or major updates) triggers a notification on your Overview so you never miss a new learning opportunity.",
          },
        ],
      },
    ],
  },
  {
    slug: "academy",
    title: "Academy",
    description: "Read and write articles and guides about Canton and CCTools — a community-driven content hub.",
    icon: GraduationCap,
    color: "var(--purple)",
    colorDim: "var(--purple-dim)",
    articles: [
      {
        slug: "academy-overview",
        title: "What is the Academy?",
        summary: "Academy is CCTools' content hub — curated articles and step-by-step guides written by the community.",
        tags: ["academy", "content", "overview"],
        sections: [
          {
            heading: "Articles vs Guides",
            body: "Academy posts come in two formats, each optimized for a different purpose:\n\n**Articles** — Editorial long-form reads. Structure: kicker, reading focus, intro, sections (each with optional callouts, pull-quotes, and inline images), key points, takeaways, FAQ, resources, and a final CTA.\n\n**Guides** — Hands-on step-by-step tutorials. Structure: estimated time, goal, prerequisites, what you'll build, numbered steps, troubleshooting, takeaways, resources, and a CTA.\n\nThe format is chosen when the post is written and drives both the author template and the reader layout.",
          },
          {
            heading: "Who Writes the Academy?",
            body: "Anything published in Academy is either:\n\n- Written by the **CCTools editorial team**, or\n- Written by a **community author** and approved through the review flow\n\nEach post page shows a rich **Author Card** with the writer's avatar, display name, Level, Reputation tier, total XP, and a link to their public profile. Community posts without an attached author fall back to a \"CCTools Editorial\" byline.",
          },
          {
            heading: "Finding Posts",
            body: "The **Academy** landing page lists the latest posts, filterable by format (article / guide) and by topic tag. Individual posts also surface:\n\n- **More from author** — Up to 3 other recent posts by the same writer\n- **Related posts** — Posts sharing tags with the one you're reading\n- **Related projects** — Ecosystem projects referenced in the post",
          },
        ],
      },
      {
        slug: "reading-upvoting-posts",
        title: "Reading & Upvoting Posts",
        summary: "How the reader experience works, including upvotes, the daily vote cap, and the Level 4 gate.",
        tags: ["academy", "reading", "upvote"],
        sections: [
          {
            heading: "The Reading Experience",
            body: "Each post has a full-width adaptive layout with:\n\n- A hero section with title, kicker, estimated reading time, and tags\n- The cover image (when provided)\n- The body rendered with rich formatting: bold, inline links, paragraph spacing, callouts, pull-quotes, inline images, and numbered steps for guides\n- A sticky sidebar on desktop (or a collapsible Table of Contents on mobile) for quick navigation\n- An **Author Card** at the end with a link to the author's public profile",
          },
          {
            heading: "Upvoting Posts",
            body: "If a post is genuinely useful, upvote it to boost its visibility. Academy upvotes work like the rest of the platform:\n\n- Upvoting requires **Level 4**\n- You can cast **1 academy upvote per UTC day** — across **all posts combined**, not per post\n- The counter resets at **midnight UTC**\n- You can **unvote** the same day to free up your daily slot, then vote on a different post\n- A small timer on the upvote button tells you when your next slot opens\n\nThis keeps upvotes a scarce, meaningful signal rather than a spammable click.",
          },
          {
            heading: "Sharing Posts",
            body: "Each post has a Share card in the sidebar with one-click links for X, Telegram, and copy-to-clipboard. Post URLs are shareable and public — anyone can read them, logged in or not.",
          },
        ],
      },
      {
        slug: "writing-posts",
        title: "Writing an Academy Post",
        summary: "How to submit an article or guide, what fields to fill, and how the review process works.",
        tags: ["academy", "writing", "submission"],
        sections: [
          {
            heading: "Starting a Post",
            body: "Go to **Academy → Submit Post** to open the writer. You choose whether to write an **Article** or a **Guide** at the top — the rest of the form adapts to the format you pick.\n\nYou don't have to finish in one session. Drafts are saved, so you can step away and come back.",
          },
          {
            heading: "What to Fill In",
            body: "Common fields:\n\n- **Title** and **slug** (auto-generated from the title)\n- **Cover image URL**\n- **Tags** (used for filtering and related-post matching)\n- **Reading time** (or estimated time for guides — auto-calculated as you write)\n\nArticle-specific fields: kicker, reading focus, intro, sections (with optional callouts / pull-quotes / inline images), key points, takeaways, FAQ, resources, CTA.\n\nGuide-specific fields: goal, prerequisites, what you'll build, numbered steps (each step with optional code / image / tip), troubleshooting, takeaways, resources, CTA.\n\nThe writer uses a plain-text body with inline formatting — **bold** (`**text**`), links (`[label](url)`), and blank-line paragraphs. The writer has an always-visible formatting help panel explaining which syntax is supported and what is intentionally not (raw HTML is stripped for safety).",
          },
          {
            heading: "Submission & Review",
            body: "When you submit, your post enters the **moderation queue**. The CCTools team reviews for:\n\n- Factual accuracy (especially Canton-specific claims)\n- Originality (no copy-paste content without credit)\n- Formatting sanity (images load, links work, structure follows the template)\n- Relevance to the Canton Network ecosystem\n\nOutcomes:\n\n- **Approved** — Post goes live on Academy and is credited to your profile\n- **Requested changes** — You get feedback and can edit and resubmit\n- **Rejected** — Out-of-scope or low-effort submissions. Repeated rejections affect reputation.\n\nPublished posts earn you XP and reputation, count toward your post count on your public profile, and can be shared freely.",
          },
        ],
      },
    ],
  },
  {
    slug: "news",
    title: "News & Feed",
    description: "Canton-focused news feed with LLM summaries, plus a community feed of member-submitted posts.",
    icon: Newspaper,
    color: "var(--blue)",
    colorDim: "var(--blue-dim)",
    articles: [
      {
        slug: "news-overview",
        title: "News & Community Feed",
        summary: "Two parallel feeds: curated Canton news and community-submitted posts, refreshed every 10 minutes.",
        tags: ["news", "feed", "community"],
        sections: [
          {
            heading: "Two Feeds in One Page",
            body: "The **News** page has two channels behind a tab switcher at the top:\n\n- **News** — Curated Canton Network coverage from the web. Items are pulled from Google News and RSS sources, then summarized by an LLM so you can get the essentials in a sentence or two without clicking through.\n- **Community** — Member-submitted posts: announcements, takes, threads, write-ups, and updates shared by other CCTools users.\n\nEach tab shows a live count of how many items exist in that channel so you always know how much there is to read.",
          },
          {
            heading: "How Often It Updates",
            body: "News ingestion runs **every 10 minutes**. The pipeline:\n\n1. Queries Google News (via Serper) for Canton-related keywords\n2. Merges items from curated RSS feeds\n3. **Deduplicates** across publishers using a normalized title key — the same story from two outlets only appears once\n4. Runs an LLM summary on each new article\n5. Publishes to the feed\n\nThe community feed updates in real time as new posts are submitted and approved.",
          },
          {
            heading: "Reading an Item",
            body: "Click any item to open its detail page, which shows the full summary, source link, publication date, and any related Canton projects mentioned. For community posts, you also see the author's Level and Reputation tier — the same author card shown on Academy posts.",
          },
        ],
      },
      {
        slug: "news-search-filter",
        title: "Searching & Filtering",
        summary: "Use search and filters to narrow down the feed. Load more reveals the rest of the archive.",
        tags: ["news", "search", "filter"],
        sections: [
          {
            heading: "Search",
            body: "The search bar at the top of the page matches against titles, summaries, and source names. Searching triggers a deeper fetch — instead of the initial cached top items, CCTools loads the full recent archive for the channel you're in so you can find older stories.",
          },
          {
            heading: "Load More",
            body: "Each feed starts with the most recent items and a **Load More** button at the bottom. Clicking it fetches the next page without reloading the page. The tab badges always show the true total in the database, not just what's currently loaded.",
          },
          {
            heading: "Community Submissions",
            body: "To submit a community post, open the Community tab and click **Submit**. Community submissions go through the same moderation queue as Academy posts and earn XP / reputation when approved.",
          },
        ],
      },
      {
        slug: "new-content-notifications",
        title: "New Content Notifications",
        summary: "Get notified when new projects, opportunities, campaigns, or learn paths go live.",
        tags: ["notifications", "news", "email"],
        sections: [
          {
            heading: "What Triggers a Notification",
            body: "CCTools scans the database for newly-added content every 30 minutes. You'll be notified (in-app, and optionally by email) when:\n\n- A new **project** is added to the Ecosystem\n- A new **Earn opportunity** goes live\n- A new **campaign** is launched\n- A new **Academy post** is published\n- A new **Learn Path** is released\n\nThis keeps you at the edge of what's happening in the ecosystem without having to check every page manually.",
          },
          {
            heading: "Managing Notifications",
            body: "You control which notification categories are active in **Settings → Notifications**. Turn individual channels on or off, and decide whether each channel also sends you an email.\n\nEmails are batched every 10 minutes, so you never get a wall of separate emails — you get one digest covering everything that triggered since the last batch.",
          },
        ],
      },
    ],
  },
  {
    slug: "account",
    title: "Account & Settings",
    description: "Manage your profile, security settings, notifications, and preferences.",
    icon: Settings,
    color: "var(--t2)",
    colorDim: "rgba(124, 132, 148, 0.1)",
    articles: [
      {
        slug: "profile-settings",
        title: "Profile Settings",
        summary: "How to update your display name, avatar, and connected accounts.",
        tags: ["profile", "settings", "account"],
        sections: [
          {
            heading: "Update Your Profile",
            body: "Go to **Settings** from the sidebar. Here you can:\n\n- Change your display name\n- Upload an avatar\n- View your account email\n- See your account creation date and stats",
          },
          {
            heading: "Connected Accounts",
            body: "You can connect social accounts to your CCTools profile:\n\n- **Twitter/X** — Required for the X Follower badge and campaign tasks like follow/retweet\n- **Discord** — Used for campaign integrations\n- **Google** — Alternative login method\n\nManage your connected accounts in **Settings > Profile**. You must always have at least one login method active (you can't disconnect your only identity).",
          },
          {
            heading: "Public Profile",
            body: "Every CCTools user has a public profile at **cctools.network/u/your-username**. Your public profile shows:\n\n- Display name and avatar\n- Level and level title\n- Badge showcase (3 free, 6 Pro)\n- Current streak\n\nYou can share your profile link on social media to showcase your Canton ecosystem engagement.",
          },
        ],
      },
      {
        slug: "security",
        title: "Security Best Practices",
        summary: "Keep your CCTools account secure with these recommended practices.",
        tags: ["security", "password", "2fa"],
        sections: [
          {
            heading: "Password Security",
            body: "Use a strong, unique password for your CCTools account. We recommend:\n\n- At least 12 characters\n- Mix of uppercase, lowercase, numbers, and symbols\n- Don't reuse passwords from other sites\n- Use a password manager (1Password, Bitwarden, etc.)",
          },
          {
            heading: "Two-Factor Authentication (2FA)",
            body: "CCTools supports 2FA for extra account security:\n\n- **Email 2FA** — Receive a verification code via email on login\n- **TOTP** — Use an authenticator app (Google Authenticator, Authy, etc.)\n\nWe strongly recommend enabling 2FA in **Settings > Security**.",
          },
          {
            heading: "General Tips",
            body: "- Never share your account credentials with anyone\n- CCTools will never ask for your password via email or DM\n- Be wary of phishing sites — always check the URL is **cctools.network**\n- Report suspicious activity via the contact form at **cctools.network/contact**",
          },
        ],
      },
      {
        slug: "notifications",
        title: "Notifications",
        summary: "Control which updates reach you in-app and by email — new content, referrals, moderation, and more.",
        tags: ["notifications", "email", "settings"],
        sections: [
          {
            heading: "Notification Categories",
            body: "CCTools sends notifications for several distinct events:\n\n- **New content** — New projects, Earn opportunities, campaigns, Academy posts, and Learn paths\n- **Your submissions** — Status updates when your submitted project, opportunity, or post is approved / rejected / needs changes\n- **Upvotes & engagement** — When your content receives upvotes or comments\n- **Referrals** — When a referred user completes tasks or confirms their referral\n- **Governance alerts** — When new Super Validator proposals open or close\n- **System** — Account security events (new login, password change, 2FA changes)",
          },
          {
            heading: "In-App vs Email",
            body: "Every notification appears in the **bell dropdown** in the top bar. You can additionally enable **email delivery** per category in **Settings → Notifications**.\n\nEmails are **batched every 10 minutes** — you'll never get a flood of separate emails. Each batch is a single digest covering everything that happened in that window.\n\nSecurity-sensitive notifications (login from new device, password reset) are always sent by email and cannot be disabled.",
          },
          {
            heading: "Turning Things Off",
            body: "Go to **Settings → Notifications** to toggle each category independently. You can also use the **Unsubscribe** link at the bottom of any email to quickly turn off the category that sent it.",
          },
        ],
      },
      {
        slug: "pro-subscription",
        title: "CCTools Pro",
        summary: "Learn about Pro features, pricing, and how to subscribe.",
        tags: ["pro", "subscription", "premium"],
        sections: [
          {
            heading: "What is CCTools Pro?",
            body: "CCTools Pro is a premium subscription that unlocks advanced features:\n\n- **10 wallets** (vs 3 on free plan)\n- **30-day balance history** (vs 7-day on free)\n- **Tax report export** — CSV format compatible with Koinly\n- **Validator performance dashboard**\n- **Network historical charts**\n- **Compare up to 4 projects** (vs 2 on free)\n- **6 badge showcase slots** (vs 3 on free)\n- **1.25x XP multiplier** on all actions\n- **Priority support**\n\nVisit the **Pro** page on CCTools to see current pricing. Subscriptions can be cancelled anytime.",
          },
          {
            heading: "How to Subscribe",
            body: "Go to **Settings > Subscription** and click **Upgrade to Pro**. Payment is processed securely via Stripe.\n\nYou can cancel anytime from the same page. Your Pro features remain active until the end of your billing period.",
          },
        ],
      },
    ],
  },
  {
    slug: "canton-network",
    title: "Canton Network",
    description: "Learn about Canton Network, the CC token, validators, and governance.",
    icon: Star,
    color: "var(--purple)",
    colorDim: "var(--purple-dim)",
    articles: [
      {
        slug: "what-is-canton",
        title: "What is Canton Network?",
        summary: "An introduction to Canton Network and its unique architecture.",
        tags: ["canton", "blockchain", "basics"],
        sections: [
          {
            heading: "Overview",
            body: "Canton Network is a privacy-enabled interoperable blockchain network designed for institutional use. Unlike traditional blockchains, Canton uses **DAML smart contracts** and supports atomic transactions across multiple applications.\n\nKey differentiators:\n\n- **Privacy by design** — Transaction data is only visible to participants\n- **Interoperability** — Applications can transact atomically across the network\n- **Institutional grade** — Built by and for major financial institutions\n- **DAML** — Uses the DAML smart contract language (by Digital Asset)",
          },
          {
            heading: "Who Built Canton?",
            body: "Canton Network was created by **Digital Asset** and is governed by a consortium of major financial institutions acting as Super Validators. The network is designed to bring institutional finance on-chain while maintaining the privacy and compliance requirements that regulated entities need.",
          },
        ],
      },
      {
        slug: "cc-token",
        title: "The CC Token",
        summary: "Understand CC token economics, supply, burns, and halving schedule.",
        tags: ["cc", "token", "tokenomics"],
        sections: [
          {
            heading: "Token Economics",
            body: "The **CC token** is the native currency of Canton Network.\n\n- **Max supply**: 1 billion CC tokens\n- **Mechanism**: Burn/mint model — tokens are burned for transaction fees and minted as validator rewards\n- **Halving**: Minting rewards are reduced periodically following a halving schedule\n\nThe deflationary mechanism means that as network usage increases, more CC is burned while minting rewards decrease over time.",
          },
          {
            heading: "Where to Track CC",
            body: "CCTools provides real-time CC token data on the **$CC Token** page:\n\n- Current price and 24h change\n- Market cap and circulating supply\n- Historical price charts\n- Burn and mint rates\n- Halving countdown",
          },
        ],
      },
      {
        slug: "rewards-calculator",
        title: "Rewards Calculator",
        summary: "Estimate your potential Canton Network rewards as a builder, validator, or holder.",
        tags: ["calculator", "rewards", "staking"],
        sections: [
          {
            heading: "Three Calculators",
            body: "CCTools provides three rewards calculators to help you estimate potential earnings:\n\n- **App Builder Calculator** — Estimate rewards for building applications on Canton Network based on app coupon issuance rates\n- **Validator Calculator** — Calculate potential validator rewards based on delegation amount and validator coupon rates\n- **CC Holder Calculator** — Estimate holding rewards based on your CC token balance\n\nAccess the calculator from the sidebar under **Calculator** or from the **Rewards** page.",
          },
          {
            heading: "How Calculations Work",
            body: "The calculators use real-time network data including:\n\n- Current issuance rates per round (Super Validator, Validator, App coupons)\n- Number of halvings completed\n- Current CC price\n\nResults are estimates based on current network conditions and may vary as the network parameters change over time.",
          },
        ],
      },
      {
        slug: "validators-governance",
        title: "Validators & Governance",
        summary: "Browse validators, understand Super Validators, and track governance proposals.",
        tags: ["validators", "governance", "staking"],
        sections: [
          {
            heading: "Validators Page",
            body: "The **Validators** page lists all active validators on the Canton Network. For each validator you can see:\n\n- Validator name and identity\n- Role (Super Validator or regular Validator)\n- Performance metrics and rewards data\n\n**Pro users** get access to additional validator data and export options.",
          },
          {
            heading: "Super Validators",
            body: "Super Validators are major financial institutions that validate transactions and have additional governance rights:\n\n- Voting on protocol changes and network parameters\n- Proposing network upgrades\n- Setting fee structures\n\nExamples include major banks and financial institutions that participate in the Canton Network consortium.",
          },
          {
            heading: "Governance",
            body: "CCTools tracks all governance activity on the **Governance** page:\n\n- Active and past proposals\n- Voting status and results\n- Super Validator participation\n- Approval rate and execution status\n- Network parameter changes\n\nThis gives the community full transparency into how the network is governed.",
          },
        ],
      },
    ],
  },
  {
    slug: "campaigns",
    title: "Campaigns",
    description: "Join partner campaigns, complete tasks, and earn rewards from Canton ecosystem projects.",
    icon: Trophy,
    color: "var(--pink)",
    colorDim: "var(--pink-dim)",
    articles: [
      {
        slug: "how-campaigns-work",
        title: "How Campaigns Work",
        summary: "Learn how partner campaigns work and how to earn rewards by completing tasks.",
        tags: ["campaigns", "earn", "rewards"],
        sections: [
          {
            heading: "What are Campaigns?",
            body: "Campaigns are sponsored quests created in partnership with Canton ecosystem projects. Each campaign has a set of tasks to complete, and finishing all tasks earns you XP, badges, and sometimes exclusive rewards (redemption codes, links, etc.).\n\nCampaigns appear on the **Earn** page and are marked with the partner project's branding.",
          },
          {
            heading: "Joining a Campaign",
            body: "To participate in a campaign:\n\n1. Go to the **Earn** page and find an active campaign\n2. Click **Join** to enter the campaign\n3. Complete each task in the campaign (they can be done in any order)\n4. Once all tasks are done, your reward is automatically claimed\n\nSome campaigns have a **participant limit**, so join early to secure your spot.",
          },
          {
            heading: "Task Types",
            body: "Campaigns can include different types of tasks:\n\n- **Follow on X** — Follow the partner project's Twitter/X account (requires X connection)\n- **Retweet** — Retweet a specific post\n- **Upvote project** — Upvote the partner project in the Ecosystem directory\n- **Show interest in Earn** — Show interest in the partner's Earn opportunity\n- **Visit URL** — Visit a specific page or website\n- **Text submission** — Submit text (e.g., your Discord ID, email, etc.)\n- **Custom tasks** — Other tasks defined by the partner\n\nEach completed task earns XP. Completing **all tasks** in a campaign may also award a special badge.",
          },
        ],
      },
      {
        slug: "sponsored-campaigns",
        title: "Sponsored & Banners",
        summary: "How sponsored listings and banner placements work on CCTools.",
        tags: ["sponsored", "banner", "advertising"],
        sections: [
          {
            heading: "Types of Sponsorship",
            body: "CCTools offers several ways for projects to gain visibility:\n\n- **Banner** — Prominent placement at the top of the platform, visible across all pages\n- **Sponsored Ecosystem Listing** — Your project appears highlighted in the Ecosystem directory with a \"Sponsored\" badge\n- **Sponsored Earn Listing** — Your opportunity appears highlighted in the Earn section\n- **Campaign with Tasks** — A fully custom campaign with tasks, badges, and rewards for users\n\nAll sponsored content is clearly labeled so users know what is organic and what is promoted.",
          },
          {
            heading: "For Projects",
            body: "If you're a project team looking for visibility in the Canton ecosystem, visit **cctools.network/contact** and select \"Sponsored Listing\" or \"Partnership\" as the subject.\n\nInclude:\n\n- Your project name and description\n- Which type of sponsorship interests you\n- Desired duration\n- Links (website, Twitter, docs)\n\nWe'll get back to you to discuss details and pricing.",
          },
        ],
      },
    ],
  },
  {
    slug: "network",
    title: "Network & Data",
    description: "Understand where CCTools data comes from and how network stats are tracked.",
    icon: Shield,
    color: "var(--green)",
    colorDim: "var(--green-dim)",
    articles: [
      {
        slug: "network-stats",
        title: "Network Stats",
        summary: "What data is shown on the Network Stats page and how it is collected.",
        tags: ["stats", "network", "analytics"],
        sections: [
          {
            heading: "Overview",
            body: "The **Network Stats** page shows real-time and historical data about the Canton Network:\n\n- **CC Price** — Current price, 24h change, market cap, and volume\n- **Validators** — Total number of Super Validators and regular validators\n- **Burn/Mint Ratio** — Whether the network is currently deflationary (more burns than mints)\n- **Daily Transactions** — Transaction volume on the network\n- **Governance** — Total proposals, approval rate, executed vs rejected\n- **Issuance Rates** — Per Super Validator, Validator, and App coupon rates\n- **TradingView Chart** — Live KRAKEN:CCUSD price chart with full TradingView integration",
          },
          {
            heading: "Burn vs Mint",
            body: "CCTools tracks hourly burn and mint data for the CC token:\n\n- **Burns** — CC tokens burned as transaction fees\n- **Mints** — CC tokens minted as validator rewards\n- **Ratio** — When the ratio is above 1.0, more CC is being burned than minted (deflationary)\n\nThis data is shown in a dual bar chart covering the last 24-72 hours, helping you understand the token's supply dynamics in real-time.",
          },
        ],
      },
      {
        slug: "data-sources",
        title: "Data Sources & APIs",
        summary: "Where CCTools gets its data and how often it is updated.",
        tags: ["api", "data", "transparency"],
        sections: [
          {
            heading: "Price Data",
            body: "We aggregate CC token price data from trusted market data providers to show price, market cap, 24h volume, and circulating supply.\n\nPrice data is updated frequently to ensure accuracy.",
          },
          {
            heading: "Network Data",
            body: "On-chain network data is sourced directly from the Canton Network:\n\n- Validator and Super Validator counts\n- Daily transaction volume\n- Burn and mint amounts per round\n- Featured app count\n- Total network parties\n\nNetwork stats are synced regularly to ensure accuracy.",
          },
          {
            heading: "Portfolio Data",
            body: "Wallet balances and rewards are fetched directly from the Canton Network. When you add a wallet, CCTools queries your holdings to display:\n\n- Token balances\n- Rewards history\n- Transfer records",
          },
        ],
      },
    ],
  },
  {
    slug: "community",
    title: "Community",
    description: "Community rules, how to contribute, and frequently asked questions.",
    icon: Users,
    color: "var(--amber)",
    colorDim: "var(--amber-dim)",
    articles: [
      {
        slug: "community-rules",
        title: "Community Rules",
        summary: "The rules all community members must follow in CCTools channels.",
        tags: ["rules", "community", "conduct"],
        sections: [
          {
            heading: "General Rules",
            body: "1. **Be respectful** — No harassment, hate speech, or personal attacks\n2. **No spam** — Don't post repetitive messages, advertisements, or scam links\n3. **No impersonation** — Don't pretend to be CCTools team or other users\n4. **English only** — Main channels are English only (local channels may vary)\n5. **No price speculation** — Avoid pure price discussion and \"wen pump\" posts\n6. **No exploit sharing** — Don't share or discuss XP exploits or manipulation tactics",
          },
          {
            heading: "Enforcement",
            body: "Rule violations are handled progressively:\n\n1. **Warning** — First offense gets a verbal warning\n2. **Mute** — Repeated offenses result in temporary mute (1-24h)\n3. **Ban** — Severe or continued violations result in a permanent ban\n\nModerators have discretion to skip steps for severe violations (e.g., scam links = immediate ban).",
          },
        ],
      },
      {
        slug: "contribute",
        title: "How to Contribute",
        summary: "Ways you can contribute to the CCTools ecosystem and earn recognition.",
        tags: ["contribute", "community", "earn"],
        sections: [
          {
            heading: "Suggest Opportunities",
            body: "Found an interesting earn opportunity in the Canton ecosystem? You can suggest it directly on CCTools:\n\n1. Go to **Earn** and click **Submit Opportunity**\n2. Fill in the details: title, URL, type, description, provider, estimated value\n3. Submit for review\n\nEach suggestion earns you XP, and approved suggestions earn you the **Opp Scout** badge. Get multiple suggestions approved for the **Verified Scout** badge.\n\nThere is a daily limit on suggestions to maintain quality.",
          },
          {
            heading: "Submit a Project",
            body: "Know a project building on Canton that's not in our directory? Submit it:\n\n1. Go to **Ecosystem** and click **Submit Project**\n2. Fill in the multi-step form (project info, team, features, FAQ)\n3. Submit for review\n\nApproved submissions help grow the ecosystem directory for everyone.",
          },
          {
            heading: "Suggest Edits",
            body: "If you notice outdated or incorrect information on a project listing, you can suggest edits:\n\n1. Go to the project's page in the Ecosystem\n2. Click **Suggest Edit**\n3. Update the fields that need correction\n4. Submit for review\n\nThis helps keep the directory accurate and up to date.",
          },
        ],
      },
      {
        slug: "faq",
        title: "Frequently Asked Questions",
        summary: "Answers to the most common questions about CCTools.",
        tags: ["faq", "questions", "help"],
        sections: [
          {
            heading: "General",
            body: "**Is CCTools free?**\nYes! CCTools is free to use. We offer a Pro tier for advanced features, but all core features are free.\n\n**Is CCTools official?**\nCCTools is a community-built tool. We are not officially affiliated with Digital Asset or Canton Network, but we are applying for a Canton Protocol Development Fund grant.\n\n**How do I report a bug?**\nUse the contact form at **cctools.network/contact** with a description of the bug, screenshots if possible, and your browser/device info.",
          },
          {
            heading: "Account & XP",
            body: "**Why did my XP drop?**\nSome XP is tied to daily actions that reset. Also, if you un-upvote a project, the XP from that action is reversed.\n\n**How do I get Level 4?**\nKeep logging in daily to build your streak, upvote projects, follow @cantontools on X, and add a wallet. Level 4 typically takes a few days of active use.\n\n**Can I reset my account?**\nUse the contact form at **cctools.network/contact** if you need an account reset. Note that this will erase all XP and badges.",
          },
          {
            heading: "Portfolio",
            body: "**Is my wallet safe?**\nCCTools only requires your public wallet address for read-only tracking. We never ask for private keys or seed phrases. Your wallet is never at risk.\n\n**Why are my balances wrong?**\nToken prices are updated in near real-time but may have slight delays. If balances seem significantly wrong, try refreshing or removing and re-adding your wallet.\n\n**Can I track wallets on other chains?**\nCurrently, CCTools only supports Canton Network wallets. Multi-chain support may come in the future.",
          },
        ],
      },
    ],
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    description: "Common issues and how to fix them. Can't find your answer? Contact support.",
    icon: HelpCircle,
    color: "var(--blue)",
    colorDim: "var(--blue-dim)",
    articles: [
      {
        slug: "login-issues",
        title: "Login Issues",
        summary: "Can't log in? Here are the most common causes and fixes.",
        tags: ["login", "auth", "troubleshooting"],
        sections: [
          {
            heading: "Common Issues",
            body: "**\"Invalid credentials\" error**\n- Double-check your email and password\n- Try the \"Forgot Password\" link to reset\n- Make sure you're using the correct login method (Email, Google, Twitter/X, or Discord)\n\n**\"Email not verified\" error**\n- Check your inbox (and spam folder) for the verification email\n- Click the verification link in the email\n- If you didn't receive it, click \"Resend verification email\" on the login page\n\n**2FA issues**\n- If you enabled 2FA and lost access to your authenticator app, reach out via the contact form\n- Email 2FA codes may land in spam\n\n**Page loads but nothing happens**\n- Clear your browser cache and cookies\n- Try a different browser\n- Disable browser extensions that might interfere",
          },
          {
            heading: "Still Can't Log In?",
            body: "If none of the above works, reach out via the contact form at **cctools.network/contact** with:\n\n- The email you're trying to log in with\n- What error message you see\n- Your browser and device info\n- Screenshots if possible",
          },
        ],
      },
      {
        slug: "portfolio-issues",
        title: "Portfolio Not Loading",
        summary: "Troubleshoot issues with portfolio data not showing correctly.",
        tags: ["portfolio", "loading", "troubleshooting"],
        sections: [
          {
            heading: "Data Not Showing",
            body: "**Wallet just added?**\nIt may take a few minutes for your wallet data to fully load. Wait 2-3 minutes and refresh the page.\n\n**Showing zero balance?**\n- Verify your wallet address is correct\n- Make sure the wallet has Canton Network tokens (not other chains)\n- Try removing and re-adding the wallet\n\n**Historical data missing?**\nHistorical data depends on indexer availability. Some older transactions may not be reflected.",
          },
        ],
      },
      {
        slug: "contact-support",
        title: "Contact Support",
        summary: "How to reach the CCTools team for help.",
        tags: ["contact", "support", "help"],
        sections: [
          {
            heading: "Contact Channels",
            body: "**Contact Form**: The best way to reach us is through the contact form at **cctools.network/contact**. Select a subject (Sponsored Listing, Partnership, General Inquiry, etc.) and describe your issue.\n\n**Twitter/X**: @cantontools (DMs open for quick questions)\n\n**Community**: Join our Telegram for community-powered support\n\nWhen contacting support, include:\n- Your CCTools email/username\n- Description of the issue\n- Screenshots or screen recordings\n- Browser and device info",
          },
        ],
      },
    ],
  },
];

/* ── Helper functions ── */

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getArticle(
  categorySlug: string,
  articleSlug: string
): { category: Category; article: Article } | undefined {
  const category = getCategory(categorySlug);
  if (!category) return undefined;
  const article = category.articles.find((a) => a.slug === articleSlug);
  if (!article) return undefined;
  return { category, article };
}

export function searchArticles(query: string): Array<{
  category: Category;
  article: Article;
  matchedSection?: string;
}> {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: Array<{
    category: Category;
    article: Article;
    matchedSection?: string;
  }> = [];

  for (const category of categories) {
    for (const article of category.articles) {
      const titleMatch = article.title.toLowerCase().includes(q);
      const summaryMatch = article.summary.toLowerCase().includes(q);
      const tagMatch = article.tags.some((t) => t.includes(q));

      if (titleMatch || summaryMatch || tagMatch) {
        results.push({ category, article });
        continue;
      }

      for (const section of article.sections) {
        if (
          section.heading.toLowerCase().includes(q) ||
          section.body.toLowerCase().includes(q)
        ) {
          results.push({
            category,
            article,
            matchedSection: section.heading,
          });
          break;
        }
      }
    }
  }

  return results;
}

export function getAllArticlesFlat(): Array<{
  category: Category;
  article: Article;
}> {
  return categories.flatMap((category) =>
    category.articles.map((article) => ({ category, article }))
  );
}

export const totalArticles = categories.reduce(
  (sum, c) => sum + c.articles.length,
  0
);
