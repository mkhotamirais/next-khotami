import React from "react";

export default function Home() {
  return (
    <div>
      <p>
        nextjs is a react fw for building web app. <br />
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
      </p>
    </div>
  );
}
