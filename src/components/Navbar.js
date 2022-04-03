import { NavLink } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    style: {
        margin: 10,
        padding: 10,
        
    },
    h6:{
        color: 'white',
    },
}));
const navlink = {
    color: 'white',
    textDecoration:'none'
}

    const Navbar = () => {
        const classes = useStyles();
        return (
            <>

<div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        
          <Typography className={classes.style} variant="h6">
          <NavLink style={navlink} to="/">Home</NavLink>          
          </Typography>
          <Typography className={classes.style} variant="h6" >
          <NavLink style={navlink} to="/contact">Contact</NavLink>
          </Typography>
          
          <Typography className={classes.style} variant="h6" >
          <NavLink style={navlink} to="/about">About</NavLink>
          </Typography>
          <Typography className={classes.style} variant="h6" >
          <NavLink style={navlink} to="/login">Login</NavLink>
          </Typography>
          <Typography className={classes.style} variant="h6" >
          <NavLink style={navlink} to="/signup">Signup</NavLink>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
                {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            
        </ul> */}
                {/* <div className="container">
                    <ul>
                        <li>
                            <NavLink to='/' style={({ isActive }) => {
                                return {
                                    background: isActive ? 'red' : '',
                                    textDecoration: 'none',

                                    color: 'white'


                                }
                            }}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' style={({ isActive }) => {
                                return {
                                    background: isActive ? 'Red' : '',
                                    textDecoration: 'none',
                                    color: 'white'
                                }
                            }}>Contact</NavLink>
                        </li>

                        <li>
                            <NavLink to='/about' style={({ isActive }) => {
                                return {
                                    background: isActive ? 'Red' : '',
                                    textDecoration: 'none',
                                    color: 'white'
                                }
                            }}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/post/mobile' style={({ isActive }) => {
                                return {
                                    background: isActive ? 'Red' : '',
                                    textDecoration: 'none',
                                    float: 'right',
                                    color: 'white'



                                }
                            }}>Apply</NavLink>
                        </li>
                    </ul>
                </div> */}

            </>
        )
    }
    export default Navbar;