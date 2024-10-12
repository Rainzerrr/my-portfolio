import { Poppins } from "next/font/google";
import Header from "@/components/blocks/header/header";
import { NavItemProps } from "@/components/molecules/nav-item/nav-item";
import "./layout.scss";
import "./globals.css";
// import { Providers } from "./providers";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export async function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const navItems: Omit<NavItemProps, "size">[] = [
    {
      label: "Accueil",
      redirectUrl: "/",
    },
    {
      label: "Présentation",
      redirectUrl: "/presentation",
    },
    {
      label: "Projets",
      redirectUrl: "/projects",
    },
  ];

  return (
    <html lang={locale}>
      {/* <Providers> */}
      <body className={`${poppins_init.variable} layout`}>
        <Header navItems={navItems} />
        <div className="layout__children">{children}</div>
      </body>
      {/* </Providers> */}
    </html>
  );
}
