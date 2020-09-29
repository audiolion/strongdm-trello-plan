import React from "react";

function App() {
  return (
    <div className="antialiased text-gray-900">
      <div className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <main className="prose lg:prose-xl">
          <article>
            <h1>UFO Abduction Emergency Response Plan</h1>
            <p className="text-gray-700">Sept. 28th, 2020</p>
            <p>
              After the frontend team and their code was abducted, we have taken
              the necessary steps and reached out to Fox Mulder at the FBI.
              Pending his and Scully's investigation, Justin has asked for a
              plan to recreate our frontend ASAP. In this document we outline
              how we will hire a new team and do a greenfield rebuild of the
              frontend web application.
            </p>
            <h2>Hiring</h2>
            <p>
              To quickly ramp up our hiring for a new frontend team, we will
              advertise with online job boards and reach out to our networks.
              Daily, we will allocate a 30-60 minute block to go through resumes
              and schedule 15 minute phone screens. This should allow our
              current team to not lose time for deep work and focus.
            </p>
            <p>
              Candidates who pass the phone screen will be brought in for a day
              to pair with us. This is the hiring strategy ThoughtBot uses
              because it shows us what it would be like working with the
              candidate in the role we are hiring for. Additionally, because
              pairing is such a large part of our development process it will be
              advantageous to vet candidates fully in this area. We will make a
              decision afterwards about whether or not we want to extend an
              offer.
            </p>
            <p>
              We recognize this process is not without its problems, but it
              pragmatically balances our need to hire and ramp quickly, and get
              the most signal we can from potential candidates. One concern is
              that candidates might be turned off by an unpaid day of work, we
              might want to consider a form of compensation.
            </p>
            <h2>Greenfield Rebuild</h2>
            <p>
              We have an opportunity to rebuild our frontend to provide the same
              user experience, but have a stronger foundation with less
              technical debt. We will be empowered to quickly iterate on
              customer feedback and add features to our product to continue
              delivering the experience our customers expect.
            </p>
            <p>
              The rebuild will be a single page application (SPA) built in{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              . We are choosing React because it is battle-tested and has a
              large pool of candidates familiar with it. While up-and-coming
              frameworks like{" "}
              <a
                href="https://vuejs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vue
              </a>{" "}
              and{" "}
              <a
                href="https://svelte.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Svelte
              </a>{" "}
              are great, they will ultimately be too slow to hire for deep
              expertise in and add risk to our rebuild.
            </p>
            <p>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TypeScript
              </a>{" "}
              will be the language of choice because it provides stability to
              refactors and eliminates classes of runtime errors that could hurt
              user confidence in our product. TypeScript has a strong presence
              and love in the developer community as well and should not
              increase difficulty in hiring.
            </p>
            <p>
              Testing will be embedded in our development process from day one.
              The use of UI-driven tests that render slices of our components
              allows us to ensure the user experience matches our expectations,
              while freeing our engineers to refactor component boundaries as
              needed.
            </p>
            <p>
              Though we lost the last one to aliens, we will still be using{" "}
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git
              </a>{" "}
              for code version control. We will use the Git flow methodology
              where a feature branch is created from the main branch and a merge
              request is issued. Another developer from the team who did not
              work on the code will review it, and our CI/CD tools will run
              static analysis, formatting, linting, and tests to ensure codebase
              quality and consistency is maintained.
            </p>
            <p>
              State management will be done using React's built-in useState and
              useContext hooks.{" "}
              <a
                href="https://recoiljs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recoil.js
              </a>{" "}
              provides an optimized state management solution for our cards and
              columns, but we can also get quite far with proper memoization.
              Care will need to be taken so that moving a card does not trigger
              an entire column re-render, as some customers can have many cards
              in a column, this could be a huge performance hit. We also want to
              take advantage of virtualization so that we only render what is
              currently on the screen plus a buffer of a page or so of content,
              rendering and removing items as the user scrolls. This greatly
              reduces the number of DOM elements on the page which boosts
              performance.
            </p>
            <p>
              Drag-and-drop functionality will be provided through the wonderful{" "}
              <a
                href="https://github.com/atlassian/react-beautiful-dnd"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-beautiful-dnd
              </a>{" "}
              package that Atlassian has open sourced. There are numerous
              examples that provide the entire suite of Trello functionality and
              the library also handles proper accessibility.
            </p>
            <p>
              Realtime updates will be provided through a WebSocket connection
              to our API server. The frontend team will need to work closely
              with the backend team to ensure we gracefully handle WebSocket
              reauthentication, loss of connection resulting in missed updates,
              and race conditions from multiple users editing the same data.
            </p>
            <h2>Unanswered Questions</h2>
            <p>
              We are missing some information that is preventing us from making
              informed decisions about a couple of technical aspects.
            </p>
            <p>
              The first is getting details about the API layer. Are we utilizing
              REST, or GraphQL? This choice impacts the state management
              decisions we make.
            </p>
            <p>
              The second is about the need for server-side rendering. Though our
              app heavily relies on JavaScript, should it still function without
              it to at least hydrate information? If so we would want to
              consider a library like{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
              .
            </p>
            <p>
              We also are missing information about our build and deployment
              process, do we have QA testers to vet releases? If not we might
              want to consider creating end-to-end smoke tests with{" "}
              <a
                href="https://www.cypress.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cypress
              </a>{" "}
              to automate the critical paths through our application and ensure
              that every release maintains our high standards that our customers
              expect from us.
            </p>
            <p>
              Finally, what do we do if Fox and Scully find out what happened to
              our abducted team? Will we believe them? The truth is out there.
            </p>
          </article>
        </main>
      </div>
    </div>
  );
}

export default App;
