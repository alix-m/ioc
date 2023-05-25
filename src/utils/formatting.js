export const getFullName = (firstName, lastName) => {
    return `${ firstName } ${ lastName }`
}

export const getDaysSinceRegistered = registeredDate => {
    return Math.ceil((new Date().getTime() - registeredDate.getTime())/(1000 * 3600 * 24)) //milliseconds to days
}