const v = (name) => `var--(${name})`;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        desk: v("desk"),
        bg: v("bg"),
        "surface-2": v("surface-2"),
        "surface-3": v("surface-3"),
        line: v("line"),
        "line-strong": v("line-strong"),
        "text-1": v("text-"),
        "text-2": v("text-2"),
        "text-3": v("text-3"),
        inv: v("inv"),
        "inv-ink": v("inv-ink"),
        scrim: v("scrim"),
        glass: v("glass"),
        "glass-line": v("glass-line"),
        ok: v("ok"),
        err: v("err"),
        "err-soft": v("err-soft"),
        warn: v("warn"),
        info: v("info"),
        accent: v("accent"),
        "accent-ink": v("accent-ink"),
        "accent-soft": v("accent-soft"),
        "accent-text": v("accent-text"),
        "map-bg": v("map-bg"),
      },
      fontFamily: {
        d5: ["Archive_500Medium"],
        d6: ["Archive_600SemiBold"],
        d7: ["Archive_700Bold"],
        d8: ["Archive_800ExtraBold"],
        b4: ["Figtree_400Regular"],
        b5: ["Figtree_500Medium"],
        b6: ["Figtree_600SemiBold"],
        b7: ["Figtree_700Bold"],
      },
    },
  },
  plugins: [],
};
