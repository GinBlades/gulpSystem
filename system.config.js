(function(global) {
    // map
    // packages
    System.config({
        defaultJSExtensions: true,
        transpiler: "typescript",
        map: {
            "jquery": "node_modules/jquery/dist/jquery.js",
            "text": "node_modules/systemjs-plugin-text/text.js",
            "typescript": "node_modules/typescript/lib/typescript.js"
        }
     });
})(this);