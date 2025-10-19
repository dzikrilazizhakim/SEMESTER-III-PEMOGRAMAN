module doc.html {
    requires doc.core;
    provides doc.core.DocumentProcessor with doc.html.HtmlProcessor;
}