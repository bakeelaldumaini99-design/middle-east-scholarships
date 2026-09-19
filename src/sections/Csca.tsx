import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Sigma,
  Atom,
  FlaskConical,
  Languages,
  CalendarDays,
  Laptop,
  Globe2,
  Wallet,
  History,
  ExternalLink,
} from 'lucide-react'

const subjects = [
  {
    icon: Sigma,
    title: 'الرياضيات',
    note: 'إلزامية للجميع',
    description: 'مادة إجبارية لكل المتقدمين بلا استثناء — حتى تخصصات الآداب والإدارة.',
    required: true,
  },
  {
    icon: Atom,
    title: 'الفيزياء',
    note: 'حسب التخصص',
    description: 'للتخصصات الهندسية وعلوم الحاسوب — تُختار حسب اشتراطات الجامعة.',
    required: false,
  },
  {
    icon: FlaskConical,
    title: 'الكيمياء',
    note: 'حسب التخصص',
    description: 'للطب والصيدلة والعلوم الحيوية — اختيارية وتعتمدها الجامعة حسب التخصص.',
    required: false,
  },
  {
    icon: Languages,
    title: 'اللغة الصينية',
    note: 'للبرامج الصينية',
    description: 'مستوى صينى أكاديمي متخصص، ولا تُطلب من المتقدمين للبرامج الإنجليزية.',
    required: false,
  },
]

const timeline = [
  {
    year: 'أكتوبر 2025',
    text: 'الإعلان الرسمي عن الاختبار من المجلس الصيني للمنح الدراسية (CSC) ونشر قواعد المواد والتسجيل.',
  },
  {
    year: '21 ديسمبر 2025',
    text: 'انعقاد أول اختبار عالمي في تاريخ الاختبار بصيغة إلكترونية من المنزل مع مراقبة عن بُعد.',
  },
  {
    year: 'دفعة 2026',
    text: 'إلزامية تقديم نتيجة CSCA لجميع المتقدمين لمنحة الحكومة الصينية في مرحلة البكالوريوس.',
  },
  {
    year: 'بحلول 2028',
    text: 'التعميم التدريجي حتى يصبح الاختبار شرطًا لكل المتقدمين الدوليين لمرحلة البكالوريوس في الصين.',
  },
]

const sessions2026 = [
  { month: 'يناير', date: '25 يناير 2026', region: 'أوروبا والأمريكتين' },
  { month: 'مارس', date: '15 مارس 2026', region: 'أوروبا والأمريكتين' },
  { month: 'أبريل', date: 'يُعلن لاحقًا', region: 'آسيا والمحيط الهادئ' },
  { month: 'يونيو', date: 'يُعلن لاحقًا', region: 'آسيا والمحيط الهادئ' },
  { month: 'ديسمبر', date: 'يُعلن لاحقًا', region: 'آسيا والمحيط الهادئ' },
]

const facts = [
  {
    icon: Laptop,
    title: 'عن بُعد أو في مركز',
    text: 'اختبار إلكتروني من المنزل بمراقبة مباشرة، أو في مراكز معتمدة ببعض الدول.',
  },
  {
    icon: Globe2,
    title: 'بالصينية أو الإنجليزية',
    text: 'أوراق الرياضيات والفيزياء والكيمياء متاحة باللغتين — اختر حسب لغة برنامجك.',
  },
  {
    icon: Wallet,
    title: 'الرسوم',
    text: '450 يوانًا للمادة الواحدة، و700 يوان عند اختيار مادتين أو أكثر.',
  },
  {
    icon: CalendarDays,
    title: 'النتائج',
    text: 'تصدر خلال 7 أيام عمل للاختبار الإلكتروني و14 يومًا للورقي.',
  },
]

export default function Csca() {
  return (
    <section id="csca" className="border-y-4 border-[#c9a227] bg-[#f5eed9] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* المقدمة */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-sm border border-[#c9a227] bg-white px-4 py-1.5 text-sm font-bold text-[#8a6d1d]">
            <Sigma className="h-4 w-4" />
            الاختبار الجديد إلزامي للقبول الجامعي
          </span>
          <h2 className="mt-5 text-3xl font-bold text-[#1b2f52] sm:text-4xl" style={{ fontFamily: 'Amiri, serif' }}>
            اختبار CSCA — تقييم القدرات الدراسية الصيني
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4a5878]">
            اختبار قياسي موحّد أطلقه المجلس الصيني للمنح الدراسية (CSC) لوزارة
            التعليم الصينية ليكون معيارًا أكاديميًا مشتركًا للمتقدمين الدوليين
            من مختلف الأنظمة التعليمية. بدءًا من دفعة 2026 أصبحت نتيجته وثيقة
            مطلوبة في ملفات المتقدمين لمنحة الحكومة الصينية لمرحلة البكالوريوس،
            ويتوسع إلزامه تدريجيًا حتى يشمل جميع المتقدمين بحلول 2028.
          </p>
        </div>

        {/* المواد */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => (
            <Card key={subject.title} className="border-[#c9a227]/50 bg-white shadow-sm">
              <CardContent className="p-5 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a227] bg-[#f5eed9]">
                  <subject.icon className="h-6 w-6 text-[#8a6d1d]" />
                </span>
                <h3 className="mt-3 text-lg font-extrabold text-[#1b2f52]">{subject.title}</h3>
                <Badge
                  className={
                    subject.required
                      ? 'mt-2 bg-[#1b2f52] font-bold text-[#e6c86e] hover:bg-[#1b2f52]'
                      : 'mt-2 border border-[#c9a227] bg-transparent font-bold text-[#8a6d1d] hover:bg-transparent'
                  }
                >
                  {subject.note}
                </Badge>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5878]">{subject.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* التاريخ والمواعيد */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* نشأة الاختبار */}
          <div className="rounded-sm border-2 border-[#c9a227] bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-[#1b2f52]" style={{ fontFamily: 'Amiri, serif' }}>
              <History className="h-5 w-5 text-[#8a6d1d]" />
              نشأة الاختبار وتطوره
            </h3>
            <ol className="mt-6 space-y-0">
              {timeline.map((item, index) => (
                <li key={item.year} className="relative flex gap-4 pb-6 last:pb-0">
                  {index < timeline.length - 1 && (
                    <span className="absolute right-[7px] top-6 h-[calc(100%-1.5rem)] w-px bg-[#c9a227]/60" />
                  )}
                  <span className="z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[#c9a227] bg-[#1b2f52]" />
                  <div>
                    <span className="font-extrabold text-[#8a6d1d]">{item.year}</span>
                    <p className="mt-1 text-sm leading-relaxed text-[#4a5878]">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* مواعيد 2026 */}
          <div className="rounded-sm border-2 border-[#c9a227] bg-[#1b2f52] p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-[#e6c86e]" style={{ fontFamily: 'Amiri, serif' }}>
              <CalendarDays className="h-5 w-5" />
              مواعيد جلسات 2026 — خمس جلسات سنويًا
            </h3>
            <ul className="mt-6 space-y-3">
              {sessions2026.map((session) => (
                <li
                  key={session.month}
                  className="flex items-center justify-between gap-3 rounded-sm border border-[#e6c86e]/30 bg-white/5 px-4 py-3"
                >
                  <span className="font-extrabold text-[#e6c86e]">{session.month}</span>
                  <span className="text-sm font-bold text-white">{session.date}</span>
                  <span className="text-xs text-[#c8d3e8]">{session.region}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-[#c8d3e8]">
              يفتح التسجيل قبل كل جلسة بأسابيع عبر الموقع الرسمي csca.cn —
              يُنصح بحجز مقعد مكر وترك وقت كافٍ لصدور النتيجة قبل موعد
              تقديمك الجامعي.
            </p>
          </div>
        </div>

        {/* حقائق سريعة */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.title} className="rounded-sm border border-[#c9a227]/50 bg-white p-5 shadow-sm">
              <fact.icon className="h-6 w-6 text-[#8a6d1d]" />
              <h4 className="mt-3 font-extrabold text-[#1b2f52]">{fact.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#4a5878]">{fact.text}</p>
            </div>
          ))}
        </div>

        {/* دعوة منصة التحضير */}
        <div className="mt-12 overflow-hidden rounded-sm border-2 border-[#c9a227] bg-white shadow-md">
          <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-bold text-[#1b2f52]" style={{ fontFamily: 'Amiri, serif' }}>
                تحضّر للاختبار؟ منصتنا التدريبية في خدمتك
              </h3>
              <p className="mt-3 leading-relaxed text-[#4a5878]">
                نوصي طلابنا بالتحضير المبكر لاختبار CSCA عبر منصة تدريبية
                متكاملة تشمل دروسًا في الرياضيات والفيزياء والكيمياء وبنك
                أسئلة تفاعلي وخطة دراسة مقترحة — مجانية لطلاب مؤسسة الشرق
                الأوسط.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-[#8a6d1d] font-bold text-white hover:bg-[#6f5717]"
            >
              <a href="https://ai-computer-students.github.io/csca-exam-web/" target="_blank" rel="noreferrer">
                <ExternalLink className="ml-2 h-4 w-4" />
                ابدأ التحضير الآن
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
