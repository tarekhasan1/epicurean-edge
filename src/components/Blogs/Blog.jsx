import jsPDF from "jspdf";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  // Define a function to generate a PDF for the entire website
  const generatePDF = async () => {
    const divSelectors = [
      "#div1",
      "#div2",
      "#div3",
      "#div4",
      "#div5",
      "#div6",
      "#div7",
      "#div8",
    ];

    // Define an array to store the text content
    const textArray = [];
    const headerText = document.getElementById("heading-1").innerHTML;

    // Loop through each div element and extract its text content
    for (const selector of divSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        textArray.push(element.innerText);
      }
    }

    // Join the text content into a single string with page breaks
    const text = textArray.join("\n\n");

    // Create a new PDF document using jspdf
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.setFontSize(8);
    pdf.text("Copyrights by Tarek Hasan Hridoy (Blogs - Epicurean Edge)", 15, 10);

    pdf.setFontSize(26);
    pdf.text(headerText, 15, 20, { maxWidth: 180, align: "left" });

    // Add the text content to the PDF
    pdf.setFontSize(12);
    pdf.text(text, 15, 40, { maxWidth: 180, align: "left" });

    // Save the PDF document
    pdf.save("website.pdf");
  };

  const handleDownload = () => {
    generatePDF();
  };

  return (
    <div className="blog-page-background">
      <div>
        <header className="text-center mt-3">
          <h1 id="heading-1">Questions n Answers</h1>
        </header>
        <Container>
          <div className="text-center">
            <Button
              onClick={handleDownload}
              variant="outline-danger"
              size="lg"
              className="mt-3 mb-3"
            >
              Download PDF
            </Button>
          </div>
          <div>
            <Card className="mt-3 mb-4 bg-success">
              <Card.Body>
                <Card.Title id="div1">
                  1. Tell us the differences between uncontrolled and controlled
                  components?
                </Card.Title>
                <Card.Text id="div2">
                  A controlled component is a UI element whose value is
                  controlled by the parent component or by the state of the
                  application. In other words, the data flow of a controlled
                  component is managed by the React component, and the component
                  doesn't have its own state. It receives its value and any
                  changes to that value as props from its parent component, and
                  it notifies the parent component when the value changes.
                  Examples of controlled components include checkboxes, radio
                  buttons, and input fields. Uncontrolled Components: An
                  uncontrolled component is a UI element whose value is managed
                  by the DOM (Document Object Model) rather than the React
                  component. The value of the component is not controlled by
                  React, and it can be accessed using DOM methods such as
                  getElementById or querySelector. Unlike controlled components,
                  uncontrolled components have their own internal state, and any
                  updates to the component value are managed by the DOM.
                  Examples of uncontrolled components include traditional HTML
                  input fields, text areas, and select boxes. In summary, the
                  key difference between controlled and uncontrolled components
                  is how the value of the component is managed. Controlled
                  components have their values managed by the parent component
                  or the state of the application, while uncontrolled components
                  have their values managed by the DOM.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3 mb-4 bg-success">
              <Card.Body>
                <Card.Title id="div3">
                  2. How to validate React props using PropTypes?
                </Card.Title>
                <Card.Text id="div4">
                  React provides a built-in library called PropTypes for
                  validating the props of a React component. PropTypes allow
                  developers to specify the expected data types and shapes of
                  props that a component should receive, and they can help to
                  catch bugs early on in the development process.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3 mb-4 bg-success">
              <Card.Body>
                <Card.Title id="div5">
                  3. Tell us the difference between nodejs and express js?
                </Card.Title>
                <Card.Text id="div6">
                  Node.js and Express.js are both popular web development
                  technologies, but they serve different purposes. Node.js is an
                  open-source, cross-platform runtime environment for executing
                  JavaScript code outside of a browser. It allows developers to
                  build scalable, high-performance network applications using
                  JavaScript on the server-side. Node.js provides a range of
                  built-in modules that enable developers to handle low-level
                  network operations such as file system access, network
                  sockets, and HTTP/HTTPS requests. Express.js, on the other
                  hand, is a popular web application framework built on top of
                  Node.js. It provides a set of features and tools that make it
                  easy to create web applications and APIs. Express.js includes
                  features such as middleware for handling requests and
                  responses, routing, template engines, and error handling.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3 mb-4 bg-success">
              <Card.Body>
                <Card.Title id="div7">
                  4. What is a custom hook, and why will you create a custom
                  hook?
                </Card.Title>
                <Card.Text id="div8">
                  In React, a custom hook is a reusable function that
                  encapsulates common logic and stateful behavior that can be
                  shared between components. Custom hooks allow developers to
                  extract functionality into a standalone function, making it
                  easier to reuse and test code. Custom hooks follow a naming
                  convention that begins with the word use, which tells React
                  that the function is a hook and that it should be called using
                  the use prefix. Custom hooks can also use other built-in hooks
                  such as useState, useEffect, and useContext, as well as other
                  custom hooks.
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
