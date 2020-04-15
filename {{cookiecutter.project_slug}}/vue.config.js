module.exports = {
    outputDir: "dist/",
    pages: {
      index: {
        entry: "src/main.ts",
        template: "src/html/index.html",
      }
    },
    productionSourceMap: true,
    runtimeCompiler: true,
  }
  