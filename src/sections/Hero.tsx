import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Award, BadgeCheck, Languages, Plane, UserCheck, MessagesSquare, BookOpenCheck } from 'lucide-react'
import { stats } from '@/data/content'
import logo from '@/assets/logo.svg'
import heroImage from '@/assets/hero-classic.svg'

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#universities', label: 'الجامعات' },
  { href: '#bachelor', label: 'البكالوريوس' },
  { href: '#chinese', label: 'اللغة الصينية' },
  { href: '#register', label: 'التسجيل' },
  { href: '#contact', label: 'تواصل معنا' },
]

const services = [
  { icon: Award, title: 'منح كاملة وجزئية' },
  { icon: BadgeCheck, title: 'قبول جامعي موثوق' },
  { icon: Languages, title: 'برامج لغة صينية' },
  { icon: Plane, title: 'إرشاد الفيزا والسفر' },
  { icon: UserCheck, title: 'متابعة حتى التخرج' },
  { icon: MessagesSquare, title: 'استشارة مجانية' },
]

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <div id="home">
      {/* الشريط العلوي الكلاسيكي */}
      <header className="sticky top-0 z-50 border-b-2 border-[#c9a227]/60 bg-[#faf7f0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="شعار مؤسسة الشرق الأوسط للمنح الدراسية"
              className="h-14 w-14 rounded-full border-2 border-[#c9a227] object-cover shadow-sm"
            />
            <span className="leading-tight">
              <span className="block text-xl font-bold text-[#1b2f52]" style={{ fontFamily: 'Amiri, serif' }}>
                مؤسسة الشرق الأوسط
              </span>
              <span className="block text-xs font-semibold tracking-wide text-[#8a6d1d]">
                للمنح الدراسية في الصين
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-bold text-[#3d4d6d] xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#8a6d1d]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Button asChild className="bg-[#1b2f52] font-bold text-[#f0e6c8] hover:bg-[#101f3c]">
              <a href="#register">قدّم الآن</a>
            </Button>
          </div>

          <button
            className="rounded-md p-2 hover:bg-[#efe8d8] xl:hidden"
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-[#c9a227]/40 bg-[#faf7f0] px-4 py-4 xl:hidden">
            <ul className="flex flex-col gap-3 text-sm font-bold">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-md px-2 py-2 text-[#3d4d6d] hover:bg-[#efe8d8] hover:text-[#8a6d1d]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button asChild className="w-full bg-[#1b2f52] font-bold text-[#f0e6c8] hover:bg-[#101f3c]">
                  <a href="#register">قدّم الآن</a>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* الواجهة الرئيسية */}
      <section className="border-b-4 border-[#c9a227] bg-[#faf7f0]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* النص والخدمات */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-sm border border-[#c9a227] bg-[#f5eed9] px-4 py-1.5 text-sm font-bold text-[#8a6d1d]">
                <BookOpenCheck className="h-4 w-4" />
                بخبرة تتجاوز 15 عامًا في التعليم الصيني
              </span>
              <h1
                className="mt-6 text-4xl font-bold leading-snug text-[#1b2f52] sm:text-5xl lg:text-[3.4rem]"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                مؤسسة الشرق الأوسط
                <span className="mt-2 block text-[#8a6d1d]">للمنح الدراسية في الصين</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#4a5878]">
                بوابتك الموثوقة للدراسة في أعرق الجامعات الصينية — نوفّر منحًا
                كاملة وجزئية لمرحلة البكالوريوس وبرامج اللغة الصينية، مع مرافقة
                كاملة من أول استشارة حتى تخرّجك وعودتك.
              </p>

              {/* الخدمات */}
              <div id="services" className="mt-8">
                <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-[#1b2f52]" style={{ fontFamily: 'Amiri, serif' }}>
                  <span className="h-px w-8 bg-[#c9a227]" />
                  خدماتنا
                  <span className="h-px flex-1 bg-[#c9a227]" />
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      className="flex flex-col items-center gap-2 rounded-sm border border-[#c9a227]/50 bg-white px-3 py-4 text-center shadow-sm transition-colors hover:border-[#c9a227] hover:bg-[#f5eed9]"
                    >
                      <service.icon className="h-6 w-6 text-[#8a6d1d]" />
                      <span className="text-sm font-bold text-[#1b2f52]">{service.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#8a6d1d] font-bold text-white hover:bg-[#6f5717]">
                  <a href="#register">سجّل الآن عبر المؤسسة</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#1b2f52] font-bold text-[#1b2f52] hover:bg-[#1b2f52] hover:text-[#f0e6c8]"
                >
                  <a href="#universities">تصفح الجامعات</a>
                </Button>
              </div>
            </div>

            {/* اللوحة الكلاسيكية بإطار ذهبي */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="rounded-sm border-[10px] border-[#c9a227] bg-[#c9a227] shadow-xl">
                <div className="rounded-sm border-2 border-[#8a6d1d] bg-[#8a6d1d] p-1">
                  <img
                    src={heroImage}
                    alt="طلاب يتخرجون أمام بوابة جامعة صينية تقليدية"
                    className="w-full rounded-sm object-cover"
                  />
                </div>
              </div>
              <div className="mt-4 rounded-sm border border-[#c9a227]/60 bg-white px-4 py-3 text-center shadow-sm">
                <p className="text-sm font-bold text-[#1b2f52]">
                  «العلم يفتح أبواب المستقبل» — درّبنا أكثر من 2500 طالب وطالبة
                </p>
              </div>
            </div>
          </div>

          {/* الإحصائيات */}
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border-2 border-[#c9a227] bg-[#c9a227] lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#1b2f52] px-6 py-6 text-center">
                <div className="text-3xl font-bold text-[#e6c86e]" style={{ fontFamily: 'Amiri, serif' }}>
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm font-semibold text-[#c8d3e8]">
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
