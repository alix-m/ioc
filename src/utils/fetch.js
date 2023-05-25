import { getDaysSinceRegistered, getFullName } from "./formatting"

export const fetchData = async() => {
    let data = []
    await fetch('http://localhost:3000/data')
      .then(res => res.json())
      .then(res => {
          for (let i in res) {
              let person = res[i]             
              person['fullName'] = getFullName(person.firstName, person.lastName)
              person['daysSinceRegistered'] = getDaysSinceRegistered(new Date(person.registeredDate))
              data.push(person)
          }
      })
      return data
  }

  export const login = async(id) => {
    let res = await fetch('http://localhost:3000/login', { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({ id: id }) })
    .then(res => res.json())
    return res[0]
  }