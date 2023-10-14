import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Link to="/category/joyeria">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Joyeria' />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/category/ropa">
          <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary='Ropa' />
          </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/category/tecnologia">
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary='Tecnología' />
        </ListItemButton>
      </ListItem>
      </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['Productos'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{ my: 2, color: "white", display: 'flex', mr: 10  }} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
