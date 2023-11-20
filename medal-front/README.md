# Awards of the tube

this is a prototype using react-create app

## Scope

This webapp has been developed and tested on chrome desktop, it should be viewed at 1440x790px resolution for an optimal experience

## Getting started / running the code

-   install npm: `npm i`
-   launch the dev server `npm start`

## Libraries and Frameworks

-   React js for building the UI
-   Typescript
-   Framer Motion for animation
-   Styled components for CSS
-   Three js for Webgl
    -   React Fiber for concistency between react and Three
    -   React-three-drei for useful Webgl helpers

## Understanding the code

### Architecture

code in the `src` folder is organised by function:

-   components -> renderable elements
-   constants
-   content -> since this is a prototype, we store the content as a ts file
-   hooks -> react hooks containing complex logic used in the app

### Components structure

the code of each components is subdivided into different files for clarity:

-   `Component.tsx` -> core component code
-   `Component.styles.ts` -> styled-compoents code
-   `Component.animations.ts` -> framer animation objects
-   `Component.types.ts` -> typescipt objects
