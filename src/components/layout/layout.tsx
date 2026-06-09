import { Inter, PT_Sans_Caption } from "next/font/google";

import { Footer } from "./footer/footer";
import { Header } from "./header";

type LayoutProps = {
    children: React.ReactNode;
}

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-inter'
});

const ptSansCapition = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-sans'
})

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={`${inter.className} relative flex flex-col min-h-screen bg-gray-800 font-inter`}>
            <Header />
            <main className="flex-1 flex mt-10 flex-col">
                {children}
            </main>
            <Footer />
        </div>
    )
}