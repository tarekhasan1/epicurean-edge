import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import { Button, Card, Container } from "react-bootstrap";

const Blog = () => {
  const divRef = useRef();

    const handleDownload = () => {
        const divElement = divRef.current;
        html2canvas(divElement).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("landscape", "pt", [792, 1224]);
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save("AnswersByTarekHasan.pdf");
        });
    };



  return (
    <div>
      <div>
        <header className="text-center mt-3">
          <h1>My Blog</h1>
        </header>
        <Container>
          <div className="text-center">
            <Button onClick={handleDownload} variant="outline-danger" size="lg" className="mt-3 mb-3">
              Download PDF
            </Button>
          </div>
         <div ref={divRef}>
         <Card className="mt-3 bg-success">
            <Card.Body>
              <Card.Title>
                1. Tell us the differences between uncontrolled and controlled
                components?
              </Card.Title>
              <Card.Text>
                A controlled component is a UI element whose value is controlled
                by the parent component or by the state of the application. In
                other words, the data flow of a controlled component is managed
                by the React component, and the component doesn't have its own
                state. It receives its value and any changes to that value as
                props from its parent component, and it notifies the parent
                component when the value changes. Examples of controlled
                components include checkboxes, radio buttons, and input fields.
                Uncontrolled Components: An uncontrolled component is a UI
                element whose value is managed by the DOM (Document Object
                Model) rather than the React component. The value of the
                component is not controlled by React, and it can be accessed
                using DOM methods such as getElementById or querySelector.
                Unlike controlled components, uncontrolled components have their
                own internal state, and any updates to the component value are
                managed by the DOM. Examples of uncontrolled components include
                traditional HTML input fields, text areas, and select boxes. In
                summary, the key difference between controlled and uncontrolled
                components is how the value of the component is managed.
                Controlled components have their values managed by the parent
                component or the state of the application, while uncontrolled
                components have their values managed by the DOM.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3 bg-success">
            <Card.Body>
              <Card.Title>
                2. How to validate React props using PropTypes?
              </Card.Title>
              <Card.Text>
                React provides a built-in library called PropTypes for
                validating the props of a React component. PropTypes allow
                developers to specify the expected data types and shapes of
                props that a component should receive, and they can help to
                catch bugs early on in the development process.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3 bg-success">
            <Card.Body>
              <Card.Title>
                3. Tell us the difference between nodejs and express js?
              </Card.Title>
              <Card.Text>
                Node.js and Express.js are both popular web development
                technologies, but they serve different purposes. Node.js is an
                open-source, cross-platform runtime environment for executing
                JavaScript code outside of a browser. It allows developers to
                build scalable, high-performance network applications using
                JavaScript on the server-side. Node.js provides a range of
                built-in modules that enable developers to handle low-level
                network operations such as file system access, network sockets,
                and HTTP/HTTPS requests. Express.js, on the other hand, is a
                popular web application framework built on top of Node.js. It
                provides a set of features and tools that make it easy to create
                web applications and APIs. Express.js includes features such as
                middleware for handling requests and responses, routing,
                template engines, and error handling.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3 bg-success">
            <Card.Body>
              <Card.Title>
                4. What is a custom hook, and why will you create a custom hook?
              </Card.Title>
              <Card.Text>
                In React, a custom hook is a reusable function that encapsulates
                common logic and stateful behavior that can be shared between
                components. Custom hooks allow developers to extract
                functionality into a standalone function, making it easier to
                reuse and test code. Custom hooks follow a naming convention
                that begins with the word use, which tells React that the
                function is a hook and that it should be called using the use
                prefix. Custom hooks can also use other built-in hooks such as
                useState, useEffect, and useContext, as well as other custom
                hooks.
              </Card.Text>
            </Card.Body>
          </Card>
         </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
