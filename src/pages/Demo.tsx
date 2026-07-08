import type { ComponentType } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Anchor, Ship, Users, Wrench, BarChart3, CreditCard, Bell, MapPin,
  FileText, ClipboardCheck, Cloud, ShieldCheck, Fuel, LayoutDashboard,
  ArrowLeft, Play, Building2, LifeBuoy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

import featBookings from "@/assets/feat-bookings.mp4.asset.json";
import featFleet from "@/assets/feat-fleet.mp4.asset.json";
import featCrew from "@/assets/feat-crew.mp4.asset.json";
import featMaintenance from "@/assets/feat-maintenance.mp4.asset.json";
import featMarina from "@/assets/feat-marina.mp4.asset.json";
import featOwner from "@/assets/feat-owner.mp4.asset.json";
import featCustomer from "@/assets/feat-customer.mp4.asset.json";
import featChecklists from "@/assets/feat-checklists.mp4.asset.json";
import featFuel from "@/assets/feat-fuel.mp4.asset.json";
import featInvoices from "@/assets/feat-invoices.mp4.asset.json";
import featPayments from "@/assets/feat-payments.mp4.asset.json";
import featNotifications from "@/assets/feat-notifications.mp4.asset.json";
import featGps from "@/assets/feat-gps.mp4.asset.json";
import featReports from "@/assets/feat-reports.mp4.asset.json";
import featRoles from "@/assets/feat-roles.mp4.asset.json";
import featOffline from "@/assets/feat-offline.mp4.asset.json";
import featBackup from "@/assets/feat-backup.mp4.asset.json";
import featAnalytics2 from "@/assets/feat-analytics2.mp4.asset.json";

const SITE_URL = "https://nautical-digital-spark.lovable.app";

const featureMap: Record<string, {
  title: string;
  description: string;
  video: string;
  icon: ComponentType<{ className?: string }>;
}> = {
  "booking-management": { title: "Booking Management", description: "Convert inquiries into confirmed charters in seconds.", video: featBookings.url, icon: ClipboardCheck },
  "fleet-management": { title: "Fleet Management", description: "Every yacht, every status — one live view.", video: featFleet.url, icon: Ship },
  "crew-management": { title: "Crew Management", description: "Schedule, certify and coordinate your crew.", video: featCrew.url, icon: Users },
  "maintenance-scheduler": { title: "Maintenance Scheduler", description: "Prevent breakdowns with proactive service plans.", video: featMaintenance.url, icon: Wrench },
  "owner-portal": { title: "Owner Portal", description: "Give owners real-time performance visibility.", video: featOwner.url, icon: Building2 },
  "customer-app": { title: "Customer App", description: "A branded guest experience end-to-end.", video: featCustomer.url, icon: LifeBuoy },
  "digital-checklists": { title: "Digital Checklists", description: "Paper-free inspections, signed and stored.", video: featChecklists.url, icon: ClipboardCheck },
  "marina-operations": { title: "Marina Operations", description: "Berths, contracts and services in one flow.", video: featMarina.url, icon: Anchor },
  "fuel-tracking": { title: "Fuel Tracking", description: "Monitor consumption across the fleet.", video: featFuel.url, icon: Fuel },
  "invoices": { title: "Invoices", description: "Automated, branded invoices in a click.", video: featInvoices.url, icon: FileText },
  "payments": { title: "Payments", description: "Collect deposits and balances online.", video: featPayments.url, icon: CreditCard },
  "push-notifications": { title: "Push Notifications", description: "Keep owners, crew and guests in sync.", video: featNotifications.url, icon: Bell },
  "gps-ready": { title: "GPS Ready", description: "Track vessel position and routes.", video: featGps.url, icon: MapPin },
  "reports": { title: "Reports", description: "Financial and operational reports on demand.", video: featReports.url, icon: BarChart3 },
  "analytics": { title: "Analytics", description: "KPIs and trends built for owners.", video: featAnalytics2.url, icon: LayoutDashboard },
  "role-permissions": { title: "Role Permissions", description: "Granular access for every team member.", video: featRoles.url, icon: ShieldCheck },
  "offline-sync": { title: "Offline Sync", description: "Keep working — even offshore, no signal.", video: featOffline.url, icon: Cloud },
  "cloud-backup": { title: "Cloud Backup", description: "Automatic, encrypted backups you can trust.", video: featBackup.url, icon: Cloud },
};

export default function DemoPage() {
  const { feature = "" } = useParams<{ feature: string }>();
  const data = featureMap[feature];

  useDocumentMeta({
    title: data ? `${data.title} Demo — Kyptronix` : "Demo — Kyptronix",
    description: data ? data.description : "Feature demo",
    ogTitle: data ? `${data.title} Demo — Kyptronix` : "Demo — Kyptronix",
    ogDescription: data ? data.description : "Feature demo",
  });

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy">Demo not found</h1>
          <p className="mt-2 text-muted-foreground">This feature demo does not exist.</p>
          <Link to="/" className="mt-6 inline-block">
            <Button variant="outline" className="rounded-xl">
              <ArrowLeft className="mr-2 size-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;
  const videoSrc = data.video.startsWith("http") ? data.video : `${SITE_URL}${data.video}`;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid size-9 place-items-center rounded-xl gradient-brand text-white shadow-glow">
              <Anchor className="size-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-navy">
              Kyptronix<span className="text-accent">.</span>
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="rounded-xl text-navy hover:bg-navy/5">
              <ArrowLeft className="mr-2 size-4" /> Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent">
              <Icon className="size-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-navy md:text-4xl">{data.title}</h1>
              <p className="text-sm text-muted-foreground md:text-base">{data.description}</p>
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[2rem] border bg-card p-2 shadow-elegant">
            <div className="relative aspect-video overflow-hidden rounded-[1.6rem] bg-navy">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="/#assessment">
              <Button size="lg" className="h-12 rounded-xl gradient-brand px-6 text-white shadow-glow hover:opacity-95">
                <Play className="mr-2 size-4" /> Book a Live Demo
              </Button>
            </a>
            <Link to="/">
              <Button size="lg" variant="outline" className="h-12 rounded-xl border-navy/20">
                <ArrowLeft className="mr-2 size-4" /> Explore More Features
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
