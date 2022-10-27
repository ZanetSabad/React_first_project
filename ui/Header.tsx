import { Box, IconButton } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';

function Header() {

    const[isOpen, setOpen] = React.useState(false);
    return (<Box sx={{ background: 'black', border: '2px solid red' }}>

        abcdefg
        <IconButton onClick={() => setOpen (!isOpen)}> 
            <MenuOpenIcon sx={{ fontSize: '25pt', color: 'white' }} />
        </IconButton>
        {isOpen && (
             <Paper sx={{ width: 320 }}>
             <MenuList dense>
               <MenuItem>
                 <ListItemText inset>Single</ListItemText>
               </MenuItem>
               <MenuItem>
                 <ListItemText inset>1.15</ListItemText>
               </MenuItem>
               <MenuItem>
                 <ListItemText inset>Double</ListItemText>
               </MenuItem>
               <MenuItem>
                 <ListItemIcon>
                   <Check />
                 </ListItemIcon>
                 Custom: 1.2
               </MenuItem>
               <Divider />
               <MenuItem>
                 <ListItemText>Add space before paragraph</ListItemText>
               </MenuItem>
               <MenuItem>
                 <ListItemText>Add space after paragraph</ListItemText>
               </MenuItem>
               <Divider />
               <MenuItem>
                 <ListItemText>Custom spacing...</ListItemText>
               </MenuItem>
             </MenuList>
           </Paper>)}
    </Box>);
} 

export default Header;