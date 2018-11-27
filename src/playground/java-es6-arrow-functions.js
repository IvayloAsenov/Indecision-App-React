const getFirstName = (name) => {
    const firstName = name.split(" ")[0];
    return firstName;
}

const getFirstNameShort = (name) => name.split(" ")[0];

console.log(getFirstName("Michael"));
console.log(getFirstNameShort("MichaelShort Short"));
