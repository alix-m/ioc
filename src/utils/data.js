const { faker } = require('@faker-js/faker')
const fs = require('fs')


/*  

Flask implementation example

class Person(db.Model):
  
  __tablename__ = 'user

  id = db.Column(db.Integer(), primary_key=True)
  firstName = db.Column(db.String(255))
  lastName = db.Column(db.String(255))
  email = db.Column(db.String(255), unique=True)
  city = db.Column(db.String(255))
  registeredDate = db.Column(db.DateTime(), default=datetime.utcnow, index=True)

*/


const createPerson = () => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    registeredDate: faker.date.past()
  }
}

const generatePersonData = numRows => {
    const personData = []
    for(let i = 0; i < numRows; i++){
        personData.push(createPerson())
    }
    return personData
}

const personData = generatePersonData(500)
const userData = [{ id: 1, name: 'Alix', tableSettings: { sortBy: null, colOrder: [1, 2, 3, 4 ,5 ,6 ,7 ,8] }}]
const data = { personData: personData, userData: userData }

fs.writeFileSync('../api/db.json', JSON.stringify(data))