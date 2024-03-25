import React, { useState } from 'react';
import './App.css';
import DataTable from './components/DataTable';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);
  const [amount, setAmount] = useState('');
  const [totalTax, setTotalTax] = useState('');

  // Handles selecting a municipality from the DataTable
  const handleSelectMunicipality = (municipalityData) => {
    setSelectedMunicipality(municipalityData);
  };

  // Handles the calculation of the tax based on the selected municipality and the input amount
  const handleCalculateTax = () => {
    if (selectedMunicipality && amount) {
      // Example calculation - adjust according to your needs
      const tax = amount * selectedMunicipality['Tax Rate'];
      setTotalTax(tax.toFixed(2)); // Formatting to two decimal places
    }
  };

  return (
    <div className="App" >

    <p style={{marginLeft: '1.5%', marginTop: '2%', marginBottom: '1%',fontSize: '25px', fontWeight: 'bold', fontFamily:'fantasy'  }}>Transfer Tax Calculator</p>
  

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
     
              
            <div style={{ width: '55%' }}>
            <DataTable searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSelectMunicipality={handleSelectMunicipality} />
          </div>

        {selectedMunicipality && (
          <div style={{ 
            width: '42%', 
            backgroundColor: '#FFFFFF', 
            paddingLeft: '15px', 
            paddingRight: '15px', 
          }}>

                <p style={{ fontSize: '22px' }}>
                  This calculation is based off of a <span style={{ fontWeight: 'bold' }}>tax rate</span> of <span style={{ color: '#4DCB06',  fontWeight: 'bold' }}>{selectedMunicipality['Tax Rate']}</span>, 
                  with a <span style={{ fontWeight: 'bold' }}>credit rate</span> of <span style={{ color: '#8F630E',  fontWeight: 'bold'}}>{selectedMunicipality['Credit Rate']} </span> 
                  and a <span style={{ fontWeight: 'bold' }}>credit factor</span> of <span style={{ color: '#DF9A15' ,  fontWeight: 'bold'}}>{selectedMunicipality['Credit Factor']} </span> 
                  for the <span style={{ fontWeight: 'bold' }}>municipality</span> <span style={{ color: '#4694E5' ,  fontWeight: 'bold'}}>{selectedMunicipality.Municipality}</span>.
                </p>

                <p style={{ fontSize: '14px', fontStyle: 'italic', marginTop: '15px', marginLeft: '20px', fontFamily: 'sans-serif'  }}>
                  The formula for this calculation is credit factor * credit rate * 100 + total income / tax rate
                </p>

           {/* Amount input field */}
                <div style ={{marginTop: '30px', fontWeight: 'bold'}}>
                        <label htmlFor="amount" >Amount: $</label>
                        <input
                          type="number"
                          id="amount"
                          value={amount}
                          onChange={e => setAmount(e.target.value)}
                          style={{ width: '100%',fontWeight: 'bold',  backgroundColor:  '#BAB9B8', marginTop: '20px',  border: '0.1px solid black', padding: '15px', boxSizing: 'border-box' }}

                        />
                  </div>

            {/* Total Tax display field */}
                <div style= {{marginTop: '30px'}}>
                  <label htmlFor="totalTax" style={{ marginRight: '20px', fontWeight: 'bold'}}>Total Tax: $</label>
                  <input
                    type="text"
                    id="totalTax"
                    value={totalTax}
                    readOnly
                    style={{ width: '100%',fontWeight: 'bold',  backgroundColor:  '#BAB9B8', marginTop: '20px',  border: '0.1px solid black', padding: '15px', boxSizing: 'border-box' }}
                  />
                </div>

            {/* Calculate Tax button */}
                <div style={{marginTop: '40px', width: '100%'}}>
                      <button
                          onClick={handleCalculateTax}
                          style={{
                            padding: '15px',
                            marginTop: '10px',
                            width: '100%',
                            backgroundColor: '#4B4B4B',
                            color: '#CBCBCA',
                            border: '0.1px solid black',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s ease' 
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = 'black'} 
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#4B4B4B'}
                        >
                          Calculate Total Taxes
                      </button>
                </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;