# Blog Post Guide

This guide explains how to add new blog posts to your portfolio website.

## Overview

Blog posts are stored in `src/api/blogs.json`. Each post supports:
- Text content with headings
- Code snippets with syntax highlighting
- Images with captions
- Social media sharing with Open Graph tags

## Adding a New Blog Post

### 1. Prepare Your Content

Before adding a post to the JSON file, prepare:
- **Title**: SEO-optimized title (include target keywords like "web developer philippines")
- **Content**: Write your article with personal insights and experiences
- **Code Examples**: Any code snippets you want to include
- **Images**: Save images to `public/blog-images/` folder
- **Thumbnail**: Create a 1200x630px image for social media sharing

### 2. Add Images

**For content images within blog posts:**
You have two options:

**Option 1: External URLs (Recommended)**
- Use free stock images from Unsplash, Pexels, or similar
- Example: `"src": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop"`
- Benefits: No file size limits, saves GitHub storage, loads from CDN

**Option 2: Local images**
- Use existing images from `src/assets/images/` folder
- Reference: `"src": "me-at-office.jpg"` or `"src": "project/modern-care-laptop.png"`
- Good for: Your own photos, screenshots, diagrams

**For social media thumbnails:**
- Create 1200x630px images and host externally (Imgur, Cloudinary, or `public/blog-images/`)
- Use full URLs: `"og_image": "https://www.inancelis.com/blog-images/your-thumbnail.jpg"`

### 3. Add Blog Post to JSON

Open `src/api/blogs.json` and add a new entry:

```json
{
    "id": 4,
    "slug": "your-post-slug",
    "title": "Your Post Title - Include Keywords",
    "metaDescription": "SEO description 150-160 characters. Include target keywords naturally.",
    "author": "Inan Celis",
    "date": "2025-01-15",
    "readTime": "6 min read",
    "category": "Web Development",
    "tags": ["web developer philippines", "react", "tutorial"],
    "featured_image": "your-featured-image.jpg",
    "og_image": "https://www.inancelis.com/blog-images/your-social-thumbnail.jpg",
    "excerpt": "Brief summary shown on blog listing page (2-3 sentences).",
    "content": {
        "introduction": "Opening paragraph that hooks the reader...",
        "sections": [
            {
                "type": "text",
                "heading": "Your First Section",
                "content": "Your content here..."
            },
            {
                "type": "code",
                "heading": "Code Example",
                "language": "jsx",
                "code": "import React from 'react';\n\nfunction Example() {\n  return <div>Hello</div>;\n}",
                "caption": "Description of what this code does"
            },
            {
                "type": "image",
                "src": "your-content-image.jpg",
                "alt": "Descriptive alt text for SEO",
                "caption": "Image caption explaining what's shown"
            }
        ],
        "conclusion": "Wrap up your article with key takeaways..."
    },
    "keywords": ["primary keyword", "secondary keyword", "web developer philippines"]
}
```

### 4. Content Section Types

#### Text Section
```json
{
    "type": "text",
    "heading": "Section Heading",
    "content": "Your paragraph content here. Can be multiple sentences."
}
```

#### Code Section
```json
{
    "type": "code",
    "heading": "Optional Heading",
    "language": "jsx",
    "code": "Your code here\nUse \\n for new lines",
    "caption": "Optional explanation of the code"
}
```

Supported languages: `jsx`, `javascript`, `php`, `html`, `css`, `python`, `java`, etc.

#### Image Section
```json
{
    "type": "image",
    "src": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    "alt": "SEO-friendly alt text",
    "caption": "Optional caption"
}
```

**Using External Images (Recommended):**
Free stock photo sources:
- **Unsplash**: https://unsplash.com/ (Tech/coding photos)
- **Pexels**: https://pexels.com/ (Free stock images)
- Add `?w=1200&h=600&fit=crop` to Unsplash URLs to resize

**Using Local Images:**
- `me-at-office.jpg` - Your workspace photo
- `project/modern-care-laptop.png` - Your project screenshots
- Any image from `src/assets/images/`

### 5. Update Sitemap

After adding a new post, update `public/sitemap.xml`:

```xml
<url>
    <loc>https://www.inancelis.com/blog/your-post-slug</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
</url>
```

Add this before the closing `</urlset>` tag.

### 6. Deploy

1. Test locally: `npm start`
2. Build: `npm run build`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Add new blog post: Your Title"
   git push
   ```
4. GitHub Pages will automatically deploy your changes

### 7. Submit to Search Engines

After deployment:
1. **Google Search Console**: Submit the new sitemap URL
2. **Bing Webmaster Tools**: Bing will automatically update from sitemap

## SEO Best Practices

### Title Optimization
- Include target keywords naturally
- Keep under 60 characters
- Make it compelling and click-worthy
- Example: "How to Build a React App in Philippines | Web Developer Guide"

### Meta Description
- 150-160 characters
- Include primary keyword
- Add a call-to-action
- Example: "Learn how Filipino web developers build React applications. Step-by-step tutorial with code examples from a professional developer in the Philippines."

### Keywords
- Primary: "web developer philippines" or "best web developer philippines"
- Secondary: Technical topics (react, laravel, vue, etc.)
- Long-tail: Specific phrases users might search

### Content Quality
- Write 1000-2000 words minimum
- Add personal experiences from your projects
- Include practical examples
- Use code snippets to demonstrate concepts
- Add images to break up text
- Link to your contact page or portfolio projects

## Social Media Sharing

### Thumbnail Image Requirements
- **Size**: 1200x630px (Facebook/LinkedIn recommended)
- **Format**: JPG or PNG
- **Content**: Include post title and your branding
- **File size**: Under 1MB for fast loading

### Open Graph Tags
The system automatically generates Open Graph tags using your `og_image` field:
- `og:title`: Your post title
- `og:description`: Your meta description
- `og:image`: Your social media thumbnail
- `og:url`: Post URL

Test your social media preview:
- Facebook: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Twitter: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- LinkedIn: Share preview shows automatically

## Content Strategy

### Recommended Posting Schedule
- **Frequency**: 2-4 posts per month
- **Quality over Quantity**: Better to post 2 excellent articles than 10 mediocre ones
- **Consistency**: Choose specific days (e.g., 1st and 15th of each month)

### Content Ideas
1. **Tutorial Posts**: "How to build X with Y" (include code)
2. **Case Studies**: Share experiences from your projects
3. **Technology Comparisons**: "React vs Vue" or "When to use Laravel"
4. **Best Practices**: "Clean Code Tips for React Developers"
5. **Career Advice**: "How to Become a Web Developer in the Philippines"
6. **Project Showcases**: Deep dive into your portfolio projects

### Keyword Integration
- Use "web developer philippines" naturally 3-5 times
- Include in: title, meta description, introduction, and conclusion
- Add variations: "Filipino web developer", "Philippines developer", "web development Philippines"
- Don't over-optimize (keyword stuffing hurts SEO)

## Image Optimization

Before adding images:
1. **Resize**: Use appropriate dimensions (max 1500px width for content images)
2. **Compress**: Use tools like TinyPNG or ImageOptim
3. **Format**: Use WebP for better compression, with JPG fallback
4. **Alt Text**: Always include descriptive alt text for SEO

## Code Formatting Tips

### Use Proper Escaping
In JSON, escape special characters:
- Use `\\n` for newlines
- Use `\\"` for quotes inside strings
- Use `\\\\` for backslashes

### Example
```json
"code": "function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('World'));"
```

## Troubleshooting

### Post Not Showing
- Check JSON syntax (use JSONLint to validate)
- Ensure commas are correct between entries
- Verify file is saved

### Images Not Loading
- Check file path in `public/blog-images/`
- Verify filename matches exactly (case-sensitive)
- Ensure image file is committed to git

### Social Share Preview Not Working
- Verify `og_image` is full URL (not relative path)
- Check image is accessible publicly
- Use Facebook Debugger to refresh cache

## Example Complete Post

See the existing posts in `blogs.json` for complete examples:
- Post 2: Includes code snippets with React and PHP
- Post 3: Includes images with captions

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Validate JSON syntax
3. Test locally before deploying
4. Review existing posts for reference

---

**Remember**: Quality content with personal insights ranks better than generic AI-generated content. Share your real experiences as a web developer in the Philippines!
