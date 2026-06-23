import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { PostCard } from "./components/post-card";

export function BlogList() {
    const router = useRouter();
    const query = router.query.q as string;
    const pageTitle = query 
        ? `Resultados de busca para "${query}"`
        : 'Dicas e estratégias para impulsionar seu negócio';

    return (
        <div className="flex flex-col py-24 flex-grow h-full">
            <header className="">
                <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
                    <div className="flex flex-col gap-4 md:px-0">
                        {/* {TAG} */}
                        <span className="text-body-tag text-cyan-100 bg-cyan-300 py-2 px-4 rounded-md text-center md:text-left w-fit">BLOG</span>

                        {/* {TITLE} */}
                        <h1 className="text-heading-lg md:text-heading-xl text-gray-100 text-balance max-w-2xl text-start md:text-left">
                            {pageTitle}
                        </h1>
                    </div>
                    {/* {SEARCH} */}
                    <Search />
                </div>
            </header>

            {/* {LISTAGEM DE POSTS} */}
            <PostCard
                slug="/transformando" 
                title="Transformando seu negócio em uma loja virtual"
                date="20/12/2024"
                description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
                image="/assets/first-post.png"
                author={{
                    avatar: '/avatar-01.svg',
                    name: 'Aspen Dokids'
                }}

            />
        </div>
    )
}