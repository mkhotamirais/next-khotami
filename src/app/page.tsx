import React from "react";

export default function Home() {
  return (
    <div>
      <p>
        FROM CODEVOLUTION <br /> nextjs is a react fw for building web app. <br />
        react is not feasible to create fully-featured app ready for production. <br />
        react is library for building user interfaces. <br />
        react: you need to make decision about other features such as routing, data fetching and more. <br />
        <b>Nextjs</b> uses react for building user interfaces. <br />
        provides additional features that enable you to build production-ready app. <br />
        there features include routing, optimized rendering, data fetching, bundling, compiling adn more. <br />
        dont need to install additional packages as nextjs proides everything you need. <br />
        opinions and conventions should be followed to implement these features. <br />
        <b>Nexjs</b> is a react fremework for building web applicatons. <br />
        why learn nextjs <br />
        nextjs simplifies the process of building a web app for production: 1. routing; 2. api routes; 3. rendering; 4. data
        fetching; 5. styling; 6. optimization; 7. dev and prod build system; <br />
        <b>Prerequisite</b> html, css, js, es6 features, react fundamentals,
      </p>
      <p>
        <b>React Server Components (RSC)</b>: is a new architecture introduced by the react team in version 18 which was
        quickly embraced by nextjs. <br />
        the architecture introduced a new way of creating react components, splitting the into two types: Server Components
        and Client Components <br />
        <b>Server Components</b> in nextjs, all components are server components by default. <br />
        the have the ability to run task like reading files or fetching data from a database. <br />
        however, they dont have the ability to use hooks or handle user interactions. <br />
        <b>Client Components</b>: to create client components, its necessary to add `use client` at the top of the component
        file. <br />
        client components cant perform task like rendering files, but the have the ability to use hooks and manave
        interactions.
      </p>
      <p>
        <b>Routing</b>: nextjs has a file-system based ruting mechanism. URL paths that users can access in the browser are
        defined by files and folders in your database. <br />
        routing conventions: All routes must be placed inside the app folder <br />
        every file that corresponds to a route must be named page.js or page.ts <br />
        ever folder corresponds to a path segment in the browser url. <br />
        <b>private folders</b>: indicates that it is a private implementation detail and should not be considered by the
        routing system <br />
        the folder and all its sub folders are excluded from routing. <br />
        prefix the folder name with an underscore <br />
        <b>countd</b>: for separating ui logic from routing; for consistently organizing internal files across a project; for
        sortig and grouping file in code editor; for avoiding potential naming conflicts with future nextjs conventions; if
        you want to include an underscore in URL segments, you can prefix the folder name with %5F, which is th url-encoded
        form of an underscore.
        <b>route groups</b>: allows us to logically group our routes and projects files without affecting the url path
        structure. implementation: register, login, forgot password.
        <b>layout</b>: you can define a layout by default exporting a react component from a layout.js. that component should
        accept a children prop that will be populated with a child.
        <b>route group layout</b>: to organize your project in a manner that doesnt affect the url
      </p>
      <p>
        <b>routig metadata</b>: ensuring proper search engine optimization (SEO) is crucial for increasing visibility and
        attractig users. <br />
        nextjs introduced meth metadata api which allows you to define metadata for each page; metadata ensure accurate and
        relevant information is displayed when your page are shared or indexed. <br />
        configuring metadata: export a static metadata object; export a dynamic generateMetadata function. <br />
        metadata rules: both layout.tsx and page.tsx files can export metadata. if defined in a layout it applies to all
        pages in that layout, but if defined in a page, it applies only to that page. <br />
        metadata is read in order from the root level down to the final page level. when there is metadata in multiple places
        for the same route, they get combined, but page metadata will replace layout metadata if they have the same
        properties. <br />
        <b>title metadata</b>: the title fields primary purpose is to define the document title. it can be either a string or
        an object.
      </p>
      <p>
        <b>Component Navigation</b>: to enable client-side navigation, nextjs provide us with the link component the link
        component is a react component that extends the html a element and its the primary way to navigat between routes in
        nextjs. to use it we nedd to import it from `next/link` <br />
        <b>replace</b>: properti ini tidambah ke Link agar history routernya dihapus dan previous buttonnya ke home.
        <b>templates</b>: are similar to layouts in that they wrap each child layout or page, but with templates, when a user
        navigates between routes that shared a template, a new instance of the component is mounted, DOM element are
        recreated, state is not preserved, and effect are re-synchronized. a template can be defined by exporting a default
        react component from a template.js or template.tsx file. similar to layouts, templates also should accept a children
        prop which will render the nested segments in the route. <br />
        <b>loading.tsx</b>: this file allows us to create loading states that are displayed to users while a specific route
        segments content is loading. the loading state appears immedietely upon navigation, giving users the assurance that
        the application is responsive and actively loading content. benefits: you can display the loading state as soon as a
        user navigates to a new route. the immediate feedback reassures users that their action has been acknowledged,
        reduces perceived loading times, and makes the application feel more responsive. next js allows the creation of
        shared layouts that remains interactive while new route segments are loading. users can continue interacting with
        certain parts of the application. such as a navigation menu or sidebar. even if the main content is still being
        fetched.
      </p>
    </div>
  );
}
