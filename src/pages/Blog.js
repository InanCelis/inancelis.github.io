import { NavLink } from "react-router-dom";
import { useState } from "react";
import Layout from "../Components/Layout/Layout";
import SEO from "../Components/SEO";
import blogsData from "../api/blogs.json";
import "../assets/styles/blog.scss";
import PageIndicator from "../Components/Slice/PageIndicator";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Web Development Blog by Inan Celis",
  description:
    "Insights, tutorials, and best practices in web development from a professional web developer in the Philippines",
  url: "https://inancelis.com/blog/",
  author: {
    "@type": "Person",
    name: "Ferdinand T. Celis (Inan Celis)",
    url: "https://inancelis.com/",
  },
};

function Blog() {
  const [query, setQuery] = useState("");

  // Sort blogs by date in descending order (newest first)
  const sortedBlogs = [...blogsData].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const searchBlogs = (blog) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();

    // Search title, excerpt, category
    if (blog.title.toLowerCase().includes(q)) return true;
    if (blog.excerpt.toLowerCase().includes(q)) return true;
    if (blog.category.toLowerCase().includes(q)) return true;

    // Search tags
    if (blog.tags.some((tag) => tag.toLowerCase().includes(q))) return true;

    // Search keywords (blog #7 has keywords field)
    if (blog.keywords?.some((kw) => kw.toLowerCase().includes(q))) return true;

    // Search content introduction
    if (blog.content.introduction.toLowerCase().includes(q)) return true;

    // Search sections
    for (const section of blog.content.sections) {
      if (section.heading?.toLowerCase().includes(q)) return true;
      if (section.content?.toLowerCase().includes(q)) return true;
      if (section.intro?.toLowerCase().includes(q)) return true;
      if (Array.isArray(section.items)) {
        for (const item of section.items) {
          if (typeof item === "string" && item.toLowerCase().includes(q)) return true;
          if (item.title?.toLowerCase().includes(q)) return true;
          if (item.description?.toLowerCase().includes(q)) return true;
          if (item.question?.toLowerCase().includes(q)) return true;
          if (item.answer?.toLowerCase().includes(q)) return true;
        }
      }
    }

    return false;
  };

  const filteredBlogs = sortedBlogs.filter(searchBlogs);

  return (
    <Layout>
      <SEO
        title="Web Development Blog | Inan Celis Philippines"
        description="Web development tutorials and coding tips from the Philippines. Expert guides on React, JavaScript, Laravel, WordPress, and modern web technologies."
        url="https://inancelis.com/blog/"
        structuredData={structuredData}
        breadcrumbs={[
          { name: "Home", url: "https://inancelis.com/" },
          { name: "Blog", url: "https://inancelis.com/blog/" },
        ]}
      />
      <div className="container blog-page py-5 pt-5">
        <div className="blog-header" data-aos="fade-up">
          <h1 className="font-weight-bold">Web Development Blog</h1>
          <p className="text-muted f-text-m">
            Insights, tutorials, and best practices from a professional web
            developer in the Philippines
          </p>
          <div className="blog-search" data-aos="fade-up">
            <div className="blog-search-input-wrapper">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button className="blog-search-clear" onClick={() => setQuery("")}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
            {query && (
              <p className="blog-search-results">
                {filteredBlogs.length} result{filteredBlogs.length !== 1 ? "s" : ""} for "{query}"
              </p>
            )}
          </div>
        </div>

        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <article key={blog.id} className="blog-card" data-aos="fade-up">
              <div className="blog-card-header">
                <div className="blog-meta">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-title">
                  <NavLink to={`/blog/${blog.slug}/`}>{blog.title}</NavLink>
                </h2>
                <p className="blog-excerpt text-muted">{blog.excerpt}</p>
                <div className="blog-footer">
                  <div className="blog-info">
                    <span className="blog-author">
                      <i className="fa-regular fa-user"></i> {blog.author}
                    </span>
                    <span className="blog-read-time">
                      <i className="fa-regular fa-clock"></i> {blog.readTime}
                    </span>
                  </div>
                  <NavLink to={`/blog/${blog.slug}/`} className="read-more">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
              <div className="blog-tags">
                {blog.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="no-blogs" data-aos="fade-up">
            <p className="text-muted">
              {query ? `No results found for "${query}".` : "No blog posts available yet. Check back soon!"}
            </p>
          </div>
        )}
      </div>
      <PageIndicator page="Blog" />
    </Layout>
  );
}

export default Blog;
