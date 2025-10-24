// const fs = require("node:fs");
// const citiesArr = require("./cities.json");

// const EUcitiesArr = [
//   "Austria",
//   "Belgium",
//   "Bulgaria",
//   "Croatia",
//   "Cyprus",
//   "Czechia",
//   "Denmark",
//   "Estonia",
//   "Finland",
//   "France",
//   "Germany",
//   "Greece",
//   "Hungary",
//   "Ireland",
//   "Italy",
//   "Latvia",
//   "Lithuania",
//   "Luxembourg",
//   "Malta",
//   "Netherlands",
//   "Poland",
//   "Portugal",
//   "Romania",
//   "Slovakia",
//   "Slovenia",
//   "Spain",
//   "Sweden",
// ];
// const topCitiesArr = [
//   "Berlin",
//   "Madrid",
//   "Rome",
//   "Paris",
//   "Vienna",
//   "Warsaw",
//   "Hamburg",
//   "Bucharest",
//   "Barcelona",
//   "Budapest",
//   "Munich",
//   "Prague",
//   "Milan",
//   "Sofia",
//   "Cologne",
//   "Stockholm",
//   "Amsterdam",
//   "Naples",
//   "Marseille",
//   "Turin",
//   "Valencia",
//   "Kraków",
//   "Zagreb",
//   "Frankfurt",
//   "Seville",
//   "Helsinki",
//   "Zaragoza",
//   "Rotterdam",
//   "Wrocław",
//   "Copenhagen",
//   "Łódź",
//   "Athens",
//   "Palermo",
//   "Düsseldorf",
//   "Stuttgart",
//   "Leipzig",
//   "Vilnius",
//   "Gothenburg",
//   "Dortmund",
//   "Dublin",
//   "Riga",
//   "Málaga",
//   "Bremen",
//   "Lisbon",
//   "Essen",
//   "The Hague",
//   "Antwerp",
//   "Dresden",
//   "Genoa",
//   "Hanover",
//   "Poznań",
//   "Nuremberg",
//   "Lyon",
//   "Toulouse",
//   "Duisburg",
//   "Gdańsk",
//   "Bratislava",
//   "Murcia",
//   "Tallinn",
//   "Palma de Mallorca",
//   "Brno",
//   "Sintra",
//   "Bologna",
//   "Szczecin",
//   "Las Palmas",
//   "Utrecht",
//   "Aarhus",
//   "Malmö",
//   "Florence",
//   "Alicante",
//   "Bochum",
//   "Wuppertal",
//   "Nice",
//   "Bilbao",
//   "Bielefeld",
//   "Plovdiv",
//   "Lublin",
//   "Varna",
//   "Nantes",
//   "Bydgoszcz",
//   "Bonn",
//   "Córdoba",
//   "Espoo",
//   "Thessaloniki",
//   "Mannheim",
//   "Bari",
//   "Vila Nova de Gaia",
//   "Karlsruhe",
//   "Münster",
//   "Montpellier",
//   "Graz",
//   "Kaunas",
//   "Augsburg",
//   "Valladolid",
//   "Ljubljana",
// ];

// let content = citiesArr.filter((city) => {
//   //   console.log(city.country_name);
//   return (
//     EUcitiesArr.includes(city.country_name) && topCitiesArr.includes(city.name)
//   );
// });
// const newKeysArr = [
//   "name",
//   "state_name",
//   "country_name",
//   "latitude",
//   "longitude",
// ];
// content = content.map((city) =>
//   Object.keys(city).reduce((result, key) => {
//     if (newKeysArr.includes(key)) {
//       result[key] = city[key];
//     }
//     return result;
//   }, {})
// );

// // console.log(content);
// console.log(content.length);
// fs.writeFile(
//   "./cities_buffer.json",
//   JSON.stringify(content, null, 2),
//   (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("File has been created");
//     }
//   }
// );

const cities = require("./cities_buffer.json");
console.log(cities);
