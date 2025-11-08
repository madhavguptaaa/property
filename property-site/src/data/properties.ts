export type PropertyCategory =
  | "Apartment"
  | "Villa"
  | "Penthouse"
  | "Duplex"
  | "Plot"
  | "Office"
  | "Retail";

export interface PropertySummary {
  id: string;
  name: string;
  location: string;
  city: string;
  priceCr: number;
  priceLabel: string;
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  type: PropertyCategory;
  description: string;
  amenities: string[];
  image: string;
}

export const properties: PropertySummary[] = [
  {
    id: "blr-crest-01",
    name: "One Crest Residence",
    location: "Central Business District",
    city: "Bengaluru",
    priceCr: 3.8,
    priceLabel: "₹3.8 Cr",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 3150,
    type: "Apartment",
    description:
      "Skyline-facing residence with double-height living, Italian marble flooring, and home automation.",
    amenities: ["Club lounge", "Infinity pool", "Private deck", "3-car parking"],
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-vista-02",
    name: "Azure Vista Penthouse",
    location: "Outer Ring Road",
    city: "Bengaluru",
    priceCr: 2.95,
    priceLabel: "₹2.95 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2450,
    type: "Penthouse",
    description:
      "Top-floor penthouse with panoramic city views, wraparound terrace, and smart climate control.",
    amenities: ["Sky garden", "Jacuzzi", "Concierge", "EV charging"],
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-villa-03",
    name: "Palm Grove Estate",
    location: "Whitefield",
    city: "Bengaluru",
    priceCr: 5.6,
    priceLabel: "₹5.6 Cr",
    bedrooms: 5,
    bathrooms: 5,
    areaSqft: 4500,
    type: "Villa",
    description:
      "Gated villa community with central courtyard, private lap pool, and chef's kitchen.",
    amenities: ["Private pool", "Home gym", "Servant quarters", "Landscaped lawn"],
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-lofty-04",
    name: "Lofty Heights Duplex",
    location: "Indiranagar",
    city: "Bengaluru",
    priceCr: 2.35,
    priceLabel: "₹2.35 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2100,
    type: "Duplex",
    description:
      "Sunlit duplex with 22-foot ceilings, mezzanine study, and artisanal interiors curated by Aggent.",
    amenities: ["Private study", "Designer interiors", "Terrace lounge", "Smart locks"],
    image:
      "https://images.unsplash.com/photo-1530220699269-b92c0f6a6d68?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-luxe-05",
    name: "Signature Luxe Tower",
    location: "Residency Road",
    city: "Bengaluru",
    priceCr: 4.2,
    priceLabel: "₹4.2 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3320,
    type: "Apartment",
    description:
      "Corner apartment with triple-aspect glazing, private elevator lobby, and concierge-managed services.",
    amenities: ["Sky lounge", "Fitness studio", "Library", "Guest suites"],
    image:
      "https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-lake-06",
    name: "Lakefront Serenity Villa",
    location: "Hebbal",
    city: "Bengaluru",
    priceCr: 6.45,
    priceLabel: "₹6.45 Cr",
    bedrooms: 5,
    bathrooms: 6,
    areaSqft: 5200,
    type: "Villa",
    description:
      "Expansive villa overlooking the Hebbal lake with landscaped decks and entertainer's kitchen.",
    amenities: ["Infinity pool", "Home theatre", "Wet bar", "Private dock"],
    image:
      "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-sky-07",
    name: "Skyline Residences",
    location: "Lavelle Road",
    city: "Bengaluru",
    priceCr: 3.4,
    priceLabel: "₹3.4 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2600,
    type: "Apartment",
    description:
      "Boutique residences with Italian kitchens, smart lighting, and uninterrupted skyline views.",
    amenities: ["Sky deck", "Wine lounge", "Valet service", "Wellness spa"],
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-terrace-08",
    name: "Terrace Grove Duplex",
    location: "Koramangala",
    city: "Bengaluru",
    priceCr: 2.6,
    priceLabel: "₹2.6 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2250,
    type: "Duplex",
    description:
      "Split-level duplex with private terrace cabana, outdoor kitchen, and den for remote work.",
    amenities: ["Terrace cabana", "Outdoor kitchen", "Smart automation", "Two parking bays"],
    image:
      "https://images.unsplash.com/photo-1521783988139-893ce16c6655?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-smart-09",
    name: "Smart Loft Residences",
    location: "Yeshwanthpur",
    city: "Bengaluru",
    priceCr: 1.65,
    priceLabel: "₹1.65 Cr",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1480,
    type: "Apartment",
    description:
      "Minimalist loft with open floor plan, configurable walls, and integrated voice-enabled controls.",
    amenities: ["Cowork lounge", "Gaming room", "Rooftop decks", "24/7 concierge"],
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-garden-10",
    name: "Garden Atrium Villa",
    location: "Devanahalli",
    city: "Bengaluru",
    priceCr: 4.8,
    priceLabel: "₹4.8 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3980,
    type: "Villa",
    description:
      "Courtyard villa with triple-height atrium, zen garden, and solar cooling systems.",
    amenities: ["Courtyard", "Solar panels", "Meditation deck", "Servant quarters"],
    image:
      "https://images.unsplash.com/photo-1522050212171-61b01dd24579?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-sea-11",
    name: "Bayview Residences",
    location: "Worli Sea Face",
    city: "Mumbai",
    priceCr: 2.9,
    priceLabel: "₹2.9 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2200,
    type: "Apartment",
    description:
      "Sea-facing residence with glass balconies, integrated sound system, and bespoke wardrobes.",
    amenities: ["Sea lounge", "Fitness studio", "Spa", "Valet"],
    image:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b06?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-marine-12",
    name: "Marine Drive Signature",
    location: "Marine Drive",
    city: "Mumbai",
    priceCr: 5.9,
    priceLabel: "₹5.9 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3400,
    type: "Apartment",
    description:
      "Iconic address with curated interiors, wraparound glazing, and private entertainment den.",
    amenities: ["Private screening", "Chef service", "Sky lounge", "Temperature control"],
    image:
      "https://images.unsplash.com/photo-1505692794403-55b39e08c568?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-soho-13",
    name: "SoHo Boulevard Loft",
    location: "Lower Parel",
    city: "Mumbai",
    priceCr: 3.75,
    priceLabel: "₹3.75 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2550,
    type: "Penthouse",
    description:
      "Industrial-chic loft with exposed ceilings, designer kitchen, and access to business club.",
    amenities: ["Business club", "Sky pool", "Art lounge", "Housekeeping"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-sunset-14",
    name: "Sunset Crest Villa",
    location: "Alibaug",
    city: "Mumbai",
    priceCr: 7.1,
    priceLabel: "₹7.1 Cr",
    bedrooms: 5,
    bathrooms: 6,
    areaSqft: 5600,
    type: "Villa",
    description:
      "Weekend villa with infinity pool, cabana lounge, and private beach access curated by Aggent.",
    amenities: ["Private beach", "Infinity pool", "Outdoor bar", "Helipad access"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-icon-15",
    name: "Iconic Towers Signature",
    location: "Bandra Kurla Complex",
    city: "Mumbai",
    priceCr: 4.65,
    priceLabel: "₹4.65 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3120,
    type: "Apartment",
    description:
      "Premium residence with club-managed concierge, panoramic skyline deck, and flexible study.",
    amenities: ["Concierge", "Sky deck", "Residents lounge", "Creche"],
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-art-16",
    name: "Art District Loft",
    location: "Kala Ghoda",
    city: "Mumbai",
    priceCr: 2.45,
    priceLabel: "₹2.45 Cr",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1700,
    type: "Apartment",
    description:
      "Boutique loft within heritage building, restored by Aggent design studio with gallery lighting.",
    amenities: ["Gallery walls", "Wine cellar", "Private elevator", "Concierge"],
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-pearl-17",
    name: "Pearl Harbour Penthouse",
    location: "Colaba",
    city: "Mumbai",
    priceCr: 6.2,
    priceLabel: "₹6.2 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3500,
    type: "Penthouse",
    description:
      "Bespoke penthouse overlooking the harbour with sky garden, glass pool, and entertainment deck.",
    amenities: ["Glass pool", "Sky garden", "Outdoor cinema", "Private lift"],
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-nova-18",
    name: "Nova Corporate Suites",
    location: "Andheri East",
    city: "Mumbai",
    priceCr: 1.8,
    priceLabel: "₹1.8 Cr",
    bedrooms: 0,
    bathrooms: 2,
    areaSqft: 1850,
    type: "Office",
    description:
      "Grade-A office floor with plug-and-play infrastructure, 40 workstations, and meeting pods.",
    amenities: ["Conference pods", "High-speed lifts", "Data center", "Cafeteria"],
    image:
      "https://images.unsplash.com/photo-1483478550801-781f8f86036e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-retail-19",
    name: "Boulevard Flagship Retail",
    location: "Juhu",
    city: "Mumbai",
    priceCr: 3.3,
    priceLabel: "₹3.3 Cr",
    bedrooms: 0,
    bathrooms: 1,
    areaSqft: 2100,
    type: "Retail",
    description:
      "High street retail space with 40-foot frontage, double-height ceiling, and valet-supported parking.",
    amenities: ["Valet", "Brand signage", "Power backup", "Visitor lounge"],
    image:
      "https://images.unsplash.com/photo-1529429617124-aee80fad9fe0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-skyline-20",
    name: "Skyline Terrace Residences",
    location: "Santacruz West",
    city: "Mumbai",
    priceCr: 3.2,
    priceLabel: "₹3.2 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2480,
    type: "Apartment",
    description:
      "High-rise apartment with landscaped terrace, modular kitchen, and wellness-focused amenities.",
    amenities: ["Terrace walk", "Hydro spa", "Music room", "Pet park"],
    image:
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-tech-21",
    name: "Tech Park Studio Offices",
    location: "Electronic City",
    city: "Bengaluru",
    priceCr: 1.2,
    priceLabel: "₹1.2 Cr",
    bedrooms: 0,
    bathrooms: 2,
    areaSqft: 1600,
    type: "Office",
    description:
      "Managed office suite with agile seating, boardroom, and plug-and-play IT infrastructure.",
    amenities: ["Agile seating", "Boardroom", "Server room", "Cafe"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-halo-22",
    name: "Halo Heights Apartment",
    location: "Sarjapur Road",
    city: "Bengaluru",
    priceCr: 1.85,
    priceLabel: "₹1.85 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1780,
    type: "Apartment",
    description:
      "High-rise apartment with sun-drenched interiors, private study, and wellness deck.",
    amenities: ["Wellness deck", "Indoor games", "Lap pool", "Library"],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-meridian-23",
    name: "Meridian Central",
    location: "MG Road",
    city: "Bengaluru",
    priceCr: 2.7,
    priceLabel: "₹2.7 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2300,
    type: "Apartment",
    description:
      "Executive-class apartment steps away from UB City with minimalist interiors and skyline views.",
    amenities: ["Sky lounge", "Fitness hub", "Banquet", "Valet"],
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-zenith-24",
    name: "Zenith Crown Villa",
    location: "Sarjapur Extension",
    city: "Bengaluru",
    priceCr: 3.95,
    priceLabel: "₹3.95 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3650,
    type: "Villa",
    description:
      "Contemporary villa with expansive glass facades, private lawn, and entertainment basement.",
    amenities: ["Home theatre", "Gym", "Jacuzzi", "Security suite"],
    image:
      "https://images.unsplash.com/photo-1480636996228-3b71f61b91df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-sierra-25",
    name: "Sierra Crest Residences",
    location: "Banashankari",
    city: "Bengaluru",
    priceCr: 1.55,
    priceLabel: "₹1.55 Cr",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1420,
    type: "Apartment",
    description:
      "Boutique residences with curated landscaping, biophilic interiors, and wellness amenities.",
    amenities: ["Herb garden", "Meditation pod", "Reading lounge", "Infinity edge pool"],
    image:
      "https://images.unsplash.com/photo-1515269061885-147006015ac1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-aurora-26",
    name: "Aurora Heights",
    location: "Goregaon East",
    city: "Mumbai",
    priceCr: 2.1,
    priceLabel: "₹2.1 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1890,
    type: "Apartment",
    description:
      "Premium apartment with dual balconies, modular wardrobe systems, and co-working lounge.",
    amenities: ["Co-work lounge", "Sky pool", "Fitness center", "Kids zone"],
    image:
      "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-urban-27",
    name: "Urban Edge Residences",
    location: "Mulund West",
    city: "Mumbai",
    priceCr: 1.75,
    priceLabel: "₹1.75 Cr",
    bedrooms: 3,
    bathrooms: 2,
    areaSqft: 1650,
    type: "Apartment",
    description:
      "Family-friendly residences with tree-lined views, kids arena, and community café.",
    amenities: ["Community cafe", "Play park", "Jogging track", "Coaching studio"],
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-verve-28",
    name: "Verve Sky Villas",
    location: "Powai",
    city: "Mumbai",
    priceCr: 4.9,
    priceLabel: "₹4.9 Cr",
    bedrooms: 4,
    bathrooms: 5,
    areaSqft: 4100,
    type: "Penthouse",
    description:
      "Sky villa with double-height windows, sun deck, and access to sailing club at Powai lake.",
    amenities: ["Sun deck", "Clubhouse", "Sailing club", "Home office"],
    image:
      "https://images.unsplash.com/photo-1530031669569-225c6a325614?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-cascade-29",
    name: "Cascade Waterfront Villa",
    location: "Madh Island",
    city: "Mumbai",
    priceCr: 8.4,
    priceLabel: "₹8.4 Cr",
    bedrooms: 5,
    bathrooms: 6,
    areaSqft: 6200,
    type: "Villa",
    description:
      "Waterfront villa with cascading pools, outdoor kitchen, and separate guest cottage.",
    amenities: ["Cascading pools", "Guest cottage", "Outdoor kitchen", "Boat dock"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-equinox-30",
    name: "Equinox Residences",
    location: "Bellandur",
    city: "Bengaluru",
    priceCr: 1.95,
    priceLabel: "₹1.95 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1920,
    type: "Apartment",
    description:
      "Lake-adjacent homes with dual balconies, organic community garden, and sky lounge.",
    amenities: ["Organic farm", "Sky lounge", "Fitness hub", "Pet park"],
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-horizon-31",
    name: "Horizon Signature Offices",
    location: "Manyata Tech Park",
    city: "Bengaluru",
    priceCr: 2.35,
    priceLabel: "₹2.35 Cr",
    bedrooms: 0,
    bathrooms: 2,
    areaSqft: 2850,
    type: "Office",
    description:
      "Premium office floor with breakout lounges, acoustic pods, and panoramic terrace.",
    amenities: ["Panoramic terrace", "Acoustic pods", "Cafe", "High-speed lifts"],
    image:
      "https://images.unsplash.com/photo-1587613864508-5a5b01c5c1ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-lagoon-32",
    name: "Lagoon Garden Villas",
    location: "Hennur",
    city: "Bengaluru",
    priceCr: 3.15,
    priceLabel: "₹3.15 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3400,
    type: "Villa",
    description:
      "Sri Lankan-inspired villas with central lagoon, semi-outdoor baths, and curated landscaping.",
    amenities: ["Lagoon pool", "Outdoor baths", "Yoga deck", "Guest suite"],
    image:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b06?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-aurum-33",
    name: "Aurum Sky Residences",
    location: "JP Nagar",
    city: "Bengaluru",
    priceCr: 1.45,
    priceLabel: "₹1.45 Cr",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1380,
    type: "Apartment",
    description:
      "Stylish residences with smart lighting, modular study, and rooftop infinity pool.",
    amenities: ["Rooftop pool", "Cycling studio", "BBQ deck", "Concierge desk"],
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-indigo-34",
    name: "Indigo Park Homes",
    location: "Thanisandra",
    city: "Bengaluru",
    priceCr: 1.25,
    priceLabel: "₹1.25 Cr",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1275,
    type: "Apartment",
    description:
      "Family residences with park-facing balconies, kids arena, and sports courts.",
    amenities: ["Sports courts", "Kids arena", "Reflexology path", "Clubhouse"],
    image:
      "https://images.unsplash.com/photo-1529429617124-aee80fad9fe0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-summit-35",
    name: "Summit Crest Penthouse",
    location: "Richmond Town",
    city: "Bengaluru",
    priceCr: 4.5,
    priceLabel: "₹4.5 Cr",
    bedrooms: 4,
    bathrooms: 5,
    areaSqft: 3800,
    type: "Penthouse",
    description:
      "Two-level penthouse with glass staircase, private plunge pool, and skyline-facing study.",
    amenities: ["Plunge pool", "Glass study", "Private lift", "Sky deck"],
    image:
      "https://images.unsplash.com/photo-1530031669569-225c6a325614?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-cascade-36",
    name: "Cascade Row Homes",
    location: "Varthur",
    city: "Bengaluru",
    priceCr: 2.05,
    priceLabel: "₹2.05 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2060,
    type: "Duplex",
    description:
      "Townhome-style duplex with private backyard, double-height living, and cowork studio.",
    amenities: ["Backyard", "Cowork studio", "Clubhouse", "Community farm"],
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-orchid-37",
    name: "Orchid Crest",
    location: "Thane West",
    city: "Mumbai",
    priceCr: 1.6,
    priceLabel: "₹1.6 Cr",
    bedrooms: 3,
    bathrooms: 2,
    areaSqft: 1580,
    type: "Apartment",
    description:
      "Well-connected residences with sky jogging track, spa, and digital concierge.",
    amenities: ["Sky track", "Spa", "Digital concierge", "Banquet"],
    image:
      "https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-elite-38",
    name: "Elite Harbour Suites",
    location: "Versova",
    city: "Mumbai",
    priceCr: 3.45,
    priceLabel: "₹3.45 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 2750,
    type: "Apartment",
    description:
      "Sea-breeze homes with wrap terrace, custom wardrobes, and artistic lighting.",
    amenities: ["Wrap terrace", "Art studio", "Spa", "Concierge"],
    image:
      "https://images.unsplash.com/photo-1521783988139-893ce16c6655?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-mont-39",
    name: "Mont Blanc Villas",
    location: "Lonavala",
    city: "Mumbai",
    priceCr: 4.75,
    priceLabel: "₹4.75 Cr",
    bedrooms: 5,
    bathrooms: 5,
    areaSqft: 4800,
    type: "Villa",
    description:
      "Hilltop villas with glass façade, infinity pool, and private chef services on request.",
    amenities: ["Infinity pool", "Chef services", "Fire pit", "Games room"],
    image:
      "https://images.unsplash.com/photo-1522050212171-61b01dd24579?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-panorama-40",
    name: "Panorama Sky Residence",
    location: "Tardeo",
    city: "Mumbai",
    priceCr: 5.15,
    priceLabel: "₹5.15 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3300,
    type: "Apartment",
    description:
      "Sky residence with 270-degree views, integrated home office, and wellness spa access.",
    amenities: ["Wellness spa", "Home office", "Concierge", "Sky lounge"],
    image:
      "https://images.unsplash.com/photo-1505692794403-55b39e08c568?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-zen-41",
    name: "Zen Suites",
    location: "Chembur",
    city: "Mumbai",
    priceCr: 1.55,
    priceLabel: "₹1.55 Cr",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1350,
    type: "Apartment",
    description:
      "Serene residences with landscaped courtyards, meditation pods, and pet-friendly zones.",
    amenities: ["Meditation pods", "Pet zone", "Community cafe", "Fitness hub"],
    image:
      "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-sapphire-42",
    name: "Sapphire Quarters",
    location: "Sion",
    city: "Mumbai",
    priceCr: 2.35,
    priceLabel: "₹2.35 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1980,
    type: "Apartment",
    description:
      "City-center residences with premium clubhouse, urban farms, and skyline lounge.",
    amenities: ["Urban farm", "Clubhouse", "Skyline lounge", "Kids studio"],
    image:
      "https://images.unsplash.com/photo-1524492449097-038526058e5a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-park-43",
    name: "Parkside Residences",
    location: "Jayanagar",
    city: "Bengaluru",
    priceCr: 1.75,
    priceLabel: "₹1.75 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1800,
    type: "Apartment",
    description:
      "Park-facing homes with breezy balconies, modern kitchens, and curated community amenities.",
    amenities: ["Community kitchen", "Fitness studio", "Kids arena", "Yoga lawn"],
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-harbour-44",
    name: "Harbour Edge Offices",
    location: "Whitefield Business District",
    city: "Bengaluru",
    priceCr: 2.05,
    priceLabel: "₹2.05 Cr",
    bedrooms: 0,
    bathrooms: 2,
    areaSqft: 2400,
    type: "Office",
    description:
      "Tech-ready office suites with integrated meeting pods, cafe, and concierge desk.",
    amenities: ["Meeting pods", "Cafe", "Concierge", "Security"],
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b096?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-oasis-45",
    name: "Oasis Retreat Villa",
    location: "Nandi Hills",
    city: "Bengaluru",
    priceCr: 4.35,
    priceLabel: "₹4.35 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 4200,
    type: "Villa",
    description:
      "Resort-style villa with infinity pool, landscaped terraces, and breathtaking hill views.",
    amenities: ["Infinity pool", "Terrace lounge", "Outdoor spa", "Butler quarters"],
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "blr-lattice-46",
    name: "Lattice Residences",
    location: "Hosur Road",
    city: "Bengaluru",
    priceCr: 1.35,
    priceLabel: "₹1.35 Cr",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1285,
    type: "Apartment",
    description:
      "Young, urban residences with co-working nooks, esports lounge, and music studio.",
    amenities: ["Esports lounge", "Music studio", "Co-working", "Sky cafe"],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-grand-47",
    name: "Grand Hyatt Residences",
    location: "Bandra East",
    city: "Mumbai",
    priceCr: 4.95,
    priceLabel: "₹4.95 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3600,
    type: "Apartment",
    description:
      "Hotel-managed residences featuring premium services, club lounge, and curated amenities.",
    amenities: ["Hotel services", "Club lounge", "Pool", "Spa"],
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-park-48",
    name: "Park Royale Homes",
    location: "Matunga",
    city: "Mumbai",
    priceCr: 2.05,
    priceLabel: "₹2.05 Cr",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1860,
    type: "Apartment",
    description:
      "Central Mumbai residences with curated community spaces, wellness zone, and EV-ready parking.",
    amenities: ["EV parking", "Wellness zone", "Library", "Community hall"],
    image:
      "https://images.unsplash.com/photo-1515269061885-147006015ac1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-summit-49",
    name: "Summit One Penthouse",
    location: "Malabar Hill",
    city: "Mumbai",
    priceCr: 8.9,
    priceLabel: "₹8.9 Cr",
    bedrooms: 5,
    bathrooms: 6,
    areaSqft: 5200,
    type: "Penthouse",
    description:
      "Ultra-luxury penthouse with infinity pool, private lift lobby, and panoramic Arabian Sea views.",
    amenities: ["Infinity pool", "Private lift", "Wine cellar", "Sky lounge"],
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mum-luxe-50",
    name: "Luxe Curve Residences",
    location: "Peddar Road",
    city: "Mumbai",
    priceCr: 6.35,
    priceLabel: "₹6.35 Cr",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3650,
    type: "Apartment",
    description:
      "Art-inspired residence with curved glass walls, bespoke kitchen, and hotel-style services.",
    amenities: ["Valet", "Concierge", "Spa", "Banquet suites"],
    image:
      "https://images.unsplash.com/photo-1521783988139-893ce16c6655?auto=format&fit=crop&w=1200&q=80",
  },
];

