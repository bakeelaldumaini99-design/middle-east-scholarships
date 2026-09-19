import Hero from '@/sections/Hero'
import Universities from '@/sections/Universities'
import Bachelor from '@/sections/Bachelor'
import ChineseProgram from '@/sections/ChineseProgram'
import { Steps, Footer } from '@/sections/Steps'
import Register from '@/sections/Register'
import '../App.css'

export default function Home() {
  return (
    <div dir="rtl">
      <Hero />
      <Universities />
      <Bachelor />
      <ChineseProgram />
      <Steps />
      <Register />
      <Footer />
    </div>
  )
}
