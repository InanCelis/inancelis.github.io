# Blog Images Folder

This folder contains images used in blog posts.

## Image Guidelines

### For Content Images (used within blog posts)
- **Recommended size**: 800-1200px width
- **Format**: JPG, PNG, or WebP
- **Compression**: Use tools like TinyPNG to keep file size under 200KB
- **Naming**: Use descriptive names (e.g., `react-component-example.jpg`)

### For Social Media Thumbnails (og_image)
- **Required size**: 1200x630px (Facebook/LinkedIn recommended)
- **Format**: JPG or PNG
- **Content**: Include post title and branding
- **File size**: Keep under 1MB

## Adding Images

1. Save your image to this folder
2. Reference in `blogs.json` using just the filename: `"src": "your-image.jpg"`
3. The blog system will automatically look for images in `/blog-images/`

## Example

If you save an image as `react-tutorial-diagram.jpg`, reference it in your blog post like this:

```json
{
    "type": "image",
    "src": "react-tutorial-diagram.jpg",
    "alt": "React component lifecycle diagram",
    "caption": "Understanding the React component lifecycle"
}
```

## Placeholder Images

Until you add real images, you can use:
- Your existing project images from `/src/assets/images/`
- Free stock photos from Unsplash or Pexels
- Diagrams created with tools like Excalidraw or Figma

Remember to optimize all images before adding them to reduce page load time!
