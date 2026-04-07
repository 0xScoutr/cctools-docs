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
            body: "**Portfolio Tracker** — Connect your wallets and see your full Canton portfolio with real-time prices, P&L, rewards, and transfer history.\n\n**Ecosystem Directory** — Browse hundreds of projects building on Canton Network, filterable by category, role, and status. Upvote your favorites.\n\n**Compare** — Compare up to 4 projects (Pro) or validators side by side.\n\n**Earn** — Complete tasks, discover opportunities, and join campaigns to earn XP and climb the leaderboard.\n\n**Rewards Calculator** — Calculate potential rewards as an App Builder, Validator, or CC Holder.\n\n**Network Stats** — Real-time Canton Network metrics with TradingView integration.\n\n**Governance** — Track Super Validator votes and governance proposals.\n\n**Leaderboard** — See where you rank among other CCTools users with standard, weekly, and bracket views.\n\n**Learn** — Educational content about Canton Network.",
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
            body: "The left sidebar is your main navigation hub. It contains links to all major sections:\n\n- **Overview** — Your personalized dashboard\n- **Portfolio** — Wallet tracking and P&L\n- **Ecosystem** — Project directory with hundreds of projects\n- **Earn** — Quests, campaigns, and opportunities\n- **Governance** — Super Validator votes and proposals\n- **Network Stats** — On-chain analytics and TradingView charts\n- **Leaderboard** — Community rankings (standard, weekly, bracket)\n- **$CC Token** — Token info, burn/mint charts\n- **Learn** — Educational content about Canton\n- **Validators** — Validator list and performance\n- **Compare** — Side-by-side project comparison (2 free, 4 Pro)\n- **Rewards Calculator** — App Builder, Validator, and CC Holder calculators\n\nYou can collapse the sidebar by clicking the collapse icon at the bottom.",
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
