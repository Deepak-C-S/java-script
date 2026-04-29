//* event-capturing.js

// The capturing phase is the first phase of event propagation in DOM.
// Event capturing mmeans the event is triggered on the parent element first and then moves down to the target element.

//to perform events capturing for the add event listener along with the event type and the callback function we have to pass a third argument.

//!      SYNTAX
// element.addEventListener(event, Function, True);
// element.addEventListener(event, Function,{capture:true});
// event capturing direction is from parent to child element
