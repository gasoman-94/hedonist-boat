import { Boat, Service } from './types';

export const BOATS: Boat[] = [
  {
    id: 'master-660',
    name: 'Master 660 Open',
    tagline: 'The Sport Explorer',
    type: 'Center-Console RIB',
    length: '6.58m',
    capacity: 12,
    imageUrl: '/images/Master660.webp',
    description: 'The Master 660 Open is a premier center-console RIB that blends exhilarating sports performance with uncompromising comfort on the open water. Tailored for family outings, coastal exploration, or adventurous day trips, this versatile vessel boasts exceptional agility and a spacious deck layout. With modern navigation amenities and superior sea-keeping capabilities, the Master 660 ensures an unforgettable nautical experience, making it the perfect choice for discovering hidden bays and pristine waters along the stunning Adriatic coastline.',
    specs: [
      { label: 'Length', value: '6.58m' },
      { label: 'Width', value: '2.72m' },
      { label: 'Engine', value: '200hp' },
      { label: 'Fuel Tank', value: '220 L' },
      { label: 'Water Tank', value: '77 L' }
    ],
    included: [
      '2 Fiberglass platforms', 'Compass', 'Electric bilge pump',
      'Roller bar with awning and navigation lights', 'Steering wheel -Fiberglass winch',
      'Storage compartments with USB sockets', 'Shower', 'Sun cushions'
    ],
    pricingDetails: {
      fullDay: 299,
      halfDay: 199,
      skipperFullDay: 99,
      skipperHalfDay: 49
    },
    services: [
      {
        id: 'm660-rent-full',
        title: 'Full Day Rental',
        type: 'rental',
        boatId: 'master-660',
        duration: '09:00 - 17:00',
        pricing: [{ type: 'flat', amount: 299, description: 'Base Price (Fuel extra)' }, { type: 'flat', amount: 99, description: 'Optional Skipper' }],
        description: 'Explore at your own pace for a full day.',
      },
      {
        id: 'm660-rent-half',
        title: 'Half Day Rental',
        type: 'rental',
        boatId: 'master-660',
        duration: '09:00-12:30 or 13:30-17:00',
        pricing: [{ type: 'flat', amount: 199, description: 'Base Price (Fuel extra)' }, { type: 'flat', amount: 49, description: 'Optional Skipper' }],
        description: 'Perfect for a morning dip or afternoon cruise.',
      },
      {
        id: 'm660-tour-dolphin',
        title: 'Guided Dolphin Tour',
        type: 'tour',
        boatId: 'master-660',
        pricing: [{ type: 'hourly', amount: 200, description: 'Includes Skipper & Fuel' }],
        description: 'A magical experience searching for dolphins. There are no fixed timeslots when it starts or ends, guests can choose how long they want to go.',
        features: ['Up to 12 people', 'Skipper included', 'Fuel included'],
        highlights: [
          'Embark on a flexible, custom-length quest to find playful dolphins',
          'Rely on an expert local skipper who knows the best dolphin hotspots',
          'Combine dolphin watching with swimming or sightseeing as you prefer',
          'Choose your own perfect tour duration, with no fixed schedules',
          'Fuel and professional skipper service are fully included'
        ],
        fullDescription: 'Set out on a thrilling quest to find dolphins with our Guided Dolphin Tour aboard the Master 660. Unlike scheduled group tours, this experience puts you entirely in control—you decide exactly how many hours you want to spend on the water.\n\nYour highly experienced skipper will take you directly to the areas along the Istrian coast where these magnificent creatures are most frequently spotted. While the primary focus of this tour is to locate and admire dolphins in their natural habitat, the flexible nature of the trip means you can easily customize your route.\n\nPlease bear in mind that dolphins are wild animals, and sightings can never be 100% guaranteed on any given day. However, since you control the duration of the tour, you can perfectly balance your time: if the dolphins are playing hide-and-seek, your skipper can easily divert to a beautiful hidden bay for a refreshing swim or a quick coastal panorama, and try searching for dolphins again later in the trip. Sit back and enjoy the ride, knowing both the fuel and skipper services are totally included in the price.',
        includes: [
          'Fully customizable dolphin-focused tour',
          'Highly experienced local skipper',
          'Fuel costs included',
          'Flexibility to add swimming stops'
        ],
        meetingPoint: 'Riva Poreč, Obala Maršala Tita',
        whatToBring: [
          'Camera or smartphone',
          'Light jacket or sweater',
          'Sunglasses and sunscreen',
          'Swimsuit & towel (if you plan to swim)'
        ],
        knowBeforeYouGo: [
          'Dolphins are wild animals; sightings are highly likely but never absolutely guaranteed.',
          'The itinerary is flexible—you can mix dolphin searching with swimming stops depending on the duration you book.',
          'Please arrive 15 minutes prior to your customized departure time.'
        ],
        hourlyPackages: [
          {
            hours: 1,
            price: 200,
            name: 'Quick Dolphin Search',
            locations: 'Known dolphin hotspots near Poreč',
            inclusions: ['Dolphin searching', 'Skipper included', 'Fuel included']
          },
          {
            hours: 2,
            price: 400,
            name: 'Standard Dolphin Safari',
            locations: 'Broader search area along the coast',
            inclusions: ['Extended dolphin searching', 'Skipper included', 'Fuel included']
          },
          {
            hours: 3,
            price: 600,
            name: 'Dolphins & Swimming',
            locations: 'Dolphin hotspots • 1 Hidden bay',
            inclusions: ['Dolphin searching', 'Swimming stop', 'Skipper included', 'Fuel included']
          },
          {
            hours: 4,
            price: 800,
            name: 'Half-Day Ocean Safari',
            locations: 'Extensive coastal cruising • Multiple bays',
            inclusions: ['Maximized dolphin search', 'Multiple swimming stops', 'Skipper included', 'Fuel included']
          },
          {
            hours: 5,
            price: 1000,
            name: 'Premium Safari & Sightseeing',
            locations: 'Limski kanal area • Dolphin hotspots • Swimming spots',
            inclusions: ['Dolphin searching', 'Extended coastal sightseeing', 'Swimming stop', 'Skipper included', 'Fuel included']
          },
          {
            hours: 6,
            price: 1200,
            name: 'Ultimate Wildlife & Riviera Tour',
            locations: 'Vrsar/Rovinj archipelago • Dolphin hotspots • Secluded bays',
            inclusions: ['All-day relaxed searching', 'Island sightseeing', 'Swimming stop', 'Skipper included', 'Fuel included']
          },
          {
            hours: 7,
            price: 1400,
            name: 'Extended Explorer Tour',
            locations: 'Rovinj archipelago • Dolphin hotspots • Limski kanal',
            inclusions: ['Extensive dolphin tracking', 'Multiple island stops', 'Swimming', 'Skipper included', 'Fuel included']
          },
          {
            hours: 8,
            price: 1600,
            name: 'Full Day Ocean Mastery',
            locations: 'Full Istrian coastline • Dedicated dolphin tracking zones',
            inclusions: ['Unlimited flexibility', 'All coastal highlights', 'Skipper included', 'Fuel included']
          }
        ]
      },
      {
        id: 'm660-tour-guided',
        title: 'Guided Panorama & Swimming Tour',
        type: 'tour',
        boatId: 'master-660',
        pricing: [{ type: 'hourly', amount: 120, description: 'Includes Skipper & Fuel' }],
        description: 'A relaxing guided tour along the coast with stops at hidden swimming spots.',
        features: ['Up to 12 people', 'Skipper included', 'Fuel included'],
        highlights: [
          'Fully customizable scenic tour along the beautiful Istrian coast',
          'Highly experienced local skipper to guide you to the best spots',
          'Swim in crystal-clear waters at hidden bays and beaches',
          'Choose the perfect duration for your group (1 to 8 hours)',
          'Fuel and professional skipper service are fully included'
        ],
        fullDescription: 'Embark on a customized adventure with our Guided Panorama & Swimming Tour. This fully flexible, hourly-based excursion is perfect for those who want to discover the breathtaking Istrian coastline at their own pace. Whether you have just a couple of hours or an entire day to spare, you get to decide how long your journey lasts.\n\nClimb aboard the Master 660, where our highly experienced local skipper awaits. Forget crowded tourist beaches—your skipper knows exactly where to find the most pristine hidden bays and tranquil swimming spots. Depending on how much time you book, your route can take you to stunning locations such as the majestic Lim Fjord (Limski kanal), the romantic town of Rovinj, and numerous secluded coves along the way.\n\nEverything is tailored to your preferences, meaning you can spend more time swimming, relaxing on the boat, or cruising and sightseeing. Sit back and enjoy the ride without any worries, as both the fuel and the skipper\'s services are entirely included in the price.',
        includes: [
          'Fully customizable private tour',
          'Highly experienced local skipper',
          'Fuel costs included',
          'Multiple swimming stops'
        ],
        meetingPoint: 'Riva Poreč, Obala Maršala Tita',
        whatToBring: [
          'Swimsuits and towels',
          'Sunscreen and sunglasses',
          'Snorkeling gear if you have it',
          'Snacks and drinks for the trip'
        ],
        hourlyPackages: [
          {
            hours: 1,
            price: 120,
            name: 'Quick Panorama Run',
            locations: 'Poreč coastline & nearby bays',
            inclusions: ['Fully customizable route', 'Skipper included', 'Fuel included']
          },
          {
            hours: 2,
            price: 240,
            name: 'Short Swim & Sightseeing',
            locations: 'Poreč area • Hidden bays for swimming',
            inclusions: ['Swimming stop', 'Skipper included', 'Fuel included']
          },
          {
            hours: 3,
            price: 360,
            name: 'Coastal Explorer',
            locations: 'Poreč • Vrsar area • Multiple hidden bays',
            inclusions: ['Multiple swimming stops', 'Skipper included', 'Fuel included']
          },
          {
            hours: 4,
            price: 480,
            name: 'Half Day Adventure',
            locations: 'Poreč • Funtana • Vrsar • Limski kanal entrance',
            inclusions: ['Multiple swimming stops', 'Extended panoramas', 'Skipper included', 'Fuel included']
          },
          {
            hours: 5,
            price: 600,
            name: 'Riviera Discovery',
            locations: 'Poreč • Limski kanal • Hidden coves',
            inclusions: ['Extended swimming time', 'Limski kanal visit', 'Skipper included', 'Fuel included']
          },
          {
            hours: 6,
            price: 720,
            name: 'Istrian Highlights Tour',
            locations: 'Poreč • Limski kanal • Rovinj archipelago',
            inclusions: ['Limski kanal visit', 'Rovinj archipelago sightseeing', 'Skipper included', 'Fuel included']
          },
          {
            hours: 7,
            price: 840,
            name: 'Premium Coastal Journey',
            locations: 'Poreč • Limski kanal • Rovinj • Red Island',
            inclusions: ['Multiple locations', 'Extended swimming', 'Skipper included', 'Fuel included']
          },
          {
            hours: 8,
            price: 960,
            name: 'Full Day Ultimate Custom Tour',
            locations: 'Poreč • Limski kanal • Rovinj & surrounding islands • Secluded bays',
            inclusions: ['Ultimate flexibility', 'Visit all top coastal spots', 'Skipper included', 'Fuel included']
          }
        ]
      }
    ]
  },
  {
    id: 'gaia-22',
    name: 'Gaia 22 Open',
    tagline: 'The Performance Cruiser',
    type: 'Walkaround Sports Cruiser',
    length: '6.75m',
    capacity: 12,
    imageUrl: '/images/Gaia_22_spotlight.webp',
    gallery: [
      '/images/Gaia_22_spotlight.webp',
      '/images/Gaia_dolphin.webp',
      '/images/Hedonist_final-19.webp',
      '/images/Hedonist_final-38.webp',
      '/images/Hedonist_final-47.webp',
      '/images/Hedonist_final-50.webp',
      '/images/Gaia_detail.webp',
      '/images/Gaia_from_carnevali.webp',
      '/images/Gaia_otok.webp',
      '/images/Gaia_pano_porec.webp',
      '/images/Hedo_gaia_volan.webp',
      '/images/Hedonist_gaia_detail.webp'
    ],
    description: 'Experience the ultimate thrill of the sea with the Gaia 22 Open, a high-performance sports cruiser engineered for both speed and refined comfort. Designed with a sleek, aerodynamic profile and powered by robust outboard engines, this walkaround cruiser offers swift and smooth passages across the water. Whether you\'re planning an exclusive island-hopping adventure or a tranquil sunset voyage, the Gaia 22 provides ample deck space and sophisticated Italian styling, making it an exceptional vessel for those who demand performance without sacrificing elegance.',
    specs: [
      { label: 'Length', value: '6.75m' },
      { label: 'Width', value: '2.45m' },
      { label: 'Engine', value: '200HP Mercury V6' },
      { label: 'Fuel Tank', value: '200 L' },
      { label: 'Water Tank', value: '60 L' }
    ],
    included: [
      'Bimini', 'Outdoor shower', 'External table', 'External speakers', 'Teak deck', 
      'Bathing Platform', 'Bathing ladder', 'USB socket', 'Electric windlass', 'GPS', 
      'Depth sounder', 'VHF', 'Guides & Maps', 'Fridge', 'Freezer'
    ],
    pricingDetails: {
      fullDay: 1000,
      halfDay: 600,
      skipperIncluded: true,
      fuelIncluded: true
    },
    services: [
      {
        id: 'g22-panorama',
        title: 'Exclusive Panorama Rides',
        type: 'tour',
        boatId: 'gaia-22',
        pricing: [
          { type: 'flat', amount: 70, duration: '15 min' },
          { type: 'flat', amount: 100, duration: '30 min' },
          { type: 'flat', amount: 150, duration: '60 min' }
        ],
        description: 'Quick, exhilarating rides to see the coastline from a unique perspective.',
        highlights: [
          'Choose between 15, 30, and 60-minute scenic rides',
          'Enjoy an exhilarating fast-paced tour to view coastal landmarks',
          'Discover hidden bays and historic sites from the water',
          'Perfect for families and individuals looking for a quick thrill'
        ],
        fullDescription: 'Get your adrenaline pumping and see the breathtaking sights of the Istrian Riviera with our Exclusive Panorama Rides. Depending on how much time you have, you can select the perfect duration to get a stunning perspective of the landmarks from the open sea. This is a thrilling, fast-paced way to explore the coastline without needing to dedicate hours to a full tour.\n\nFrom the ancient Poreč old town to the beautiful St. Nicholas Island and beyond, your skipper will navigate you through a variety of scenic bays and highlights. Simply pick the duration that suits you best, hold onto your hats, and enjoy an unforgettable ride.',
        includes: [
          'Exclusive Panorama Ride',
          'Professional skipper included',
          'Fuel costs included',
          'Scenic coastal sightseeing'
        ],
        meetingPoint: 'Riva Poreč, Obala Maršala Tita',
        whatToBring: [
          'Camera or smartphone',
          'Sunscreen and sunglasses',
          'Comfortable clothes and a light jacket'
        ],
        hourlyPackages: [
          {
            durationLabel: '15 min',
            price: 70,
            name: 'Quick Spin',
            locations: 'Poreč old town • "Peškera" Bay • Island St. Nicholas',
            inclusions: ['Fast-paced panoramic ride']
          },
          {
            durationLabel: '30 min',
            price: 100,
            name: 'Coastal Express',
            locations: 'Poreč old town • "Peškera" bay • St. Nicholas Island • Zelena Laguna • Plava Laguna',
            inclusions: ['Fast-paced panoramic ride']
          },
          {
            durationLabel: '60 min',
            price: 150,
            name: 'Full Riviera Tour',
            locations: 'Poreč old town • All islands on the way • Vrsar',
            inclusions: ['Fast-paced panoramic ride', 'Extended coastal views']
          }
        ]
      },
      {
        id: 'g22-charter',
        title: 'Private Customized Charters',
        type: 'rental',
        boatId: 'gaia-22',
        pricing: [
          { type: 'flat', amount: 600, duration: 'Half Day' },
          { type: 'flat', amount: 1000, duration: 'Full Day' }
        ],
        description: 'A fully tailored experience. You decide the itinerary.',
      },
      {
        id: 'g22-sunset',
        title: 'Romantic Sunset Cruise',
        type: 'tour',
        boatId: 'gaia-22',
        duration: 'Evening',
        pricing: [{ type: 'flat', amount: 170 }],
        description: 'A private, romantic evening on the water.',
        features: ['Includes Champagne'],
        isPopular: true,
        highlights: [
          'Enjoy a private and intimate sunset cruise for two',
          'Sip on complimentary chilled Champagne as the sun goes down',
          'Take in the spectacular golden-hour colors over the Adriatic',
          'Fuel and professional skipper service are fully included',
          'Perfect for anniversaries, proposals, or romantic getaways'
        ],
        fullDescription: 'Celebrate your love with an unforgettable evening on our Romantic Sunset Cruise. Step aboard the elegant Gaia 22 for a private, intimate journey designed exclusively for two. As the day turns to dusk, you will sail along the beautiful Mediterranean coastline, surrounded by the peaceful sound of the gentle waves and the breathtaking colors of the setting sun.\n\nTo make this experience even more special, a complimentary bottle of Champagne is included for you to toast your special moments against the stunning golden-hour backdrop. Find a comfortable spot on the spacious deck, relax, and focus entirely on each other, as our professional skipper takes care of the navigation.\n\nEverything you need for a perfect evening is covered in the price, including the fuel and the skipper\'s services. Whether you are celebrating an anniversary, planning a surprise proposal, or simply treating yourselves to a magical evening, this sunset cruise is the ultimate romantic escape on the Adriatic Sea.',
        includes: [
          'Private sunset cruise for 2 people',
          'Complimentary Champagne',
          'Professional skipper included',
          'Fuel costs included'
        ],
        meetingPoint: 'Riva Poreč, Obala Maršala Tita',
        whatToBring: [
          'Light jacket or sweater (evenings can be cooler)',
          'Camera to capture the stunning sunset',
          'Your romantic adventurous spirit'
        ],
        knowBeforeYouGo: [
          'The tour is specifically tailored for 2 people.',
          'Please arrive 15 minutes before the scheduled evening departure.',
          'Bring a light layer, as the sea breeze can be fresh after sunset.'
        ]
      },
      {
        id: 'g22-dolphin',
        title: 'Private Dolphin Tour',
        type: 'tour',
        boatId: 'gaia-22',
        duration: '1.5h',
        pricing: [{ type: 'per_person', amount: 40, minPrice: 200 }],
        description: 'An exclusive quest to find dolphins in their natural habitat.',
        highlights: [
          'Embark on an exciting quest to spot dolphins in their natural environment',
          'Enjoy an exclusive, private tour designed for you and your group',
          'Learn about local marine life from our knowledgeable skipper',
          'Take in breathtaking views of the Istrian coast from our sleek Gaia 22',
          'Fuel and professional skipper service included in the price'
        ],
        fullDescription: 'Join us for an unforgettable adventure with our Private Dolphin Tour on the stylish Gaia 22. This excursion takes you on an awe-inspiring journey to discover incredible dolphins swimming freely in their natural habitat along the picturesque Adriatic coast.\n\nDesigned specifically for private groups, this tour guarantees a personalized and intimate experience for you and your friends or family. For a minimum starting price of 200 € (which covers up to 5 people at 40 € per person), you get a dedicated boat and a professional skipper entirely focused on providing you with the best possible chances of spotting these playful creatures.\n\nAs you cruise through the stunning turquoise waters, you can relax comfortably in the spacious lounge areas of the Gaia 22. Both the fuel costs and the services of our experienced skipper are completely included. While dolphin sightings can never be 100% guaranteed in the wild, our local experts know the best locations, and the spectacular coastal scenery ensures you will have a truly memorable ride regardless.',
        includes: [
          'Private tour on the Gaia 22',
          'Experienced local skipper included',
          'Fuel costs included',
          'Scenic coastal sightseeing'
        ],
        meetingPoint: 'Riva Poreč, Obala Maršala Tita',
        whatToBring: [
          'Camera or smartphone',
          'Light jacket or sweater',
          'Sunglasses and sunscreen'
        ],
        knowBeforeYouGo: [
          'The minimum price for this private tour is 200 €, which covers up to 5 people. Additional guests are 40 € per person.',
          'While we do our best to find dolphins, they are wild animals and sightings cannot be guaranteed.',
          'Please arrive at the meeting point 15 minutes prior to departure.'
        ]
      },
      {
         id: 'g22-taxi',
         title: 'Premium Boat Transfer',
         type: 'taxi',
         boatId: 'gaia-22',
         description: 'Fast, secure transfers between popular coastal destinations.',
         pricing: [
             { type: 'tiered', amount: 5, description: 'Otok Sv. Nikola', minPrice: 15 },
             { type: 'tiered', amount: 5, description: 'Brulo', minPrice: 25 },
             { type: 'tiered', amount: 6, description: 'Plava Laguna', minPrice: 30 },
             { type: 'tiered', amount: 7, description: 'Zelena Laguna', minPrice: 35 },
             { type: 'tiered', amount: 10, description: 'Bijela Uvala', minPrice: 50 },
             { type: 'tiered', amount: 6, description: 'Pical', minPrice: 30 },
             { type: 'tiered', amount: 7, description: 'Špadići', minPrice: 35 },
             { type: 'tiered', amount: 10, description: 'Ulika', minPrice: 50 },
             { type: 'tiered', amount: 20, description: 'Červar', minPrice: 100 },
             { type: 'tiered', amount: 10, description: 'Polidor', minPrice: 50 },
             { type: 'tiered', amount: 10, description: 'Funtana', minPrice: 60 },
             { type: 'tiered', amount: 20, description: 'Lanterna', minPrice: 120 },
             { type: 'tiered', amount: 30, description: 'Novigrad', minPrice: 150 },
             { type: 'tiered', amount: 20, description: 'Vrsar', minPrice: 100 },
             { type: 'tiered', amount: 40, description: 'Rovinj', minPrice: 200 }
         ]
      }
    ]
  },
  {
    id: 'carnevali-36s',
    name: 'Carnevali 36S',
    tagline: 'The Luxury Flybridge Yacht',
    type: 'Flybridge Yacht',
    length: '11.90m',
    capacity: 12,
    imageUrl: '/images/Hedonist-1.webp',
    gallery: [
      '/images/Hedonist-1.webp',
      '/images/Carnevali_inside1.webp',
      '/images/Carnevali_inside10.webp',
      '/images/Carnevali_inside11.webp',
      '/images/Carnevali_inside3.webp',
      '/images/Carnevali_inside6.webp',
      '/images/Carnevali_inside7.webp',
      '/images/Carnevali_inside8.webp',
      '/images/Carnevali_inside9.webp',
      '/images/Carnevali_inside_4.webp',
      '/images/Carnevali_inside_5.webp',
      '/images/Carnevali_outiside.webp',
      '/images/carnevali_inside2.webp'
    ],
    description: 'The Carnevali 36S Superyacht defines the ultimate expression of Adriatic luxury and maritime sophistication. This extraordinary flybridge yacht is spacious, lavishly appointed, and impeccably maintained, providing an unparalleled setting for your exclusive coastal escapes. Complete with luxurious cabins, expansive sun decks, and an experienced professional crew, the Carnevali 36S guarantees a truly VIP hedonistic voyage—perfect for hosting unforgettable celebrations, high-end corporate retreats, or romantic multi-day itineraries in complete comfort.',
    specs: [
      { label: 'Length', value: '11.90m' },
      { label: 'Width', value: '3.98m' },
      { label: 'Engine', value: 'Twin Volvo Penta' },
      { label: 'Fuel Tank', value: '800 L' },
      { label: 'Water Tank', value: '300 L' }
    ],
    included: [
      'Private Skipper', 'Professional Sailor/Guide', 'Welcome Drinks', 'Towels',
      'Gas cookers', 'Shore connection 220 V', 'VHF Radio', 'Hi-Fi system',
      'Cockpit outside shower', 'First aid kit', 'Teak cockpit', 'Fish finder',
      'Wi-Fi Internet', 'Mooring ropes', 'TV', 'Main anchor', 'Electric toilet',
      'Generator', 'Horseshoe lifebuoy', 'Kitchen utensils', 'Liferaft',
      'Set of tools', 'Life jackets', 'Cockpit table', 'Oven', 'Autopilot',
      'Gas bottle', 'Spare anchor', 'Navigation charts', 'Compass',
      'Hot water', 'Signal rockets and torches', 'Bed linen', 'Logge/Lot/Speed',
      'Divider nautic chart', 'Hand-held compass', 'Fire extinguisher', 'Harbour guides',
      'Battery Charger', 'Life belts', 'Electric Anchor Windlass',
      'Emergency tiller', 'GPS chart plotter', 'Hydraulic gangway', 'Dinghy', 'Fenders'
    ],
    pricingDetails: {
      hourly: 250,
      skipperIncluded: true,
      fuelIncluded: true,
      sailorIncluded: true
    },
    services: [
      {
        id: 'c36-hourly',
        title: 'Luxury Hourly Cruises',
        type: 'tour',
        boatId: 'carnevali-36s',
        pricing: [{ type: 'hourly', amount: 250 }],
        description: 'Build your perfect cruise. The longer you stay, the more we explore.',
        fullDescription: 'Cruising the sea with the wind in your hair and a view of the islands is a dream come true for anyone seeking an exciting experience on the Adriatic coast. Don’t miss the opportunity for a panoramic voyage aboard the elegant Carnevali 36 S, offering you ultimate comfort at sea. Our skipper will help you tailor the trip to your wishes – swimming on secluded islands, or visiting Lim Bay, Rovinj, or Red Island are just a few ideas.\n\nGuests adapt this experience to their wishes and preferences.\n\nPlease note that this is a private experience that may be delayed due to weather or availability.',
        availableMonths: 'March - January',
        availableWeekdays: 'Daily',
        activityLanguages: ['English', 'German', 'Italian'],
        meetingPoint: 'Marina Poreč - Obala maršala Tita',
        hourlyPackages: [
          {
            hours: 1,
            price: 250,
            name: 'Panoramic Experience',
            locations: 'Poreč • Sv. Nikola Island',
            inclusions: ['1 Welcome Drink', 'Fuel included', 'Skipper services included']
          },
          {
            hours: 2,
            price: 500,
            name: 'Extended Panoramic Ride',
            locations: 'Poreč • Sv. Nikola Island • Brulo • Plava Laguna • Zelena Laguna',
            inclusions: ['1 Welcome Drink', 'Fuel included', 'Skipper services included']
          },
          {
            hours: 3,
            price: 750,
            name: 'Coastal Discovery',
            locations: 'Poreč • Sv. Nikola Island • Brulo • Plava Laguna • Zelena Laguna • Vrsar',
            inclusions: ['1 Welcome Drink', 'Fuel included', 'Skipper services included']
          },
          {
            hours: 4,
            price: 1000,
            name: 'Swim & Explore',
            locations: 'Poreč • Sv. Nikola Island • Brulo • Plava Laguna • Zelena Laguna • Vrsar',
            inclusions: ['Swimming Stop (hidden beach)', '1 Welcome Drink', 'Fuel included', 'Skipper services included']
          },
          {
            hours: 5,
            price: 1250,
            name: 'Premium Experience',
            locations: 'Poreč • Sv. Nikola Island • Brulo • Plava Laguna • Zelena Laguna • Vrsar • Lim Fjord',
            inclusions: ['Swimming Stop', '1 Welcome Drink', 'Sea Food Platter', 'Fuel included', 'Skipper services included']
          },
          {
            hours: 6,
            price: 1500,
            name: 'Full Experience',
            locations: 'Poreč • Sv. Nikola Island • Brulo • Plava Laguna • Zelena Laguna • Vrsar • Lim Fjord • Rovinj',
            inclusions: ['Swimming Stop', '1 Welcome Drink', 'Sea Food Platter', 'Fuel included', 'Skipper services included']
          },
          {
            hours: 7,
            price: 1750,
            name: 'Explorer Tour',
            locations: 'Poreč • Sv. Nikola Island • Brulo • Plava Laguna • Zelena Laguna • Vrsar • Lim Fjord • Rovinj',
            inclusions: ['Swimming Stop', '1 Welcome Drink', 'Sea Food Platter', 'Visit to Lim Fjord Cave', 'Fuel included', 'Skipper services included']
          },
          {
            hours: 8,
            price: 2000,
            name: 'Ultimate Hedonist Experience',
            locations: 'Poreč • Sv. Nikola Island • Brulo • Plava Laguna • Zelena Laguna • Vrsar • Lim Fjord • Rovinj',
            inclusions: ['Swimming Stop', '1 Welcome Drink', 'Sea Food Platter', 'Visit Lim Fjord Cave & Rovinj', 'Fuel included', 'Skipper services included']
          }
        ]
      },
      {
         id: 'c36-event-dolphin-private',
         title: 'Private Sunset Dolphin Tour',
         type: 'package',
         boatId: 'carnevali-36s',
         duration: '1.5h (17:00-18:30)',
         pricing: [{ type: 'flat', amount: 500 }],
         description: 'A majestic evening tracking dolphins with premium service on a luxury yacht.',
         highlights: [
           'Experience a magical 1.5-hour evening cruise exploring the golden hour',
           'Search for playful dolphins in their natural habitat along the coast',
           'Enjoy a private and intimate atmosphere for up to 12 people',
           'Guided by an expert skipper and a sailor who know the best spots',
           'Take spectacular photos of the Adriatic sunset from a luxury yacht'
         ],
         fullDescription: 'Set sail into the golden hues of the Adriatic sunset with our Private Sunset Dolphin Tour. This exclusive 1.5-hour evening cruise is perfectly timed to catch the spectacular colors of the sunset while searching for playful dolphins along the beautiful Istrian coast.\n\nDesigned for up to 12 people, this private experience is ideal for families, friends, or couples looking for an unforgettable maritime adventure. You will be warmly welcomed by our professional crew, consisting of an experienced skipper and a sailor, who are passionate about the sea and know the exact areas where these magnificent creatures love to swim.\n\nWhile nature is unpredictable and dolphin sightings are never 100% guaranteed, our crew\'s local expertise gives you the best possible chance to witness them in their natural habitat. Even if the dolphins decide to play hide and seek, the stunning panoramic views of the coastline bathing in the evening light make this a truly serene and majestic journey.',
         includes: [
           '1.5-hour private luxury yacht cruise',
           'Professional skipper and a sailor',
           'Fuel costs included',
           'Comfortable seating for up to 12 people'
         ],
         meetingPoint: 'Riva Poreč, Obala Maršala Tita- Yacht Hedonist',
         whatToBring: [
           'Camera or smartphone for sunset and dolphin photos',
           'Light jacket or sweater (the sea breeze can be cooler in the evening)',
           'Sunglasses'
         ],
         knowBeforeYouGo: [
           'The tour lasts for approximately an hour and a half.',
           'Dolphins are wild animals, so while we take you to the best spots, sightings cannot be absolutely guaranteed.',
           'Please arrive at the meeting point 15 minutes before the departure time.'
         ]
      },
      {
         id: 'c36-event-dolphin-shared',
         title: 'Shared Dolphin Tour',
         type: 'tour',
         boatId: 'carnevali-36s',
         duration: '1.5h (17:00-18:30)',
         pricing: [{ type: 'per_person', amount: 40 }],
         description: 'Join a group for an elegant dolphin watching experience.',
         highlights: [
           'Experience a magical 1.5-hour evening cruise exploring the golden hour',
           'Search for playful dolphins in their natural habitat along the coast',
           'Enjoy an elegant shared atmosphere with other ocean enthusiasts',
           'Guided by an expert skipper and a sailor who know the best spots',
           'Take spectacular photos of the Adriatic sunset from a luxury yacht'
         ],
         fullDescription: 'Set sail into the golden hues of the Adriatic sunset with our Shared Dolphin Tour. This 1.5-hour evening cruise is perfectly timed to catch the spectacular colors of the sunset while searching for playful dolphins along the beautiful Istrian coast.\n\nJoin other guests on this shared experience, priced affordably per person, making it an excellent choice for solo travelers, couples, or smaller groups. You will be warmly welcomed by our professional crew, consisting of an experienced skipper and a sailor, who are passionate about the sea and know the exact areas where these magnificent creatures love to swim.\n\nWhile nature is unpredictable and dolphin sightings are never 100% guaranteed, our crew\'s local expertise gives you the best possible chance to witness them in their natural habitat. Even if the dolphins decide to play hide and seek, the stunning panoramic views of the coastline bathing in the evening light make this a truly serene and majestic journey.',
         includes: [
           '1.5-hour shared luxury yacht cruise',
           'Professional skipper and a sailor',
           'Fuel costs included'
         ],
         meetingPoint: 'Riva Poreč, Obala Maršala Tita- Yacht Hedonist',
         whatToBring: [
           'Camera or smartphone for sunset and dolphin photos',
           'Light jacket or sweater (the sea breeze can be cooler in the evening)',
           'Sunglasses'
         ],
         knowBeforeYouGo: [
           'The tour lasts for approximately an hour and a half.',
           'This is a shared experience; you will be joined by other guests.',
           'Dolphins are wild animals, so while we take you to the best spots, sightings cannot be absolutely guaranteed.',
           'Please arrive at the meeting point 15 minutes before the departure time.'
         ]
      },
      {
         id: 'c36-event-bachelor',
         title: 'Bachelor / Bachelorette Party',
         type: 'package',
         boatId: 'carnevali-36s',
         pricing: [{ type: 'flat', amount: 1780 }],
         description: 'The ultimate unforgettable celebration on the water.',
         highlights: [
           'Celebrate your bachelor or bachelorette party on a private cruise',
           'Enjoy a unique adventure with laughter, fun, and friendship at the forefront',
           'Create lasting memories with your friends on a luxury boat',
           'Choose between a wild party or a more elegant celebration',
           'Experience the perfect setting for a memorable celebration'
         ],
         fullDescription: 'Step aboard our luxury yacht and set sail on an unforgettable Adriatic adventure. From the very first moment, you\'ll be greeted with a warm welcome and the breathtaking beauty of crystal-clear waters, hidden bays, and stunning coastal landscapes. Whether you\'re celebrating a bachelor or bachelorette party, marking a special occasion, or simply enjoying a day with friends, this cruise combines excitement, relaxation, and pure fun in one perfect package.\n\nDuring the trip, you can sunbathe on the spacious deck, dive into the turquoise sea, or sip refreshing drinks while music sets the mood. Our experienced crew will ensure that every detail is taken care of, leaving you free to enjoy the moment. Choose between a lively party atmosphere with dancing and laughter or a more elegant and intimate celebration surrounded by the serenity of the sea.\n\nAs the sun begins to set, you\'ll experience the magic of golden-hour views over the horizon – a picture-perfect ending to a day filled with adventure. This is more than just a cruise; it\'s a memory-making journey where fun, friendship, and joy come together.\n\nMake your bachelor, bachelorette, or private celebration truly unforgettable with an experience designed to last a lifetime.',
         includes: [
           'luxury yacht experience',
           'bachelor and bachelorette party setting',
           'memorable celebration',
           'welcome drink'
         ],
         meetingPoint: 'Riva Poreč, Obala Maršala Tita- Yacht Hedonist',
         whatToBring: [
           'Towel',
           'Beachwear'
         ],
         knowBeforeYouGo: [
           'This is a celebration-focused cruise, ideal for bachelor and bachelorette parties.',
           'The cruise is designed to create lasting memories with friends.'
         ]
      },
      {
         id: 'c36-event-wedding',
         title: 'Wedding Photoshoot',
         type: 'package',
         boatId: 'carnevali-36s',
         pricing: [{ type: 'hourly', amount: 250 }],
         description: 'Capture your special moments against the stunning backdrop of the Adriatic.',
         highlights: [
           'Create timeless memories with a stunning sea backdrop',
           'Fully customizable itinerary tailored to your vision',
           'Local skipper expert in finding beautiful hidden locations',
           'Fuel and professional skipper service included in the price',
           'Luxurious setting on a premium yacht for perfect shots'
         ],
         fullDescription: 'Celebrate your love and capture unforgettable moments with our exclusive Wedding Photoshoot cruise. Step aboard our luxury yacht and let the stunning Adriatic Sea be the ultimate romantic backdrop for your special day. Whether you envision sun-kissed photos by secluded coves, dramatic sunset shots, or elegant maritime aesthetics, our vessel provides the perfect setting for a magical photography session.\n\nYour experience is completely customizable. You have the freedom to go anywhere you desire along the coast, creating a unique route that matches your vision. Simply arrange the details with your skipper, who is not only an experienced sailor but also knows the most picturesque, hidden spots perfect for wedding and engagement pictures.\n\nRelax and focus entirely on each other and your photographer – both the fuel and the services of our professional skipper are fully included in the price, ensuring a seamless and stress-free experience. From crystal-clear waters to golden hour glows, this private charter guarantees breathtaking photos and memories you will cherish forever.',
         includes: [
           'Private luxury yacht charter',
           'Experienced local skipper',
           'Fuel costs included',
           'Customizable photo locations',
           'Welcome drink'
         ],
         meetingPoint: 'Riva Poreč, Obala Maršala Tita- Yacht Hedonist',
         whatToBring: [
           'Wedding attire & accessories',
           'Your photographer',
           'Sunscreen and sunglasses'
         ],
         knowBeforeYouGo: [
           'A photographer is not included in the price; please bring your own.',
           'Coordinate your desired locations with the skipper before setting sail.',
           'The best lighting for photos is typically during the golden hour (early morning or late afternoon).',
           'There is adequate space on board to change outfits if needed.'
         ]
      }
    ]
  }
];

export const ALL_EXCURSIONS = BOATS.flatMap(boat => boat.services.filter(s => s.type !== 'rental' && s.type !== 'taxi'));
