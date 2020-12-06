const players = [
  {
    name: 'LeBron James',
    number: 23,
    position: ['PG', 'PF', 'SF'],
    rating: 9.5,
    salary: 34000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/jamesle01.jpg',
  },
  {
    name: 'Giannis Antetokounmpo',
    number: 34,
    position: ['PF', 'SF'],
    rating: 9.3,
    salary: 32000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/antetgi01.jpg',
  },
  {
    name: 'James Harden',
    number: 13,
    position: ['PG', 'SG'],
    rating: 9.2,
    salary: 34000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/hardeja01.jpg',
  },
  {
    name: 'Stephen Curry',
    number: 30,
    position: ['PG'],
    rating: 9.4,
    salary: 33000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/curryst01.jpg',
  },
  {
    name: 'Jimmy Butler',
    number: 22,
    position: ['SF', 'SG'],
    rating: 8,
    salary: 28000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/butleji01.jpg',
  },
  {
    name: 'Jayson Tatum',
    number: 0,
    position: ['SG', 'SF'],
    rating: 8.2,
    salary: 28000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/tatumja01.jpg',
  },
  {
    name: 'Chris Paul',
    number: 3,
    position: ['PG'],
    rating: 8.9,
    salary: 28000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/paulch01.jpg',
  },
  {
    name: 'Blake Griffin',
    number: 23,
    position: ['PF'],
    rating: 8.0,
    salary: 26000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/griffbl01.jpg',
  },
  {
    name: 'Ben Simmons',
    number: 25,
    position: ['PG', 'SF'],
    rating: 8.2,
    salary: 28000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/simmobe01.jpg',
  },
  {
    name: 'Joel Embiid',
    number: 24,
    position: ['C'],
    rating: 7.8,
    salary: 25000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/embiijo01.jpg',
  },
  {
    name: 'Dwight Howard',
    number: 12,
    position: ['C'],
    rating: 6.8,
    salary: 2500000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/howardw01.jpg',
  },
  {
    name: 'Rajon Rondo',
    number: 14,
    position: ['PG'],
    rating: 6.5,
    salary: 8000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/rondora01.jpg',
  },
  {
    name: 'Dennis Schröder',
    number: 17,
    position: ['PG'],
    rating: 6.9,
    salary: 12000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/schrode01.jpg',
  },
  {
    name: 'Hassan Whiteside',
    number: 21,
    position: ['C'],
    rating: 5.0,
    salary: 7000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/whiteha01.jpg',
  },
  {
    name: 'CJ McCollum',
    number: 3,
    position: ['SG'],
    rating: 8.2,
    salary: 21000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/mccolcj01.jpg',
  },
  {
    name: 'Damian Lillard',
    number: 0,
    position: ['PG'],
    rating: 9.0,
    salary: 30000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/lillada01.jpg',
  },
  {
    name: 'Mario Hezonja',
    number: 44,
    position: 'SF',
    rating: 4.7,
    salary: 6500000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/hezonma01.jpg',
  },
  {
    name: 'Zion Williamson',
    number: 1,
    position: 'PF',
    rating: 7.8,
    salary: 6500000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/willizi01.jpg',
  },
  {
    name: 'Brandon Ingram',
    number: 14,
    position: 'SF',
    rating: 8,
    salary: 16000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/ingrabr01.jpg',
  },
  {
    name: 'Devin Booker',
    number: 1,
    position: ['SG'],
    rating: 8.7,
    salary: 20000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/bookede01.jpg',
  },
  {
    name: 'Deandre Ayton',
    number: 22,
    position: ['C'],
    rating: 6.7,
    salary: 10000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/aytonde01.jpg',
  },
  {
    name: 'Kevin Durant',
    number: 35,
    position: ['SF', 'SG'],
    rating: 9.5,
    salary: 34000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/duranke01.jpg',
  },
  {
    name: 'Kyrie Irving',
    number: 11,
    position: ['PG'],
    rating: 9.1,
    salary: 33000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/irvinky01.jpg',
  },
  {
    name: 'Kemba Walker',
    number: 8,
    position: ['PG'],
    rating: 9.2,
    salary: 33000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/walkeke02.jpg',
  },
  {
    name: 'Bismack Biyombo',
    number: 11,
    position: ['C'],
    rating: 3.5,
    salary: 8000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/biyombi01.jpg',
  },
  {
    name: 'Mo Bamba',
    number: 5,
    position: ['C', 'PF'],
    rating: 5.2,
    salary: 9000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/bambamo01.jpg',
  },
  {
    name: 'Terrence Ross',
    number: 8,
    position: ['PG', 'SG'],
    rating: 6.5,
    salary: 16000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/rosste01.jpg',
  },
  {
    name: 'DeMar DeRozan',
    number: 10,
    position: ['SG', 'SF'],
    rating: 7.5,
    salary: 22000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/derozde01.jpg',
  },
  {
    name: 'Pascal Siakam',
    number: 43,
    position: ['PF'],
    rating: 8.8,
    salary: 24000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/siakapa01.jpg',
  },
  {
    name: 'Fred VanVleet',
    number: 23,
    position: ['PG'],
    rating: 8.5,
    salary: 29000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/vanvlfr01.jpg',
  },
  {
    name: 'Nikola Jokić',
    number: 15,
    position: ['C'],
    rating: 9.0,
    salary: 32000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/jokicni01.jpg',
  },
  {
    name: 'Jamal Crawford',
    number: 1,
    position: ['SG', 'SF'],
    rating: 6.6,
    salary: 6000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/crawfja01.jpg',
  },
  {
    name: 'Jeff Green',
    number: 32,
    position: ['SF', 'PF'],
    rating: 5.9,
    salary: 16000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/greenje02.jpg',
  },
  {
    name: 'Caris LeVert',
    number: 22,
    position: ['SG', 'SF'],
    rating: 7.5,
    salary: 17000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/leverca01.jpg',
  },
  {
    name: 'RJ Barrett',
    number: 9,
    position: ['SG', 'SF'],
    rating: 6.5,
    salary: 8000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/barrerj01.jpg',
  },
  {
    name: 'JJ Reddick',
    number: 4,
    position: ['SG'],
    rating: 6.9,
    salary: 12000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/redicjj01.jpg',
  },
  {
    name: 'Donovan Mitchell',
    number: 45,
    position: ['PG', 'SG'],
    rating: 8.0,
    salary: 22000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/mitchdo01.jpg',
  },
  {
    name: 'Rudy Gobert',
    number: 27,
    position: ['C'],
    rating: 7.6,
    salary: 23000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/goberru01.jpg',
  },
  {
    name: 'Luka Dončić',
    number: 77,
    position: ['PG', 'SF'],
    rating: 9.1,
    salary: 27000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/doncilu01.jpg',
  },
  {
    name: 'Jordan Clarkson',
    number: 1,
    position: ['PG', 'SG'],
    rating: 6.8,
    salary: 17000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/clarkjo01.jpg',
  },
  {
    name: 'Kristaps Porziņģis',
    number: 6,
    position: ['PF', 'C'],
    rating: 8.2,
    salary: 28000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/porzikr01.jpg',
  },
  {
    name: 'Anthony Davis',
    number: 3,
    position: ['PF', 'C'],
    rating: 9.5,
    salary: 33000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/davisan02.jpg',
  },
  {
    name: 'Tyler Herro',
    number: 14,
    position: ['PF', 'SG'],
    rating: 7.7,
    salary: 11000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/herroty01.jpg',
  },
  {
    name: 'Carmelo Anthony',
    number: 7,
    position: ['SF', 'PF'],
    rating: 7.5,
    salary: 17000000,
    url:
      'https://www.basketball-reference.com/req/202011191/images/players/anthoca01.jpg',
  },
];

module.exports = players;

// TEMPLATE:
// {
//     name: '',
//     number: ,
//     position: '',
//     rating: ,
//     salary: 16000000,
//     url:
//       '',
//   },
