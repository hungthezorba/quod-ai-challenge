## Installation and Setup Instructions
You will need node and npm that are globally installed on your computer.

Installation:
### `npm install`

Stat server:
### `npm start`

Visit the app: \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Deployed App
The application is currently hosted at: \
[https://hungthezorba.github.io/quod-ai-challenge/](https://hungthezorba.github.io/quod-ai-challenge/)


## Technical decisions

### Styling implementation
For styling, I used Chakra UI library the most. In addition, when apply my custom style to override the components's styles, I use CSS modules and in-line styles.

Pros:
- For Chakra UI, it is easy to use and implementation with built-in component and style overriding directly through props.
- For CSS modules, it will apply styles for only component import the module. This will help to manage style for each component separate.
- For in-line styles, it is convenient to use by applying directly on the component.

Cons:
- For Charkra UI, this is a new library and only come to V1.0 recently. Therefore, there are still missing some features, components that are common in other libraries.
- For CSS modules, in big project, we will have to create a lot of file for each component. It required a good structure of source code for easy management and look up.
- For in-line styles, it could make the code files look messy if we tent to apply it directly on every components. Also it not have reusablity at all.

### State management
I implemented redux for state-management. With redux, it help to manage state in global ways. Any component want to access the state, can go to the store and take it out easily. Traditionally, with bare-react, to share state, or to access a state inside a stateless component, we have to passing through props. Eventually, if we have complex nesting components, passing props could be repetitive, and for some components, it not even need to use that state. By using redux, we can eliminate that part.

Pros:
- Easy to access application state globally.
- Debug with redux is fairly easy with tools like Redux Devtools.
- Data is consistent in application.
Cons:
- Lots of boilerplate code if the project is small because it will create a lots of unacessary files to manage just a few states.

### React hooks
I did use react hook like useEffect and other hooks like useSelector, useDispatch to replace mapStateToProps and mapDispatchToProps for the code simplicity. In addition, most of my components are stateless so I leverage the hooks for my sake.

### Improvement
- UI: It could make the recent highlighted issues box to be more separate from the issue list since currently they look quite similar.
- Rendering: I'm trying to figure out why notification bell makes others component re-rendering.

### Preventing wasted renders
By separating the components, and each component will only use the state that it need for render. So when the state change, only component that use the state will have to render again.

### Handling side-effects
I using redux-thunk to handling side-effects as it is the most recommended library to handle async actions like data fetching.\
Pros:
- Easy to implementation.
Cons: 
- I don't know what is cons or there is some cons but I don't realize.



