// React & Next
import Link from "next/link";

// packages
import { getTranslations } from "next-intl/server";

// components
import { Button } from "@/components/ui/button";

// icons
import { LogOut } from "lucide-react";

const SignoutBtn = async () => {
  // intl
  const t = await getTranslations("layout");

  return (
    <Link href="/logout">
      <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 flex items-center justify-center gap-2">
        <LogOut size={20} />
        {t("signout")}
      </Button>
    </Link>
  );
};

export default SignoutBtn;
