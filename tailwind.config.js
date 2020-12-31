module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  theme: {
    fontFamily: {
      // sans: ["nunito", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      // mono: ['ui-monospace, SFMono-Regular'],
      // primary: ["Nunito", "sans-serif"]
    },
    extend: {
      colors: {
        "active-nav": "#f6e7ef",
        appBackground: "#FCFCFC",
        pinkBackground: "#FFF9FC",
        "dark-purple": "#362C59",
        "teal-1": "#7BE2D2",
        "gray-1": "#A0A4A8",
        "light-green-2": "#40DD7F",
        "light-purple": "#faf3f8",
        "gray-purple": "#EFE2EC",
        "menu-gray": "#A0A4A8",
        "gray-2": "#CCCCCC",
        "red-1": "#EC1E24",
        "yellow-1": "#FFB911",
        "yellow-2": "#966A00",
        "purple-gray": "#F5EDF1",
        "dark-cyan-blue": "#25282B",
        "dark-green-cyan": "#089237",
        "light-red-1": "#FFE3E3",
        "light-red-2": "#FF3838",
        "green-1": "#04D919",
        "magenta-1": "#BE52F2",
        "cyan-blue": "#0084F4",
        "light-red": "rgba(238, 41, 41, 0.12)",
        "gray-3": "rgba(54, 44, 89, 0.07)",
        "light-yellow": "rgba(255, 185, 17, 0.12)",
        "light-green": "rgba(4, 217, 25, 0.12)",
        "light-magenta": "rgba(190, 82, 242, 0.12)",
        "light-cyan-blue": "rgba(0, 132, 244, 0.12)",
        "light-blue": "rgba(0, 132, 244, 0.12)",
        "black-1": "#25282B",
        "pink-1": "#F4E1F0",
        "light-gray":"rgba(173, 173, 173, 0.12)",
        "black-2":"#616161",
        loginImagebackground: "#580B48",
        orange: "#FFA26B",
        primary: "#A70F5D",
        "primary-hover": "#b93f7d",
        secondary: "#FAF3F8",
        "smoke-900": "rgba(0, 0, 0, 0.9)",
        "smoke-800": "rgba(0, 0, 0, 0.75)",
        "smoke-600": "rgba(0, 0, 0, 0.6)",
        smoke: "rgba(0, 0, 0, 0.5)",
        "smoke-400": "rgba(0, 0, 0, 0.4)",
        "smoke-200": "rgba(0, 0, 0, 0.25)",
        "smoke-100": "rgba(0, 0, 0, 0.1)"
      },
      spacing: {
        21: "5.25rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
        108: "27rem",
        120: "30rem",
        "reduce-nav": "calc(100vh - 4rem)"
      },
      padding: {
        "3px": "3px"
      },

      maxHeight: (theme) => ({
        ...theme("spacing")
      })
    }
  },
  variants: {},
};
