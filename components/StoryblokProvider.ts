"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
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
import Event_Hero from "./Event_Hero/Event_Hero";
import Event_Info from "./Event_Info/Event_Info";
import Interview_Container from "./Interview_Container/Interview_Container";
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

const components = {
  page: Page,
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
  event_hero: Event_Hero,
  event_info: Event_Info,
  eyecatcher: Eyecatcher,
  interview_container: Interview_Container,
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
