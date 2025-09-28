import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("pricing", "routes/pricing.tsx"),
    route("snapshot", "routes/snapshot.tsx"), route("contact", "routes/contact.tsx"),
    route("faq", "routes/faq.tsx")
] satisfies RouteConfig;
