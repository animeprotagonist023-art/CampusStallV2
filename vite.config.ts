import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Automatically use /<repository-name>/ on GitHub Pages project sites.
// User/organization sites (name.github.io) are served from /.
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrganizationSite = repositoryName?.toLowerCase().endsWith(".github.io") ?? false;
const base =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserOrOrganizationSite
    ? `/${repositoryName}/`
    : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
