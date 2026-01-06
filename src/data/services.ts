export interface ServiceData {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    content: string;
    features: string[];
    faq: { question: string; answer: string }[];
    testimonials: { quote: string; author: string; role: string }[];
}

export const servicesData: ServiceData[] = [
    {
        slug: 'wedding-bands',
        title: 'Luxury Wedding Bands Washington DC & MD',
        subtitle: 'Unforgettable Music for Your Special Day',
        description: 'Premier wedding bands in Washington DC, Maryland, and Virginia. High-energy dance bands, jazz quartets, and ceremony strings for luxury weddings.',
        heroImage: '/images/gallery/dc_lincoln_wedding_1764701180933.png',
        content: 'Your wedding day is a once-in-a-lifetime celebration, and the music should reflect that. Harborline provides industry-leading wedding bands that know how to read a crowd, pack a dance floor, and create moments of pure magic. From the first note of the processional to the last song of the night, we curate a musical journey that is uniquely yours.',
        features: ['Custom Setlists', 'Continuous Music', 'MC Services', 'Ceremony & Cocktail Options'],
        faq: [
            { question: "Can we choose our songs?", answer: "Absolutely. We work with you to build a setlist that reflects your taste, including special requests for first dances." },
            { question: "Do you provide lighting?", answer: "Yes, all our wedding packages include stage lighting to enhance the performance atmosphere." }
        ],
        testimonials: [
            { quote: "The band was absolutely incredible! The dance floor was packed all night.", author: "Sarah & Mike", role: "Bride & Groom" },
            { quote: "Best decision we made for our wedding. Professional, talented, and fun.", author: "Emily R.", role: "Bride" }
        ]
    },
    {
        slug: 'corporate-entertainment',
        title: 'Corporate Event Entertainment DC & MD',
        subtitle: 'Elevate Your Brand Experience',
        description: 'Professional corporate entertainment for galas, awards dinners, and conferences in Washington DC and Baltimore.',
        heroImage: '/images/gallery/dc_union_station_gala_1764701210684.png',
        content: 'Redefining the corporate event standard. Whether you\'re hosting a black-tie gala, a product launch, or a holiday party, Harborline delivers entertainment that aligns with your brand and engages your guests. We understand the flow of high-stakes corporate functions and provide seamless, professional service from start to finish.',
        features: ['Walk-on/Walk-off Cues', 'Background Jazz', 'High-Energy After Party', 'Full AV Support'],
        faq: [
            { question: "Can you play quietly during dinner?", answer: "Yes, we specialize in volume-controlled performances that allow for comfortable conversation." },
            { question: "Do you handle insurance?", answer: "We carry full liability insurance and can provide COIs for any venue." }
        ],
        testimonials: [
            { quote: "Harborline understood exactly what we needed for our gala. Classy and energetic.", author: "David T.", role: "Event Planner" },
            { quote: "Seamless execution from start to finish. Highly recommended.", author: "Jessica L.", role: "Marketing Director" }
        ]
    },
    {
        slug: 'private-party-djs',
        title: 'Private Party DJs Washington DC',
        subtitle: 'The Perfect Vibe for Any Occasion',
        description: 'Top-rated DJs for private parties, birthdays, and anniversaries in Washington DC, Baltimore, and Northern Virginia.',
        heroImage: '/images/gallery/annapolis_yacht_party_1764731435974.png',
        content: 'Curating the atmosphere, not just the playlist. Our DJs are true artists who mix live, read the room, and create an infectious energy. Perfect for milestone birthdays, anniversaries, or any private gathering where you want to keep the energy high and the dance floor full.',
        features: ['Open Format Mixing', 'High-End Sound Systems', 'Wireless Microphones', 'Club-Style Lighting'],
        faq: [
            { question: "Do you take requests?", answer: "Yes, we encourage requests and can also work off a 'do not play' list." },
            { question: "How much space do you need?", answer: "Our DJ setups are compact and can fit in almost any event space." }
        ],
        testimonials: [
            { quote: "The DJ read the crowd perfectly. We didn't want the night to end!", author: "Mark S.", role: "Birthday Host" },
            { quote: "Professional setup and great music selection.", author: "Amanda K.", role: "Party Planner" }
        ]
    },
    {
        slug: 'jazz-ensembles',
        title: 'Jazz Bands & Cocktail Music DC',
        subtitle: 'Sophisticated Atmosphere',
        description: 'Elegant jazz trios, quartets, and soloists for cocktail hours and dinner receptions in Washington DC and Maryland.',
        heroImage: '/images/gallery/bethesda_country_club_1764731508165.png',
        content: 'Set the perfect tone with the timeless sound of jazz. Our roster includes some of the finest jazz musicians on the East Coast, providing a sophisticated backdrop for cocktail hours, networking events, and dinner receptions. From swing standards to bossa nova, we create an atmosphere of refined elegance.',
        features: ['Instrumental or Vocal', 'Flexible Instrumentation', 'Acoustic Options', 'Great Gatsby Themes'],
        faq: [
            { question: "Do you need power?", answer: "We can perform acoustically for smaller spaces, but amplification is recommended for larger rooms." },
            { question: "Can you play pop covers?", answer: "Yes, we can perform jazz arrangements of modern pop songs for a contemporary twist." }
        ],
        testimonials: [
            { quote: "Added such a touch of class to our cocktail hour.", author: "Rebecca W.", role: "Event Host" },
            { quote: "Beautiful music and very professional musicians.", author: "Thomas H.", role: "Venue Manager" }
        ]
    }
];