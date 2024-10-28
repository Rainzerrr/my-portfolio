import { Poppins } from "next/font/google";
import Header from "@/components/blocks/header/header";
import { NavItemProps } from "@/components/molecules/nav-item/nav-item";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./layout.scss";
import "./globals.css";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const navItems: Omit<NavItemProps, "size">[] = [
  {
    labelKey: "header.home",
    redirectUrl: "/",
  },
  {
    labelKey: "header.presentation",
    redirectUrl: "/presentation",
  },
  {
    labelKey: "header.projects",
    redirectUrl: "/projects",
  },
];

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${poppins_init.variable} layout`}>
        <NextIntlClientProvider messages={messages}>
          <Header navItems={navItems} />
          <div className="layout__children">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
