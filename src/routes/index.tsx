import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/eig-logo.png";
import hero from "@/assets/hero-parisian.jpg";
import craft from "@/assets/craft-detail.jpg";
import galNettoyage from "@/assets/gallery-nettoyage.jpg";
import galPeinture from "@/assets/gallery-peinture.jpg";
import galPlomberie from "@/assets/gallery-plomberie.jpg";
import galVitres from "@/assets/gallery-vitres.jpg";
import galParquet from "@/assets/gallery-parquet.jpg";
import galFacade from "@/assets/gallery-facade.jpg";

import { useState } from "react";
import {
  Sparkles, PaintRoller, Wrench, Zap, Hammer, Grid3x3,
  DoorOpen, KeyRound, Package, UserCog, Phone, Mail, MapPin, Clock, ArrowUpRight, Menu, X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--33e0266d-c484-4a8b-a916-64b71003eb4b.lovable.app/og-image.jpg" },
    ],
  }),
});

type Service = { icon: LucideIcon; title: string; items: string[] };

const services: Service[] = [
  { icon: Sparkles, title: "Nettoyage", items: [
    "Parties communes des immeubles",
    "Sorties & rentrées des containers",
    "Locaux commerciaux et bureaux",
    "Lavage vitrerie et miroiterie",
  ]},
  { icon: PaintRoller, title: "Peinture", items: [
    "Travaux préparatoires, enduits",
    "Toile de verre, papiers peints",
    "Peintures intérieures & extérieures",
    "Vernis, lasures, antirouille, passivation",
  ]},
  { icon: Wrench, title: "Plomberie", items: [
    "Remplacement ballon, chaudière",
    "Rénovation salle de bains, cuisine",
    "Appareils sanitaires & robinetterie",
    "Création douche / baignoire",
  ]},
  { icon: Zap, title: "Électricité", items: [
    "Mise en conformité & à la terre",
    "Rénovation complète, domotique",
    "Remplacement éclairage",
    "Contrôle d'accès : Vigik & Interphone",
  ]},
  { icon: Hammer, title: "Maçonnerie", items: [
    "Murs, murets, cloisons, dalles béton",
    "Reprise de parties dégradées (dalles, parking, nids de poule)",
    "Chappe, ragréage et dalles",
    "Mise à niveau de pavage",
    "Ventilations anti-humidité",
  ]},
  { icon: Grid3x3, title: "Carrelage & Revêtement", items: [
    "Carrelage, pierre, marbre, faïence et mosaïque",
    "Traitement d'étanchéité",
    "Parquet massif, stratifié, contrecollé",
    "Vitrification, mise en huile & vernis en teinte",
    "Réparation & rénovation",
  ]},
  { icon: DoorOpen, title: "Menuiserie", items: [
    "Portes, fenêtres, volets (bois, PVC, alu)",
    "Meubles sur mesure",
    "Installation de cuisine",
  ]},
  { icon: KeyRound, title: "Serrurerie", items: [
    "Ouverture de porte, ferme-porte",
    "Remplacement & réparation serrures",
    "Installation et réglage de bandeau ventouse",
    "Garde-corps, mains courantes",
    "Blindage, sécurisation logements (cornière antipince, plat de recouvrement)",
  ]},
  { icon: Package, title: "Désencombrement", items: [
    "Appartements, caves, parties communes",
    "Combles et cours",
    "Évacuation et mise en décharge des gravats",
  ]},
  { icon: UserCog, title: "Remplacement de gardiens", items: [
    "Présence en loge, accueil prestataires",
    "Nettoyage des parties communes",
    "Distribution courrier & colis",
    "Sorties et rentrées des containers",
  ]},
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "La maison" },
    { href: "#services", label: "Prestations" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 inset-x-0 z-20 bg-gradient-to-b from-primary/70 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between py-5">
          <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <img src={logo} alt="EIG Net" width={32} height={32} className="h-8 w-8 object-contain" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg text-primary-foreground">EIG Net</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-primary-foreground/70">Nettoyage & Rénovation</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/85">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-accent transition-colors">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+33143674636" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> 01 43 67 46 36
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-primary-foreground/30 text-primary-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-sm px-6 pb-6 pt-2 flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-primary-foreground/90 text-base py-2 border-b border-primary-foreground/10 hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href="tel:+33143674636" className="mt-2 inline-flex items-center gap-2 text-accent text-sm font-medium">
              <Phone className="h-4 w-4" /> 01 43 67 46 36
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="Immeuble haussmannien parisien entretenu par EIG Net" className="h-full w-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,oklch(0.20_0.05_255/0.92)_0%,oklch(0.25_0.06_250/0.78)_45%,oklch(0.30_0.06_240/0.35)_100%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-28 md:pt-52 md:pb-40">
          <p className="eyebrow text-accent">Au service de la copropriété — depuis 2005</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-primary-foreground max-w-4xl">
            L'entretien parisien,<br/>
            <span className="italic text-accent">élevé au rang d'art.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
            Le Groupe EIG accompagne syndics, copropriétés et professionnels à Paris et en région parisienne. Nettoyage, entretien et rénovation multi-services, exécutés avec la précision d'un métier.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors">
              Découvrir nos prestations <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              Demander un devis
            </a>
          </div>

          <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary-foreground/15 pt-10">
            {[
              ["20+", "années d'expertise"],
              ["10", "métiers réunis"],
              ["Paris", "& région parisienne"],
              ["7j/7", "réactivité terrain"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-4xl text-accent">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img src={craft} alt="Le souci du détail par EIG Net" width={600} height={704} loading="lazy" decoding="async" className="rounded-sm shadow-elegant w-full object-cover aspect-[5/6]" />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="eyebrow">Qui sommes-nous</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
              Un savoir-faire discret, une exigence constante.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Fort d'une expérience considérable dans le nettoyage et la rénovation à Paris, <span className="text-foreground font-medium">EIG</span> assure l'entretien des immeubles en collaboration avec les syndics de copropriétés, ainsi que le nettoyage des bureaux, cafés, restaurants, boulangeries, agences et magasins — vitrerie comprise.
              </p>
              <p>
                Notre pôle rénovation réunit peinture, revêtement, maçonnerie, serrurerie, plomberie, menuiserie et électricité. Une seule maison, une seule interlocuteur, un seul standard : le nôtre.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                ["Syndics & copropriétés", "Cabinets de gestion locative, immeubles collectifs, appartements et maisons."],
                ["Professionnels", "Locaux commerciaux, bureaux, cabinets et professions libérales."],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-accent pl-5">
                  <div className="font-display text-xl text-primary">{t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow">Nos prestations</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary max-w-2xl leading-tight">
                Dix métiers, une même signature.
              </h2>
            </div>
            <p className="md:max-w-sm text-muted-foreground">
              De l'entretien quotidien des parties communes aux chantiers de rénovation, EIG orchestre chaque intervention avec la même rigueur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {services.map((s) => (
              <article key={s.title} className="group bg-background p-8 hover:bg-cream transition-colors">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-2xl text-primary">{s.title}</h3>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-px w-3 bg-accent shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground italic">
            EIG propose une offre multi-services dans le nettoyage et dans le bâtiment, à l'exception des travaux de ravalement de façades et de toiture.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="realisations" className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow">Nos réalisations</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary max-w-2xl leading-tight">
                Le Paris que nous entretenons.
              </h2>
            </div>
            <p className="md:max-w-sm text-muted-foreground">
              Immeubles haussmanniens, boutiques, appartements de standing — quelques images de nos interventions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[720px]">
            <figure className="relative overflow-hidden rounded-sm group col-span-2 row-span-2">
              <img src={galNettoyage} alt="Nettoyage d'un hall parisien" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent">
                <p className="eyebrow text-accent">Nettoyage</p>
                <p className="mt-1 font-display text-2xl text-primary-foreground">Halls & parties communes</p>
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-sm group">
              <img src={galVitres} alt="Lavage de vitres avec vue sur Paris" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/85 to-transparent">
                <p className="font-display text-lg text-primary-foreground">Vitrerie</p>
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-sm group">
              <img src={galPeinture} alt="Travaux de peinture sur moulures" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/85 to-transparent">
                <p className="font-display text-lg text-primary-foreground">Peinture</p>
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-sm group">
              <img src={galParquet} alt="Parquet rénové en point de Hongrie" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/85 to-transparent">
                <p className="font-display text-lg text-primary-foreground">Parquet & revêtement</p>
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-sm group">
              <img src={galPlomberie} alt="Salle de bains rénovée" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/85 to-transparent">
                <p className="font-display text-lg text-primary-foreground">Plomberie</p>
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6 items-center border-t border-border pt-10">
            <img src={galFacade} alt="Façade parisienne entretenue par EIG" loading="lazy" className="md:col-span-1 aspect-[4/5] object-cover rounded-sm" />
            <div className="md:col-span-2 md:pl-6">
              <p className="eyebrow">Un seul interlocuteur</p>
              <h3 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
                De la porte cochère au dernier étage.
              </h3>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Nettoyage quotidien, remise en état, petits travaux, gros œuvre : EIG orchestre tous les corps de métier pour que votre immeuble conserve son éclat, saison après saison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS / QUOTE */}

      <section id="clients" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center relative">
          <p className="eyebrow text-accent">La confiance des Parisiens</p>
          <blockquote className="mt-8 font-display text-3xl md:text-5xl leading-tight italic">
            « Un immeuble bien tenu ne se remarque pas. C'est précisément
            <span className="text-accent not-italic"> notre métier.</span> »
          </blockquote>
          <p className="mt-8 text-sm tracking-[0.2em] uppercase text-primary-foreground/60">
            Le Groupe EIG — Multiservices
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
              Parlons de votre immeuble.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Devis gratuit sous 48h. Nous étudions chaque copropriété et chaque local avec la même attention.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { icon: MapPin, label: "Siège social", value: "19 rue des Balkans, 75020 Paris" },
                { icon: Phone, label: "Téléphone", value: "01 43 67 46 36", href: "tel:+33143674636" },
                { icon: Phone, label: "Portables", value: "06 09 31 61 58  ·  06 34 11 97 31" },
                { icon: Mail, label: "E-mail", value: "contact@eig-net.fr", href: "mailto:contact@eig-net.fr" },
                { icon: Clock, label: "Horaires", value: "Lun — Ven, 08:00 — 18:00" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/5 text-accent">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
                    {href ? (
                      <a href={href} className="mt-1 block font-display text-xl text-primary hover:text-accent transition-colors">{value}</a>
                    ) : (
                      <div className="mt-1 font-display text-xl text-primary">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-sm overflow-hidden shadow-elegant min-h-[420px] bg-primary/5">
            <iframe
              title="EIG Net — 19 rue des Balkans, 75020 Paris"
              src="https://www.google.com/maps?q=19+Rue+des+Balkans,+75020+Paris&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
              <img src={logo} alt="EIG Net" width={32} height={32} className="h-8 w-8 object-contain" />
            </span>
            <div className="text-sm">
              <div className="font-display text-lg text-primary-foreground">EIG Net</div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-primary-foreground/60">Au service de la copropriété depuis 2005</div>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Le Groupe EIG — Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}
