import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canteen Break Rush Buster | FX Engineering College" },
      {
        name: "description",
        content:
          "Pre-book canteen food, pay by GPay UPI and skip the break-time crowd at Francis Xavier Engineering College.",
      },
      { property: "og:title", content: "Canteen Break Rush Buster | FXEC" },
      {
        property: "og:description",
        content: "Book snacks, lunch and drinks in 30 seconds. No queue, no sold-out surprises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/canteen.html"
      title="Canteen Break Rush Buster"
      className="h-screen w-screen border-0"
    />
  );
}
