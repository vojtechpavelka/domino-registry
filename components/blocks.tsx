import { HelloWorld } from "@/registry/domino/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/domino/blocks/example-form/example-form";
import PokemonPage from "@/registry/domino/blocks/complex-component/page";
import { LoginForm } from "@/registry/domino/blocks/login-form/login-form";

export const blocks = [
  {
    name: "hello-world",
    component: HelloWorld,
  },
  {
    name: "example-form",
    component: ExampleForm,
  },
  {
    name: "complex-component",
    component: PokemonPage,
  },
  {
    name: "login-form",
    component: LoginForm,
  },
];