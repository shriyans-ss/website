import YAML from "yaml";
import blogRaw from "../data/blog.yaml?raw";
import booksRaw from "../data/books.yaml?raw";
import interestsRaw from "../data/interests.yaml?raw";

const safeParse = (raw, fallback) => {
  try {
    const parsed = YAML.parse(raw);
    return parsed || fallback;
  } catch (error) {
    return fallback;
  }
};

export const blogPosts = safeParse(blogRaw, []);
export const books = safeParse(booksRaw, []);
export const interests = safeParse(interestsRaw, []);
