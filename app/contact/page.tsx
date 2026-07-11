import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import Footer from "../../componnents/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-[#131b2e]">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-5 py-16 sm:py-24">
        <div className="w-full rounded-3xl bg-white p-8 shadow-xl md:p-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#4b40e0] px-4 py-2 text-sm font-medium text-[#4b40e0] transition hover:bg-[#4b40e0] hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4b40e0]">
                Contact
              </p>
              <h1 className="mt-3 text-4xl font-bold">
                Let&apos;s build something great together
              </h1>
              <p className="mt-4 max-w-xl text-gray-600">
                Whether you need a modern website, an app, or a full-stack
                product, I&apos;d love to hear about it.
              </p>
            </div>

            <div className="rounded-2xl bg-[#131b2e] p-6 text-white">
              <div className="flex items-center gap-3">
                <Mail className="text-[#4b40e0]" />
                <a
                  href="mailto:ahmedessamhabash2002@gmail.com"
                  className="hover:text-[#9aa2ff]"
                >
                  ahmedessamhabash2002@gmail.com
                </a>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Phone className="text-[#4b40e0]" />
                <span>+20 1557209799</span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <MapPin className="text-[#4b40e0]" />
                <span> Egypt</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
