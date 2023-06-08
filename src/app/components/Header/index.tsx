import Link from 'next/link'

export function Header() {
  return (
    <div className="w-full bg-[#0C3B3B]">
      <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-10 py-6 max-[370px]:justify-center">
        <p className="text-2xl font-bold">Iagro Solutions</p>

        <Link href="https://forms.gle/7H2F1hHNi1qAXviJA" target="_blank">
          <p className="cursor-pointer rounded-full px-4 py-2 font-bold hover:bg-[#23A9A9]">
            Inscrição
          </p>
        </Link>
      </div>
    </div>
  )
}
