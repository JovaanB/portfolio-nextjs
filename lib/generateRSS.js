import { writeFileSync } from "fs";
import { getAllPosts } from "./posts";
import RSS from "rss";
export default async function getRSS() {
  const siteURL = "https://j471n.in";
  const allBlogs = getAllPosts();

  const feed = new RSS({
    title: "Jovan Bienvenu",
    description: `I've been writing online since 2022, mostly about web development
            and tech careers. In total, I've written ${allBlogs.length} articles
            till now.`,
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Jovan Bienvenu`,
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `${siteURL}/blogs/${post.slug}`,
      date: post.date,
      description: post.excerpt,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
