import resolveConfig from "tailwindcss/resolveConfig";
// @ts-expect-error - Tailwind config is not typed
import config from "../../tailwind.config.js";

const { theme } = resolveConfig(config);

export const colors = theme.colors;
