import React, { useState } from 'react';
import data from '../assets/data.json';
import { TextField,  ListItemIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button } from '@mui/material';
import { AccountBalance, LocalAtm, MonetizationOn } from '@mui/icons-material';

const DataTable = ({ searchQuery, setSearchQuery, onSelectMunicipality }) => {
    
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedMunicipality, setSelectedMunicipality] = useState(null);
    
    const filteredData = data.filter(item =>
      item.Municipality.toLowerCase(). includes(searchQuery.toLowerCase())
    );
  
    // Handler for selecting a municipality
    const handleSelectMunicipality = (municipalityData) => {
      setSelectedMunicipality(municipalityData);
      setSelectedRow(municipalityData.Municipality); 
      if(onSelectMunicipality) {
        onSelectMunicipality(municipalityData);
      }
    };
    
  
  
    return (
      <Grid container direction="column" justifyContent="flex-start" alignItems="center" style={{  height: 'calc(90vh - 40px)', paddingLeft: '10px', paddingRight: '10px'  }}>
        {/* Search Bar and Button */}
        <Grid item container justifyContent="space-between" alignItems="center" style={{ width: '100%', marginBottom: '10px' }}>
          <Grid item style={{ width: '100%' }}>
            <TextField
              fullWidth
              label="Filter by Municipality"
              variant="outlined"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </Grid>
          
        </Grid>
  
        {/* Scrollable Table Container */}
        <Grid item className="custom-scrollbar" style={{ marginTop: '1%', width: '100%', height: '89%', overflowY: 'auto', overflowX: 'hidden' }}>
  <TableContainer component={Paper} sx={{
    borderStyle: 'solid', 
    bgcolor: '#3f3c44', 
    color: 'black',
    '.MuiTableCell-root': { 
      borderBottom: '.2px solid #000000', 
      borderRight: '.2px solid #000000',
    },
    '.MuiTableCell-root:last-child': {
      borderRight: 'none', 
    }
  }}>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell  sx={{
              color: 'grey',
              bgcolor: '#28262b',
              justifyContent: 'flex-start' // Use 'center' if you want the icon and text to be centered horizontally.
            }}>
            <ListItemIcon sx={{
  minWidth: 'auto', // Override the default minWidth to allow the icon to sit closer to the text if needed.
  marginRight: '20px', 
  verticalAlign: 'middle', 
 marginTop: '-2px'
              }}>

              <AccountBalance  style={{ color: 'lightblue' }}  />
            </ListItemIcon  >
            Municipality
          </TableCell>
         
          <TableCell sx={{
              color: 'grey',
              bgcolor: '#28262b',
            }}>
            <ListItemIcon sx={{
                minWidth: 'auto', // Override the default minWidth to allow the icon to sit closer to the text if needed.
                marginRight: '20px', 
                verticalAlign: 'middle', 
               marginTop: '-2px'
              }}>

              <LocalAtm   style={{ color: 'orange' }} />
            </ListItemIcon>
            Tax Rate
          </TableCell>

          <TableCell   sx={{
 color: 'grey',
 bgcolor: '#28262b',
  }}>
  <ListItemIcon sx={{
      minWidth: 'auto', // Override the default minWidth to allow the icon to sit closer to the text if needed.
      marginRight: '20px', 
      verticalAlign: 'middle', 
     marginTop: '-2px'
    }}>
    <MonetizationOn style={{ color: 'darkgreen' }} />
  </ListItemIcon>
  Credit Rate
</TableCell>

        
          <TableCell sx={{
 color: 'grey',
 bgcolor: '#28262b',
  }}>
  <ListItemIcon sx={{
       minWidth: 'auto', // Override the default minWidth to allow the icon to sit closer to the text if needed.
       marginRight: '20px', 
       verticalAlign: 'middle', 
      marginTop: '-2px'
    }}>
    <MonetizationOn style={{ color: 'darkgreen' }} />
  </ListItemIcon>
  Credit Rate
</TableCell>



        </TableRow>
      </TableHead>
      <TableBody>
        {filteredData.map((row) => (
          <TableRow
            key={row.Municipality}
            hover
            onClick={() => handleSelectMunicipality(row)}
            selected={selectedRow === row.Municipality}
            sx={{
              '&.Mui-selected, &.Mui-selected:hover': {
                bgcolor: '#989693', 
                '& .MuiTableCell-root': {
                  color: 'green', 
                },
              },
              '&:hover': {
                '& .MuiTableCell-root': {
                  bgcolor: selectedRow === row.Municipality ? '' : '#989693',
                  color: selectedRow === row.Municipality ? 'green' : 'orange', 
                },
              },
              '& .MuiTableCell-root': {
                color: selectedRow === row.Municipality ? 'green' : 'orange', 
              },
            }}
          >
            <TableCell component="th" scope="row">
              {row.Municipality}
            </TableCell>
            <TableCell align="right">{row['Tax Rate']}</TableCell>
            <TableCell align="right">{row['Credit Factor']}</TableCell>
            <TableCell align="right">{row['Credit Rate']}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Grid>


      </Grid>
    );
  };
    
  export default DataTable;