import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Link href="/week-2">Press on me to link to page2</Link>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
Hello World testing testing
      </div>
      <p></p>
    </main>
  )
}
