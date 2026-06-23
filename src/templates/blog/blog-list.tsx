import { Search } from "@/components/search";
import { useRouter } from "next/router";

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
        </div>
    )
}