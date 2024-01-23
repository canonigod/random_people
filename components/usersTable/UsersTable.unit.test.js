import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UsersTable from "./UsersTable";
import TranslationContext from "../../context/TranslationContext";

const mockSetUserProfile = jest.fn();
const mockT = jest.fn((key) => key);
const mockUsers = [
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "آوا",
            "last": "حسینی"
        },
        "location": {
            "street": {
                "number": 4618,
                "name": "فلسطین"
            },
            "city": "کرمان",
            "state": "تهران",
            "country": "Iran",
            "postcode": 11025,
            "coordinates": {
                "latitude": "13.0251",
                "longitude": "98.6142"
            },
            "timezone": {
                "offset": "-6:00",
                "description": "Central Time (US & Canada), Mexico City"
            }
        },
        "email": "aw.hsyny@example.com",
        "login": {
            "uuid": "113379e3-014c-45c7-9a3a-90657de92e25",
            "username": "redmouse127",
            "password": "chase",
            "salt": "hrWtVCtO",
            "md5": "a342be4e03ae99b568396cedaca75df7",
            "sha1": "cbfb0e754878d99fc44f8e4a4937731fbec0cb2f",
            "sha256": "207c0eb775e14026f39ff63f0f5093ba85f85160db82cd8d7d6c7769835a0073"
        },
        "dob": {
            "date": "1965-12-22T07:00:02.395Z",
            "age": 58
        },
        "registered": {
            "date": "2009-07-10T23:56:57.631Z",
            "age": 14
        },
        "phone": "088-51813178",
        "cell": "0965-730-1998",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/44.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/44.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/44.jpg"
        },
        "nat": "IR"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Aglayida",
            "last": "Bilinskiy"
        },
        "location": {
            "street": {
                "number": 284,
                "name": "Keramichna"
            },
            "city": "Balakliya",
            "state": "Ivano-Frankivska",
            "country": "Ukraine",
            "postcode": 29242,
            "coordinates": {
                "latitude": "-58.8054",
                "longitude": "90.9467"
            },
            "timezone": {
                "offset": "-11:00",
                "description": "Midway Island, Samoa"
            }
        },
        "email": "aglayida.bilinskiy@example.com",
        "login": {
            "uuid": "d99c512f-fdea-4015-8060-53407b364fa4",
            "username": "crazyswan252",
            "password": "nympho",
            "salt": "rdEQpAq7",
            "md5": "9d36c1f6419da4df4466db8beaf17200",
            "sha1": "d271530c2029999112123fd8638421e4f1f270bb",
            "sha256": "a9cd4e68b3b2e8fd1563c77e5f48aead49d0ddc70db09c6c0dc55b38a41a985b"
        },
        "dob": {
            "date": "1997-09-12T09:01:19.557Z",
            "age": 26
        },
        "registered": {
            "date": "2013-09-12T10:57:24.284Z",
            "age": 10
        },
        "phone": "(066) A85-1031",
        "cell": "(067) D15-5834",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/37.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/37.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
        },
        "nat": "UA"
    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Elda",
            "last": "Monteiro"
        },
        "location": {
            "street": {
                "number": 3280,
                "name": "Rua Sete de Setembro "
            },
            "city": "Guarapuava",
            "state": "Amazonas",
            "country": "Brazil",
            "postcode": 31736,
            "coordinates": {
                "latitude": "66.3748",
                "longitude": "-118.9333"
            },
            "timezone": {
                "offset": "-11:00",
                "description": "Midway Island, Samoa"
            }
        },
        "email": "elda.monteiro@example.com",
        "login": {
            "uuid": "e9610d83-0624-4228-8e67-0b49405b5233",
            "username": "crazyfish945",
            "password": "ground",
            "salt": "nt7dECd7",
            "md5": "28aec40f87e0b3cfe25e3f6a8c09ca21",
            "sha1": "a6e979c585e61eba90ccc34fd4bcf9a3eef372fd",
            "sha256": "870d5812ee321cab6d56a4d3d9b7deeda2b94e85c88ed619d1c2254d98fb5a12"
        },
        "dob": {
            "date": "1963-11-22T15:03:44.726Z",
            "age": 60
        },
        "registered": {
            "date": "2015-07-31T03:13:08.586Z",
            "age": 8
        },
        "phone": "(84) 6777-2246",
        "cell": "(88) 7770-0425",
        "id": {
            "name": "CPF",
            "value": "053.172.837-99"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/12.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
        },
        "nat": "BR"
    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Tabita",
            "last": "Nascimento"
        },
        "location": {
            "street": {
                "number": 354,
                "name": "Rua São Sebastiao "
            },
            "city": "Contagem",
            "state": "Rio de Janeiro",
            "country": "Brazil",
            "postcode": 56848,
            "coordinates": {
                "latitude": "-33.7478",
                "longitude": "157.1025"
            },
            "timezone": {
                "offset": "-6:00",
                "description": "Central Time (US & Canada), Mexico City"
            }
        },
        "email": "tabita.nascimento@example.com",
        "login": {
            "uuid": "0770f644-f5a1-4e7a-bbc3-37bddbbb0163",
            "username": "smalllion147",
            "password": "desert",
            "salt": "GfbJmEzJ",
            "md5": "4941fb59041c8353616cfde6a5f07da5",
            "sha1": "50c9b5957f6c93adbf7e6561dcba7c8a01926751",
            "sha256": "89cf7976536310f0bc1bab92285aaa6a04dacc26ce5366f09341ce8462124d5e"
        },
        "dob": {
            "date": "1995-05-13T16:13:58.224Z",
            "age": 28
        },
        "registered": {
            "date": "2022-02-01T16:29:52.704Z",
            "age": 1
        },
        "phone": "(17) 9288-5922",
        "cell": "(95) 8545-9980",
        "id": {
            "name": "CPF",
            "value": "196.751.186-34"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/49.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
        },
        "nat": "BR"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Bozhemir",
            "last": "Iemelyanenko"
        },
        "location": {
            "street": {
                "number": 6550,
                "name": "Ploshcha Gorkogo"
            },
            "city": "Debalceve",
            "state": "Lvivska",
            "country": "Ukraine",
            "postcode": 76967,
            "coordinates": {
                "latitude": "14.8622",
                "longitude": "-177.7021"
            },
            "timezone": {
                "offset": "+1:00",
                "description": "Brussels, Copenhagen, Madrid, Paris"
            }
        },
        "email": "bozhemir.iemelyanenko@example.com",
        "login": {
            "uuid": "863b3d4c-ff0b-4ea0-b0d4-a8810937694c",
            "username": "organicrabbit638",
            "password": "barrett",
            "salt": "DslfcuHY",
            "md5": "52c02a873c00894546a3eeddacb7df83",
            "sha1": "3b523a9dd492a46e31b77e641af936449e881989",
            "sha256": "a8ec88c600c3e0a3b8fb6de20df8779c8ec67d22f00a69cc94f1ef1b4141ed29"
        },
        "dob": {
            "date": "1961-01-03T22:42:21.419Z",
            "age": 63
        },
        "registered": {
            "date": "2005-08-17T10:30:10.364Z",
            "age": 18
        },
        "phone": "(099) M69-7181",
        "cell": "(067) V56-3165",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/43.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
        },
        "nat": "UA"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Aleksi",
            "last": "Lassila"
        },
        "location": {
            "street": {
                "number": 2552,
                "name": "Fredrikinkatu"
            },
            "city": "Puolanka",
            "state": "Ostrobothnia",
            "country": "Finland",
            "postcode": 50792,
            "coordinates": {
                "latitude": "10.0019",
                "longitude": "-160.9304"
            },
            "timezone": {
                "offset": "-3:30",
                "description": "Newfoundland"
            }
        },
        "email": "aleksi.lassila@example.com",
        "login": {
            "uuid": "ef82cf3d-d8f4-44f9-9879-ffd12fac921d",
            "username": "lazyswan882",
            "password": "frozen",
            "salt": "q9xvmqoL",
            "md5": "45638e80d7c3e934f3c47dfff96136dc",
            "sha1": "fece93ac3d5441f2201fcb028cb26861cbe79e72",
            "sha256": "2d114e7c7b2935370f77d0ff92e9cf1f0c9785ccf7b4112163a018ccbb5f929a"
        },
        "dob": {
            "date": "1961-12-09T17:35:19.904Z",
            "age": 62
        },
        "registered": {
            "date": "2013-09-25T10:37:05.362Z",
            "age": 10
        },
        "phone": "07-017-454",
        "cell": "041-697-41-65",
        "id": {
            "name": "HETU",
            "value": "NaNNA011undefined"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/12.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/12.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/12.jpg"
        },
        "nat": "FI"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Ömür",
            "last": "Baykam"
        },
        "location": {
            "street": {
                "number": 5107,
                "name": "Abanoz Sk"
            },
            "city": "Burdur",
            "state": "Bitlis",
            "country": "Turkey",
            "postcode": 69737,
            "coordinates": {
                "latitude": "21.0626",
                "longitude": "-66.6844"
            },
            "timezone": {
                "offset": "+5:45",
                "description": "Kathmandu"
            }
        },
        "email": "omur.baykam@example.com",
        "login": {
            "uuid": "7e3147a4-38b7-4421-858d-19c9426f79eb",
            "username": "sadfish346",
            "password": "1028",
            "salt": "53moXOAh",
            "md5": "97c9b19ded6816e80f4da0f46affe9eb",
            "sha1": "0cebc8a4b0f21e5d079d027d94850c3e107e5a68",
            "sha256": "5fb200065dabb90977cbd519c38a84ca3d09c13a6f610a3a56d4fa3738e34c34"
        },
        "dob": {
            "date": "1990-07-25T04:20:46.692Z",
            "age": 33
        },
        "registered": {
            "date": "2004-03-13T21:57:25.569Z",
            "age": 19
        },
        "phone": "(359)-379-0169",
        "cell": "(220)-607-3086",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/9.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
        },
        "nat": "TR"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Timeo",
            "last": "Laurent"
        },
        "location": {
            "street": {
                "number": 6828,
                "name": "Rue de L'Abbaye"
            },
            "city": "Brest",
            "state": "Meurthe-et-Moselle",
            "country": "France",
            "postcode": 99261,
            "coordinates": {
                "latitude": "-69.4503",
                "longitude": "140.2374"
            },
            "timezone": {
                "offset": "+11:00",
                "description": "Magadan, Solomon Islands, New Caledonia"
            }
        },
        "email": "timeo.laurent@example.com",
        "login": {
            "uuid": "22d89539-9511-4754-aa87-4f65343957dd",
            "username": "happyduck257",
            "password": "buttons",
            "salt": "MfB70WEb",
            "md5": "9acb5115320c06de70192471a30c23c5",
            "sha1": "46a5ed83226a4eaca764b4a2e8ba5a34fa90a8ee",
            "sha256": "74888506daab8a756a18137f2ae0a7785d3c61b684f2b666858e5548a3ed4ba7"
        },
        "dob": {
            "date": "1952-05-09T10:46:23.593Z",
            "age": 71
        },
        "registered": {
            "date": "2004-05-30T12:43:37.206Z",
            "age": 19
        },
        "phone": "01-14-58-83-72",
        "cell": "06-97-97-95-10",
        "id": {
            "name": "INSEE",
            "value": "1520431019271 56"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/25.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
        },
        "nat": "FR"
    },
    {
        "gender": "female",
        "name": {
            "title": "Madame",
            "first": "Angelika",
            "last": "Bonnet"
        },
        "location": {
            "street": {
                "number": 7234,
                "name": "Rue Laure-Diebold"
            },
            "city": "Bourg-en-Lavaux",
            "state": "Uri",
            "country": "Switzerland",
            "postcode": 5509,
            "coordinates": {
                "latitude": "-35.1670",
                "longitude": "25.4959"
            },
            "timezone": {
                "offset": "+9:00",
                "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
            }
        },
        "email": "angelika.bonnet@example.com",
        "login": {
            "uuid": "1b01b786-1afc-472a-8020-e9d39c8622ae",
            "username": "angrysnake614",
            "password": "select",
            "salt": "txeDgIF5",
            "md5": "13b7fd494be98440ab97a8c0ec6eebc6",
            "sha1": "d920f92de13c73ef6d4c615003e5aad91d36c3e3",
            "sha256": "d83c459ea15f9384edb6eed33f60ed77a285692980de43af76881851d82ff558"
        },
        "dob": {
            "date": "1985-09-04T19:31:27.101Z",
            "age": 38
        },
        "registered": {
            "date": "2018-07-21T21:19:36.740Z",
            "age": 5
        },
        "phone": "078 198 76 96",
        "cell": "076 429 17 49",
        "id": {
            "name": "AVS",
            "value": "756.7053.7599.32"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/23.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/23.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/23.jpg"
        },
        "nat": "CH"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Akshita",
            "last": "Das"
        },
        "location": {
            "street": {
                "number": 6087,
                "name": "College St"
            },
            "city": "Pudukkottai",
            "state": "Bihar",
            "country": "India",
            "postcode": 20597,
            "coordinates": {
                "latitude": "68.5697",
                "longitude": "-109.2119"
            },
            "timezone": {
                "offset": "+3:30",
                "description": "Tehran"
            }
        },
        "email": "akshita.das@example.com",
        "login": {
            "uuid": "3ca610b4-4c11-469f-acf0-2be34190b60d",
            "username": "organiccat932",
            "password": "iforgot",
            "salt": "GKF6fRG8",
            "md5": "3b096305f5cb8972eff1d9e4901116f9",
            "sha1": "d06cb086bba0e24ca8aafde386d292869483f9c4",
            "sha256": "66aa3dc98d29df06fc482e1af05659adf6ba662d5f650b24aa45eb98dcf1f2ee"
        },
        "dob": {
            "date": "1999-03-21T06:23:34.345Z",
            "age": 24
        },
        "registered": {
            "date": "2011-09-20T21:24:15.658Z",
            "age": 12
        },
        "phone": "7182556728",
        "cell": "7795946759",
        "id": {
            "name": "UIDAI",
            "value": "415198214995"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/79.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
        },
        "nat": "IN"
    },
  ];
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ results: mockUsers }),
  })
);
const wrapper = ({ children }) => (
  <TranslationContext.Provider value={{ t: mockT }}>
    {children}
  </TranslationContext.Provider>
);


describe("UsersTable component", () => {
    test("fetches and displays user data", async () => {
      render(<UsersTable setUserProfile={mockSetUserProfile} />, { wrapper });
  
      await waitFor(() => {
        expect(screen.getAllByRole("row")).toHaveLength(mockUsers.length + 1); // +1 for the header row
      });
    });
  
    test("renders translation for table headers", async () => {
      render(<UsersTable setUserProfile={mockSetUserProfile} />, { wrapper });

      await waitFor(() => {
        expect(screen.getByText("name")).toBeInTheDocument();
        expect(screen.getByText("age")).toBeInTheDocument();
        expect(screen.getByText("city")).toBeInTheDocument();
        expect(screen.getByText("view")).toBeInTheDocument();
  
        expect(mockT).toHaveBeenCalledWith("name");
        expect(mockT).toHaveBeenCalledWith("age");
      });
  
    });
  
  });
  