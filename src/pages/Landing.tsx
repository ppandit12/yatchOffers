import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Anchor, Ship, Users, Wrench, BarChart3, CreditCard, Bell, MapPin,
  FileText, ClipboardCheck, Cloud, ShieldCheck, Fuel, LayoutDashboard,
  MessageCircle, Play, ArrowRight, Check,
  Mail, Linkedin, Facebook, Sparkles, Building2, Waves, Compass, LifeBuoy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

const SITE_URL = "https://nautical-digital-spark.lovable.app";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ebdef1f7-3c6c-4ca8-b582-c8c10f1f212c/id-preview-7831188b--a4988970-3d15-4463-aa28-06412f43946d.lovable.app-1783467112430.png";
const SEO_TITLE = "Yacht Management Software & Custom Mobile App | Kyptronix";
const SEO_DESCRIPTION = "Custom yacht management software for charter, marina, and fleet operators. Automate bookings, crew, maintenance, invoicing, and owner reporting in one platform.";

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Features", "#features"],
    ["Solutions", "#benefits"],
    ["Industries", "#industries"],
    ["FAQ", "#faq"],
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-elegant" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <img
              src="/kyptronixllp_logo.jpg"
              alt="Kyptronix LLP"
              className="size-9 rounded-xl object-cover shadow-glow"
            />
            <span className="text-lg font-bold tracking-tight text-navy">
              Kyptronix<span className="text-accent">.</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#assessment">
            <Button className="rounded-xl gradient-brand text-white shadow-glow hover:opacity-95">
              Book Demo
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section id="top" className="relative overflow-hidden gradient-hero pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-20 -left-32 size-[500px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -right-32 size-[500px] rounded-full bg-sky/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-navy">
              <Sparkles className="size-3.5 text-accent" />
              Digital transformation for the global yacht industry
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-navy md:text-6xl lg:text-7xl">
              Still Running a Multi-Million Dollar Fleet on{" "}
              <span className="text-gradient">Spreadsheets and WhatsApp?</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Replace scattered tools with one connected platform that automates bookings, fleet, crew, maintenance, owner reporting, and payments — so your team runs more yachts with less effort.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#assessment">
                <Button size="lg" className="h-12 rounded-xl gradient-brand px-6 text-white shadow-glow hover:opacity-95 cursor-pointer">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="h-12 rounded-xl border-navy/20 bg-white/60 px-6 text-navy backdrop-blur hover:bg-white">
                  See How It Works
                </Button>
              </a>
              <a
                href="https://wa.me/13024042011"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-medium text-white shadow-elegant transition hover:opacity-90"
              >
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-accent" /> Enterprise-grade security</div>
              <div className="flex items-center gap-2"><Cloud className="size-4 text-accent" /> Works offline at sea</div>
              <div className="flex items-center gap-2"><Compass className="size-4 text-accent" /> Built exclusively for marine operators</div>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div style={{ y }} className="relative mx-auto w-full max-w-md">
            <div className="relative mx-auto aspect-[9/18] w-72 md:w-80">
              <div className="absolute inset-0 rounded-[3rem] gradient-brand p-3 shadow-elegant">
                <div className="relative size-full overflow-hidden rounded-[2.5rem] bg-white">
                  <div className="flex items-center justify-between border-b px-5 py-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Fleet Overview</div>
                      <div className="text-base font-semibold text-navy">Good morning, Captain</div>
                    </div>
                    <div className="grid size-9 place-items-center rounded-full gradient-brand text-white">
                      <Ship className="size-4" />
                    </div>
                  </div>
                  <div className="space-y-3 p-4">
                    {[
                      { name: "Aurora IV", status: "On charter", tone: "bg-emerald-500" },
                      { name: "Blue Serene", status: "Docked", tone: "bg-accent" },
                      { name: "Marina Star", status: "Maintenance", tone: "bg-amber-500" },
                    ].map((y) => (
                      <div key={y.name} className="flex items-center justify-between rounded-2xl border bg-secondary/50 p-3">
                        <div>
                          <div className="text-sm font-semibold text-navy">{y.name}</div>
                          <div className="text-[11px] text-muted-foreground">{y.status}</div>
                        </div>
                        <div className={`size-2.5 rounded-full ${y.tone}`} />
                      </div>
                    ))}
                    <div className="rounded-2xl gradient-brand p-4 text-white">
                      <div className="text-[10px] uppercase tracking-widest opacity-70">This week</div>
                      <div className="mt-1 text-2xl font-bold">$184,320</div>
                      <div className="text-xs opacity-80">Bookings revenue · +18%</div>
                      <div className="mt-3 flex h-1.5 gap-1">
                        {[60, 80, 45, 90, 70, 100, 55].map((h, i) => (
                          <div key={i} className="flex-1 rounded-full bg-white/30">
                            <div className="h-full rounded-full bg-white" style={{ width: `${h}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            {[
              { icon: <ClipboardCheck className="size-4" />, label: "Bookings", pos: "top-6 -left-6 md:-left-16", delay: 0 },
              { icon: <Users className="size-4" />, label: "Crew", pos: "top-40 -right-4 md:-right-10", delay: 0.2 },
              { icon: <Wrench className="size-4" />, label: "Maintenance", pos: "bottom-32 -left-6 md:-left-14", delay: 0.4 },
              { icon: <BarChart3 className="size-4" />, label: "Analytics", pos: "bottom-10 -right-4 md:-right-8", delay: 0.6 },
              { icon: <CreditCard className="size-4" />, label: "Payments", pos: "top-72 -left-10 md:-left-20", delay: 0.8 },
            ].map((f) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + f.delay, duration: 0.6 }}
                className={`absolute ${f.pos} animate-float`}
                style={{ animationDelay: `${f.delay}s` }}
              >
                <div className="glass flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold text-navy shadow-elegant">
                  <span className="grid size-7 place-items-center rounded-lg gradient-brand text-white">{f.icon}</span>
                  {f.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section helper ---------- */
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl text-center"
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

/* ---------- Trusted by ---------- */
function TrustedBy() {
  const items = ["Luxury Yacht Companies", "Charter Companies", "Marinas", "Boat Rentals", "Superyachts", "Fleet Operators"];
  return (
    <section className="border-y border-border/60 bg-white/60 py-10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by modern marine operators
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {items.map((label) => (
            <div key={label} className="flex items-center justify-center gap-2 text-sm font-semibold text-navy/60">
              <Waves className="size-4 text-accent/70" />
              <span className="truncate">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Problems ---------- */
function Problems() {
  const problems = [
    { icon: FileText, title: "Double bookings & missed inquiries", desc: "Every leaked reservation is revenue walking to a competitor." },
    { icon: LayoutDashboard, title: "Fleet data trapped in Excel", desc: "Nobody knows the real status of any yacht in real time." },
    { icon: MessageCircle, title: "Operations run on WhatsApp", desc: "Critical decisions buried in personal chats and lost threads." },
    { icon: ClipboardCheck, title: "Paper maintenance logs", desc: "No history, no accountability, and surprise repair bills." },
    { icon: Users, title: "Crew scheduling chaos", desc: "Endless calls, last-minute swaps, no single source of truth." },
    { icon: CreditCard, title: "Slow invoices, slower cash flow", desc: "Payments delayed by weeks because billing lives in inboxes." },
    { icon: LifeBuoy, title: "No repeat-charter strategy", desc: "Guest data is scattered — so follow-ups never happen." },
    { icon: BarChart3, title: "Owners flying blind", desc: "No live reporting means uncomfortable monthly conversations." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="The Problem"
          title="Your Fleet Is Growing. Why Are Your Operations Falling Behind?"
          subtitle="Every disconnected tool leaks time, revenue, and client trust. You feel it every day — you just haven't put a number on it yet."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-3xl border bg-card p-6 shadow-glass transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid size-11 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:gradient-brand group-hover:text-white">
                <p.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Workflow ---------- */
function Workflow() {
  const steps = [
    "Inquiry", "Booking", "Digital Confirmation", "Crew Assignment",
    "Maintenance Check", "Customer Notifications", "Payment",
    "Owner Reporting", "Analytics Dashboard",
  ];
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(90,130,255,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(90,180,255,0.25), transparent 40%)" }} />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="size-3.5" /> How It Works
          </div>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            One Operating System. Every Workflow. Zero Chaos.
          </h2>
          <p className="mt-4 text-white/70">
            From first inquiry to owner-ready report — every step automated, tracked, and visible in real time.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto pb-4">
          <div className="flex min-w-max items-center gap-3 md:gap-4">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-dark min-w-[170px] rounded-2xl px-5 py-4 text-center"
                >
                  <div className="mx-auto grid size-8 place-items-center rounded-full bg-white/10 text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">{step}</div>
                </motion.div>
                {i < steps.length - 1 && <ArrowRight className="size-5 shrink-0 text-white/40" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- Features ---------- */
function Features() {
  const features = [
    { icon: ClipboardCheck, title: "Booking Management", slug: "booking-management", desc: "Accept more reservations with fewer errors through a fully automated booking engine." },
    { icon: Ship, title: "Fleet Management", slug: "fleet-management", desc: "Know exactly where every yacht stands — availability, location, status — in real time." },
    { icon: Users, title: "Crew Management", slug: "crew-management", desc: "Assign tasks, track schedules, and improve accountability without endless phone calls." },
    { icon: Wrench, title: "Maintenance Scheduler", slug: "maintenance-scheduler", desc: "Prevent expensive breakdowns before they happen with automated service planning." },
    { icon: Building2, title: "Owner Portal", slug: "owner-portal", desc: "Give owners full visibility so your staff stops answering the same questions daily." },
    { icon: LifeBuoy, title: "Guest Experience App", slug: "customer-app", desc: "A branded app that impresses guests and drives more repeat charters." },
    { icon: ClipboardCheck, title: "Digital Checklists", slug: "digital-checklists", desc: "Replace paper forms with signed, timestamped inspections stored forever." },
    { icon: Anchor, title: "Marina Operations", slug: "marina-operations", desc: "Berths, contracts, and services managed in one clean workflow." },
    { icon: Fuel, title: "Fuel Tracking", slug: "fuel-tracking", desc: "Cut fuel waste by tracking consumption across every vessel automatically." },
    { icon: FileText, title: "Automated Invoices", slug: "invoices", desc: "Send branded invoices in seconds and get paid weeks faster." },
    { icon: CreditCard, title: "Online Payments", slug: "payments", desc: "Collect deposits and balances online — shorten your payment cycle." },
    { icon: Bell, title: "Smart Notifications", slug: "push-notifications", desc: "Keep owners, crew, and guests aligned without a single follow-up call." },
    { icon: MapPin, title: "Live GPS Tracking", slug: "gps-ready", desc: "See exactly where every vessel is — and where it's been." },
    { icon: BarChart3, title: "Financial Reports", slug: "reports", desc: "Owner-ready P&L and operational reports generated on demand." },
    { icon: LayoutDashboard, title: "Executive Analytics", slug: "analytics", desc: "The KPIs your board actually cares about — updated live." },
    { icon: ShieldCheck, title: "Role Permissions", slug: "role-permissions", desc: "Give every team member exactly the access they need. Nothing more." },
    { icon: Cloud, title: "Offline Mode", slug: "offline-sync", desc: "Keep operating offshore with zero signal. Syncs automatically once online." },
    { icon: Cloud, title: "Cloud Backup", slug: "cloud-backup", desc: "Enterprise-grade encrypted backups running 24/7 in the background." },
  ];

  return (
    <section id="features" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 gradient-hero" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="The Solution"
          title="One Platform. Every Module Your Yacht Business Needs."
          subtitle="Purpose-built for marine operators — not another generic SaaS you have to bend around."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="group flex flex-col gap-4 rounded-2xl border bg-white/70 p-5 text-navy backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:gradient-brand group-hover:text-white">
                  <f.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </div>
              <a
                href="https://www.awesomescreenshot.com/video/54333490?key=220ba73fe612b30d37667af02d5ec484"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl border border-navy/10 bg-white px-4 py-2.5 text-xs font-semibold text-navy transition hover:gradient-brand hover:text-white hover:shadow-glow"
              >
                <Play className="size-3.5" /> View Interactive Demo →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Benefits ---------- */
function Benefits() {
  const items = [
    { title: "Cut operational costs", desc: "Eliminate hours of manual admin work every single week." },
    { title: "Increase fleet utilization", desc: "Fill more charter days with real-time availability and instant booking." },
    { title: "Grow repeat bookings", desc: "Turn one-time guests into loyal clients with a branded experience." },
    { title: "Get paid faster", desc: "Automated invoices and online payments shorten cash cycles." },
    { title: "Save hundreds of staff hours monthly", desc: "Automate the repetitive work drowning your team today." },
    { title: "Scale without hiring", desc: "Add yachts, marinas, and locations without adding headcount." },
    { title: "Delight your owners", desc: "Live dashboards replace uncomfortable monthly update calls." },
    { title: "Convert more inquiries", desc: "Intelligent lead tracking and automated follow-ups close more charters." },
  ];
  return (
    <section id="benefits" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Business Impact"
          title="This Isn't Software. It's Revenue, Time, and Margin."
          subtitle="Every feature is designed to move a real business metric — not to look good in a demo."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-3xl border bg-card p-6 shadow-glass"
            >
              <Check className="size-6 rounded-lg bg-accent/10 p-1 text-accent" />
              <h3 className="mt-4 text-base font-semibold text-navy">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
function Industries() {
  const items = [
    { icon: Ship, title: "Yacht Charter", desc: "Booking, guest experience, and fleet operations." },
    { icon: LifeBuoy, title: "Boat Rental", desc: "Hourly and daily rentals with instant checkout." },
    { icon: Anchor, title: "Marinas", desc: "Berth allocation, contracts, and services." },
    { icon: Compass, title: "Superyachts", desc: "Crew, maintenance, and owner reporting." },
    { icon: Building2, title: "Luxury Marine", desc: "White-glove operations & concierge workflows." },
    { icon: LayoutDashboard, title: "Fleet Operators", desc: "Multi-vessel dashboards and analytics." },
  ];
  return (
    <section id="industries" className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 70% 20%, rgba(90,180,255,0.25), transparent 40%), radial-gradient(circle at 20% 80%, rgba(120,150,255,0.2), transparent 40%)" }} />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Industries</div>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Built for the World's Most Demanding Marine Operators</h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-dark group rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-white/10 text-white">
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Built for the decision makers
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["CEO", "Founder", "Managing Director", "COO", "CTO", "Operations Director", "Fleet Manager", "Marina Manager", "Operations Manager"].map((r) => (
              <span key={r} className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Assessment Form ---------- */
const API_URL = (import.meta.env.VITE_API_URL ?? "http://localhost:5000").replace(/\/+$/, "");

function Assessment() {
  const modules = ["Bookings", "Maintenance", "Crew", "CRM", "Payments", "Analytics", "Owner Portal", "Marina", "Custom Features"];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      country: formData.get("country"),
      website: formData.get("website"),
      size: formData.get("size"),
      fleet: formData.get("fleet"),
      btype: formData.get("btype"),
      software: formData.get("software"),
      timeline: formData.get("timeline"),
      budget: formData.get("budget"),
      challenge: formData.get("challenge"),
      modules: formData.getAll("modules"),
    };

    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/assessment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      window.fbq?.("track", "Lead");
      window.fbq?.("track", "SubmitApplication");
      window.fbq?.("track", "Schedule");
      toast.success("Thanks! Our team will reach out within 24 hours with your personalized recommendation.");
      form.reset();
    } catch {
      toast.error("Something went wrong sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="assessment" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Free Consultation"
          title="Let's Discover How Much Your Business Can Save."
          subtitle="Book your free digital transformation consultation. No sales pressure. No obligation. Just a practical roadmap tailored to your operations."
        />
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-[2rem] border bg-card p-6 shadow-elegant md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Full Name", "name", "text"],
              ["Company Name", "company", "text"],
              ["Business Email", "email", "email"],
              ["WhatsApp Number", "whatsapp", "tel"],
              ["Country", "country", "text"],
              ["Company Website", "website", "url"],
              ["Company Size", "size", "text"],
              ["Fleet Size", "fleet", "text"],
              ["Business Type", "btype", "text"],
              ["Current Software", "software", "text"],
              ["Timeline", "timeline", "text"],
              ["Budget Range", "budget", "text"],
            ].map(([label, name, type]) => (
              <div key={name}>
                <Label htmlFor={name} className="text-xs font-semibold text-navy">{label}</Label>
                <Input id={name} name={name} type={type} required className="mt-1.5 h-11 rounded-xl border-input bg-background/60" />
              </div>
            ))}
          </div>

          <div className="mt-5">
            <Label htmlFor="challenge" className="text-xs font-semibold text-navy">Biggest Operational Challenge</Label>
            <Textarea id="challenge" name="challenge" rows={3} className="mt-1.5 rounded-xl" />
          </div>

          <div className="mt-6">
            <Label className="text-xs font-semibold text-navy">Interested Modules</Label>
            <div className="mt-3 flex flex-wrap gap-3">
              {modules.map((m) => (
                <label key={m} className="flex cursor-pointer items-center gap-2 rounded-xl border bg-secondary/60 px-3 py-2 text-sm font-medium text-navy transition hover:bg-secondary">
                  <Checkbox name="modules" value={m} />
                  {m}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Button type="submit" size="lg" disabled={isSubmitting} className="h-13 w-full max-w-md rounded-xl gradient-brand py-6 text-base text-white shadow-glow hover:opacity-95">
              {isSubmitting ? "Sending..." : "Get My Personalized Recommendation"}
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <p className="text-xs text-muted-foreground">We reply within 24 hours. No spam — just insights.</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* ---------- Why Choose ---------- */
function WhyChoose() {
  const items = [
    "Custom-built for your business", "No unnecessary features", "Scalable architecture",
    "Mobile-first design", "Enterprise-grade security", "Dedicated development team",
    "Long-term technology partner", "24/7 priority support", "Seamless API integrations", "Future-ready AI foundation",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Why Kyptronix" title="A Strategic Technology Partner — Not Another Vendor" subtitle="We don't sell licenses. We build the operating system your yacht business runs on for the next decade." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border bg-card p-5 shadow-glass"
            >
              <Check className="size-5 text-accent" />
              <div className="mt-3 text-sm font-semibold text-navy">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "What is yacht management software?", a: "Yacht management software is a single platform that centralizes bookings, fleet operations, crew scheduling, maintenance, invoicing, owner reporting, and guest communication. It replaces spreadsheets, WhatsApp threads, and disconnected tools so charter, marina, and fleet operators can run more yachts with fewer errors." },
  { q: "How does yacht charter software work?", a: "Yacht charter software captures every inquiry, checks live availability, sends automated quotes, collects online deposits, assigns crew, syncs the calendar across your team, and generates owner-ready reports — all from one dashboard accessible on web and mobile." },
  { q: "Why do yacht companies need digital transformation?", a: "Yacht operations lose thousands of hours a year to manual admin, double bookings, and untracked maintenance. Digital transformation removes that drag by automating repetitive work, giving owners real-time visibility, and freeing your team to focus on guest experience and revenue growth." },
  { q: "How much can automation reduce operational costs?", a: "Most yacht operators cut 20–40% of administrative time in the first 90 days by automating bookings, invoicing, crew scheduling, and reporting. Combined with fewer double bookings and faster payment cycles, the platform typically pays for itself within the first season." },
  { q: "What features should a yacht management system include?", a: "A complete system should include booking management, fleet tracking, crew scheduling, maintenance planning, digital checklists, invoicing and online payments, an owner portal, a guest experience app, marina operations, GPS tracking, offline sync, role-based permissions, and executive analytics." },
  { q: "What is the difference between custom software and off-the-shelf yacht software?", a: "Off-the-shelf platforms force you to adapt your workflow to their limits, and you pay per user forever. Custom software from Kyptronix is built around how your business actually runs, scales without per-seat fees, and remains fully yours as your fleet grows." },
  { q: "How long does implementation take?", a: "Most yacht businesses go live on core modules within 6–10 weeks and add advanced modules iteratively over 12–16 weeks. We deliver in phases so your team starts benefiting from automation early instead of waiting for a big-bang launch." },
  { q: "Can the software integrate with existing systems?", a: "Yes. Kyptronix integrates with accounting tools (Xero, QuickBooks, Sage), CRMs (Salesforce, HubSpot), marina systems, GPS and AIS providers, payment gateways (Stripe, Adyen), and any modern platform with an API." },
  { q: "Is the platform mobile-friendly?", a: "Yes. The platform is mobile-first with native iOS and Android apps for crew, owners, and guests, plus a responsive web dashboard for management. Field teams can operate fully from a phone or tablet, on deck or dockside." },
  { q: "Is it suitable for small fleets and enterprise operators?", a: "Yes. The architecture scales from a single yacht to fleets of hundreds. Small operators start with core booking and fleet modules, while enterprise groups deploy multi-location, multi-currency, and multi-brand configurations." },
  { q: "How does the owner portal work?", a: "Each yacht owner logs into a private portal to see real-time revenue, upcoming charters, maintenance status, expenses, and monthly statements. Automated reporting replaces manual owner updates and cuts routine owner inquiries by up to 70%." },
  { q: "Can it work offline at sea?", a: "Yes. Critical modules like bookings, checklists, crew logs, and maintenance forms work fully offline and sync automatically when connectivity is restored — essential for yachts operating in remote waters." },
  { q: "How secure is the platform?", a: "Kyptronix deploys enterprise-grade AES-256 encryption in transit and at rest, role-based access control, full audit logs, MFA, and automated encrypted backups. Infrastructure runs on ISO 27001-certified cloud providers with 99.9% uptime SLAs." },
  { q: "Do you provide ongoing support?", a: "Every engagement includes a dedicated development and support team. You get priority response SLAs, quarterly roadmap reviews, and continuous product evolution — Kyptronix operates as your long-term technology partner, not a one-time vendor." },
  { q: "Which industries does Kyptronix serve?", a: "We build for yacht charter companies, yacht management firms, marina operators, superyacht groups, boat rental businesses, luxury fleet operators, and marine service providers worldwide." },
  { q: "How is pricing structured?", a: "Kyptronix uses a transparent project-based investment model — no per-user SaaS fees. Your consultation includes a tailored proposal covering scope, timeline, and ROI projections specific to your operation." },
  { q: "What happens during the free consultation?", a: "A senior strategist reviews your current operations, identifies the highest-impact automation opportunities, and delivers a practical digital transformation roadmap — whether you decide to work with us or not. There's no sales pressure and no obligation." },
  { q: "Do you build custom mobile apps for yacht businesses?", a: "Yes. Kyptronix specializes in custom-branded iOS and Android apps for crew operations, owner reporting, and guest experiences — fully integrated with your management platform and your brand." },
];

function FAQ() {
  const faqs = FAQS;
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="FAQ" title="Yacht Management Software: Frequently Asked Questions" subtitle="Straight answers to the questions yacht operators, owners, and marina managers ask before booking a consultation." />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border bg-card px-5 shadow-glass"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-brand p-10 text-center text-white shadow-elegant md:p-20">
          <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.15), transparent 40%)" }} />
          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Let's Discover How Much Your Business Can Save.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Book your free digital transformation consultation and walk away with a practical roadmap — whether you work with us or not.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#assessment">
                <Button size="lg" className="h-12 rounded-xl bg-white px-6 text-navy hover:bg-white/90 cursor-pointer">
                  Book Free Consultation
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </a>
              <a href="#features">
                <Button size="lg" variant="outline" className="h-12 rounded-xl border-white/40 bg-white/10 px-6 text-white backdrop-blur hover:bg-white/20">
                  Explore Interactive Demos
                </Button>
              </a>
              <a
                href="https://wa.me/13024042011"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-medium text-white hover:opacity-90"
              >
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/kyptronixllp_logo.jpg"
                alt="Kyptronix LLP"
                className="size-9 rounded-xl object-cover"
              />
              <span className="text-lg font-bold text-navy">Kyptronix<span className="text-accent">.</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Custom digital products for yacht, marina and luxury marine businesses.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-navy">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-navy">Features</a></li>
              <li><a href="#industries" className="hover:text-navy">Industries</a></li>
              <li><a href="#assessment" className="hover:text-navy">Book Demo</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-navy">Legal</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-navy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-navy">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-navy">Connect</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="https://www.facebook.com/kyptronixllp/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-navy"><Facebook className="size-4" /> Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/kyptronixllp/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-navy"><Linkedin className="size-4" /> LinkedIn</a></li>
              <li><a href="https://wa.me/13024042011" className="inline-flex items-center gap-2 hover:text-navy"><MessageCircle className="size-4" /> WhatsApp</a></li>
              <li><a href="mailto:kyptronix@gmail.com" className="inline-flex items-center gap-2 hover:text-navy"><Mail className="size-4" /> kyptronix@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Kyptronix LLP. All rights reserved.</span>
          <span>Built for modern yacht businesses.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating WhatsApp ---------- */
function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a href="#assessment" className="hidden md:inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-elegant hover:opacity-95">
        Book Demo <ArrowRight className="size-4" />
      </a>
      <a
        href="https://wa.me/13024042011"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}

/* ---------- Page ---------- */
export default function LandingPage() {
  useDocumentMeta({
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    ogTitle: SEO_TITLE,
    ogDescription: SEO_DESCRIPTION,
    ogImage: OG_IMAGE,
    canonical: `${SITE_URL}/`,
  });

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Problems />
        <Workflow />
        <Features />
        <Benefits />
        <Industries />
        <Assessment />
        <WhyChoose />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
