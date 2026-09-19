import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Languages, Award, CheckCircle2 } from 'lucide-react'
import { bachelorPrograms } from '@/data/content'

export default function Bachelor() {
  return (
    <section id="bachelor" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            درجة البكالوريوس
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            برامج البكالوريوس المتاحة
          </h2>
          <p className="mt-4 text-muted-foreground">
            تغطي المنح الدراسية الرسوم الدراسية بالكامل أو جزءًا منها، مع سكن
            جامعي وبدل معيشة شهري حسب نوع المنحة.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bachelorPrograms.map((program) => (
            <Card
              key={program.title}
              className="flex flex-col border-0 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                  <Badge className="bg-primary/10 font-bold text-primary hover:bg-primary/10">
                    {program.degree}
                  </Badge>
                </div>

                <h3 className="mt-4 text-xl font-extrabold">{program.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>

                <div className="mt-5 space-y-2 border-t pt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-semibold">المدة:</span> {program.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-primary" />
                    <span className="font-semibold">لغة الدراسة:</span> {program.language}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-semibold">الحقول:</span>
                  </div>
                  <ul className="flex flex-wrap gap-1.5 pr-6">
                    {program.fields.map((field) => (
                      <li
                        key={field}
                        className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-semibold"
                      >
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
