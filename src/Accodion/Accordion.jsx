import React, { useState } from "react";
import "./accordion.css";
function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="m-2">
      <div className="flex flex-col">
        <button
          className="flex items-center justify-between w-full px-2 bg-blue-200 cursor-pointer text-md font-semibold"
          type="button"
          onClick={() => setOpen(!open)}
        >
          HTML{" "}
          <span
            aria-hidden={true}
            className={`${!open ? "accordion-icon-revert" : ""}`}
          />
        </button>
        <div>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div>
        <button
          className="flex items-center justify-between w-full px-2 bg-blue-200 cursor-pointer text-md font-semibold"
          type="button"
          onClick={() => setOpen(true)}
        >
          CSS{" "}
          <span
            aria-hidden={true}
            className={`${!open ? "accordion-icon" : "accordion-icon-revert"}`}
          />
        </button>
        <div>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div>
        <button
          className="flex items-center justify-between w-full px-2 bg-blue-200 cursor-pointer text-md font-semibold"
          type="button"
          onClick={() => setOpen(true)}
        >
          JavaScript{" "}
          <span
            aria-hidden={true}
            className={`${!open ? "accordion-icon" : "accordion-icon-revert"}`}
          />
        </button>
        <div>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}

export default Accordion;
