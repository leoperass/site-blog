import { Footer } from "../footer/footer";
import { Header } from "../header"

type LayoutProps = {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="relative flex flex-col min-h-screen bg-black/70">
            <Header />
            <main className="flex-1 flex flex-col mb-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}