function copyObjectFactory(object) {
    let functionsHolder = [];
    if(object){
        for (const key in object) {
            if(typeof object[key] === 'function'){
                const copiedFu = object[key].bind({});
                functionsHolder.push({copiedFu,key});
            }
        }
        let deepCopiedObj = JSON.parse(JSON.stringify(object));
        for (const foo of functionsHolder) {
            deepCopiedObj[foo.key] = foo.copiedFu;
        }
        return deepCopiedObj;
    }
    return 'error';
}
let user = {
    id:1,
    name:'Orest',
    buy(){console.log('buy a house')},
    sell(){console.log('sell the car')},
    eat(){console.log('eat the food')},
    play(){console.log('play a playStation')}
};
const user1 = copyObjectFactory(user)
console.log(user1);
user1.eat()

let jsonUsers = '[{\n' +
    '    "id": 1,\n' +
    '    "firstName": "Emily",\n' +
    '    "lastName": "Johnson",\n' +
    '    "maidenName": "Smith",\n' +
    '    "age": 28,\n' +
    '    "gender": "female",\n' +
    '    "email": "emily.johnson@x.dummyjson.com",\n' +
    '    "phone": "+81 965-431-3024",\n' +
    '    "username": "emilys",\n' +
    '    "password": "emilyspass",\n' +
    '    "birthDate": "1996-5-30",\n' +
    '    "image": "https://dummyjson.com/icon/emilys/128",\n' +
    '    "bloodGroup": "O-",\n' +
    '    "height": 193.24,\n' +
    '    "weight": 63.16,\n' +
    '    "eyeColor": "Green",\n' +
    '    "hair": {\n' +
    '        "color": "Brown",\n' +
    '        "type": "Curly"\n' +
    '    },\n' +
    '    "ip": "42.48.100.32",\n' +
    '    "address": {\n' +
    '        "address": "626 Main Street",\n' +
    '        "city": "Phoenix",\n' +
    '        "state": "Mississippi",\n' +
    '        "stateCode": "MS",\n' +
    '        "postalCode": "29112",\n' +
    '        "coordinates": {\n' +
    '            "lat": -77.16213,\n' +
    '            "lng": -92.084824\n' +
    '        },\n' +
    '        "country": "United States"\n' +
    '    },\n' +
    '    "macAddress": "47:fa:41:18:ec:eb",\n' +
    '    "university": "University of Wisconsin--Madison",\n' +
    '    "bank": {\n' +
    '        "cardExpire": "03/26",\n' +
    '        "cardNumber": "9289760655481815",\n' +
    '        "cardType": "Elo",\n' +
    '        "currency": "CNY",\n' +
    '        "iban": "YPUXISOBI7TTHPK2BR3HAIXL"\n' +
    '    },\n' +
    '    "company": {\n' +
    '        "department": "Engineering",\n' +
    '        "name": "Dooley, Kozey and Cronin",\n' +
    '        "title": "Sales Manager",\n' +
    '        "address": {\n' +
    '            "address": "263 Tenth Street",\n' +
    '            "city": "San Francisco",\n' +
    '            "state": "Wisconsin",\n' +
    '            "stateCode": "WI",\n' +
    '            "postalCode": "37657",\n' +
    '            "coordinates": {\n' +
    '                "lat": 71.814525,\n' +
    '                "lng": -161.150263\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        }\n' +
    '    },\n' +
    '    "ein": "977-175",\n' +
    '    "ssn": "900-590-289",\n' +
    '    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",\n' +
    '    "crypto": {\n' +
    '        "coin": "Bitcoin",\n' +
    '        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '        "network": "Ethereum (ERC20)"\n' +
    '    },\n' +
    '    "role": "admin"\n' +
    '},\n' +
    '    {\n' +
    '        "id": 2,\n' +
    '        "firstName": "Michael",\n' +
    '        "lastName": "Williams",\n' +
    '        "maidenName": "",\n' +
    '        "age": 35,\n' +
    '        "gender": "male",\n' +
    '        "email": "michael.williams@x.dummyjson.com",\n' +
    '        "phone": "+49 258-627-6644",\n' +
    '        "username": "michaelw",\n' +
    '        "password": "michaelwpass",\n' +
    '        "birthDate": "1989-8-10",\n' +
    '        "image": "https://dummyjson.com/icon/michaelw/128",\n' +
    '        "bloodGroup": "B+",\n' +
    '        "height": 186.22,\n' +
    '        "weight": 76.32,\n' +
    '        "eyeColor": "Red",\n' +
    '        "hair": {\n' +
    '            "color": "Green",\n' +
    '            "type": "Straight"\n' +
    '        },\n' +
    '        "ip": "12.13.116.142",\n' +
    '        "address": {\n' +
    '            "address": "385 Fifth Street",\n' +
    '            "city": "Houston",\n' +
    '            "state": "Alabama",\n' +
    '            "stateCode": "AL",\n' +
    '            "postalCode": "38807",\n' +
    '            "coordinates": {\n' +
    '                "lat": 22.815468,\n' +
    '                "lng": 115.608581\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "79:15:78:99:60:aa",\n' +
    '        "university": "Ohio State University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "02/27",\n' +
    '            "cardNumber": "6737807858721625",\n' +
    '            "cardType": "Elo",\n' +
    '            "currency": "SEK",\n' +
    '            "iban": "83IDT77FWYLCJVR8ISDACFH0"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Support",\n' +
    '            "name": "Spinka - Dickinson",\n' +
    '            "title": "Support Specialist",\n' +
    '            "address": {\n' +
    '                "address": "395 Main Street",\n' +
    '                "city": "Los Angeles",\n' +
    '                "state": "New Hampshire",\n' +
    '                "stateCode": "NH",\n' +
    '                "postalCode": "73442",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 79.098326,\n' +
    '                    "lng": -119.624845\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "912-602",\n' +
    '        "ssn": "108-953-962",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "admin"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 3,\n' +
    '        "firstName": "Sophia",\n' +
    '        "lastName": "Brown",\n' +
    '        "maidenName": "",\n' +
    '        "age": 42,\n' +
    '        "gender": "female",\n' +
    '        "email": "sophia.brown@x.dummyjson.com",\n' +
    '        "phone": "+81 210-652-2785",\n' +
    '        "username": "sophiab",\n' +
    '        "password": "sophiabpass",\n' +
    '        "birthDate": "1982-11-6",\n' +
    '        "image": "https://dummyjson.com/icon/sophiab/128",\n' +
    '        "bloodGroup": "O-",\n' +
    '        "height": 177.72,\n' +
    '        "weight": 52.6,\n' +
    '        "eyeColor": "Hazel",\n' +
    '        "hair": {\n' +
    '            "color": "White",\n' +
    '            "type": "Wavy"\n' +
    '        },\n' +
    '        "ip": "214.225.51.195",\n' +
    '        "address": {\n' +
    '            "address": "1642 Ninth Street",\n' +
    '            "city": "Washington",\n' +
    '            "state": "Alabama",\n' +
    '            "stateCode": "AL",\n' +
    '            "postalCode": "32822",\n' +
    '            "coordinates": {\n' +
    '                "lat": 45.289366,\n' +
    '                "lng": 46.832664\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "12:a3:d3:6f:5c:5b",\n' +
    '        "university": "Pepperdine University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "04/25",\n' +
    '            "cardNumber": "7795895470082859",\n' +
    '            "cardType": "Korean Express",\n' +
    '            "currency": "SEK",\n' +
    '            "iban": "90XYKT83LMM7AARZ8JN958JC"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Research and Development",\n' +
    '            "name": "Schiller - Zieme",\n' +
    '            "title": "Accountant",\n' +
    '            "address": {\n' +
    '                "address": "1896 Washington Street",\n' +
    '                "city": "Dallas",\n' +
    '                "state": "Nevada",\n' +
    '                "stateCode": "NV",\n' +
    '                "postalCode": "88511",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 20.086743,\n' +
    '                    "lng": -34.577107\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "963-113",\n' +
    '        "ssn": "638-461-822",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "admin"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 4,\n' +
    '        "firstName": "James",\n' +
    '        "lastName": "Davis",\n' +
    '        "maidenName": "",\n' +
    '        "age": 45,\n' +
    '        "gender": "male",\n' +
    '        "email": "james.davis@x.dummyjson.com",\n' +
    '        "phone": "+49 614-958-9364",\n' +
    '        "username": "jamesd",\n' +
    '        "password": "jamesdpass",\n' +
    '        "birthDate": "1979-5-4",\n' +
    '        "image": "https://dummyjson.com/icon/jamesd/128",\n' +
    '        "bloodGroup": "AB+",\n' +
    '        "height": 193.31,\n' +
    '        "weight": 62.1,\n' +
    '        "eyeColor": "Amber",\n' +
    '        "hair": {\n' +
    '            "color": "Blonde",\n' +
    '            "type": "Straight"\n' +
    '        },\n' +
    '        "ip": "101.118.131.66",\n' +
    '        "address": {\n' +
    '            "address": "238 Jefferson Street",\n' +
    '            "city": "Seattle",\n' +
    '            "state": "Pennsylvania",\n' +
    '            "stateCode": "PA",\n' +
    '            "postalCode": "68354",\n' +
    '            "coordinates": {\n' +
    '                "lat": 16.782513,\n' +
    '                "lng": -139.34723\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "10:7d:df:1f:97:58",\n' +
    '        "university": "University of Southern California",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/29",\n' +
    '            "cardNumber": "5005519846254763",\n' +
    '            "cardType": "Mastercard",\n' +
    '            "currency": "INR",\n' +
    '            "iban": "7N7ZH1PJ8Q4WU1K965HQQR27"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Support",\n' +
    '            "name": "Pagac and Sons",\n' +
    '            "title": "Research Analyst",\n' +
    '            "address": {\n' +
    '                "address": "1622 Lincoln Street",\n' +
    '                "city": "Fort Worth",\n' +
    '                "state": "Pennsylvania",\n' +
    '                "stateCode": "PA",\n' +
    '                "postalCode": "27768",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 54.91193,\n' +
    '                    "lng": -79.498328\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "904-810",\n' +
    '        "ssn": "116-951-314",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "admin"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 5,\n' +
    '        "firstName": "Emma",\n' +
    '        "lastName": "Miller",\n' +
    '        "maidenName": "Johnson",\n' +
    '        "age": 30,\n' +
    '        "gender": "female",\n' +
    '        "email": "emma.miller@x.dummyjson.com",\n' +
    '        "phone": "+91 759-776-1614",\n' +
    '        "username": "emmaj",\n' +
    '        "password": "emmajpass",\n' +
    '        "birthDate": "1994-6-13",\n' +
    '        "image": "https://dummyjson.com/icon/emmaj/128",\n' +
    '        "bloodGroup": "AB-",\n' +
    '        "height": 192.8,\n' +
    '        "weight": 63.62,\n' +
    '        "eyeColor": "Green",\n' +
    '        "hair": {\n' +
    '            "color": "White",\n' +
    '            "type": "Straight"\n' +
    '        },\n' +
    '        "ip": "224.126.22.183",\n' +
    '        "address": {\n' +
    '            "address": "607 Fourth Street",\n' +
    '            "city": "Jacksonville",\n' +
    '            "state": "Colorado",\n' +
    '            "stateCode": "CO",\n' +
    '            "postalCode": "26593",\n' +
    '            "coordinates": {\n' +
    '                "lat": 0.505589,\n' +
    '                "lng": -157.43281\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "32:b9:7e:8d:f5:e8",\n' +
    '        "university": "Northeastern University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "03/26",\n' +
    '            "cardNumber": "5772950119588627",\n' +
    '            "cardType": "American Express",\n' +
    '            "currency": "CAD",\n' +
    '            "iban": "TAVHURD845KVBTB8W81AQXRY"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Human Resources",\n' +
    '            "name": "Graham - Gulgowski",\n' +
    '            "title": "Quality Assurance Engineer",\n' +
    '            "address": {\n' +
    '                "address": "1460 Sixth Street",\n' +
    '                "city": "San Antonio",\n' +
    '                "state": "Idaho",\n' +
    '                "stateCode": "ID",\n' +
    '                "postalCode": "21965",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 44.346545,\n' +
    '                    "lng": -26.944701\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "403-505",\n' +
    '        "ssn": "526-210-885",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "admin"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 6,\n' +
    '        "firstName": "Olivia",\n' +
    '        "lastName": "Wilson",\n' +
    '        "maidenName": "",\n' +
    '        "age": 22,\n' +
    '        "gender": "female",\n' +
    '        "email": "olivia.wilson@x.dummyjson.com",\n' +
    '        "phone": "+91 607-295-6448",\n' +
    '        "username": "oliviaw",\n' +
    '        "password": "oliviawpass",\n' +
    '        "birthDate": "2002-4-20",\n' +
    '        "image": "https://dummyjson.com/icon/oliviaw/128",\n' +
    '        "bloodGroup": "B+",\n' +
    '        "height": 182.61,\n' +
    '        "weight": 58,\n' +
    '        "eyeColor": "Hazel",\n' +
    '        "hair": {\n' +
    '            "color": "Gray",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "249.178.112.207",\n' +
    '        "address": {\n' +
    '            "address": "547 First Street",\n' +
    '            "city": "Fort Worth",\n' +
    '            "state": "Tennessee",\n' +
    '            "stateCode": "TN",\n' +
    '            "postalCode": "83843",\n' +
    '            "coordinates": {\n' +
    '                "lat": 75.32627,\n' +
    '                "lng": -26.15285\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "9c:7f:ea:34:18:19",\n' +
    '        "university": "University of North Carolina--Chapel Hill",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/28",\n' +
    '            "cardNumber": "6771923832947881",\n' +
    '            "cardType": "Diners Club International",\n' +
    '            "currency": "BRL",\n' +
    '            "iban": "V6H0O5OE3Q4JVKWDTYWZABMD"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Product Management",\n' +
    '            "name": "Pfannerstill Inc",\n' +
    '            "title": "Research Analyst",\n' +
    '            "address": {\n' +
    '                "address": "425 Sixth Street",\n' +
    '                "city": "Indianapolis",\n' +
    '                "state": "Oklahoma",\n' +
    '                "stateCode": "OK",\n' +
    '                "postalCode": "74263",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 74.986644,\n' +
    '                    "lng": -132.916888\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "921-709",\n' +
    '        "ssn": "836-772-168",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "moderator"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 7,\n' +
    '        "firstName": "Alexander",\n' +
    '        "lastName": "Jones",\n' +
    '        "maidenName": "",\n' +
    '        "age": 38,\n' +
    '        "gender": "male",\n' +
    '        "email": "alexander.jones@x.dummyjson.com",\n' +
    '        "phone": "+61 260-824-4986",\n' +
    '        "username": "alexanderj",\n' +
    '        "password": "alexanderjpass",\n' +
    '        "birthDate": "1986-10-20",\n' +
    '        "image": "https://dummyjson.com/icon/alexanderj/128",\n' +
    '        "bloodGroup": "AB-",\n' +
    '        "height": 153.89,\n' +
    '        "weight": 77.42,\n' +
    '        "eyeColor": "Blue",\n' +
    '        "hair": {\n' +
    '            "color": "White",\n' +
    '            "type": "Straight"\n' +
    '        },\n' +
    '        "ip": "166.204.84.32",\n' +
    '        "address": {\n' +
    '            "address": "664 Maple Street",\n' +
    '            "city": "Indianapolis",\n' +
    '            "state": "Delaware",\n' +
    '            "stateCode": "DE",\n' +
    '            "postalCode": "86684",\n' +
    '            "coordinates": {\n' +
    '                "lat": 35.289664,\n' +
    '                "lng": 7.063255\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "d2:64:58:2d:1c:46",\n' +
    '        "university": "University of Illinois--Urbana-Champaign",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/25",\n' +
    '            "cardNumber": "7344951706130140",\n' +
    '            "cardType": "JCB",\n' +
    '            "currency": "EUR",\n' +
    '            "iban": "49V4GVDVMP0MHIDD4VXMQ3A2"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Engineering",\n' +
    '            "name": "Dickens - Beahan",\n' +
    '            "title": "Web Developer",\n' +
    '            "address": {\n' +
    '                "address": "996 Eighth Street",\n' +
    '                "city": "Washington",\n' +
    '                "state": "Kansas",\n' +
    '                "stateCode": "KS",\n' +
    '                "postalCode": "27858",\n' +
    '                "coordinates": {\n' +
    '                    "lat": -75.462366,\n' +
    '                    "lng": -128.025697\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "638-127",\n' +
    '        "ssn": "722-993-925",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "moderator"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 8,\n' +
    '        "firstName": "Ava",\n' +
    '        "lastName": "Taylor",\n' +
    '        "maidenName": "",\n' +
    '        "age": 27,\n' +
    '        "gender": "female",\n' +
    '        "email": "ava.taylor@x.dummyjson.com",\n' +
    '        "phone": "+1 458-853-7877",\n' +
    '        "username": "avat",\n' +
    '        "password": "avatpass",\n' +
    '        "birthDate": "1997-8-25",\n' +
    '        "image": "https://dummyjson.com/icon/avat/128",\n' +
    '        "bloodGroup": "AB-",\n' +
    '        "height": 168.47,\n' +
    '        "weight": 57.08,\n' +
    '        "eyeColor": "Hazel",\n' +
    '        "hair": {\n' +
    '            "color": "Red",\n' +
    '            "type": "Kinky"\n' +
    '        },\n' +
    '        "ip": "150.73.197.233",\n' +
    '        "address": {\n' +
    '            "address": "1197 First Street",\n' +
    '            "city": "Fort Worth",\n' +
    '            "state": "Rhode Island",\n' +
    '            "stateCode": "RI",\n' +
    '            "postalCode": "24771",\n' +
    '            "coordinates": {\n' +
    '                "lat": -81.194833,\n' +
    '                "lng": -87.948158\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "8d:2e:c2:d6:e7:a8",\n' +
    '        "university": "University of Wisconsin--Madison",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "01/29",\n' +
    '            "cardNumber": "6412128967460199",\n' +
    '            "cardType": "Maestro",\n' +
    '            "currency": "CNY",\n' +
    '            "iban": "TS66YQ8R16OX7IJKLUONDQHP"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Marketing",\n' +
    '            "name": "Nikolaus Inc",\n' +
    '            "title": "Chief Executive Officer",\n' +
    '            "address": {\n' +
    '                "address": "930 Lincoln Street",\n' +
    '                "city": "Austin",\n' +
    '                "state": "Colorado",\n' +
    '                "stateCode": "CO",\n' +
    '                "postalCode": "47592",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 87.970083,\n' +
    '                    "lng": -42.769351\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "297-762",\n' +
    '        "ssn": "257-419-109",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "moderator"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 9,\n' +
    '        "firstName": "Ethan",\n' +
    '        "lastName": "Martinez",\n' +
    '        "maidenName": "",\n' +
    '        "age": 33,\n' +
    '        "gender": "male",\n' +
    '        "email": "ethan.martinez@x.dummyjson.com",\n' +
    '        "phone": "+92 933-608-5081",\n' +
    '        "username": "ethanm",\n' +
    '        "password": "ethanmpass",\n' +
    '        "birthDate": "1991-2-12",\n' +
    '        "image": "https://dummyjson.com/icon/ethanm/128",\n' +
    '        "bloodGroup": "AB+",\n' +
    '        "height": 159.19,\n' +
    '        "weight": 68.81,\n' +
    '        "eyeColor": "Hazel",\n' +
    '        "hair": {\n' +
    '            "color": "Purple",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "63.191.127.71",\n' +
    '        "address": {\n' +
    '            "address": "466 Pine Street",\n' +
    '            "city": "San Antonio",\n' +
    '            "state": "Louisiana",\n' +
    '            "stateCode": "LA",\n' +
    '            "postalCode": "72360",\n' +
    '            "coordinates": {\n' +
    '                "lat": 74.074918,\n' +
    '                "lng": -25.312703\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "59:e:9e:e3:29:da",\n' +
    '        "university": "Syracuse University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "02/25",\n' +
    '            "cardNumber": "7183482484317509",\n' +
    '            "cardType": "Visa",\n' +
    '            "currency": "CAD",\n' +
    '            "iban": "CW5U5KS23U7JYD22TVQL7SIH"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Support",\n' +
    '            "name": "Gorczany - Gottlieb",\n' +
    '            "title": "Legal Counsel",\n' +
    '            "address": {\n' +
    '                "address": "1597 Oak Street",\n' +
    '                "city": "Chicago",\n' +
    '                "state": "Florida",\n' +
    '                "stateCode": "FL",\n' +
    '                "postalCode": "28100",\n' +
    '                "coordinates": {\n' +
    '                    "lat": -67.45208,\n' +
    '                    "lng": -23.209886\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "790-434",\n' +
    '        "ssn": "569-650-348",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "moderator"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 10,\n' +
    '        "firstName": "Isabella",\n' +
    '        "lastName": "Anderson",\n' +
    '        "maidenName": "Davis",\n' +
    '        "age": 31,\n' +
    '        "gender": "female",\n' +
    '        "email": "isabella.anderson@x.dummyjson.com",\n' +
    '        "phone": "+49 770-658-4885",\n' +
    '        "username": "isabellad",\n' +
    '        "password": "isabelladpass",\n' +
    '        "birthDate": "1993-6-10",\n' +
    '        "image": "https://dummyjson.com/icon/isabellad/128",\n' +
    '        "bloodGroup": "A-",\n' +
    '        "height": 150.56,\n' +
    '        "weight": 50.1,\n' +
    '        "eyeColor": "Brown",\n' +
    '        "hair": {\n' +
    '            "color": "Blonde",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "114.9.114.205",\n' +
    '        "address": {\n' +
    '            "address": "1964 Oak Street",\n' +
    '            "city": "New York",\n' +
    '            "state": "Utah",\n' +
    '            "stateCode": "UT",\n' +
    '            "postalCode": "89352",\n' +
    '            "coordinates": {\n' +
    '                "lat": 41.331324,\n' +
    '                "lng": 151.782727\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "b1:b0:d0:a2:82:80",\n' +
    '        "university": "California Institute of Technology (Caltech)",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/27",\n' +
    '            "cardNumber": "6118714010128731",\n' +
    '            "cardType": "NPS",\n' +
    '            "currency": "CNY",\n' +
    '            "iban": "GBZRGDMKUOTO34HBCI7A986J"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Marketing",\n' +
    '            "name": "Pollich - Hilpert",\n' +
    '            "title": "Chief Financial Officer",\n' +
    '            "address": {\n' +
    '                "address": "1029 Adams Street",\n' +
    '                "city": "San Diego",\n' +
    '                "state": "Maryland",\n' +
    '                "stateCode": "MD",\n' +
    '                "postalCode": "63847",\n' +
    '                "coordinates": {\n' +
    '                    "lat": -25.843393,\n' +
    '                    "lng": -62.692681\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "127-297",\n' +
    '        "ssn": "902-438-728",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "moderator"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 11,\n' +
    '        "firstName": "Liam",\n' +
    '        "lastName": "Garcia",\n' +
    '        "maidenName": "",\n' +
    '        "age": 29,\n' +
    '        "gender": "male",\n' +
    '        "email": "liam.garcia@x.dummyjson.com",\n' +
    '        "phone": "+92 870-217-6201",\n' +
    '        "username": "liamg",\n' +
    '        "password": "liamgpass",\n' +
    '        "birthDate": "1995-6-6",\n' +
    '        "image": "https://dummyjson.com/icon/liamg/128",\n' +
    '        "bloodGroup": "AB-",\n' +
    '        "height": 162.32,\n' +
    '        "weight": 93.16,\n' +
    '        "eyeColor": "Violet",\n' +
    '        "hair": {\n' +
    '            "color": "Red",\n' +
    '            "type": "Wavy"\n' +
    '        },\n' +
    '        "ip": "56.201.85.9",\n' +
    '        "address": {\n' +
    '            "address": "576 Fifth Street",\n' +
    '            "city": "Denver",\n' +
    '            "state": "South Dakota",\n' +
    '            "stateCode": "SD",\n' +
    '            "postalCode": "57252",\n' +
    '            "coordinates": {\n' +
    '                "lat": -66.218177,\n' +
    '                "lng": -145.340165\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "31:9a:28:8b:99:6c",\n' +
    '        "university": "Ohio State University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "02/27",\n' +
    '            "cardNumber": "2302893002194899",\n' +
    '            "cardType": "Discover",\n' +
    '            "currency": "GBP",\n' +
    '            "iban": "O8ENPRB9UVBL2EFZ7601KC09"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Services",\n' +
    '            "name": "Considine - Torp",\n' +
    '            "title": "Web Developer",\n' +
    '            "address": {\n' +
    '                "address": "27 Cedar Street",\n' +
    '                "city": "Philadelphia",\n' +
    '                "state": "Connecticut",\n' +
    '                "stateCode": "CT",\n' +
    '                "postalCode": "79574",\n' +
    '                "coordinates": {\n' +
    '                    "lat": -81.841588,\n' +
    '                    "lng": 31.79423\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "326-604",\n' +
    '        "ssn": "933-784-949",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "moderator"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 12,\n' +
    '        "firstName": "Mia",\n' +
    '        "lastName": "Rodriguez",\n' +
    '        "maidenName": "",\n' +
    '        "age": 24,\n' +
    '        "gender": "female",\n' +
    '        "email": "mia.rodriguez@x.dummyjson.com",\n' +
    '        "phone": "+49 989-461-8403",\n' +
    '        "username": "miar",\n' +
    '        "password": "miarpass",\n' +
    '        "birthDate": "2000-8-4",\n' +
    '        "image": "https://dummyjson.com/icon/miar/128",\n' +
    '        "bloodGroup": "O-",\n' +
    '        "height": 188.08,\n' +
    '        "weight": 56.03,\n' +
    '        "eyeColor": "Blue",\n' +
    '        "hair": {\n' +
    '            "color": "Purple",\n' +
    '            "type": "Wavy"\n' +
    '        },\n' +
    '        "ip": "11.72.253.90",\n' +
    '        "address": {\n' +
    '            "address": "1627 Sixth Street",\n' +
    '            "city": "Jacksonville",\n' +
    '            "state": "West Virginia",\n' +
    '            "stateCode": "WV",\n' +
    '            "postalCode": "41810",\n' +
    '            "coordinates": {\n' +
    '                "lat": 24.857497,\n' +
    '                "lng": -34.865429\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "53:d7:a4:6:1e:58",\n' +
    '        "university": "William & Mary",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/26",\n' +
    '            "cardNumber": "1539872303456158",\n' +
    '            "cardType": "Carte Bancaire",\n' +
    '            "currency": "CAD",\n' +
    '            "iban": "EBMD95RLK8B82ZAZNXBJ09V5"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Accounting",\n' +
    '            "name": "Miller, Schowalter and Wisozk",\n' +
    '            "title": "Business Analyst",\n' +
    '            "address": {\n' +
    '                "address": "1039 Washington Street",\n' +
    '                "city": "Philadelphia",\n' +
    '                "state": "New Jersey",\n' +
    '                "stateCode": "NJ",\n' +
    '                "postalCode": "57518",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 85.455933,\n' +
    '                    "lng": 164.246103\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "754-660",\n' +
    '        "ssn": "749-524-124",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "moderator"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 13,\n' +
    '        "firstName": "Noah",\n' +
    '        "lastName": "Hernandez",\n' +
    '        "maidenName": "",\n' +
    '        "age": 40,\n' +
    '        "gender": "male",\n' +
    '        "email": "noah.hernandez@x.dummyjson.com",\n' +
    '        "phone": "+49 393-605-6968",\n' +
    '        "username": "noahh",\n' +
    '        "password": "noahhpass",\n' +
    '        "birthDate": "1984-6-5",\n' +
    '        "image": "https://dummyjson.com/icon/noahh/128",\n' +
    '        "bloodGroup": "AB+",\n' +
    '        "height": 188.62,\n' +
    '        "weight": 69.49,\n' +
    '        "eyeColor": "Brown",\n' +
    '        "hair": {\n' +
    '            "color": "Red",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "169.154.126.57",\n' +
    '        "address": {\n' +
    '            "address": "1413 Maple Street",\n' +
    '            "city": "New York",\n' +
    '            "state": "North Dakota",\n' +
    '            "stateCode": "ND",\n' +
    '            "postalCode": "73696",\n' +
    '            "coordinates": {\n' +
    '                "lat": -25.0377,\n' +
    '                "lng": -151.70469\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "d4:fe:ae:8f:eb:a3",\n' +
    '        "university": "New York University (NYU)",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/26",\n' +
    '            "cardNumber": "1681772579326385",\n' +
    '            "cardType": "Discover",\n' +
    '            "currency": "SEK",\n' +
    '            "iban": "G4UIZKIQVPJM9D31XQVR1E9Z"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Engineering",\n' +
    '            "name": "Botsford, Marquardt and Roberts",\n' +
    '            "title": "Database Administrator",\n' +
    '            "address": {\n' +
    '                "address": "62 Third Street",\n' +
    '                "city": "Seattle",\n' +
    '                "state": "Oregon",\n' +
    '                "stateCode": "OR",\n' +
    '                "postalCode": "83474",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 19.490447,\n' +
    '                    "lng": -13.173207\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "877-628",\n' +
    '        "ssn": "660-847-389",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "moderator"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 14,\n' +
    '        "firstName": "Charlotte",\n' +
    '        "lastName": "Lopez",\n' +
    '        "maidenName": "Martinez",\n' +
    '        "age": 36,\n' +
    '        "gender": "female",\n' +
    '        "email": "charlotte.lopez@x.dummyjson.com",\n' +
    '        "phone": "+44 373-953-5028",\n' +
    '        "username": "charlottem",\n' +
    '        "password": "charlottempass",\n' +
    '        "birthDate": "1988-6-8",\n' +
    '        "image": "https://dummyjson.com/icon/charlottem/128",\n' +
    '        "bloodGroup": "AB-",\n' +
    '        "height": 178.92,\n' +
    '        "weight": 82.46,\n' +
    '        "eyeColor": "Brown",\n' +
    '        "hair": {\n' +
    '            "color": "Gray",\n' +
    '            "type": "Kinky"\n' +
    '        },\n' +
    '        "ip": "119.103.95.60",\n' +
    '        "address": {\n' +
    '            "address": "208 Second Street",\n' +
    '            "city": "Columbus",\n' +
    '            "state": "Ohio",\n' +
    '            "stateCode": "OH",\n' +
    '            "postalCode": "42044",\n' +
    '            "coordinates": {\n' +
    '                "lat": -44.443762,\n' +
    '                "lng": -151.420561\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "f6:ff:37:aa:6c:f1",\n' +
    '        "university": "Northeastern University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "02/27",\n' +
    '            "cardNumber": "5675368650551956",\n' +
    '            "cardType": "Maestro",\n' +
    '            "currency": "CNY",\n' +
    '            "iban": "FKK6U634LGI3E7N517DLVVTL"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Accounting",\n' +
    '            "name": "Zulauf and Sons",\n' +
    '            "title": "Chief Executive Officer",\n' +
    '            "address": {\n' +
    '                "address": "569 Jefferson Street",\n' +
    '                "city": "Los Angeles",\n' +
    '                "state": "Montana",\n' +
    '                "stateCode": "MT",\n' +
    '                "postalCode": "17779",\n' +
    '                "coordinates": {\n' +
    '                    "lat": -18.371256,\n' +
    '                    "lng": 22.566258\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "364-782",\n' +
    '        "ssn": "255-491-479",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "moderator"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 15,\n' +
    '        "firstName": "William",\n' +
    '        "lastName": "Gonzalez",\n' +
    '        "maidenName": "",\n' +
    '        "age": 32,\n' +
    '        "gender": "male",\n' +
    '        "email": "william.gonzalez@x.dummyjson.com",\n' +
    '        "phone": "+81 905-252-7319",\n' +
    '        "username": "williamg",\n' +
    '        "password": "williamgpass",\n' +
    '        "birthDate": "1992-3-27",\n' +
    '        "image": "https://dummyjson.com/icon/williamg/128",\n' +
    '        "bloodGroup": "B-",\n' +
    '        "height": 173.21,\n' +
    '        "weight": 82.41,\n' +
    '        "eyeColor": "Hazel",\n' +
    '        "hair": {\n' +
    '            "color": "Gray",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "250.2.241.204",\n' +
    '        "address": {\n' +
    '            "address": "31 Maple Street",\n' +
    '            "city": "San Jose",\n' +
    '            "state": "Utah",\n' +
    '            "stateCode": "UT",\n' +
    '            "postalCode": "78243",\n' +
    '            "coordinates": {\n' +
    '                "lat": 8.152876,\n' +
    '                "lng": 113.29799\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "f5:68:28:f9:ec:89",\n' +
    '        "university": "Tufts University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "03/27",\n' +
    '            "cardNumber": "6053000793215148",\n' +
    '            "cardType": "Mir",\n' +
    '            "currency": "EUR",\n' +
    '            "iban": "AR01SNDMKGECX0EYH7UCW61W"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Marketing",\n' +
    '            "name": "Spinka - Dickinson",\n' +
    '            "title": "Software Architect",\n' +
    '            "address": {\n' +
    '                "address": "1538 Eighth Street",\n' +
    '                "city": "San Jose",\n' +
    '                "state": "Missouri",\n' +
    '                "stateCode": "MO",\n' +
    '                "postalCode": "29673",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 24.169361,\n' +
    '                    "lng": -29.395167\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "830-515",\n' +
    '        "ssn": "690-544-755",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "moderator"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 16,\n' +
    '        "firstName": "Avery",\n' +
    '        "lastName": "Perez",\n' +
    '        "maidenName": "",\n' +
    '        "age": 25,\n' +
    '        "gender": "female",\n' +
    '        "email": "avery.perez@x.dummyjson.com",\n' +
    '        "phone": "+61 731-431-3457",\n' +
    '        "username": "averyp",\n' +
    '        "password": "averyppass",\n' +
    '        "birthDate": "1999-3-10",\n' +
    '        "image": "https://dummyjson.com/icon/averyp/128",\n' +
    '        "bloodGroup": "O-",\n' +
    '        "height": 172.68,\n' +
    '        "weight": 93.9,\n' +
    '        "eyeColor": "Brown",\n' +
    '        "hair": {\n' +
    '            "color": "Green",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "131.217.4.214",\n' +
    '        "address": {\n' +
    '            "address": "1125 First Street",\n' +
    '            "city": "Columbus",\n' +
    '            "state": "Iowa",\n' +
    '            "stateCode": "IA",\n' +
    '            "postalCode": "30973",\n' +
    '            "coordinates": {\n' +
    '                "lat": 12.789127,\n' +
    '                "lng": 85.792598\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "b3:ff:f3:c5:37:46",\n' +
    '        "university": "Harvard University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "04/27",\n' +
    '            "cardNumber": "0961014686718571",\n' +
    '            "cardType": "Carte Bancaire",\n' +
    '            "currency": "USD",\n' +
    '            "iban": "28JYZAY4KYT48YI8QW40PWXR"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Accounting",\n' +
    '            "name": "Herzog Inc",\n' +
    '            "title": "Database Administrator",\n' +
    '            "address": {\n' +
    '                "address": "183 Maple Street",\n' +
    '                "city": "New York",\n' +
    '                "state": "Rhode Island",\n' +
    '                "stateCode": "RI",\n' +
    '                "postalCode": "45238",\n' +
    '                "coordinates": {\n' +
    '                    "lat": -53.318189,\n' +
    '                    "lng": 105.835271\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "348-493",\n' +
    '        "ssn": "679-523-686",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 17,\n' +
    '        "firstName": "Evelyn",\n' +
    '        "lastName": "Sanchez",\n' +
    '        "maidenName": "",\n' +
    '        "age": 37,\n' +
    '        "gender": "female",\n' +
    '        "email": "evelyn.sanchez@x.dummyjson.com",\n' +
    '        "phone": "+1 623-880-6871",\n' +
    '        "username": "evelyns",\n' +
    '        "password": "evelynspass",\n' +
    '        "birthDate": "1987-10-13",\n' +
    '        "image": "https://dummyjson.com/icon/evelyns/128",\n' +
    '        "bloodGroup": "B+",\n' +
    '        "height": 184.08,\n' +
    '        "weight": 83.15,\n' +
    '        "eyeColor": "Violet",\n' +
    '        "hair": {\n' +
    '            "color": "Blue",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "87.114.135.146",\n' +
    '        "address": {\n' +
    '            "address": "1170 Lincoln Street",\n' +
    '            "city": "San Diego",\n' +
    '            "state": "Wyoming",\n' +
    '            "stateCode": "WY",\n' +
    '            "postalCode": "43423",\n' +
    '            "coordinates": {\n' +
    '                "lat": -83.31484,\n' +
    '                "lng": 11.768071\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "f8:e5:bd:43:bc:d8",\n' +
    '        "university": "Washington University in St. Louis",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "04/29",\n' +
    '            "cardNumber": "4557521697420096",\n' +
    '            "cardType": "UnionPay",\n' +
    '            "currency": "SEK",\n' +
    '            "iban": "KN8XAPR2J5UB8AKDI1EVJ56R"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Support",\n' +
    '            "name": "Predovic - Johns",\n' +
    '            "title": "Chief Financial Officer",\n' +
    '            "address": {\n' +
    '                "address": "1802 Ninth Street",\n' +
    '                "city": "San Diego",\n' +
    '                "state": "Minnesota",\n' +
    '                "stateCode": "MN",\n' +
    '                "postalCode": "89416",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 29.034592,\n' +
    '                    "lng": -78.004598\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "604-817",\n' +
    '        "ssn": "689-332-644",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 18,\n' +
    '        "firstName": "Logan",\n' +
    '        "lastName": "Torres",\n' +
    '        "maidenName": "",\n' +
    '        "age": 31,\n' +
    '        "gender": "male",\n' +
    '        "email": "logan.torres@x.dummyjson.com",\n' +
    '        "phone": "+81 507-434-8733",\n' +
    '        "username": "logant",\n' +
    '        "password": "logantpass",\n' +
    '        "birthDate": "1993-10-26",\n' +
    '        "image": "https://dummyjson.com/icon/logant/128",\n' +
    '        "bloodGroup": "A+",\n' +
    '        "height": 190.04,\n' +
    '        "weight": 72.43,\n' +
    '        "eyeColor": "Green",\n' +
    '        "hair": {\n' +
    '            "color": "Green",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "155.98.15.162",\n' +
    '        "address": {\n' +
    '            "address": "907 Seventh Street",\n' +
    '            "city": "Columbus",\n' +
    '            "state": "Arkansas",\n' +
    '            "stateCode": "AR",\n' +
    '            "postalCode": "78805",\n' +
    '            "coordinates": {\n' +
    '                "lat": -64.846516,\n' +
    '                "lng": 174.775744\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "40:d:5c:1:7d:bf",\n' +
    '        "university": "University of Illinois--Urbana-Champaign",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/26",\n' +
    '            "cardNumber": "7884268130452098",\n' +
    '            "cardType": "UnionPay",\n' +
    '            "currency": "NZD",\n' +
    '            "iban": "HZM7V9PYHPZBN72IDFPXGN8Q"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Training",\n' +
    '            "name": "Jast - Nader",\n' +
    '            "title": "Data Analyst",\n' +
    '            "address": {\n' +
    '                "address": "947 Main Street",\n' +
    '                "city": "Denver",\n' +
    '                "state": "Minnesota",\n' +
    '                "stateCode": "MN",\n' +
    '                "postalCode": "71896",\n' +
    '                "coordinates": {\n' +
    '                    "lat": -24.654063,\n' +
    '                    "lng": -147.255268\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "576-218",\n' +
    '        "ssn": "806-639-934",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 19,\n' +
    '        "firstName": "Abigail",\n' +
    '        "lastName": "Rivera",\n' +
    '        "maidenName": "",\n' +
    '        "age": 28,\n' +
    '        "gender": "female",\n' +
    '        "email": "abigail.rivera@x.dummyjson.com",\n' +
    '        "phone": "+91 228-363-7806",\n' +
    '        "username": "abigailr",\n' +
    '        "password": "abigailrpass",\n' +
    '        "birthDate": "1996-10-11",\n' +
    '        "image": "https://dummyjson.com/icon/abigailr/128",\n' +
    '        "bloodGroup": "B+",\n' +
    '        "height": 186.39,\n' +
    '        "weight": 74.61,\n' +
    '        "eyeColor": "Violet",\n' +
    '        "hair": {\n' +
    '            "color": "Blue",\n' +
    '            "type": "Kinky"\n' +
    '        },\n' +
    '        "ip": "19.183.240.94",\n' +
    '        "address": {\n' +
    '            "address": "996 Oak Street",\n' +
    '            "city": "Chicago",\n' +
    '            "state": "New Mexico",\n' +
    '            "stateCode": "NM",\n' +
    '            "postalCode": "11407",\n' +
    '            "coordinates": {\n' +
    '                "lat": 44.321308,\n' +
    '                "lng": -3.723903\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "1d:a6:58:2a:e5:e4",\n' +
    '        "university": "California Institute of Technology (Caltech)",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "02/28",\n' +
    '            "cardNumber": "4832361886407551",\n' +
    '            "cardType": "RuPay",\n' +
    '            "currency": "BRL",\n' +
    '            "iban": "O02LHDNNFCVSM6D4H81DIQHE"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Human Resources",\n' +
    '            "name": "Prohaska - Thiel",\n' +
    '            "title": "Business Analyst",\n' +
    '            "address": {\n' +
    '                "address": "1402 Adams Street",\n' +
    '                "city": "Austin",\n' +
    '                "state": "Wisconsin",\n' +
    '                "stateCode": "WI",\n' +
    '                "postalCode": "51456",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 25.672938,\n' +
    '                    "lng": -76.54967\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "173-637",\n' +
    '        "ssn": "655-823-929",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 20,\n' +
    '        "firstName": "Jackson",\n' +
    '        "lastName": "Evans",\n' +
    '        "maidenName": "",\n' +
    '        "age": 34,\n' +
    '        "gender": "male",\n' +
    '        "email": "jackson.evans@x.dummyjson.com",\n' +
    '        "phone": "+44 468-628-6686",\n' +
    '        "username": "jacksone",\n' +
    '        "password": "jacksonepass",\n' +
    '        "birthDate": "1990-11-30",\n' +
    '        "image": "https://dummyjson.com/icon/jacksone/128",\n' +
    '        "bloodGroup": "O-",\n' +
    '        "height": 162.57,\n' +
    '        "weight": 74.37,\n' +
    '        "eyeColor": "Green",\n' +
    '        "hair": {\n' +
    '            "color": "Red",\n' +
    '            "type": "Straight"\n' +
    '        },\n' +
    '        "ip": "221.127.144.198",\n' +
    '        "address": {\n' +
    '            "address": "1873 Main Street",\n' +
    '            "city": "New York",\n' +
    '            "state": "Arkansas",\n' +
    '            "stateCode": "AR",\n' +
    '            "postalCode": "26600",\n' +
    '            "coordinates": {\n' +
    '                "lat": 34.722451,\n' +
    '                "lng": 63.448927\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "81:14:1:97:88:85",\n' +
    '        "university": "Ohio State University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "04/26",\n' +
    '            "cardNumber": "2109192842527801",\n' +
    '            "cardType": "BC Card",\n' +
    '            "currency": "EUR",\n' +
    '            "iban": "TX26FO9B7YR2VHYDSJBE32AX"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Legal",\n' +
    '            "name": "Kuhlman LLC",\n' +
    '            "title": "Web Developer",\n' +
    '            "address": {\n' +
    '                "address": "1706 First Street",\n' +
    '                "city": "Chicago",\n' +
    '                "state": "Hawaii",\n' +
    '                "stateCode": "HI",\n' +
    '                "postalCode": "34725",\n' +
    '                "coordinates": {\n' +
    '                    "lat": -80.416937,\n' +
    '                    "lng": -83.224516\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "843-260",\n' +
    '        "ssn": "248-787-886",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 21,\n' +
    '        "firstName": "Madison",\n' +
    '        "lastName": "Collins",\n' +
    '        "maidenName": "",\n' +
    '        "age": 26,\n' +
    '        "gender": "female",\n' +
    '        "email": "madison.collins@x.dummyjson.com",\n' +
    '        "phone": "+81 259-957-5711",\n' +
    '        "username": "madisonc",\n' +
    '        "password": "madisoncpass",\n' +
    '        "birthDate": "1998-3-7",\n' +
    '        "image": "https://dummyjson.com/icon/madisonc/128",\n' +
    '        "bloodGroup": "B-",\n' +
    '        "height": 189.28,\n' +
    '        "weight": 56.96,\n' +
    '        "eyeColor": "Red",\n' +
    '        "hair": {\n' +
    '            "color": "Gray",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "85.34.1.204",\n' +
    '        "address": {\n' +
    '            "address": "1892 Lincoln Street",\n' +
    '            "city": "Philadelphia",\n' +
    '            "state": "New Jersey",\n' +
    '            "stateCode": "NJ",\n' +
    '            "postalCode": "62091",\n' +
    '            "coordinates": {\n' +
    '                "lat": 52.993694,\n' +
    '                "lng": 160.486892\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "13:b0:d0:23:4d:26",\n' +
    '        "university": "University of Pennsylvania",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "04/28",\n' +
    '            "cardNumber": "5549175461210252",\n' +
    '            "cardType": "Mir",\n' +
    '            "currency": "CNY",\n' +
    '            "iban": "Y0WSN5IED255808SIYBUOMWO"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Engineering",\n' +
    '            "name": "Mayer - Smitham",\n' +
    '            "title": "Chief Technology Officer",\n' +
    '            "address": {\n' +
    '                "address": "1438 Main Street",\n' +
    '                "city": "San Diego",\n' +
    '                "state": "Delaware",\n' +
    '                "stateCode": "DE",\n' +
    '                "postalCode": "63144",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 1.629613,\n' +
    '                    "lng": 23.232982\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "716-166",\n' +
    '        "ssn": "457-258-950",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 22,\n' +
    '        "firstName": "Elijah",\n' +
    '        "lastName": "Stewart",\n' +
    '        "maidenName": "",\n' +
    '        "age": 33,\n' +
    '        "gender": "male",\n' +
    '        "email": "elijah.stewart@x.dummyjson.com",\n' +
    '        "phone": "+44 468-357-7872",\n' +
    '        "username": "elijahs",\n' +
    '        "password": "elijahspass",\n' +
    '        "birthDate": "1991-10-22",\n' +
    '        "image": "https://dummyjson.com/icon/elijahs/128",\n' +
    '        "bloodGroup": "A-",\n' +
    '        "height": 195.33,\n' +
    '        "weight": 81.64,\n' +
    '        "eyeColor": "Blue",\n' +
    '        "hair": {\n' +
    '            "color": "Purple",\n' +
    '            "type": "Straight"\n' +
    '        },\n' +
    '        "ip": "23.87.135.62",\n' +
    '        "address": {\n' +
    '            "address": "1701 Eighth Street",\n' +
    '            "city": "Columbus",\n' +
    '            "state": "Illinois",\n' +
    '            "stateCode": "IL",\n' +
    '            "postalCode": "31585",\n' +
    '            "coordinates": {\n' +
    '                "lat": -54.833799,\n' +
    '                "lng": -174.504027\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "75:17:c6:35:fc:6d",\n' +
    '        "university": "Georgetown University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/27",\n' +
    '            "cardNumber": "0798116671286564",\n' +
    '            "cardType": "JCB",\n' +
    '            "currency": "GBP",\n' +
    '            "iban": "E1XUHCC1N39WGU6XESSK1CAO"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Legal",\n' +
    '            "name": "Langworth Group",\n' +
    '            "title": "Business Analyst",\n' +
    '            "address": {\n' +
    '                "address": "155 Ninth Street",\n' +
    '                "city": "Washington",\n' +
    '                "state": "South Dakota",\n' +
    '                "stateCode": "SD",\n' +
    '                "postalCode": "19039",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 61.279254,\n' +
    '                    "lng": -12.607767\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "520-394",\n' +
    '        "ssn": "287-380-801",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 23,\n' +
    '        "firstName": "Chloe",\n' +
    '        "lastName": "Morales",\n' +
    '        "maidenName": "",\n' +
    '        "age": 39,\n' +
    '        "gender": "female",\n' +
    '        "email": "chloe.morales@x.dummyjson.com",\n' +
    '        "phone": "+92 468-541-7133",\n' +
    '        "username": "chloem",\n' +
    '        "password": "chloempass",\n' +
    '        "birthDate": "1985-4-21",\n' +
    '        "image": "https://dummyjson.com/icon/chloem/128",\n' +
    '        "bloodGroup": "O+",\n' +
    '        "height": 185.07,\n' +
    '        "weight": 63.97,\n' +
    '        "eyeColor": "Brown",\n' +
    '        "hair": {\n' +
    '            "color": "Red",\n' +
    '            "type": "Kinky"\n' +
    '        },\n' +
    '        "ip": "66.78.20.21",\n' +
    '        "address": {\n' +
    '            "address": "401 Fourth Street",\n' +
    '            "city": "Dallas",\n' +
    '            "state": "New Jersey",\n' +
    '            "stateCode": "NJ",\n' +
    '            "postalCode": "54972",\n' +
    '            "coordinates": {\n' +
    '                "lat": -30.190759,\n' +
    '                "lng": -58.705979\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "fc:f:29:e1:37:b8",\n' +
    '        "university": "Syracuse University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/28",\n' +
    '            "cardNumber": "3150496938377346",\n' +
    '            "cardType": "American Express",\n' +
    '            "currency": "PKR",\n' +
    '            "iban": "P7YLGOOBWBD1SRWDWSFO3PZ0"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Sales",\n' +
    '            "name": "Grady LLC",\n' +
    '            "title": "Database Administrator",\n' +
    '            "address": {\n' +
    '                "address": "269 Third Street",\n' +
    '                "city": "Houston",\n' +
    '                "state": "North Carolina",\n' +
    '                "stateCode": "NC",\n' +
    '                "postalCode": "10385",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 40.098115,\n' +
    '                    "lng": -1.762972\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "913-597",\n' +
    '        "ssn": "938-883-163",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 24,\n' +
    '        "firstName": "Mateo",\n' +
    '        "lastName": "Nguyen",\n' +
    '        "maidenName": "",\n' +
    '        "age": 30,\n' +
    '        "gender": "male",\n' +
    '        "email": "mateo.nguyen@x.dummyjson.com",\n' +
    '        "phone": "+1 341-597-6694",\n' +
    '        "username": "mateon",\n' +
    '        "password": "mateonpass",\n' +
    '        "birthDate": "1994-6-2",\n' +
    '        "image": "https://dummyjson.com/icon/mateon/128",\n' +
    '        "bloodGroup": "O+",\n' +
    '        "height": 174.29,\n' +
    '        "weight": 59.98,\n' +
    '        "eyeColor": "Red",\n' +
    '        "hair": {\n' +
    '            "color": "Purple",\n' +
    '            "type": "Wavy"\n' +
    '        },\n' +
    '        "ip": "192.57.144.7",\n' +
    '        "address": {\n' +
    '            "address": "1578 Fourth Street",\n' +
    '            "city": "Columbus",\n' +
    '            "state": "Missouri",\n' +
    '            "stateCode": "MO",\n' +
    '            "postalCode": "20673",\n' +
    '            "coordinates": {\n' +
    '                "lat": -32.828675,\n' +
    '                "lng": -82.557354\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "a7:26:10:7a:36:29",\n' +
    '        "university": "Columbia University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "03/26",\n' +
    '            "cardNumber": "5545852224851851",\n' +
    '            "cardType": "JCB",\n' +
    '            "currency": "TRY",\n' +
    '            "iban": "WEBE9SBX588VFUCVCA6KFHWB"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Accounting",\n' +
    '            "name": "Spinka LLC",\n' +
    '            "title": "Business Analyst",\n' +
    '            "address": {\n' +
    '                "address": "1967 Jefferson Street",\n' +
    '                "city": "Dallas",\n' +
    '                "state": "Louisiana",\n' +
    '                "stateCode": "LA",\n' +
    '                "postalCode": "78527",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 75.982676,\n' +
    '                    "lng": 164.459743\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "229-249",\n' +
    '        "ssn": "416-877-230",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 25,\n' +
    '        "firstName": "Harper",\n' +
    '        "lastName": "Kelly",\n' +
    '        "maidenName": "Evans",\n' +
    '        "age": 27,\n' +
    '        "gender": "female",\n' +
    '        "email": "harper.kelly@x.dummyjson.com",\n' +
    '        "phone": "+92 518-863-2863",\n' +
    '        "username": "harpere",\n' +
    '        "password": "harperepass",\n' +
    '        "birthDate": "1997-3-3",\n' +
    '        "image": "https://dummyjson.com/icon/harpere/128",\n' +
    '        "bloodGroup": "AB-",\n' +
    '        "height": 184.32,\n' +
    '        "weight": 81.69,\n' +
    '        "eyeColor": "Amber",\n' +
    '        "hair": {\n' +
    '            "color": "Red",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "174.111.61.162",\n' +
    '        "address": {\n' +
    '            "address": "1591 Adams Street",\n' +
    '            "city": "Philadelphia",\n' +
    '            "state": "New York",\n' +
    '            "stateCode": "NY",\n' +
    '            "postalCode": "69521",\n' +
    '            "coordinates": {\n' +
    '                "lat": -26.832913,\n' +
    '                "lng": -75.445017\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "b:ff:33:67:94:e4",\n' +
    '        "university": "Boston College",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "04/26",\n' +
    '            "cardNumber": "1298153007505587",\n' +
    '            "cardType": "RuPay",\n' +
    '            "currency": "JPY",\n' +
    '            "iban": "DJI19LCUNUHP6YSGPY52D5VG"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Legal",\n' +
    '            "name": "Leffler, Rolfson and Becker",\n' +
    '            "title": "Business Development Manager",\n' +
    '            "address": {\n' +
    '                "address": "16 Maple Street",\n' +
    '                "city": "Austin",\n' +
    '                "state": "North Carolina",\n' +
    '                "stateCode": "NC",\n' +
    '                "postalCode": "68274",\n' +
    '                "coordinates": {\n' +
    '                    "lat": -15.423746,\n' +
    '                    "lng": 149.298887\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "592-557",\n' +
    '        "ssn": "209-544-548",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 26,\n' +
    '        "firstName": "Evelyn",\n' +
    '        "lastName": "Gonzalez",\n' +
    '        "maidenName": "",\n' +
    '        "age": 35,\n' +
    '        "gender": "female",\n' +
    '        "email": "evelyn.gonzalez@x.dummyjson.com",\n' +
    '        "phone": "+61 708-508-4638",\n' +
    '        "username": "evelyng",\n' +
    '        "password": "evelyngpass",\n' +
    '        "birthDate": "1989-2-5",\n' +
    '        "image": "https://dummyjson.com/icon/evelyng/128",\n' +
    '        "bloodGroup": "O+",\n' +
    '        "height": 168.94,\n' +
    '        "weight": 58.47,\n' +
    '        "eyeColor": "Red",\n' +
    '        "hair": {\n' +
    '            "color": "Black",\n' +
    '            "type": "Wavy"\n' +
    '        },\n' +
    '        "ip": "42.52.74.232",\n' +
    '        "address": {\n' +
    '            "address": "1065 Lincoln Street",\n' +
    '            "city": "Dallas",\n' +
    '            "state": "Maine",\n' +
    '            "stateCode": "ME",\n' +
    '            "postalCode": "84898",\n' +
    '            "coordinates": {\n' +
    '                "lat": 67.768359,\n' +
    '                "lng": 71.268643\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "89:5e:5a:2a:72:42",\n' +
    '        "university": "Washington University in St. Louis",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "03/28",\n' +
    '            "cardNumber": "9584313788145560",\n' +
    '            "cardType": "RuPay",\n' +
    '            "currency": "INR",\n' +
    '            "iban": "X4UPULQG61VIGA97USY7AAEB"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Accounting",\n' +
    '            "name": "Tromp, Gaylord and Weber",\n' +
    '            "title": "Project Manager",\n' +
    '            "address": {\n' +
    '                "address": "584 Ninth Street",\n' +
    '                "city": "Jacksonville",\n' +
    '                "state": "Wisconsin",\n' +
    '                "stateCode": "WI",\n' +
    '                "postalCode": "45633",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 26.014021,\n' +
    '                    "lng": 40.572436\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "569-275",\n' +
    '        "ssn": "487-680-127",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 27,\n' +
    '        "firstName": "Daniel",\n' +
    '        "lastName": "Cook",\n' +
    '        "maidenName": "",\n' +
    '        "age": 41,\n' +
    '        "gender": "male",\n' +
    '        "email": "daniel.cook@x.dummyjson.com",\n' +
    '        "phone": "+44 254-761-6843",\n' +
    '        "username": "danielc",\n' +
    '        "password": "danielcpass",\n' +
    '        "birthDate": "1983-12-25",\n' +
    '        "image": "https://dummyjson.com/icon/danielc/128",\n' +
    '        "bloodGroup": "AB+",\n' +
    '        "height": 186.21,\n' +
    '        "weight": 83.72,\n' +
    '        "eyeColor": "Brown",\n' +
    '        "hair": {\n' +
    '            "color": "Blonde",\n' +
    '            "type": "Curly"\n' +
    '        },\n' +
    '        "ip": "1.61.73.142",\n' +
    '        "address": {\n' +
    '            "address": "1163 Pine Street",\n' +
    '            "city": "Los Angeles",\n' +
    '            "state": "Nevada",\n' +
    '            "stateCode": "NV",\n' +
    '            "postalCode": "58781",\n' +
    '            "coordinates": {\n' +
    '                "lat": -3.456681,\n' +
    '                "lng": -134.937482\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "6e:73:dc:3a:85:10",\n' +
    '        "university": "Columbia University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "01/26",\n' +
    '            "cardNumber": "8452555751345228",\n' +
    '            "cardType": "Korean Express",\n' +
    '            "currency": "NZD",\n' +
    '            "iban": "A8DBPECO4X6D09WYOVT8UZK8"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Support",\n' +
    '            "name": "Morissette, Baumbach and Auer",\n' +
    '            "title": "Legal Counsel",\n' +
    '            "address": {\n' +
    '                "address": "938 Fifth Street",\n' +
    '                "city": "San Francisco",\n' +
    '                "state": "South Dakota",\n' +
    '                "stateCode": "SD",\n' +
    '                "postalCode": "45305",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 21.323588,\n' +
    '                    "lng": -83.531427\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "585-905",\n' +
    '        "ssn": "645-515-583",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 28,\n' +
    '        "firstName": "Lily",\n' +
    '        "lastName": "Lee",\n' +
    '        "maidenName": "Brown",\n' +
    '        "age": 29,\n' +
    '        "gender": "female",\n' +
    '        "email": "lily.lee@x.dummyjson.com",\n' +
    '        "phone": "+1 808-757-9867",\n' +
    '        "username": "lilyb",\n' +
    '        "password": "lilybpass",\n' +
    '        "birthDate": "1995-12-3",\n' +
    '        "image": "https://dummyjson.com/icon/lilyb/128",\n' +
    '        "bloodGroup": "AB-",\n' +
    '        "height": 181.42,\n' +
    '        "weight": 51.49,\n' +
    '        "eyeColor": "Gray",\n' +
    '        "hair": {\n' +
    '            "color": "Purple",\n' +
    '            "type": "Straight"\n' +
    '        },\n' +
    '        "ip": "67.184.255.96",\n' +
    '        "address": {\n' +
    '            "address": "1946 Oak Street",\n' +
    '            "city": "Phoenix",\n' +
    '            "state": "Massachusetts",\n' +
    '            "stateCode": "MA",\n' +
    '            "postalCode": "41540",\n' +
    '            "coordinates": {\n' +
    '                "lat": -9.87059,\n' +
    '                "lng": -72.336845\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "18:b6:c7:a:50:3f",\n' +
    '        "university": "Johns Hopkins University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/29",\n' +
    '            "cardNumber": "2903637820228856",\n' +
    '            "cardType": "Visa",\n' +
    '            "currency": "JPY",\n' +
    '            "iban": "BKX6ZWB8UJZD09RFOWFPPD3C"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Product Management",\n' +
    '            "name": "Cremin Inc",\n' +
    '            "title": "Quality Assurance Engineer",\n' +
    '            "address": {\n' +
    '                "address": "1735 Cedar Street",\n' +
    '                "city": "Phoenix",\n' +
    '                "state": "Wyoming",\n' +
    '                "stateCode": "WY",\n' +
    '                "postalCode": "85797",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 72.231441,\n' +
    '                    "lng": -158.147245\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "229-776",\n' +
    '        "ssn": "358-185-671",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 29,\n' +
    '        "firstName": "Henry",\n' +
    '        "lastName": "Hill",\n' +
    '        "maidenName": "",\n' +
    '        "age": 38,\n' +
    '        "gender": "male",\n' +
    '        "email": "henry.hill@x.dummyjson.com",\n' +
    '        "phone": "+1 240-833-4680",\n' +
    '        "username": "henryh",\n' +
    '        "password": "henryhpass",\n' +
    '        "birthDate": "1986-8-19",\n' +
    '        "image": "https://dummyjson.com/icon/henryh/128",\n' +
    '        "bloodGroup": "O-",\n' +
    '        "height": 180.25,\n' +
    '        "weight": 95.84,\n' +
    '        "eyeColor": "Gray",\n' +
    '        "hair": {\n' +
    '            "color": "Black",\n' +
    '            "type": "Straight"\n' +
    '        },\n' +
    '        "ip": "194.43.55.202",\n' +
    '        "address": {\n' +
    '            "address": "1837 Maple Street",\n' +
    '            "city": "Indianapolis",\n' +
    '            "state": "Delaware",\n' +
    '            "stateCode": "DE",\n' +
    '            "postalCode": "81783",\n' +
    '            "coordinates": {\n' +
    '                "lat": 35.498256,\n' +
    '                "lng": 154.088476\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "fa:c3:1b:21:5f:44",\n' +
    '        "university": "University of Illinois--Urbana-Champaign",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "02/26",\n' +
    '            "cardNumber": "7262597174206766",\n' +
    '            "cardType": "Diners Club International",\n' +
    '            "currency": "SEK",\n' +
    '            "iban": "7N3JP8KN9AUNXOWRQGAU2JX6"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Services",\n' +
    '            "name": "Gerlach, Funk and Schoen",\n' +
    '            "title": "Sales Manager",\n' +
    '            "address": {\n' +
    '                "address": "1651 Lincoln Street",\n' +
    '                "city": "San Francisco",\n' +
    '                "state": "West Virginia",\n' +
    '                "stateCode": "WV",\n' +
    '                "postalCode": "61805",\n' +
    '                "coordinates": {\n' +
    '                    "lat": -59.936335,\n' +
    '                    "lng": -12.405368\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "118-957",\n' +
    '        "ssn": "925-686-100",\n' +
    '        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    },\n' +
    '    {\n' +
    '        "id": 30,\n' +
    '        "firstName": "Addison",\n' +
    '        "lastName": "Wright",\n' +
    '        "maidenName": "",\n' +
    '        "age": 32,\n' +
    '        "gender": "female",\n' +
    '        "email": "addison.wright@x.dummyjson.com",\n' +
    '        "phone": "+1 514-384-3300",\n' +
    '        "username": "addisonw",\n' +
    '        "password": "addisonwpass",\n' +
    '        "birthDate": "1992-1-3",\n' +
    '        "image": "https://dummyjson.com/icon/addisonw/128",\n' +
    '        "bloodGroup": "B+",\n' +
    '        "height": 179.32,\n' +
    '        "weight": 76.93,\n' +
    '        "eyeColor": "Brown",\n' +
    '        "hair": {\n' +
    '            "color": "Blonde",\n' +
    '            "type": "Straight"\n' +
    '        },\n' +
    '        "ip": "11.35.69.81",\n' +
    '        "address": {\n' +
    '            "address": "568 Tenth Street",\n' +
    '            "city": "San Francisco",\n' +
    '            "state": "Montana",\n' +
    '            "stateCode": "MT",\n' +
    '            "postalCode": "54698",\n' +
    '            "coordinates": {\n' +
    '                "lat": 20.946052,\n' +
    '                "lng": 100.228822\n' +
    '            },\n' +
    '            "country": "United States"\n' +
    '        },\n' +
    '        "macAddress": "fb:0:94:21:16:c",\n' +
    '        "university": "Syracuse University",\n' +
    '        "bank": {\n' +
    '            "cardExpire": "05/28",\n' +
    '            "cardNumber": "3756638438861539",\n' +
    '            "cardType": "Carte Bancaire",\n' +
    '            "currency": "JPY",\n' +
    '            "iban": "OOPQTNZ74OLPKVT7TGB89UQL"\n' +
    '        },\n' +
    '        "company": {\n' +
    '            "department": "Services",\n' +
    '            "name": "Kreiger Inc",\n' +
    '            "title": "Human Resources Manager",\n' +
    '            "address": {\n' +
    '                "address": "1173 Eighth Street",\n' +
    '                "city": "San Diego",\n' +
    '                "state": "Michigan",\n' +
    '                "stateCode": "MI",\n' +
    '                "postalCode": "85777",\n' +
    '                "coordinates": {\n' +
    '                    "lat": 65.324413,\n' +
    '                    "lng": 87.142893\n' +
    '                },\n' +
    '                "country": "United States"\n' +
    '            }\n' +
    '        },\n' +
    '        "ein": "415-286",\n' +
    '        "ssn": "804-492-390",\n' +
    '        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",\n' +
    '        "crypto": {\n' +
    '            "coin": "Bitcoin",\n' +
    '            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",\n' +
    '            "network": "Ethereum (ERC20)"\n' +
    '        },\n' +
    '        "role": "user"\n' +
    '    }\n' +
    '    ]';
 let users = JSON.parse(jsonUsers);
console.log(users);


let sortedUsers = users.reduce((object,user) =>{
    for (const key in object) {
        if(user.role === key){
            object[key].push(user);
        }
    }
    return object
},{admin:[],moderator:[],user:[]})
console.log(sortedUsers);
let adminsMale = [];
let adminsFemale = [];
let simpleUsers = [];
let moderators = []
for (const key in sortedUsers) {
    sortedUsers[key].forEach(user =>{
        if(user.gender === 'male' && user.role === 'admin'){
            adminsMale.push(user);
        }else if(user.gender === 'female' && user.role === 'admin'){
            adminsFemale.push(user);
        }else if(user.role === 'user'){
            simpleUsers.push(user)
        }else{
            moderators.push(user);
        }
    });
}
console.log(adminsMale);
console.log(adminsFemale);
let sorted = {};
sorted['adminsMale'] = adminsMale;
sorted['adminsFemale'] = adminsFemale;
sorted['simpleUsers'] = simpleUsers;
sorted['moderators'] = moderators;
console.log(sorted);

