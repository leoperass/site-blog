'use client';
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

type PostShareProps = {
  url: string;
  title: string;
  description: string;
}

export const PostShare = ({url, title, description}: PostShareProps ) => {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  });

  return (
    <>
      <aside> 
        <div className="space-y-6 bg-gray-800 rounded-lg">
          <h2 className="hidden md:block text-heading-xs text-gray-100">Compartilhar</h2>

          <div className="flex justify-between md:flex-col gap-2">
            {shareButtons.map((provider) => (
              <Button
                key={provider.provider}
                onClick={() => provider.action()}
                variant="outline"
                className="w-fit md:w-full justify-start gap-2"
              >
                {provider.icon}
                <span className="hidden md:block">
                  {provider.name}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}