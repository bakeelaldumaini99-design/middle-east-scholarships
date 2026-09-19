import { Button } from '@/components/ui/button'
import { applicationSteps } from '@/data/content'
import { Phone, Mail, GraduationCap } from 'lucide-react'

export function Steps() {
  return (
    <section id="steps" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            رحلتك معنا
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">خطوات التقديم</h2>
          <p className="mt-4 text-muted-foreground">
            خمس خطوات فقط تفصلك عن خطاب القبول الجامعي — نرافقك في كل مرحلة.
          </p>
        </div>

        <ol className="mx-auto mt-14 max-w-3xl space-y-0">
          {applicationSteps.map((item, index) => (
            <li key={item.step} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Timeline line */}
              {index < applicationSteps.length - 1 && (
                <span className="absolute right-6 top-14 h-[calc(100%-3.5rem)] w-px bg-primary/20" />
              )}
              <span className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-black text-primary-foreground">
                {index + 1}
              </span>
              <div className="pt-1">
                <h3 className="text-lg font-extrabold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="font-bold">
            <a href="#register">ابدأ طلبك الآن</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#101f3c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c9a227] text-[#101f3c]">
                <GraduationCap className="h-6 w-6" />
              </span>
              <span className="text-lg font-extrabold leading-tight">
                مؤسسة الشرق الأوسط
                <span className="block text-xs font-medium text-[#c8d3e8]/70">
                  للمنح الدراسية
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#c8d3e8]/70">
              مؤسسة متخصصة في المنح الدراسية إلى الصين منذ أكثر من 15 عامًا،
              نساعد طلاب الشرق الأوسط على تحقيق طموحهم الأكاديمي في أعرق
              الجامعات الصينية.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold">روابط سريعة</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#c8d3e8]/70">
              <li><a className="hover:text-[#e6c86e]" href="#universities">الجامعات الشريكة</a></li>
              <li><a className="hover:text-[#e6c86e]" href="#bachelor">برامج البكالوريوس</a></li>
              <li><a className="hover:text-[#e6c86e]" href="#chinese">برنامج اللغة الصينية</a></li>
              <li><a className="hover:text-[#e6c86e]" href="#csca">اختبار CSCA</a></li>
              <li><a className="hover:text-[#e6c86e]" href="#steps">خطوات التقديم</a></li>
              <li><a className="hover:text-[#e6c86e]" href="#register">التسجيل عبر المؤسسة</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold">تواصل معنا</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#c8d3e8]/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#e6c86e]" />
                <span>واتساب (اليمن):</span>
                <span dir="ltr" className="font-bold text-white">+967 716 621 214</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#e6c86e]" />
                <span dir="ltr">+971 50 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#e6c86e]" />
                info@middle-east-scholarships.org
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-[#c8d3e8]/50">
          © {new Date().getFullYear()} مؤسسة الشرق الأوسط للمنح الدراسية — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  )
}
