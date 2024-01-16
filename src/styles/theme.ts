import { buildLegacyTheme, defineConfig } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#000",
    "--my-gray": "#333",
    "--my-red": "#ff0000",
    "--my-green": "#00ff00",
    "--my-blue": "#0000ff",
    "--my-yellow": "#ffff00",
    "--my-orange": "#ff8000",
    "--my-purple": "#8000ff",
    "--my-pink": "#ff0080",
    "--my-cyan": "#00ffff",
    "--my-brown": "#800000",
    "--my-light-gray": "#ccc",
    "--my-dark-gray": "#666",
    "--my-light-red": "#ff8080",
    "--my-light-green": "#80ff80",
    "--my-light-blue": "#8080ff",
    "--my-light-yellow": "#ffff80",
    "--my-light-orange": "#ffc080",
    "--my-light-purple": "#c080ff",
    "--my-light-pink": "#ff80c0",
    "--my-light-cyan": "#80ffff",
    "--my-light-brown": "#ff8080",
    "--papafam-brand": "#F7AB0A",

}


export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  /* Brand */
  "--brand-primary": props["--papafam-brand"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--papafam-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--papafam-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--papafam-brand"],
});

