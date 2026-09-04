import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/presentation/deck";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Deck />;
}
