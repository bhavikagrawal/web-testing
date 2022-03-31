// NOTE: use "jsdom" as testEnvironment in jest.config.ts or
// /**
//  * @jest-environment jsdom
//  */

import ReactDOM from "react-dom";
import App from "./App";
import { act } from "react-dom/test-utils";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

import { unmountComponentAtNode } from "react-dom";
// Setup/Teardown
describe("Setup/Teardown for every test case", () => {
  let container: HTMLElement | null = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container as HTMLElement);
    (container as HTMLElement).remove();
    container = null;
  });

  // ---------------- NOTE: LEAKY TESTING - TEAR DOWN ISOLATION----------------
  it.skip("renders without crashing", () => {
    ReactDOM.render(<App />, container);
    expect((container as HTMLElement).textContent).not.toContain("Hello");
  });

  // create Side Effect in case case afterEach block is commented.
  it.skip("renders without crashing again", () => {
    ReactDOM.render(<App />, container);
    console.log(document.body.innerHTML);
    expect((container as HTMLElement).textContent).not.toContain("Hello");
  });
  // ---------------- NOTE: LEAKY TESTING END----------------

  // ---------------- NOTE: LEAKY TESTING - MUTABILITY ----------------
  let name: string = "John";
  const user = { name };
  it.skip("renders with john", () => {
    ReactDOM.render(<App user={user} />, container);
    expect(user.name).toBe("John"); // { name: 'Hello, John' }
    // expect((container as HTMLElement).textContent).toContain("Hello, John");
  });

  // Side effect as user object is mutable.
  it.skip("renders without John again", () => {
    ReactDOM.render(<App user={user} />, container);
    expect(user.name).toBe("John"); // { name: 'Hello, Hello, John' }
  });
  // SOLUTION: Always use IMMUTABLE object wherever possible.
  // Use user = {Object.assign({}, user)} or Object.create()
  // and not user = {{...user}} as still has reference.
  // OR
  // create local variable
  // OR
  // Avoid mutating object in component

  // ---------------- NOTE: LEAKY TESTING END----------------

  // Note: You can combine both(with and without user object) test case sceanrios into one test case
});
