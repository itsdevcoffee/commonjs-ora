import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "index.js",
	output: {
		file: "build.js",
	},
	plugins: [commonjs(), babel({ babelHelpers: "bundled" })],
};
