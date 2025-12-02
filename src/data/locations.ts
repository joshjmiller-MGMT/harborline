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
}

export const locations: LocationData[] = [
    {
        slug: 'washington-dc',
        name: 'Washington D.C.',
        title: 'Washington D.C. Event Entertainment | BME',
        description: 'Premier live bands and entertainment for Washington D.C. galas, weddings, and corporate events. Serving The Wharf, Georgetown, and Capitol Hill.',
        heroImage: '/location_dc_capitol_event.png',
        content: 'Washington D.C. events demand a level of sophistication and energy that matches the capital itself. From high-stakes political galas to elegant weddings at historic monuments, Baltimore Music & Entertainment provides the soundtrack for the city\'s most important moments. We understand the unique logistics of D.C. venues and the high expectations of its clientele.',
        localVibe: 'Sophisticated, powerful, and historic.',
        popularEventTypes: ['Black Tie Galas', 'Museum Weddings', 'Political Fundraisers', 'Corporate Summits'],
        venues: ['The Anthem', 'Union Station', 'The Mayflower', 'National Building Museum', 'The Kennedy Center'],
        specific_services: 'We offer specialized ensembles for D.C.\'s diverse event landscape, including string quartets for diplomatic receptions, high-energy dance bands for Convention Center galas, and jazz trios for intimate Georgetown gatherings.',
        faq: [
            { question: "Do you perform at government venues?", answer: "Yes, our team is experienced with the security and logistical protocols required for events at federal buildings and museums." },
            { question: "Can you provide sound for large galas?", answer: "Absolutely. We offer full-scale AV production, ensuring crystal-clear sound for speeches and concert-quality audio for the band." }
        ],
        nearby_cities: ['Bethesda', 'Alexandria', 'Silver Spring']
    },
    {
        slug: 'baltimore',
        name: 'Baltimore',
        title: 'Baltimore Wedding Bands & DJs | BME',
        description: 'Top-rated live music for Baltimore weddings and events. Serving the Inner Harbor, Fells Point, and Mt. Vernon.',
        heroImage: '/location_baltimore_waterfront.png',
        content: 'Charm City deserves charming entertainment. Baltimore Music & Entertainment is the city\'s premier resource for live music, bringing the energy of the waterfront to your private event. Whether it\'s a warehouse wedding in Clipper Mill or a corporate bash at the Inner Harbor, we bring the local flavor and world-class talent.',
        localVibe: 'Artistic, spirited, and authentic.',
        popularEventTypes: ['Waterfront Weddings', 'Industrial Chic Events', 'Corporate Conventions', 'Private Parties'],
        venues: ['Sagamore Pendry', 'Four Seasons Baltimore', 'American Visionary Art Museum', 'M&T Bank Stadium', 'The Winslow'],
        specific_services: 'Our Baltimore roster features versatile party bands that can rock a reception at the Pendry or set a soulful vibe for a cocktail hour in Mt. Vernon.',
        faq: [
            { question: "Do you travel to Baltimore County?", answer: "Yes, we regularly perform in Towson, Hunt Valley, and throughout Baltimore County." },
            { question: "What styles of music do you offer?", answer: "Everything from Motown and Soul to Top 40 and Rock. We customize the setlist to your vibe." }
        ],
        nearby_cities: ['Annapolis', 'Washington D.C.', 'Silver Spring']
    },
    {
        slug: 'annapolis',
        name: 'Annapolis',
        title: 'Annapolis Wedding Entertainment | BME',
        description: 'Nautical elegance meets high-energy entertainment. The best wedding bands for Annapolis and the Eastern Shore.',
        heroImage: '/location_annapolis_nautical_wedding.png',
        content: 'There is nothing quite like an event on the Chesapeake Bay. We specialize in the nautical elegance that defines Annapolis, providing the perfect musical backdrop for yacht club weddings, waterfront ceremonies, and downtown soirees.',
        localVibe: 'Nautical, preppy, and relaxed luxury.',
        popularEventTypes: ['Yacht Club Weddings', 'Naval Academy Events', 'Waterfront Galas', 'Tent Weddings'],
        venues: ['Annapolis Maritime Museum', 'USNA Club', 'Chesapeake Bay Beach Club', 'The Graduate'],
        specific_services: 'From acoustic duos for a sunset cruise to 10-piece bands for a tented reception on the water, we match the maritime atmosphere perfectly.',
        faq: [
            { question: "Do you perform on boats?", answer: "Yes, we have compact setups perfect for yacht parties and cruises out of the harbor." },
            { question: "Do you serve the Eastern Shore?", answer: "We frequently cross the bridge for events at the Chesapeake Bay Beach Club and beyond." }
        ],
        nearby_cities: ['Baltimore', 'Washington D.C.', 'Alexandria']
    },
    {
        slug: 'bethesda',
        name: 'Bethesda',
        title: 'Bethesda & Montgomery County Event Music | BME',
        description: 'Sophisticated entertainment for Bethesda, Potomac, and Chevy Chase private events and weddings.',
        heroImage: '/location_bethesda_private_party.png',
        content: 'For the exclusive private events of Montgomery County, BME delivers understated elegance and high-energy fun. We are a preferred vendor for many of the area\'s top country clubs and hotels, known for our professionalism and exceptional talent.',
        localVibe: 'Upscale, polished, and exclusive.',
        popularEventTypes: ['Country Club Weddings', 'Mitzvahs', 'Private Estate Parties', 'Corporate Holiday Parties'],
        venues: ['Congressional Country Club', 'Strathmore', 'Hyatt Regency Bethesda', 'Chevy Chase Club'],
        specific_services: 'We excel at providing continuous music for seamless events, from cocktail piano to a packed dance floor.',
        faq: [
            { question: "Are you insured for country clubs?", answer: "Yes, we carry full liability insurance required by all major venues and country clubs." },
            { question: "Do you do Mitzvahs?", answer: "Yes! We have high-energy bands and DJs perfect for Mitzvah celebrations." }
        ],
        nearby_cities: ['Washington D.C.', 'Silver Spring', 'Alexandria']
    },
    {
        slug: 'alexandria',
        name: 'Alexandria',
        title: 'Old Town Alexandria Wedding Bands | BME',
        description: 'Timeless music for historic Old Town Alexandria weddings and corporate events.',
        heroImage: '/location_alexandria_historic_venue.png',
        content: 'Old Town Alexandria offers a historic charm that is unmatched. Our bands understand how to complement these unique venues, providing entertainment that is classic yet contemporary, respecting the history while bringing the party.',
        localVibe: 'Historic, charming, and romantic.',
        popularEventTypes: ['Historic Venue Weddings', 'Riverfront Receptions', 'Corporate Dinners', 'Holiday Parties'],
        venues: ['The Torpedo Factory', 'Carlyle House', 'River Farm', 'Hotel Indigo'],
        specific_services: 'We offer jazz ensembles perfect for historic homes and full bands that can energize industrial spaces like the Torpedo Factory.',
        faq: [
            { question: "Can you play in historic buildings?", answer: "Yes, we are experienced with the sound restrictions and load-in logistics of historic properties." },
            { question: "Do you offer ceremony music?", answer: "Yes, we have string trios and harpists available for ceremonies." }
        ],
        nearby_cities: ['Washington D.C.', 'Arlington', 'National Harbor']
    },
    {
        slug: 'silver-spring',
        name: 'Silver Spring',
        title: 'Silver Spring Live Music & DJs | BME',
        description: 'Dynamic entertainment for Silver Spring\'s cultural center and music venues.',
        heroImage: '/location_silver_spring_live_music.png',
        content: 'Silver Spring is a hub of culture and arts. We bring dynamic, diverse entertainment to match the community\'s energy. Perfect for festivals at the Civic Building or modern weddings at local venues.',
        localVibe: 'Diverse, artistic, and modern.',
        popularEventTypes: ['Cultural Festivals', 'Modern Weddings', 'Community Events', 'Live Music Nights'],
        venues: ['The Fillmore Silver Spring', 'Silver Spring Civic Building', 'AFI Silver Theatre'],
        specific_services: 'Our roster includes diverse acts ranging from Latin fusion to modern pop, reflecting the vibrant culture of Silver Spring.',
        faq: [
            { question: "Do you support community events?", answer: "We love working with local organizations for festivals and public events." },
            { question: "Do you have bilingual MCs?", answer: "Yes, we have bilingual MCs and performers available upon request." }
        ],
        nearby_cities: ['Bethesda', 'Washington D.C.', 'Baltimore']
    }
];
