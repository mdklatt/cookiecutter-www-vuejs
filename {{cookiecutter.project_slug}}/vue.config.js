module.exports = {
    outputDir: "dist/",
    pages: {
      index: {
        entry: "src/script/main.ts",
        template: "src/html/index.html",
      }
    },
    productionSourceMap: true,
    runtimeCompiler: true,
  }
  