import Link from 'next/link'

export function Header() {
  return (
    <div className="w-full bg-[#0C3B3B]">
      <div className="m-auto flex max-w-7xl justify-between px-16 py-6">
        <p>Iagro Solutions</p>

        <Link href="#">
          <p>Inscrição</p>
        </Link>
      </div>
    </div>
  )
}
