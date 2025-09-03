import * as React from "react";
import { CopyCommandButton } from "@/components/copy-command-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { LoginForm } from "@/registry/domino/blocks/login-form/login-form";
import { HelloWorld } from "@/registry/domino/blocks/hello-world/hello-world";
import PokemonPage from "@/registry/domino/blocks/complex-component/page";
import { ExampleForm } from "@/registry/domino/blocks/example-form/example-form";

const items = [
  {
    name: "hello-world",
    title: "Hello world",
    description: "Hello world component",
    component: HelloWorld,
  },
  {
    name: "example-form",
    title: "Example form",
    description: "Example form component",
    component: ExampleForm,
  },
  {
    name: "complex-component",
    title: "Complex component",
    description: "Complex component",
    component: PokemonPage,
  },
  {
    name: "login-form",
    title: "Login form",
    description: "Login form component",
    component: LoginForm,
  },
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto flex flex-col gap-12">
      {items.map((item) => (
        <div key={item.name} className="flex flex-col gap-4">
          <div className="flex flex-row items-center">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-base font-normal text-muted-foreground">
                {item.description}
              </p>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <CopyCommandButton registryItem={item.name} />
              <OpenInV0Button name={item.name} />
            </div>
          </div>
          <div className="flex items-center border rounded-xl justify-center bg-muted/30 aspect-video">
            <item.component />
          </div>
        </div>
      ))}
    </main>
  );
}
