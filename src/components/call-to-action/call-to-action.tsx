import { ArrowRight, Store } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

export const CallToAction = () => {
  return (
    <section className="relative py-24 mt-12 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] opacity-90 bg-cover" />

      <div className="container relative z-10">
        <div className="flex flex-col gap-6 items-center text-center">
          <h2 className="font-sans text-heading-xl text-gray-100 text-balance">Crie uma loja online e inicie suas vendas ainda hoje</h2>
          <Button variant='primary' asChild className="mt-4">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-cyan-300 p-4 w-fit rounded-full">
        <Store className="text-cyan-100" />
      </div>
    </section>
  )
}