import { makeStyles } from '@material-ui/core/styles';

const buttonColor = ' transparent linear-gradient(180deg, #9CFF95 0%, #AFE7FF 100%)'
export const navBarStyles = makeStyles({
    root: {
        background: 'transparent linear-gradient(180deg, #495CFC 0%, #FC7DB8 100%) 0% 0% no-repeat padding-box',
        borderBottom: 'solid black 2.5px',
        flexGrow: 1
    },
    icon: {
        color: 'white'
    },
    container: {
        display: `flex`,
        justifyContent: `space-between`
    },
    btn: {
        background: `${buttonColor}`,
        backgroundSize:' 200% 100%',
        backgroundPosition: 'right bottom',
        transition: 'background 2s ease-out',
        height: '2em',
        marginTop: '1em',
        '&:hover': {
            backgroundPosition: 'left bottom',
            background: 'linear-gradient(to right,#9cff95, #33e627) 0% 0% no-repeat padding-box'
        }
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
      }
})

