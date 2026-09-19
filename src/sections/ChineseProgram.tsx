import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Languages,
  Users,
  Home,
  BadgeCheck,
  CalendarDays,
  ArrowLeft,
} from 'lucide-react'
import { chineseLevels } from '@/data/content'

const features = [
  {
    icon: Users,
    title: 'فصول صغيرة الحجم',
    description: 'مجموعات مصغرة تضمن تفاعلًا مباشرًا مع المدرسين الصينيين المتخصصين.',
  },
  {
    icon: Home,
    title: 'سكن ومعيشة',
    description: 'سكن جامعي مريح ضمن الحرم الجامعي وبدل معيشة شهري للمتحصلين على المنحة.',
  },
  {
    icon: BadgeCheck,
    title: 'شهادات معتمدة',
    description: 'اختبارات HSK الرسمية داخل الجامعة وشهادات معتمدة عالميًا.',
  },
  {
    icon: CalendarDays,
    title: 'موعدان للالتحاق',
    description: 'فصل الخريف (سبتمبر) وفصل الربيع (فبراير) كل عام.',
  },
]

export default function ChineseProgram() {
  return (
    <section id="chinese" className="bg-emerald-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-300">
            <Languages className="h-4 w-4" />
            برنامج اللغة الصينية
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            اتقن اللغة الصينية خطوة بخطوة
          </h2>
          <p className="mt-4 text-emerald-100/80">
            بوابتك الأولى نحو الدراسة الجامعية أو العمل في الصين. برنامج مكثف
            مصمم للناطقين بالعربية يأخذك من الحروف الأولى حتى الإتقان الكامل.
          </p>
        </div>

        {/* Levels */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {chineseLevels.map((level, index) => (
            <Card
              key={level.level}
              className="relative border-0 bg-white/5 text-white shadow-none backdrop-blur transition-all hover:bg-white/10"
            >
              <CardContent className="p-6">
                <span className="absolute -top-4 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 font-black text-emerald-950">
                  {index + 1}
                </span>
                <Badge className="bg-emerald-400/15 font-bold text-emerald-300 hover:bg-emerald-400/15">
                  {level.level}
                </Badge>
                <h3 className="mt-3 text-xl font-extrabold">{level.title}</h3>
                <div className="mt-1 text-sm font-semibold text-emerald-200">
                  {level.duration}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-emerald-100/80">
                  {level.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                <feature.icon className="h-6 w-6" />
              </span>
              <h4 className="mt-4 font-extrabold">{feature.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-emerald-100/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-emerald-400 font-bold text-emerald-950 hover:bg-emerald-300"
          >
            <a href="#steps">
              سجّل في برنامج اللغة
              <ArrowLeft className="mr-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
