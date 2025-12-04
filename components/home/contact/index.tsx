"use client";
// React & Next
import React from "react";

// packages
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// intl
import { useTranslations } from "next-intl";

// components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// utils
import { cn } from "@/lib/utils";

// icons
import { Target, BookOpen, Eye, Mail, Phone, MapPin, Send } from "lucide-react";

// schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "الاسم مطلوب" })
    .max(100, { message: "الاسم يجب أن يكون أقل من 100 حرف" }),
  email: z
    .string()
    .trim()
    .email({ message: "البريد الإلكتروني غير صحيح" })
    .max(255, { message: "البريد الإلكتروني يجب أن يكون أقل من 255 حرف" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "رقم الهاتف مطلوب" })
    .max(20, { message: "رقم الهاتف يجب أن يكون أقل من 20 رقم" }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "الموضوع مطلوب" })
    .max(200, { message: "الموضوع يجب أن يكون أقل من 200 حرف" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "الرسالة مطلوبة" })
    .max(1000, { message: "الرسالة يجب أن تكون أقل من 1000 حرف" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  // intl
  const t = useTranslations("contact");

  // state
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // section data
  const sections = [
    {
      icon: Target,
      title: t("sections.strategicGoals.title"),
      content: t("sections.strategicGoals.content"),
      gradient: "from-primary to-accent",
    },
    {
      icon: BookOpen,
      title: t("sections.mission.title"),
      content: t("sections.mission.content"),
      gradient: "from-accent to-secondary",
    },
    {
      icon: Eye,
      title: t("sections.vision.title"),
      content: t("sections.vision.content"),
      gradient: "from-secondary to-primary",
    },
  ];

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("تم إرسال رسالتك بنجاح سنتواصل معك في أقرب وقت ممكن");

      form.reset();
    } catch (error) {
      toast.error("حدث خطأ حاول مرة أخرى");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/layout/college.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t("heroDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto space-y-5">
            {sections.map((section, index) => (
              <div
                key={index}
                className="w-11/12 max-w-xl group relative bg-card border border-border rounded-2xl p-3 md:p-4 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row gap-2 items-start">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <section.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <div className="flex-1">
                    <h3
                      className={cn([
                        "text-lg md:text-xl font-bold mb-3 ",
                        index % 2 === 0 ? "text-accent" : " text-foreground",
                      ])}
                    >
                      {section.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-2">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("contactInfo.email")}
                    </h3>
                    <p className="text-muted-foreground" dir="ltr">
                      info@suez.edu.eg
                    </p>
                    <p className="text-muted-foreground" dir="ltr">
                      postgrad@suez.edu.eg
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("contactInfo.phone")}
                    </h3>
                    <p className="text-muted-foreground" dir="ltr">
                      +20 64 3230483
                    </p>
                    <p className="text-muted-foreground" dir="ltr">
                      +20 64 3230484
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("contactInfo.address")}
                    </h3>
                    <p className="text-muted-foreground">
                      جامعة قناة السويس - الإسماعيلية
                      <br />
                      مصر
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t("contactForm.title")}
                </h2>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contactForm.name")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("contactForm.namePlaceholder")}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contactForm.email")}</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder={t("contactForm.emailPlaceholder")}
                                {...field}
                                dir="ltr"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contactForm.phone")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("contactForm.phonePlaceholder")}
                                {...field}
                                dir="ltr"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contactForm.subject")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t(
                                  "contactForm.subjectPlaceholder"
                                )}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contactForm.message")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("contactForm.messagePlaceholder")}
                              className="min-h-[150px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        t("contactForm.submitting")
                      ) : (
                        <>
                          <Send className="ml-2 h-4 w-4" />
                          {t("contactForm.submit")}
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
