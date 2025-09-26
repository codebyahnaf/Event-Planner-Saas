import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("pricing", "routes/pricing.tsx"),
    route("caseStudies", "routes/caseStudies.tsx")
] satisfies RouteConfig;
