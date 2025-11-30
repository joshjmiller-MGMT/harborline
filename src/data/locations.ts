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
}

export const locations: LocationData[] = [
    {
        slug: 'new-york',
        name: 'New York City',
        title: 'Premier Event Entertainment in NYC | Harborline',
        description: 'From Manhattan penthouses to Brooklyn warehouses, Harborline provides top-tier bands, DJs, and production for New York City\'s most exclusive events.',
        heroImage: '/hero.png', 
        content: 'New York City demands a certain caliber of entertainment. Our NYC roster features Broadway veterans, Juilliard-trained musicians, and the city\'s most in-demand DJs. Whether you are hosting a gala at The Met or a wedding at The Plaza, we bring the energy that keeps the city that never sleeps dancing.',
        localVibe: 'Sophisticated, energetic, and uncompromisingly world-class.',
        popularEventTypes: ['Black Tie Galas', 'Rooftop Soirees', 'Fashion Week Afterparties', 'Luxury Weddings'],
        venues: ['The Plaza', 'Cipriani Wall Street', 'Brooklyn Museum', 'The Pierre', 'Tribeca Rooftop']
    },
    {
        slug: 'los-angeles',
        name: 'Los Angeles',
        title: 'Luxury Event Entertainment in Los Angeles | Harborline',
        description: 'Serving Beverly Hills, Hollywood, and Malibu with world-class live music and event production.',
        heroImage: '/hero.png',
        content: 'In the entertainment capital of the world, your event needs to stand out. Harborline delivers celebrity-grade talent for Hollywood premieres, Beverly Hills weddings, and industry parties. We understand the nuance of LA events – sophisticated, stylish, and always camera-ready.',
        localVibe: 'Glamorous, trend-setting, and visually stunning.',
        popularEventTypes: ['Film Premieres', 'Celebrity Weddings', 'Industry Showcases', 'Private Estate Parties'],
        venues: ['The Beverly Hills Hotel', 'Chateau Marmont', 'Greystone Mansion', 'Walt Disney Concert Hall']
    },
    {
        slug: 'miami',
        name: 'Miami',
        title: 'Miami Event Entertainment & Party Bands | Harborline',
        description: 'High-energy entertainment for Miami weddings, corporate retreats, and private parties.',
        heroImage: '/hero.png',
        content: 'Miami brings the heat, and so do we. Specializing in high-energy dance bands, Latin fusion ensembles, and world-class DJs, Harborline is the go-to agency for events in South Beach, Brickell, and beyond. We bring the nightclub experience to your private event.',
        localVibe: 'Vibrant, rhythmic, and high-octane.',
        popularEventTypes: ['Yacht Parties', 'Beachside Weddings', 'Nightclub Buyouts', 'Art Basel Events'],
        venues: ['Faena Forum', 'Vizcaya Museum & Gardens', 'The 1 Hotel South Beach', 'Pérez Art Museum']
    },
    {
        slug: 'chicago',
        name: 'Chicago',
        title: 'Chicago Wedding Bands & Corporate Entertainment | Harborline',
        description: 'The best live music and entertainment for Chicago events. Soul, Blues, Jazz, and Party Bands.',
        heroImage: '/hero.png',
        content: 'From the Gold Coast to the Loop, Chicago events are defined by their soul. Our Chicago roster taps into the city\'s rich musical heritage, offering incredible blues bands, jazz quartets, and 12-piece show bands that can fill the biggest ballrooms in the Midwest.',
        localVibe: 'Soulful, classic, and deeply musical.',
        popularEventTypes: ['Ballroom Weddings', 'Corporate Conventions', 'Jazz Lounges', 'Architecture Tours'],
        venues: ['The Drake', 'Chicago Cultural Center', 'Adler Planetarium', 'The Field Museum']
    },
    {
        slug: 'san-francisco',
        name: 'San Francisco',
        title: 'San Francisco & Napa Valley Event Entertainment | Harborline',
        description: 'Elegant entertainment for Bay Area tech events and Napa Valley wine country weddings.',
        heroImage: '/hero.png',
        content: 'From tech galas in SoMa to vineyard weddings in Napa and Sonoma, Harborline provides sophisticated entertainment solutions. We specialize in versatile groups that can transition from an acoustic ceremony set to a high-energy dance party.',
        localVibe: 'Innovative, scenic, and relaxed luxury.',
        popularEventTypes: ['Winery Weddings', 'Tech Summits', 'Outdoor Festivals', 'Museum Galas'],
        venues: ['San Francisco City Hall', 'Fairmont San Francisco', 'Carneros Resort (Napa)', 'Exploratorium']
    }
];
