// React & Next
import Link from "next/link";

// intl
import { getTranslations } from "next-intl/server";

// components
import { Button } from "@/components/ui/button";

// lib
import { authUser } from "@/lib/auth";

// icons
import { GraduationCap } from "lucide-react";

// motion
import * as motion from "motion/react-client";
import Image from "next/image";

const Hero = async () => {
  // auth
  const user = await authUser();

  // translate
  const t = await getTranslations("hero");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "var(--hero-gradient)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Animate hero content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <div className="flex justify-center mt-8 mb-4">
            <Image
              src="/layout/suez-canal-university.png"
              alt="suez-canal-university"
              width={200}
              height={200}
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
            {t("h2")}
          </h2>

          <div className="flex items-center justify-center gap-1">
            {/* logo */}
            {/* <Image src="/layout/logo.png" alt="logo" width={100} height={100} /> */}

            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-semibold text-primary">
                {t("university")}
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {t("faculty")}
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("p1")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            >
              <Link href={user?.name ? "/dashboard" : "/login"}>
                {user?.name ? t("dashboard") : t("apply")}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-xl font-semibold border-2 hover:bg-secondary transition-all duration-300"
            >
              {t("more")}
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
