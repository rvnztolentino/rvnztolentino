import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
    return (
        <main className="flex-1 flex items-center justify-center py-24 md:py-32 lg:py-18 xl:py-40">
        <div className="container px-8 md:px-6 text-center">
            <h1 className="text-3xl font-bold text-black/95 tracking-tighter sm:text-5xl xl:text-6xl/none">
            404 - Page Not Found
            </h1>
            <p className="max-w-[600px] mx-auto text-black/60 md:text-xl mt-4 text-center">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/" className="mt-6 inline-flex items-center gap-2 text-black/60 hover:underline">
            Go Back Home
            <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
        </main>
    )
}