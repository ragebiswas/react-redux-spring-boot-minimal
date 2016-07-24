/**
 * Just like our store, we configure a 'Root' component that is
 * required based on the env variable. This component is typically one
 * surrounded by a <Provider>.
 */

let loadedModule = require('./Root.prod.js');


export const Root = loadedModule;
 