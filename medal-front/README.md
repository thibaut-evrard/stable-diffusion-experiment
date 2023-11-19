# Awards of the tube

this is a prototype using react-create app

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

### Overall Architecture

The src folder has the following architecture:

-   components
-   content
-   hooks
-   constants

components code is broken down in the following way:
`Component.tsx`
`Component.types.ts` - typescript types
`Component.animations.tsx` - animations
`Component.styles.ts` - styled compoents

### Content management

as this is a quick prototype, content is stored in `src/content/content.ts` it references the assets that can be found in `public/assets`
this is not scallable but allows us to access the content in any of our components
