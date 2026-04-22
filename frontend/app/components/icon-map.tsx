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
  Newspaper,
  GraduationCap,
  FileText,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] || FileText;
}
