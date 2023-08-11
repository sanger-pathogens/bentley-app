export const primary = '#00bcd4';
export const secondary = '#651fff';
export const highlight = '#f5f9a7';
export const background = '#424242';

const theme = {
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: [
      'inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    type: 'dark',
    primary: { main: primary },
    secondary: { main: secondary },
  },
  status: {
    danger: 'orange',
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiPaper: {
      elevation: 0,
      square: true,
    },
    MuiLink: {
      underline: 'none',
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        minWidth: '200px',
        color: background,
        backgroundColor: 'white',
      },
      arrow: {
        color: 'white',
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiMenu: {
      list: {
        padding: 'none',
        border: '1px solid white',
      },
    },
  },
};

export default theme
