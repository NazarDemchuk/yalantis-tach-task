import React, {useState, useEffect} from 'react';
import YearList from './Calendar/YearList';

function App() {
  const [usersPerMonth, setUsersPerMonth] = useState([])
  const axios = require('axios')
  const serverApi = axios.create({baseURL: 'https://yalantis-react-school-api.yalantis.com/api'})

  useEffect((url) => {
    serverApi.get('/task0/users')
      .then(response => {
        const datesPerMonth = calculateBirthdaysPerMonth(response.data)
        setUsersPerMonth(datesPerMonth)
      })
      .catch(error => console.error(error))
  }, [])

  function calculateBirthdaysPerMonth(users) {
    return users.reduce((year, user) => {
      const month = new Date(user.dob).getMonth()
      
      year[month] = year[month] ? ++year[month] : 1

      return year
    }, [])
  }

  return (
      <div className='App'>
        <h1>Users amount per month</h1>
        <YearList users={usersPerMonth} />
      </div>
  );
}

export default App;
