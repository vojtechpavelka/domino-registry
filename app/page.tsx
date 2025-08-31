import * as React from "react";
import { registryItemSchema } from "shadcn/schema";
import registry from "@/registry.json";
import { AddCommandButton } from "@/components/add-command-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { blocks } from "@/components/blocks";

const getRegistryItemFromJson = React.cache((name: string) => {
  const registryItem = registry.items.find((item) => item.name === name);

  const result = registryItemSchema.safeParse(registryItem);
  if (!result.success) {
    return null;
  }
  return result.data;
});

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto flex flex-col gap-12">
      {blocks.map((block) => {
        const registryItem = getRegistryItemFromJson(block.name);
        if (!registryItem) {
          return "No registry item found";
        }

        return (
          <div key={registryItem.name} className="flex flex-col gap-4">
            <div className="flex flex-row items-center">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold">{registryItem.title}</h2>
                <p className="text-sm font-normal text-muted-foreground">
                  {registryItem.description}
                </p>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <AddCommandButton registryItem={registryItem.name} />
                <OpenInV0Button name={registryItem.name} className="w-fit" />
              </div>
            </div>
            <div className="flex items-center border rounded-xl justify-center min-h-[400px] p-10 bg-muted/30">
              <block.component />
            </div>
          </div>
        );
      })}
    </main>
  );
}
