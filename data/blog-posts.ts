export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  readingTime: number;
  categories: string[];
  content: string; // Markdown string
};

export const blogPosts: BlogPost[] = [
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt:
      "Master advanced techniques to improve your React app's speed and efficiency. Learn about avoiding re-renders, code splitting, memoization, virtualization, and more.",
    date: "2023-02-18",
    coverImage:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*PRSCPASXfR-Kc4sQ_0ZSKw.jpeg?height=600&width=800",
    readingTime: 18,
    categories: ["React", "Performance", "JavaScript"],
    content: `
# Optimizing React Performance: Tips and Tricks

> React is fast—but your app might not be. Learn practical, battle-tested ways to turbocharge your React performance.

---

## Table of Contents

- [Introduction](#introduction)
- [1. Avoid Unnecessary Renders](#1-avoid-unnecessary-renders)
- [2. Use Memoization Strategically](#2-use-memoization-strategically)
- [3. Code Splitting](#3-code-splitting)
- [4. List Virtualization](#4-list-virtualization)
- [5. Optimize State Management](#5-optimize-state-management)
- [6. Reduce Component Complexity](#6-reduce-component-complexity)
- [7. Lazy Load Images and Assets](#7-lazy-load-images-and-assets)
- [8. Avoid Anonymous Functions in JSX](#8-avoid-anonymous-functions-in-jsx)
- [9. Use Production Build](#9-use-production-build)
- [10. Monitor and Analyze Performance](#10-monitor-and-analyze-performance)
- [Conclusion](#conclusion)

---

## Introduction

React's virtual DOM and diffing algorithm provide great performance out of the box. However, as your app grows, you'll encounter performance bottlenecks if not handled properly. Let’s explore several techniques to mitigate this.

---

## 1. Avoid Unnecessary Renders

Unnecessary re-renders are the most common performance killer. Even small components can lead to big performance costs if rendered too often.

**Use \`React.memo\`** to prevent re-rendering of pure functional components unless props change.

\`\`\`js
const MyComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
});
\`\`\`

---

## 2. Use Memoization Strategically

**\`useMemo\`** and **\`useCallback\`** help in memoizing expensive computations and function definitions.

\`\`\`js
const processedData = useMemo(() => computeHeavy(data), [data]);
const handleClick = useCallback(() => doSomething(), []);
\`\`\`

Use them only when:
- The computation is expensive
- Referential equality is necessary (e.g. for dependencies or child components)

---

## 3. Code Splitting

Instead of sending a monolithic bundle, **split your code** into chunks and load on demand.

\`\`\`js
const LazyComponent = React.lazy(() => import('./LazyComponent'));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
\`\`\`

Use tools like Webpack or Vite, and check Lighthouse for bundle analysis.

---

## 4. List Virtualization

Rendering hundreds of DOM nodes? Use **virtualization**.

\`\`\`js
import { FixedSizeList as List } from 'react-window';

<List height={400} itemCount={1000} itemSize={35} width={300}>
  {({ index, style }) => <div style={style}>Row {index}</div>}
</List>
\`\`\`

- Use \`react-window\` for small apps
- Use \`react-virtualized\` for feature-rich needs (infinite scroll, autosizers, etc.)

---

## 5. Optimize State Management

Too much global state or unnecessary state updates slow apps down.

- Keep **local state local**
- Avoid lifting state unless necessary
- Use **selectors** in Redux/Zustand
- Normalize nested data

\`\`\`js
const user = useSelector((state) => state.user.name);
\`\`\`

Also, consider React Query or TanStack Query for server state.

---

## 6. Reduce Component Complexity

Split large components into smaller ones.

Benefits:
- Easier to maintain
- More reusable
- Better separation of concerns
- Reduced re-render scope

Use component composition, not props drilling.

---

## 7. Lazy Load Images and Assets

Use lazy loading for images:

\`\`\`html
<img loading="lazy" src="big-image.jpg" alt="..." />
\`\`\`

For better control, use libraries like \`react-lazyload\` or \`react-intersection-observer\`.

---

## 8. Avoid Anonymous Functions in JSX

Each render creates a new function reference:

❌ Bad:
\`\`\`js
<button onClick={() => doSomething()}>Click</button>
\`\`\`

✅ Good:
\`\`\`js
const handleClick = useCallback(() => doSomething(), []);
<button onClick={handleClick}>Click</button>
\`\`\`

---

## 9. Use Production Build

Make sure you're shipping the production version of React:

- Use \`npm run build\` (Create React App)
- Use \`next build\` (Next.js)

This removes dev warnings, extra logs, and enables optimizations.

---

## 10. Monitor and Analyze Performance

Use tools like:

- **React DevTools Profiler** – See which components re-render and why
- **Chrome Lighthouse** – Performance score, bundle size, unused JS/CSS
- **Why Did You Render** – Detects unnecessary re-renders
- **Web Vitals** – Measure FCP, LCP, TTI, CLS, etc.

---

## Conclusion

Performance in React isn't about one magic trick—it's a combination of best practices:

- Avoid unnecessary renders
- Use memoization wisely
- Split code and virtualize large lists
- Manage state with precision
- Monitor and test continuously

With these strategies, your React apps will be smoother, faster, and scalable.

> 🚀 Want more tips? Consider exploring concurrent rendering, server components (React 19), or Suspense boundaries for even better performance in modern React apps.
`,
  },

  {
    slug: "building-modern-web-apps-with-next-js",
    title: "Building Modern Web Applications with Next.js",
    excerpt:
      "Learn how to leverage Next.js to create fast, SEO-friendly web applications with a great developer experience.",
    date: "2023-05-15",
    coverImage:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JZGqFjom_RE0PMz1wxYncg.png?height=600&width=800",
    readingTime: 8,
    categories: ["Next.js", "React", "Web Development"],
    content: `
# Building Modern Web Applications with Next.js

Next.js has revolutionized the way developers build React applications. With its built-in features like server-side rendering, static site generation, and API routes, it provides a comprehensive solution for modern web development.

## File-based Routing
One of the key advantages of Next.js is its file-based routing system. Instead of configuring routes manually, you simply create files in the \`pages\` directory, and Next.js automatically creates routes based on the file structure. This makes it incredibly intuitive to organize your application.

\`\`\`js
// pages/about.js
export default function About() {
  return <div>About Page</div>;
}
\`\`\`

## Flexible Rendering
Another powerful feature is the ability to choose your rendering method on a per-page basis. You can use static generation for marketing pages, server-side rendering for dynamic content, and client-side rendering when appropriate. This flexibility allows you to optimize for both performance and user experience.

## Developer Experience
Next.js also provides excellent developer experience with features like Fast Refresh, which gives you instant feedback as you edit your code. The built-in CSS and Sass support, along with support for CSS-in-JS libraries, makes styling your application a breeze.

---

In conclusion, Next.js is an excellent choice for building modern web applications. Its comprehensive feature set, excellent performance, and developer experience make it a top choice for React developers.
`,
  },
  {
    slug: "mastering-mongodb-for-mern-stack",
    title: "Mastering MongoDB for MERN Stack Development",
    excerpt:
      "Dive deep into MongoDB and learn how to effectively use it in your MERN stack applications.",
    date: "2023-04-22",
    coverImage:
      "https://www.threatdown.com/wp-content/uploads/2024/04/MongoDB_data_breach.png?resize=1536,863?height=600&width=800",
    readingTime: 10,
    categories: ["MongoDB", "MERN Stack", "Database"],
    content: `
# Mastering MongoDB for MERN Stack Development

MongoDB is a popular NoSQL database that works exceptionally well with Node.js and Express, making it a perfect fit for MERN stack applications. Its document-oriented structure aligns naturally with JavaScript objects, allowing for a seamless development experience.

## Flexibility
One of the key advantages of MongoDB is its flexibility. Unlike traditional relational databases, MongoDB doesn't require a predefined schema. This means you can store documents with different structures in the same collection, which is particularly useful during the early stages of development when your data model might evolve rapidly.

## Scaling
MongoDB also excels at scaling. Its horizontal scaling capabilities through sharding allow you to distribute data across multiple machines as your application grows. This makes it suitable for applications that need to handle large amounts of data or traffic.

## Using Mongoose
When working with MongoDB in a MERN stack application, Mongoose is an invaluable tool. It provides a straightforward, schema-based solution to model your application data and includes built-in type casting, validation, query building, and business logic hooks.

\`\`\`js
// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export default mongoose.model("User", userSchema);
\`\`\`

---

In conclusion, mastering MongoDB is essential for effective MERN stack development. Its flexibility, scalability, and natural fit with JavaScript make it an excellent choice for modern web applications.
`,
  },
  {
    slug: "responsive-design-principles-for-modern-web",
    title: "Responsive Design Principles for Modern Web",
    excerpt:
      "Explore key principles and techniques for creating responsive websites that work well on all devices.",
    date: "2023-03-10",
    coverImage:
      "https://www.threatdown.com/wp-content/uploads/2024/04/MongoDB_data_breach.png?resize=1536,863?height=600&width=800",
    readingTime: 7,
    categories: ["CSS", "UI/UX", "Web Development"],
    content: `
# Responsive Design Principles for Modern Web

Responsive web design is no longer optional—it's a necessity. With users accessing websites from a variety of devices with different screen sizes, creating a consistent and optimal experience across all devices is crucial for success.

## Fluid Grids
The foundation of responsive design is the use of fluid grids. Instead of fixed-width layouts, responsive designs use relative units like percentages to create layouts that adapt to the screen size. This ensures that your layout scales proportionally regardless of the device.

## Flexible Images
Flexible images are another key component. By setting \`max-width: 100%\`, images scale down if their container becomes smaller than the image's original size, but never scale up beyond their original size. This prevents pixelation while ensuring images don't overflow their containers.

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

## Media Queries
Media queries allow you to apply different styles based on device characteristics, most commonly the viewport width. This enables you to create breakpoints where your layout changes to better accommodate different screen sizes.

\`\`\`css
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
\`\`\`

## Modern CSS Features
Modern CSS features like Flexbox and Grid have made responsive design much more manageable. These layout systems provide powerful tools for creating complex, responsive layouts with clean, maintainable code.

---

In conclusion, mastering responsive design principles is essential for creating modern websites. By implementing fluid grids, flexible images, and appropriate media queries, you can ensure your website provides an optimal experience for all users, regardless of their device.
`,
  },
];
