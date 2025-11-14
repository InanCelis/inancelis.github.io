import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import SEO from "../Components/SEO";
import CodeBlock from "../Components/CodeBlock";
import blogsData from "../api/blogs.json";
import "../assets/styles/blog-post.scss";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Remove trailing slash from slug if present
    const cleanSlug = slug?.replace(/\/$/, '') || slug;
    const foundBlog = blogsData.find((b) => b.slug === cleanSlug);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      navigate("/404");
    }
  }, [slug, navigate]);

  if (!blog) {
    return null;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    author: {
      "@type": "Person",
      name: blog.author,
      url: "https://inancelis.com",
    },
    datePublished: blog.date,
    dateModified: blog.date,
    publisher: {
      "@type": "Person",
      name: "Inan Celis",
      url: "https://inancelis.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://inancelis.com/blog/${blog.slug}`,
    },
  };

  // Get related posts (exclude current post)
  const relatedPosts = blogsData.filter((b) => b.id !== blog.id).slice(0, 2);

  // Render section based on type
  const renderSection = (section, index) => {
    switch (section.type) {
      case "text":
        return (
          <div key={index} className="blog-section">
            <h2>{section.heading}</h2>
            <p>{section.content}</p>
          </div>
        );

      case "code":
        return (
          <CodeBlock
            key={index}
            code={section.code}
            language={section.language}
            heading={section.heading}
            caption={section.caption}
          />
        );

      case "image":
        // Check if image is external URL (starts with http:// or https://)
        const isExternalImage =
          section.src.startsWith("http://") ||
          section.src.startsWith("https://");
        const imageSrc = isExternalImage
          ? section.src
          : require(`../assets/images/${section.src}`);

        return (
          <div key={index} className="blog-section blog-image-section">
            <div className="blog-image-wrapper">
              <img src={imageSrc} alt={section.alt} loading="lazy" />
              {section.caption && (
                <p className="image-caption text-muted">{section.caption}</p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <SEO
        title={`${blog.title} | Inan Celis`}
        description={blog.metaDescription}
        url={`https://inancelis.com/blog/${blog.slug}`}
        image={
          blog.og_image ||
          "https://inancelis.com/static/media/meee.4c7463169d8947aeed63.png"
        }
        type="article"
        structuredData={structuredData}
      />
      <article className="container blog-post-page py-5 pt-5">
        <div className="blog-post-header" data-aos="fade-up">
          <NavLink to="/blog/" className="back-link">
            <i className="fa-solid fa-arrow-left"></i> Back to Blog
          </NavLink>
          <div className="blog-meta">
            <span className="blog-category">{blog.category}</span>
            <span className="blog-date">{blog.date}</span>
          </div>
          <h1 className="blog-post-title">{blog.title}</h1>
          <div className="blog-post-info">
            <span className="blog-author">
              <i className="fa-regular fa-user"></i> {blog.author}
            </span>
            <span className="blog-read-time">
              <i className="fa-regular fa-clock"></i> {blog.readTime}
            </span>
          </div>
        </div>

        <div className="blog-post-content" data-aos="fade-up">
          <div className="blog-introduction">
            <p>{blog.content.introduction}</p>
          </div>

          {blog.content.sections.map((section, index) =>
            renderSection(section, index)
          )}

          <div className="blog-conclusion">
            <h2>Conclusion</h2>
            <p>{blog.content.conclusion}</p>
          </div>
        </div>

        <div className="blog-post-footer" data-aos="fade-up">
          <div className="blog-tags">
            <strong>Tags:</strong>
            {blog.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="blog-share">
            <strong>Share this article:</strong>
            <div className="share-buttons">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  blog.title
                )}&url=${encodeURIComponent(
                  `https://inancelis.com/blog/${blog.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `https://inancelis.com/blog/${blog.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn linkedin"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `https://inancelis.com/blog/${blog.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="related-posts" data-aos="fade-up">
            <h3>Related Articles</h3>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedBlog) => (
                <div key={relatedBlog.id} className="related-post-card">
                  <div className="related-post-meta">
                    <span className="blog-category">
                      {relatedBlog.category}
                    </span>
                    <span className="blog-date">{relatedBlog.date}</span>
                  </div>
                  <h4>
                    <NavLink to={`/blog/${relatedBlog.slug}/`}>
                      {relatedBlog.title}
                    </NavLink>
                  </h4>
                  <p className="text-muted">{relatedBlog.excerpt}</p>
                  <NavLink
                    to={`/blog/${relatedBlog.slug}/`}
                    className="read-more"
                  >
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="blog-cta" data-aos="fade-up">
          <h3>Need a Web Developer for Your Project?</h3>
          <p className="text-muted">
            Looking for a professional web developer in the Philippines? Let's
            discuss how I can help bring your project to life with modern
            technologies and best practices.
          </p>
          <NavLink to="/contact/" className="cta-button">
            <i className="fa-regular fa-paper-plane"></i> Get In Touch
          </NavLink>
        </div>
      </article>
    </Layout>
  );
}

export default BlogPost;
