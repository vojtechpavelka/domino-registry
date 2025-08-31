"use client";

import * as React from "react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckIcon, CopyIcon } from "lucide-react";

export function RegistrySetup({
  className,
}: React.ComponentProps<typeof Button>) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className={cn(className)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-4"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></line>
          </svg>
          Setup guide
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registry setup guide</DialogTitle>
          <DialogDescription>
            Use the code below to configure the @domino registry for your
            project.
          </DialogDescription>
        </DialogHeader>
        <div className="font-medium">Initialize shadcn/ui in your project</div>
        <div className="bg-muted p-8 rounded-md overflow-x-auto w-full h-auto">
          <pre className="text-sm font-mono">
            <code>npx shadcn@latest init</code>
          </pre>
        </div>
        <div className="font-medium">
          Then copy and paste the code into{" "}
          <code className="font-mono text-foreground">components.json</code>
        </div>
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => copyToClipboard(registrySetupCode)}
          >
            {isCopied ? <CheckIcon /> : <CopyIcon />}
          </Button>
          <div className="bg-muted p-8 rounded-md overflow-x-auto w-full h-auto">
            <pre className="text-sm font-mono">
              <code>{registrySetupCode}</code>
            </pre>
          </div>
        </div>
        <div className="font-medium">
          Then use the following command to add components:
        </div>
        <div className="bg-muted p-8 rounded-md overflow-x-auto w-full h-auto">
          <pre className="text-sm font-mono">
            <code>npx shadcn@latest add @domino/[component-name]</code>
          </pre>
        </div>
        <div className="font-medium">
          Run the following command to setup the MCP server:
        </div>
        <div className="bg-muted p-8 rounded-md overflow-x-auto">
          <pre className="text-sm font-mono">
            <code>npx shadcn@latest mcp init</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const registrySetupCode = `"registries": {
  "@domino": "${process.env.NEXT_PUBLIC_BASE_URL}/r/{name}.json"
}
`;
