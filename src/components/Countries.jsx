import React, { useState, useEffect } from 'react';
import { Pagination, createTheme, ThemeProvider } from '@mui/material';

const Countries = () => {
  const [countriesData, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const countriesPerPage = 10;
  const totalCountries = countriesData.length;
  const totalPages = Math.ceil(totalCountries / countriesPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const theme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          ul: {
            '& .MuiPaginationItem-root': {
              color: '#fff',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>List of Countries</h1>
        <div>
          {countriesData
            .slice((currentPage - 1) * countriesPerPage, currentPage * countriesPerPage)
            .map((country, index) => (
              <div key={index}>
                <h3>{country.name.common}</h3>
                <img src={country.flags.png} alt={country.name.common} width="100" />
              </div>
            ))}
        </div>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          boundaryCount={2}
          siblingCount={2}
        />
      </div>
    </ThemeProvider>
  );
};

export default Countries;
