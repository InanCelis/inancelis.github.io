import { NavLink } from "react-router-dom";
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
  // Sort blogs by date in descending order (newest first)
  const sortedBlogs = [...blogsData].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <Layout>
      <SEO
        title="Web Development Blog | Inan Celis - Best Web Developer Philippines"
        description="Latest tutorials, coding tips, and industry insights from a Filipino web developer. Deep dives into React, JavaScript, Laravel, WordPress development, and modern web technologies. Updated regularly with practical guides."
        url="https://inancelis.com/blog/"
        structuredData={structuredData}
      />
      <div className="container blog-page py-5 pt-5">
        <div className="blog-header" data-aos="fade-up">
          <h1 className="font-weight-bold">Web Development Blog</h1>
          <p className="text-muted f-text-m">
            Insights, tutorials, and best practices from a professional web
            developer in the Philippines
          </p>
        </div>

        <div className="blog-grid">
          {sortedBlogs.map((blog) => (
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

        {blogsData.length === 0 && (
          <div className="no-blogs" data-aos="fade-up">
            <p className="text-muted">
              No blog posts available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
      <PageIndicator page="Blog" />
    </Layout>
  );
}

export default Blog;
