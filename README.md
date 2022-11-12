# Where in the world?

A web application that uses the REST countries API. The goal of the app was to utilize the new Next.js 13 features like server components and the new routing mechanism.

## Table of contents

- [Overview](#overview)
- [Screenshot](#screenshot)

- [Links](#links)

- [My process](#my-process)

- [Built with](#built-with)

- [What I learned](#what-i-learned)

## Overview

### Screenshot

![Country List](/screenshots/country_grid.png)

![Country Detail](/screenshots/country_detail.png)

### Links

- Live Site URL: [https://rest-countries-hgak-ibarra11.vercel.app/](https://rest-countries-hgak-ibarra11.vercel.app/)

## My process

### Built with

- React
- Next.js

- TypeScript

- Tailwind

- SWR

### What I learned

### Server Components

My first thought when I was building this app was that I was going to mostly use server components. However, I soon realized that if the component needs to be interactive, then it can't be used as a server component. For example, on the / page a grid of all the countries is displayed. I wanted to use a server component for this grid of countries, but I had to have a way of filtering this grid based either on search input or select input. And, the grid also had pagination in the form of a load more button. As a result, I made the grid a client component, which now I can have state and interactive features.

I was able to use server components on the individual countries detail page. With the new Next.js api folder the getStaticPaths and getStaticParams API's are removed. Instead they provide a different API called generateStaticParams, which basically provides the list of pages that Next.js will statically generate. On the page itself, I use fetch to make an api call with the params passed from generateStaticParams directly in the component. From my understanding, the component is completely rendered on the server and on the client there is no hydration.

### Dark Mode

I was able to implement dark mode, but there was a flash of the wrong colors depending on the users preference or what they had chosen on the app. For instance, if the users has a dark preference on their operating system the app what show the light mode first then the dark mode. The issue was that the page is server rendered, so you don't have the ability to see what the user prefers or check local storage. The way that I trigger dark mode is by adding a class of dark to the root HTML element. When the page is first rendered the root HTML element does not have a class of dark , which results in the light mode being applied, and then I check the users preference in useEffect and if it is dark I add a class of dark to the root HTML element. This way of adding dark mode is not the best user experience because they see a flash of content changing.

Upon looking through the internet for possible solutions to this issue I found an article by Josh Comeau called [The Quest for the Perfect Dark Mode](https://www.joshwcomeau.com/react/dark-mode/). In his article, he was able to solve this issue by adding a script before the app renders. The script is blocking meaning that the app wont render until the script is done executing and the script executes at runtime. Within the script, we can access local storage and users operating system preference because it running at runtime and can set the app in the correct state before it first renders. In his solution, he uses CSS variables, but for mine I just had to add a class of dark to the root HTML element.
