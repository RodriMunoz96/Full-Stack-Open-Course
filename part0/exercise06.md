sequenceDiagram

participant browser
participant server

    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server->>-browser: {content: "another data", date: "2024-05-08T00:22:52.667Z"}

    Note right of browser: the browser renders "another data" without reloading the page
