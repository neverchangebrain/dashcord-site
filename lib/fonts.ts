import localFont from "next/font/local";

const jost = localFont({
  src: "../app/fonts/JOST.ttf",
  variable: "--font-jost",
});
const overpass = localFont({
  src: "../app/fonts/OVERPASS.ttf",
  variable: "--font-overpass",
});
const redhat = localFont({
  src: "../app/fonts/REDHATDISPLAY.ttf",
  variable: "--font-redhat",
});

export const fontVars = `${jost.variable} ${overpass.variable} ${redhat.variable}`;
