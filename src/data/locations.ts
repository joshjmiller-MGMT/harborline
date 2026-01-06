export interface FAQ {
    question: string;
    answer: string;
}

export interface LocationData {
    slug: string;
    name: string;
    title: string;
    description: string;
    heroImage: string;
    content: string;
    localVibe: string;
    popularEventTypes: string[];
    venues: string[];
    specific_services: string;
    faq: FAQ[];
    nearby_cities: string[];
    gallery?: string[];
}

export const locations: LocationData[] = [
    {
        slug: 'washington-dc',
        name: 'Washington D.C.',
        title: 'Washington D.C. Event Entertainment | Harborline',
        description: 'Premier live bands and entertainment for Washington D.C. galas, weddings, and corporate events. Serving The Wharf, Georgetown, and Capitol Hill.',
        heroImage: '/location_dc_capitol_event_1764514897052.png',
        content: 'Washington D.C. events demand a level of sophistication and energy that matches the capital itself. From high-stakes political galas to elegant weddings at historic monuments, Harborline provides the soundtrack for the city\'s most important moments. We understand the unique logistics of D.C. venues and the high expectations of its clientele.',
        localVibe: 'Sophisticated, powerful, and historic.',
        popularEventTypes: ['Black Tie Galas', 'Museum Weddings', 'Political Fundraisers', 'Corporate Summits'],
        venues: ['The Anthem', 'Union Station', 'The Mayflower', 'National Building Museum', 'The Kennedy Center'],
        specific_services: 'We offer specialized ensembles for D.C.\'s diverse event landscape, including string quartets for diplomatic receptions, high-energy dance bands for Convention Center galas, and jazz trios for intimate Georgetown gatherings.',
        faq: [
            { question: "Do you perform at government venues?", answer: "Yes, our team is experienced with the security and logistical protocols required for events at federal buildings and museums." },
            { question: "Can you provide sound for large galas?", answer: "Absolutely. We offer full-scale AV production, ensuring crystal-clear sound for speeches and concert-quality audio for the band." }
        ],
        nearby_cities: ['Bethesda', 'Alexandria', 'Silver Spring'],
        gallery: [
            '/images/gallery/dc_lincoln_wedding_1764701180933.png',
            '/images/gallery/dc_anthem_concert_1764701195393.png',
            '/images/gallery/dc_union_station_gala_1764701210684.png'
        ]
    },
    {
        slug: 'baltimore',
        name: 'Baltimore',
        title: 'Baltimore Wedding Bands & DJs | Harborline',
        description: 'Top-rated live music for Baltimore weddings and events. Serving the Inner Harbor, Fells Point, and Mt. Vernon.',
        heroImage: '/location_baltimore_waterfront_1764514910499.png',
        content: 'Charm City deserves charming entertainment. Harborline is the city\'s premier resource for live music, bringing the energy of the waterfront to your private event. Whether it\'s a warehouse wedding in Clipper Mill or a corporate bash at the Inner Harbor, we bring the local flavor and world-class talent.',
        localVibe: 'Artistic, spirited, and authentic.',
        popularEventTypes: ['Waterfront Weddings', 'Industrial Chic Events', 'Corporate Conventions', 'Private Parties'],
        venues: ['Sagamore Pendry', 'Four Seasons Baltimore', 'American Visionary Art Museum', 'M&T Bank Stadium', 'The Winslow'],
        specific_services: 'Our Baltimore roster features versatile party bands that can rock a reception at the Pendry or set a soulful vibe for a cocktail hour in Mt. Vernon.',
        faq: [
            { question: "Do you travel to Baltimore County?", answer: "Yes, we regularly perform in Towson, Hunt Valley, and throughout Baltimore County." },
            { question: "What styles of music do you offer?", answer: "Everything from Motown and Soul to Top 40 and Rock. We customize the setlist to your vibe." }
        ],
        nearby_cities: ['Annapolis', 'Washington D.C.', 'Silver Spring'],
        gallery: [
            '/images/gallery/baltimore_harbor.png',
            '/images/gallery/baltimore_pendry.png',
            '/images/gallery/baltimore_industrial_band_1764701251032.png'
        ]
    },
    {
        slug: 'annapolis',
        name: 'Annapolis',
        title: 'Annapolis Wedding Entertainment | Harborline',
        description: 'Nautical elegance meets high-energy entertainment. The best wedding bands for Annapolis and the Eastern Shore.',
        heroImage: '/location_annapolis_nautical_wedding_1764514925023.png',
        content: 'There is nothing quite like an event on the Chesapeake Bay. We specialize in the nautical elegance that defines Annapolis, providing the perfect musical backdrop for yacht club weddings, waterfront ceremonies, and downtown soirees.',
        localVibe: 'Nautical, preppy, and relaxed luxury.',
        popularEventTypes: ['Yacht Club Weddings', 'Naval Academy Events', 'Waterfront Galas', 'Tent Weddings'],
        venues: ['Annapolis Maritime Museum', 'USNA Club', 'Chesapeake Bay Beach Club', 'The Graduate'],
        specific_services: 'From acoustic duos for a sunset cruise to 10-piece bands for a tented reception on the water, we match the maritime atmosphere perfectly.',
        faq: [
            { question: "Do you perform on boats?", answer: "Yes, we have compact setups perfect for yacht parties and cruises out of the harbor." },
            { question: "Do you serve the Eastern Shore?", answer: "We frequently cross the bridge for events at the Chesapeake Bay Beach Club and beyond." }
        ],
        nearby_cities: ['Baltimore', 'Washington D.C.', 'Alexandria'],
        gallery: [
            '/images/gallery/annapolis_yacht_party_1764731435974.png',
            '/images/gallery/annapolis_dockside_wedding_1764731456553.png',
            '/images/gallery/annapolis_naval_academy_event_1764731469969.png'
        ]
    },
    {
        slug: 'bethesda',
        name: 'Bethesda',
        title: 'Bethesda & Montgomery County Event Music | Harborline',
        description: 'Sophisticated entertainment for Bethesda, Potomac, and Chevy Chase private events and weddings.',
        heroImage: '/location_bethesda_private_party_1764514938856.png',
        content: 'For the exclusive private events of Montgomery County, Harborline delivers understated elegance and high-energy fun. We are a preferred vendor for many of the area\'s top country clubs and hotels, known for our professionalism and exceptional talent.',
        localVibe: 'Upscale, polished, and exclusive.',
        popularEventTypes: ['Country Club Weddings', 'Mitzvahs', 'Private Estate Parties', 'Corporate Holiday Parties'],
        venues: ['Congressional Country Club', 'Strathmore', 'Hyatt Regency Bethesda', 'Chevy Chase Club'],
        specific_services: 'We excel at providing continuous music for seamless events, from cocktail piano to a packed dance floor.',
        faq: [
            { question: "Are you insured for country clubs?", answer: "Yes, we carry full liability insurance required by all major venues and country clubs." },
            { question: "Do you do Mitzvahs?", answer: "Yes! We have high-energy bands and DJs perfect for Mitzvah celebrations." }
        ],
        nearby_cities: ['Washington D.C.', 'Silver Spring', 'Alexandria'],
        gallery: [
            '/images/gallery/bethesda_country_club_1764731508165.png'
        ]
    },
    {
        slug: 'alexandria',
        name: 'Alexandria',
        title: 'Old Town Alexandria Wedding Bands | Harborline',
        description: 'Timeless music for historic Old Town Alexandria weddings and corporate events.',
        heroImage: '/location_alexandria_historic_venue_1764514955153.png',
        content: 'Old Town Alexandria offers a historic charm that is unmatched. Our bands understand how to complement these unique venues, providing entertainment that is classic yet contemporary, respecting the history while bringing the party.',
        localVibe: 'Historic, charming, and romantic.',
        popularEventTypes: ['Historic Venue Weddings', 'Riverfront Receptions', 'Corporate Dinners', 'Holiday Parties'],
        venues: ['The Torpedo Factory', 'Carlyle House', 'River Farm', 'Hotel Indigo'],
        specific_services: 'We offer jazz ensembles perfect for historic homes and full bands that can energize industrial spaces like the Torpedo Factory.',
        faq: [
            { question: "Can you play in historic buildings?", answer: "Yes, we are experienced with the sound restrictions and load-in logistics of historic properties." },
            { question: "Do you offer ceremony music?", answer: "Yes, we have string trios and harpists available for ceremonies." }
        ],
        nearby_cities: ['Washington D.C.', 'Arlington', 'National Harbor'],
        gallery: [
            '/images/gallery/dc_lincoln_wedding_1764701180933.png',
            '/images/gallery/annapolis_dockside_wedding_1764731456553.png'
        ]
    },
    {
        slug: 'silver-spring',
        name: 'Silver Spring',
        title: 'Silver Spring Event Entertainment | Harborline',
        description: 'Live bands and DJs for Silver Spring, Takoma Park, and Wheaton events.',
        heroImage: '/location_silver_spring_live_music_1764514968226.png',
        content: 'Silver Spring\'s arts and entertainment district demands a certain caliber of performance. Harborline brings that energy. From outdoor festivals to private parties at the Fillmore, we provide the soundtrack that keeps the community moving.',
        localVibe: 'Diverse, artistic, and vibrant.',
        popularEventTypes: ['Community Festivals', 'Private Parties', 'Cultural Events', 'Weddings'],
        venues: ['The Fillmore Silver Spring', 'Civic Building', 'Veterans Plaza'],
        specific_services: 'We offer a wide range of musical styles to match the diversity of the area, from Latin jazz to top 40.',
        faq: [
            { question: "Do you have experience with diverse crowds?", answer: "Yes, our DJs and bands are experts at reading diverse rooms and playing for all ages and backgrounds." },
            { question: "Can you play outdoors?", answer: "We have full outdoor production capabilities for festivals and plaza events." }
        ],
        nearby_cities: ['Bethesda', 'Washington D.C.', 'Rockville'],
        gallery: [
            '/images/gallery/dc_anthem_concert_1764701195393.png',
            '/images/gallery/baltimore_industrial_band_1764701251032.png'
        ]
    }
];