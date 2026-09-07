import YAML from "yaml";
import blogRaw from "../data/blog.yaml?raw";
import booksRaw from "../data/books.yaml?raw";
import interestsRaw from "../data/interests.yaml?raw";
import siteRaw from "../data/site.yaml?raw";
import aboutRaw from "../data/about.yaml?raw";

const safeParse = (raw, fallback) => {
  try {
    const parsed = YAML.parse(raw);
    return parsed || fallback;
  } catch (error) {
    return fallback;
  }
};

// Newest first. Posts carry `date_iso` for sorting and `date` for display;
// anything without an ISO date sinks to the bottom rather than disappearing.
const byNewest = (a, b) => (b.date_iso || "").localeCompare(a.date_iso || "");

// Posts marked `status: draft` are visible while running locally so you can
// refine them in place, but are stripped from the production build so an
// unfinished draft can never be published by a push to main.
const allPosts = safeParse(blogRaw, []).slice().sort(byNewest);

export const isDraft = (post) => post?.status === "draft";

export const blogPosts = import.meta.env.PROD
  ? allPosts.filter((post) => !isDraft(post))
  : allPosts;

export const draftCount = allPosts.filter(isDraft).length;
export const books = safeParse(booksRaw, []);
export const interests = safeParse(interestsRaw, []);
export const site = safeParse(siteRaw, {});
export const about = safeParse(aboutRaw, {});

// The About page only exists once there is a bio to put on it.
export const hasAbout = Boolean(about.bio?.length);
