"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Mobile_Ad from "./Mobile_Ad/Mobile_Ad";
import Template from "./Template/Template";
import Artikel from "./Artikel/Artikel";
import Account from "./Account/Account";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Artikel_Hero from "./Artikel_Hero/Artikel_Hero";
import Artikel_XS from "./Artikel_XS/Artikel_XS";
import Contact from "./Contact/Contact";
import Evenement from "./Evenement/Evenement";
import EvenementContainer from "./EvenementContainer/EvenementContainer";
import EventHero from "./EventHero/EventHero";
import EventInfo from "./EventInfo/EventInfo";
import EvenementTeaser from "./EvenementTeaser/EvenementTeaser";
import Interview from "./Interview/Interview";
import Nieuwsbrief from "./Nieuwsbrief/Nieuwsbrief";
import Pagina_Hero from "./Pagina_Hero/Pagina_Hero";
import Sidebar from "./Sidebar/Sidebar";
import Spreker from "./Spreker/Spreker";
import Spreker_Hero from "./Spreker_Hero/Spreker_Hero";
import Sticky_Component from "./Sticky_Component/Sticky_Component";
import Tickets from "./Tickets/Tickets";
import Verkoop from "./Verkoop/Verkoop";
import ArtikelContainer from "./ArtikelContainer/ArtikelContainer";
import PopulaireArtikelen from "./PopulaireArtikelen/PopulaireArtikelen";
import ArtikelTeaser from "./ArtikelTeaser/ArtikelTeaser";
import Eyecatcher from "./Eyecatcher/Eyecatcher";
import Artikel_Preview from "./Artikel_Preview/Artikel_Preview";
import Nieuws_Teaser from "./Nieuws_Teaser/Nieuws_Teaser";
import Sticky_Ad from "./Sticky_Ad/Sticky_Ad";
import Button from "./Button/Button";
import Blok_Container from "./Blok_Container/Blok_Container";
import Line from "./Line/Line";
import Vertical_Ad from "./Vertical_Ad/Vertical_Ad";
import InterviewContainer from "./InterviewContainer/InterviewContainer";

const components = {
  page: Page,
  mobile_ad: Mobile_Ad,
  button: Button,
  vertical_ad: Vertical_Ad,
  artikel_preview: Artikel_Preview,
  template: Template,
  artikel: Artikel,
  account: Account,
  footer: Footer,
  header: Header,
  artikel_hero: Artikel_Hero,
  artikel_xs: Artikel_XS,
  contact: Contact,
  evenement: Evenement,
  evenementcontainer: EvenementContainer,
  evenementteaser: EvenementTeaser,
  eventhero: EventHero,
  eventinfo: EventInfo,
  eyecatcher: Eyecatcher,
  interview: Interview,
  nieuwsbrief: Nieuwsbrief,
  pagina_hero: Pagina_Hero,
  sidebar: Sidebar,
  spreker: Spreker,
  spreker_hero: Spreker_Hero,
  sticky_component: Sticky_Component,
  tickets: Tickets,
  verkoop: Verkoop,
  artikelcontainer: ArtikelContainer,
  populaireartikelen: PopulaireArtikelen,
  artikelteaser: ArtikelTeaser,
  nieuws_teaser: Nieuws_Teaser,
  sticky_ad: Sticky_Ad,
  blok_container: Blok_Container,
  line: Line,
  interviewcontainer: InterviewContainer,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

// console.log(process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);
