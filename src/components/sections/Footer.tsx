import Link from "next/link";
import { KONTAK } from "@/lib/data";

const FOOTER_PRODUK = [
  { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
  { label: "Asuransi Properti", href: "/asuransi-properti" },
  { label: "Engineering Insurance", href: "/asuransi-engineering" },
  { label: "Machinery Insurance", href: "/asuransi-machinery" },
  { label: "Asuransi Kargo", href: "/asuransi-kargo" },
  { label: "Liability Insurance", href: "/asuransi-liability" },
  { label: "Surety Bond", href: "/asuransi-surety-bond" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071422] px-[5vw] pt-12 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b border-white/7">
        <div>
          <div className="font-heading text-[1.3rem] font-bold text-white mb-2">Asuransi<span className="text-gold">Bekasi</span></div>
          <p className="text-sm leading-[1.75] text-white/45">Praktisi asuransi kerugian independen di Bekasi. Melayani individu, UMKM, dan industri dengan solusi perlindungan yang tepat, transparan, dan dapat diandalkan.</p>
        </div>
        <div>
          <h4 className="text-[0.82rem] font-bold tracking-[1.2px] uppercase text-gold2 mb-4">Produk</h4>
          <ul className="flex flex-col gap-2">
            {FOOTER_PRODUK.map(p => (
              <li key={p.href}><Link href={p.href} className="text-sm text-white/50 no-underline hover:text-gold2 transition-colors">{p.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[0.82rem] font-bold tracking-[1.2px] uppercase text-gold2 mb-4">Layanan</h4>
          <ul className="flex flex-col gap-2">
            {[
              { href: "#kalkulator", lbl: "Kalkulator Premi Mobil" },
              { href: "#faq", lbl: "FAQ Asuransi" },
              { href: "#about", lbl: "Profil Praktisi" },
              { href: "#contact", lbl: "Konsultasi Gratis" },
            ].map(l => (
              <li key={l.lbl}><a href={l.href} className="text-sm text-white/50 no-underline hover:text-gold2 transition-colors">{l.lbl}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[0.82rem] font-bold tracking-[1.2px] uppercase text-gold2 mb-4">Kontak</h4>
          <ul className="flex flex-col gap-2">
            <li><a href={`https://wa.me/${KONTAK.wa}`} className="text-sm text-white/50 no-underline hover:text-gold2 transition-colors">📱 {KONTAK.waDisplay}</a></li>
            <li><a href={`mailto:${KONTAK.email}`} className="text-sm text-white/50 no-underline hover:text-gold2 transition-colors">✉️ {KONTAK.email}</a></li>
            <li><span className="text-sm text-white/50">📍 Bekasi, Jawa Barat</span></li>
          </ul>
        </div>
      </div>
      <div className="pt-5 flex justify-between items-center flex-wrap gap-3">
        <div className="text-[0.88rem] text-white/55">© 2026 Asuransi Bekasi – Nur Hidayat. Seluruh hak cipta dilindungi.</div>
        <div className="text-[0.88rem] text-white/55">Praktisi Asuransi Kerugian Independen · Bekasi</div>
      </div>
    </footer>
  );
}
