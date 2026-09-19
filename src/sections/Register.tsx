import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ClipboardList, Send, Phone, Upload, FileCheck2 } from 'lucide-react'

const WHATSAPP_NUMBER = '967716621214'

const inputClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'

interface FormState {
  arabicName: string
  englishName: string
  email: string
  birthDate: string
  gpa: string
  passport: string
  certificate: File | null
  passportPhoto: File | null
}

export default function Register() {
  const [form, setForm] = useState<FormState>({
    arabicName: '',
    englishName: '',
    email: '',
    birthDate: '',
    gpa: '',
    passport: '',
    certificate: null,
    passportPhoto: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setForm({ ...form, [e.target.name]: file })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = [
      'طلب تسجيل جديد — مؤسسة الشرق الأوسط للمنح الدراسية',
      '',
      `الاسم بالعربية: ${form.arabicName}`,
      `الاسم بالإنجليزية: ${form.englishName}`,
      `البريد الإلكتروني: ${form.email}`,
      `تاريخ الميلاد: ${form.birthDate}`,
      `معدل الثانوية: ${form.gpa}`,
      `رقم الجواز: ${form.passport}`,
      '',
      `صورة الشهادة الثانوية: ${form.certificate ? 'مرفقة في المحادثة' : 'سأرسلها يدويًا'}`,
      `صورة الجواز: ${form.passportPhoto ? 'مرفقة في المحادثة' : 'سأرسلها يدويًا'}`,
    ].join('\n')
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  const isValid =
    form.arabicName.trim() &&
    form.englishName.trim() &&
    form.email.trim() &&
    form.birthDate &&
    form.gpa.trim() &&
    form.passport.trim()

  const fileLabel = (file: File | null) =>
    file ? (
      <span className="flex items-center gap-1 font-bold text-green-700">
        <FileCheck2 className="h-4 w-4" />
        {file.name}
      </span>
    ) : (
      'اضغط لاختيار الصورة من جهازك'
    )

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
            املأ البيانات التالية وارفع صور مستنداتك، ثم اضغط إرسال — سيُفتح
            واتساب برسالة جاهزة تحتوي بياناتك، وأرفق الصورتين داخل المحادثة.
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    dir="ltr"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="birthDate" className="mb-2 block text-sm font-bold">
                    تاريخ الميلاد
                  </label>
                  <input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    required
                    value={form.birthDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="gpa" className="mb-2 block text-sm font-bold">
                    معدل الثانوية العامة
                  </label>
                  <input
                    id="gpa"
                    name="gpa"
                    type="text"
                    required
                    value={form.gpa}
                    onChange={handleChange}
                    placeholder="مثال: 85%"
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
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="certificate" className="mb-2 block text-sm font-bold">
                    صورة الشهادة الثانوية
                  </label>
                  <label
                    htmlFor="certificate"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-input bg-muted/40 px-3 py-4 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:bg-muted/60"
                  >
                    <Upload className="h-4 w-4 shrink-0" />
                    <span className="truncate">{fileLabel(form.certificate)}</span>
                  </label>
                  <input
                    id="certificate"
                    name="certificate"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFile}
                  />
                </div>

                <div>
                  <label htmlFor="passportPhoto" className="mb-2 block text-sm font-bold">
                    صورة الجواز
                  </label>
                  <label
                    htmlFor="passportPhoto"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-input bg-muted/40 px-3 py-4 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:bg-muted/60"
                  >
                    <Upload className="h-4 w-4 shrink-0" />
                    <span className="truncate">{fileLabel(form.passportPhoto)}</span>
                  </label>
                  <input
                    id="passportPhoto"
                    name="passportPhoto"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFile}
                  />
                </div>
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
