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
  FileText,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
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
  FileText,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] || FileText;
}
