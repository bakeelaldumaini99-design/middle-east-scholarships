import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { GraduationCap, Menu, X } from 'lucide-react'
import { stats } from '@/data/content'

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#universities', label: 'الجامعات' },
  { href: '#bachelor', label: 'البكالوريوس' },
  { href: '#chinese', label: 'اللغة الصينية' },
  { href: '#steps', label: 'خطوات التقديم' },
  { href: '#register', label: 'التسجيل' },
  { href: '#contact', label: 'تواصل معنا' },
]

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <div id="home">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="text-lg font-extrabold leading-tight">
              مؤسسة الشرق الأوسط
              <span className="block text-xs font-medium text-muted-foreground">
                للمنح الدراسية
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="font-bold">
              <a href="#register">قدّم الآن</a>
            </Button>
          </div>

          <button
            className="rounded-md p-2 hover:bg-muted lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="border-t bg-white px-4 py-4 lg:hidden">
            <ul className="flex flex-col gap-3 text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-md px-2 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button asChild className="w-full font-bold">
                  <a href="#register">قدّم الآن</a>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-emerald-950 via-emerald-900 to-teal-900 text-white">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-200">
              تسجيل الدفعة الجديدة مفتوح الآن
            </span>
            <h1 className="mt-6 text-4xl font-black leading-snug sm:text-5xl lg:text-6xl">
              مستقبلك الأكاديمي يبدأ من الصين
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-emerald-100/90 sm:text-xl">
              مؤسسة الشرق الأوسط للمنح الدراسية تفتح لك أبواب أعرق الجامعات
              الصينية — منح كاملة وجزئية لبرامج البكالوريوس وبرامج اللغة
              الصينية، مع مرافقة كاملة من التقديم حتى التخرج.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white font-bold text-emerald-900 hover:bg-emerald-50">
                <a href="#bachelor">استكشف برامج البكالوريوس</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 font-bold text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#chinese">برنامج اللغة الصينية</a>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
              >
                <div className="text-3xl font-black text-emerald-300 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-emerald-100/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
