import { createFileRoute } from "@tanstack/react-router";
import { PlanApp } from "@/components/plan/PlanApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PlanApp />;
}
