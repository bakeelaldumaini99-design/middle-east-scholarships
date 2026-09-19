import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Trophy, BookOpen } from 'lucide-react'
import { universities } from '@/data/content'

export default function Universities() {
  return (
    <section id="universities" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            شركاؤنا الأكاديميون
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            الجامعات الصينية الشريكة
          </h2>
          <p className="mt-4 text-muted-foreground">
            نتعاون مع نخبة الجامعات الحكومية الصينية المرموقة عالميًا، لتمنحك
            فرصة الدراسة في تخصصات مطلوبة في سوق العمل.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {universities.map((uni) => (
            <Card
              key={uni.name}
              className="group overflow-hidden border-0 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-extrabold">{uni.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {uni.city} – الصين
                    </div>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-black text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {uni.name.replace('جامعة ', '').charAt(0)}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-2 rounded-lg bg-muted/60 p-3 text-sm">
                  <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  <span className="font-semibold">{uni.ranking}</span>
                </div>

                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-1 text-sm font-bold text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    أبرز التخصصات
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {uni.majors.map((major) => (
                      <Badge key={major} variant="secondary" className="font-medium">
                        {major}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
