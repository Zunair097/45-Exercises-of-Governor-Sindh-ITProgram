// Creating A Function With Parameters Which Return Values In String
function city_country(city: string, country: string) : string{
    return `${city} , ${country}`;
}

// Calling A Function And Print The Returned Value

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Berlin", "Germany"));