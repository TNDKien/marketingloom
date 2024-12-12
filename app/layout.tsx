import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Looms from "../components/Looms/Looms";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <StoryblokProvider>
      <html>
        <body>
          <Header blok={{}} />
          <main className="mb-10 mt-28 lg:my-[150px] z-10">{children}</main>

          {/* <Looms /> */}
          <Footer blok={{}} />
        </body>
      </html>
    </StoryblokProvider>
  );
}
