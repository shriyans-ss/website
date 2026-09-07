import fs from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import YAML from "yaml";

// Blog data is imported as a raw string, so filtering drafts in the app at
// runtime would still leave their full text sitting in the shipped bundle.
// This strips them from the source during production builds instead, so an
// unpublished draft never leaves your machine.
function stripDraftPosts() {
  return {
    name: "strip-draft-posts",
    enforce: "pre",
    apply: "build",
    load(id) {
      const [file, query = ""] = id.split("?");
      if (!query.split("&").includes("raw")) return null;
      if (!file.endsWith("data/blog.yaml")) return null;

      const posts = YAML.parse(fs.readFileSync(file, "utf8")) || [];
      const published = posts.filter((post) => post?.status !== "draft");
      const removed = posts.length - published.length;
      if (removed) {
        this.warn(`stripped ${removed} draft post(s) from the production build`);
      }
      return `export default ${JSON.stringify(YAML.stringify(published))}`;
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [stripDraftPosts(), react()],
  build: {
    outDir: "output",
    emptyOutDir: true
  }
});
