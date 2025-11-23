// types
import { Link } from "@/types/layout";

// lucide icons
import {
  CreditCard,
  Settings,
  User,
  Home,
  ShoppingBag,
  Zap,
  Users,
  Phone,
  Clock,
  BadgePercent,
  MessageSquareMore,
  Clock2,
  MessageSquareWarning,
  Gift,
  BookText,
  NotebookText,
  CirclePercent,
} from "lucide-react";

// home pagaes
export const pages: Link[] = [
  {
    label: "الرئيسية",
    link: "/",
    icon: Home,
  },
  {
    label: "المستشارون",
    link: "/consultant",
    icon: Users,
  },
  {
    label: "تواصل معنا",
    link: "/contact",
    icon: Phone,
  },
];

// home sub pagaes
export const SPages: Link[] = [
  {
    label: "متاحون قريبا",
    link: "/available",
    icon: Clock2,
    status: true,
  },
  {
    label: "حجز فوري",
    link: "/instant",
    icon: Zap,
    status: true,
  },
  {
    label: "جلسة توجيهية",
    link: "/preconsultation",
    icon: MessageSquareWarning,
    status: true,
  },
  {
    label: "جلسة مجانية",
    link: "/freesession",
    icon: Gift,
    status: true,
  },
  {
    label: "البرامج",
    link: "/programs",
    icon: NotebookText,
    status: true,
  },
];

// constultant dashboard menu owners
export const dashboard: Link[] = [
  {
    label: "اعلاني",
    link: "",
    icon: User,
    status: true,
  },
  {
    label: "المواقيت",
    link: "/timings",
    icon: Clock,
    status: true,
  },
  {
    label: "حجز فوري",
    link: "/instant",
    icon: Zap,
    status: true,
  },
  {
    label: "الطلبات",
    link: "/orders",
    icon: ShoppingBag,
    status: true,
  },
  {
    label: "المستحقات",
    link: "/dues",
    icon: CreditCard,
    status: true,
  },
  {
    label: "الكوبونات",
    link: "/coupons",
    icon: BadgePercent,
    status: true,
  },
  {
    label: "الخصومات",
    link: "/discounts",
    icon: CirclePercent,
    status: true,
  },
  {
    label: "الجلسات المجانية",
    link: "/freesession",
    icon: Gift,
    status: true,
  },
  {
    label: "التعليقات",
    link: "/reviews",
    icon: MessageSquareMore,
    status: false,
  },
  {
    label: "الاعدادت",
    link: "/profile",
    icon: Settings,
    status: true,
  },
  {
    label: "البرامج",
    link: "/programs",
    icon: BookText,
    status: true,
  },
];

// management menus
export const supervisorMenu = {
  application: [
    { icon: Home, name: "لوحة التحكم", url: "" },
    { icon: Users, name: "الطلبات", url: "/applications" },
    { icon: Settings, name: "الإعدادات", url: "/settings" },
  ],
};
