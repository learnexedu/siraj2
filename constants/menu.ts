// types
import { Link } from "@/types/layout";

// lucide icons
import {
  Settings,
  Home,
  Users,
  Phone,
  BookText,
  NotebookText,
  PencilRuler,
} from "lucide-react";

// home pagaes
export const pages: Link[] = [
  {
    label: "الرئيسية",
    link: "/",
    icon: Home,
  },
  {
    label: "programs",
    link: "/programs",
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
    label: "البرامج",
    link: "/programs",
    icon: NotebookText,
    status: true,
  },
];

// constultant dashboard menu owners
export const dashboard: Link[] = [
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
  application: [{ icon: Home, name: "لوحة التحكم", url: "" }],
  enrollment: [
    {
      // title: "enrollment",
      title: "التسجيل",
      url: "/enrollment",
      icon: PencilRuler,
      isActive: true,
      items: [
        {
          title: "الفصول الدراسية",
          url: "/semesters",
        },
        {
          // title: "applications",
          title: "الطلبات",
          url: "/applications",
        },
      ],
    },
  ],
  settings: [
    {
      title: "الإعدادات",
      url: "/settings",
      icon: Settings,
      isActive: true,
      items: [
        {
          // title: "regulation",
          title: "اللائحة",
          url: "/regulation",
        },
      ],
    },
  ],
};
