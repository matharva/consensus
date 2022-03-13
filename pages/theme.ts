// importing the required chakra libraries
import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// declare a variable for fonts and set our fonts. I am using Inter with various backups but you can use `Times New Roman`. Note we can set different fonts for the body and heading.
const overrides = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "Inter",
      },
      html: {
        fontFamily: "Inter",
      },
    }),
  },
});

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

// declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra
const customTheme = extendTheme(overrides);

// export our theme
export default customTheme;
