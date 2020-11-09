import { makeStyles } from '@material-ui/core/styles';

export const homeStyles = makeStyles({
    body: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'transparent linear-gradient(180deg, rgba(252, 125, 184, .7) 0%, rgba(73, 92, 252, .7) 100%) 0% 0% no-repeat padding-box',
        opacity: 1,
    },
    innerWrap: {
        height: '50%',
        width: '75%',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0 auto',
        alignItems: 'center'
    },
    bottomWrap: {
        height: '50%',
        width: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0 auto',
        alignItems: 'flex-start'
    },
    box: {
        height: '100px',
        width: '100px',
        textAlign: 'center',
        background: 'transparent linear-gradient(180deg, #9CFF95 0%, #AFE7FF 100%) 0% 0% no-repeat padding-box',
        boxShadow: '6px 14px 24px #000000E5',
        border: '1px solid #707070',
        borderRadius: '10px',
        opacity: 1,
        transition: 'background, transform 0.5s ease-in-out',
        '&:hover': {
            transition: 'background, transform 0.5s ease-in-out',
            transform: 'scale(1.15)',
        }
    }
})