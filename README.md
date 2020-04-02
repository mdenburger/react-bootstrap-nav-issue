# Reproduction path for react-bootstrap issue [#5089](https://github.com/react-bootstrap/react-bootstrap/issues/5089)

Install:
         
    yarn install
    
Run development server:
    
    yarn dev
    
The navbar shows "Foo" and "Bar". So far so good.

Build production code:

    yarn build
    
Open `dist/index.html` in a browser.

The navbar does not show "Foo" and "Bar" anymore!

Reason: the CSS classes of div rendered by the `Nav` component are not correct.
- Expected: class `navbar-nav`
- Actual: class `nav` 

Cause: the `Nav` component cannot find the `NavbarContext`. It seems that the 
`Nav.Collapse` component somehow sets the context to `null`, as demonstrated 
by the `console.log` statements.
