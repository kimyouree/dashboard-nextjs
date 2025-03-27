## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


/ ---------------------------------------------------------------------------- /

Notes:

`/app`: contais all the routes, components, and logic for your app; this is where
    you'll be mostly working from.

`/app/lib`: contains functions used in your app, such as reusable utility functions and data fetching
    functions.

`/app/ui`: contains all the UI components for your app, such as cards, tables,
    and forms. To save time, we've pre-styled these components for you.

`/public`: contains all the static assets for your application, such as images.

`config files`: like, `next.config.ts` at the project root. Most of these files
    are created and pre-configured when you start a new project using `create-next-app`.
    You will not need to modify them in this course.

🤗 don't worry if you don't understand everything the code is doing yet.


Styling choice:
- [later]: `theme-ui.com`: an example of a CSS-in-JS tool

`/app/ui/global.css`: you can import this in any component in your app, but it's better to
    add it to your top-level component, `layout.tsx` (in Next.js).


#### Chapter 3. optimizing fonts and images
```
<Image
    src="/hero-desktop.png"
    width={1000}
    height={760}
    className="hidden md:block"
    alt="Screenshots of the dashboard project showing desktop version"
/>
```

- It's good practice to set the width and height of your images to avoid **layout shift**.
- these should be an aspect ratio identical to the source image; not the size of the image,
    but the size of the *image file* used to understand the aspect ratio.


#### Chapter 4. creating layouts & pages

The `<Layout />` component receives a `children` prop. This child can either be page or
another layout. In your case, the `pages` inside `/dashboard` will automatically be
nested inside a `<Layout />` (the closest `layout.tsx` file in the nearest folder).
The new `/dashboard/layout.tsx` file is unique to the dashboard pages.

eg. Going to `/dashboard` in browser address bar, will show you the `layout.tsx` file in
    `/dashboard`; the `layout.tsx` in the outermost `/app` folder contains the **required**
    `RootLayout` component and it's is just outputting an `<html> and <body>` tag for the
    rest of the pages to be slotted in as the user moves around the app. This layout is
    shared across all pages in your app.

`RootLayout`:
✚ use this to modify your `html` and `body` tags and add `metadata`, generally.


🏆 **Benefits of using layouts**

**partial rendering**:
only the page components update while the layout won't re-render.
This preserves client-side React state in the layout when transitioning between pages.
This is true for sibling routes in a common segment, like `/dashboard/settings | analytics`
as well as routes on the same dynamic segment, like `/blog/[slug]/page`:
    from `/blog/first` to `blog/second`
Settings will be unmounted and the analytics pages will be mounted with fresh state,
but the shared `/dashboard/layout.tsx` will be preserved.

***without partial rendering (like React/SPA behaviour)***
each navigation would cause the full webpage to re-render on the client.
Rendering *only* the segment that changes reduces the amount of data transferred
and execution time for **performance gains**💪💪💪


#### Chapter 5. navigating between pages
I feels like a spa, but it works differently to spa.
Next.js  automatically "code-splits" your application by route segments. Whereas,
traditional react spas have the browser load all your application code on the
initial page load.

Splitting routes: means that pages become isolated. if a certain page thows an
error, the rest of the app will still work. This is also less code to parse, which
makes the app faster for the browser.

Whenever you use `<Link>` in the viewport, Next.js automatically ***prefetches*** the
code for the linked route in the background. By the time the user clicks the link, the
code for the destination page will already be loaded in the background, making the
transition near-instant.

[navigation docs](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works)
