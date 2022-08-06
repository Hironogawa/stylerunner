const { src, dest, watch } = require("gulp");
const compileSass = require("gulp-sass")(require("sass"));
const minify = require("gulp-clean-css");
// const sourceMaps = require("gulp-sourcemaps");
// const concat = require("gulp-concat");

compileSass.compiler = require("sass");

const bundle = () => {
  return (
    src("./styles/scss/**/*.scss")
      //.pipe(sourceMaps.init())
      .pipe(compileSass().on("error", compileSass.logError))
      .pipe(minify())
      //.pipe(sourceMaps.write())
      //.pipe(concat("global.css"))
      .pipe(dest("./package/dist/css/"))
  );
};

const dev = () => {
  watch("./styles/scss/**/*.scss", bundle);
};

exports.bundle = bundle;
exports.dev = dev;
