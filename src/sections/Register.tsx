import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ClipboardList, Send, Phone } from 'lucide-react'

const WHATSAPP_NUMBER = '967716621214'

const inputClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'

export default function Register() {
  const [form, setForm] = useState({
    arabicName: '',
    englishName: '',
    passport: '',
    highschool: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = [
      'طلب تسجيل جديد — مؤسسة الشرق الأوسط للمنح الدراسية',
      '',
      `الاسم بالعربية: ${form.arabicName}`,
      `الاسم بالإنجليزية: ${form.englishName}`,
      `رقم الجواز: ${form.passport}`,
      `الشهادة الثانوية: ${form.highschool}`,
    ].join('\n')
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  const isValid =
    form.arabicName.trim() &&
    form.englishName.trim() &&
    form.passport.trim() &&
    form.highschool.trim()

  return (
    <section id="register" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
            <ClipboardList className="h-4 w-4" />
            التسجيل عبر المؤسسة
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            سجّل رغبتك في المنحة الدراسية
          </h2>
          <p className="mt-4 text-muted-foreground">
            املأ البيانات التالية وسيتواصل معك فريق المؤسسة عبر واتساب لإكمال
            إجراءات ملفك واختيار الجامعة والتخصص الأنسب لك.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-2xl border-0 shadow-md">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="arabicName" className="mb-2 block text-sm font-bold">
                  الاسم الكامل بالعربية
                </label>
                <input
                  id="arabicName"
                  name="arabicName"
                  type="text"
                  required
                  value={form.arabicName}
                  onChange={handleChange}
                  placeholder="مثال: أحمد محمد عبدالله"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="englishName" className="mb-2 block text-sm font-bold">
                  الاسم الكامل بالإنجليزية
                </label>
                <input
                  id="englishName"
                  name="englishName"
                  type="text"
                  required
                  dir="ltr"
                  value={form.englishName}
                  onChange={handleChange}
                  placeholder="e.g. Ahmed Mohammed Abdullah"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="passport" className="mb-2 block text-sm font-bold">
                  رقم جواز السفر
                </label>
                <input
                  id="passport"
                  name="passport"
                  type="text"
                  required
                  dir="ltr"
                  value={form.passport}
                  onChange={handleChange}
                  placeholder="Passport number"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="highschool" className="mb-2 block text-sm font-bold">
                  الشهادة الثانوية (المعدل / النسبة المئوية)
                </label>
                <input
                  id="highschool"
                  name="highschool"
                  type="text"
                  required
                  value={form.highschool}
                  onChange={handleChange}
                  placeholder="مثال: 85% — علمي"
                  className={inputClass}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!isValid}
                className="w-full font-bold"
              >
                <Send className="ml-2 h-4 w-4" />
                إرسال الطلب عبر واتساب
              </Button>

              <p className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                للتواصل المباشر:
                <span dir="ltr" className="font-bold text-foreground">
                  +967 716 621 214
                </span>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
