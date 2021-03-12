import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5597b5',
            contrastText: '#fff',
            dark: 'rgb(26,145,218)',
        },
        secondary: {
            main: 'rgb(26,145,218)',
        },
        error:{
            main:red.A400,
        },
        background:{
            default: '#fff',
        }
    },
});
