import {
  Clock,
  Dumbbell,
  Wallet,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/60115883680";

const equipment = [
  {
    brand: "Precor",
    desc: "Commercial-grade cardio. Treadmills, ellipticals and bikes engineered for daily punishment.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=70&auto=format&fit=crop",
  },
  {
    brand: "Ziva",
    desc: "Premium free weights and benches. Knurled, balanced, built to last.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=70&auto=format&fit=crop",
  },
  {
    brand: "Torque Fitness",
    desc: "Functional training rigs and racks. Heavy steel for serious lifters.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=70&auto=format&fit=crop",
  },
  {
    brand: "Hampton",
    desc: "Precision dumbbells and accessories. The standard in iron.",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=70&auto=format&fit=crop",
  },
];

const HERO_IMG =
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1800&q=80&auto=format&fit=crop";
const HERO_SIDE_IMG =
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80&auto=format&fit=crop";
const STRIP_IMG =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1800&q=75&auto=format&fit=crop";

const features = [
  {
    icon: Clock,
    title: "24/7 Access",
    desc: "Members train on their schedule. No queues, no closing time.",
    accent: "text-[#FF6B00]",
  },
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    desc: "Precor, Ziva, Torque Fitness, Hampton. No knock-offs, no compromises.",
    accent: "text-[#2E7D32]",
  },
  {
    icon: Wallet,
    title: "Affordable Membership",
    desc: "Boutique quality without the boutique price tag.",
    accent: "text-[#FF6B00]",
  },
];

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-black tracking-tight ${className}`}>
      <span className="text-[#FF6B00]">K</span>
      <span className="text-[#2E7D32]">H</span>
      <span className="mx-2 text-neutral-600">|</span>
      <span className="text-[#C0C0C0] font-light tracking-[0.2em]">FITNESS</span>
    </span>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <LogoMark className="text-base sm:text-lg" />
          <a
            href={WHATSAPP_URL}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#ff7a1a]"
          >
            Join Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Full-bleed gym interior */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt="KH Fitness gym interior"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        {/* Dark overlays */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 45%, rgba(10,10,10,0.35) 100%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 15% 20%, rgba(255,107,0,0.22), transparent 55%), radial-gradient(ellipse at 95% 90%, rgba(46,125,50,0.20), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:py-32 lg:grid-cols-12 lg:items-center lg:py-40">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF6B00]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C0C0C0]">
                Cyberjaya · Neocyber · 24/7
              </p>
            </div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Train Hard.
              <br />
              <span className="text-[#FF6B00]">Anytime.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-neutral-300">
              Cyberjaya&apos;s exclusive 24-hour boutique gym. Members only.
              Premium iron. Zero filler.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-7 py-4 text-base font-semibold text-black transition hover:bg-[#ff7a1a]"
              >
                <MessageCircle className="h-5 w-5" />
                Join Now
              </a>
              <a
                href="#equipment"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-white/40"
              >
                See Equipment
              </a>
            </div>

            {/* stat strip */}
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">24/7</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Access
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#FF6B00] sm:text-3xl">4</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Premium Brands
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#2E7D32] sm:text-3xl">1</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Members Only
                </p>
              </div>
            </div>
          </div>

          {/* Side image card */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_SIDE_IMG}
                alt="Athlete training inside gym"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#FF6B00]">
                  Inside KH
                </p>
                <p className="mt-2 text-lg font-bold text-white">
                  Boutique floor. Heavy iron. No queues.
                </p>
              </div>
              <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                  Open Now
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* fade to next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0A0A0A]" />
      </section>

      {/* WHY */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#2E7D32]">
              Why KH Fitness
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Built for people who actually train.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc, accent }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition hover:border-white/25"
              >
                <Icon className={`h-8 w-8 ${accent}`} strokeWidth={1.75} />
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section id="equipment" className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mb-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#FF6B00]">
                Equipment
              </p>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                Only the brands that matter.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-neutral-400">
              Maintained, calibrated, and replaced before they wear. No rust,
              no rattles, no excuses.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {equipment.map((e) => (
              <div
                key={e.brand}
                className="group relative overflow-hidden bg-[#0A0A0A] transition hover:bg-[#111]"
              >
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.img}
                    alt={`${e.brand} equipment`}
                    className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-black tracking-tight">
                      {e.brand}
                    </h3>
                    <span className="h-2 w-2 rounded-full bg-[#2E7D32]" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="relative h-[280px] overflow-hidden border-t border-white/5 sm:h-[360px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={STRIP_IMG}
          alt="Athlete training"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="px-6 text-center text-2xl font-black tracking-tight sm:text-4xl">
            No mirrors for show.{" "}
            <span className="text-[#FF6B00]">Just iron, sweat, results.</span>
          </p>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, #0A0A0A 0%, #111 50%, #0A0A0A 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #FF6B00, #2E7D32, transparent)",
          }}
        />
        <div className="mx-auto max-w-4xl px-5 py-28 text-center">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight">
            Ready to Start?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-300">
            Membership is limited to keep the floor uncrowded. Message us on
            WhatsApp for current openings and rates.
          </p>
          <a
            href={WHATSAPP_URL}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#FF6B00] px-8 py-4 text-base font-semibold text-black transition hover:bg-[#ff7a1a]"
          >
            <MessageCircle className="h-5 w-5" />
            Message us on WhatsApp
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#2E7D32]">
              Find Us
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Neocyber, Cyberjaya.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl border border-white/10 p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#FF6B00]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                      Address
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-200">
                      101-1, Biz Avenue II, Neocyber,
                      <br />
                      Lingkaran Cyberpoint Barat,
                      <br />
                      Cyberjaya, Selangor 63000
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:+60115883680"
                className="block rounded-2xl border border-white/10 p-6 transition hover:border-white/30"
              >
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#2E7D32]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                      Phone
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      +60 11-5883 6807
                    </p>
                  </div>
                </div>
              </a>

              <div className="rounded-2xl border border-white/10 p-6">
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#FF6B00]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                      Hours
                    </p>
                    <p className="mt-2 text-sm text-neutral-200">
                      24 hours · Members only
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">
                      Staffed hours TBC
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 overflow-hidden rounded-2xl border border-white/10 bg-black">
              <iframe
                title="KH Fitness Cyberjaya location"
                src="https://www.google.com/maps?q=KH+Fitness+Cyberjaya+Neocyber&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full grayscale-[0.3] contrast-[1.1] lg:h-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <LogoMark className="text-base" />
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-neutral-600">
              · Cyberjaya
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-white/30 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-white/30 hover:text-white"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              aria-label="WhatsApp"
              className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-white/30 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} KH Fitness Cyberjaya
          </p>
        </div>
      </footer>
    </main>
  );
}
