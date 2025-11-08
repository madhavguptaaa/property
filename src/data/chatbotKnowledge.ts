import type { PropertySummary } from "@/data/properties";
import { properties } from "@/data/properties";

export interface KnowledgeEntry {
  keywords: string[];
  answer: string;
}

const generalEntries: KnowledgeEntry[] = [
  {
    keywords: ["what is aggent", "who is aggent", "about aggent"],
    answer:
      "Aggent is an AI-guided property advisory helping ambitious buyers and investors discover, evaluate, and close premium real estate across India.",
  },
  {
    keywords: ["services", "what services", "offerings", "solutions"],
    answer:
      "We provide buyer representation, investment advisory, developer partnerships, project launches, leasing mandates, and end-to-end concierge for walkthroughs, paperwork, and negotiation.",
  },
  {
    keywords: ["cities", "locations", "where do you operate"],
    answer:
      "Our core focus is Bengaluru and Mumbai micro-markets. We also support select mandates in Goa and Delhi NCR through Aggent’s partner network.",
  },
  {
    keywords: ["fees", "cost", "commission"],
    answer:
      "Buyer services are typically complimentary because Aggent partners with developers and curated sellers. Bespoke retainers are discussed upfront for complex mandates.",
  },
  {
    keywords: ["walkthrough", "schedule visit", "site visit"],
    answer:
      "Most walkthroughs are scheduled within 24–48 hours. For high-demand launches or limited-inventory homes we line up priority slots for Aggent clients.",
  },
  {
    keywords: ["legal support", "paperwork", "documentation", "loan assistance"],
    answer:
      "Yes—we coordinate due diligence, RERA verification, legal review, financing, and closing documentation via trusted partners so every transaction stays compliant.",
  },
  {
    keywords: ["contact", "call aggent", "email aggent", "reach aggent"],
    answer:
      "Reach us at concierge@aggent.in or call +91 98765 43210. You can also submit the consultation form on the contact page for a 24-hour callback.",
  },
  {
    keywords: ["developer tie ups", "developer partners", "which developers"],
    answer:
      "Aggent partners with India’s leading developers including Prestige, Sobha, Godrej, Assetz, Adani Realty, and Puravankara, enabling exclusive allocations and pricing clarity.",
  },
  {
    keywords: ["investment advisory", "rental yield", "roi", "returns"],
    answer:
      "Our investment advisory benchmarks rental yields, capital appreciation, exit timelines, and micro-market demand to deliver a quantified recommendation before you commit.",
  },
  {
    keywords: ["home loan", "mortgage", "finance options"],
    answer:
      "We work with top banking partners to secure preferential loan rates, priority sanctioning, and structured payment plans tailored to luxury or investment purchases.",
  },
];

const propertyEntries: KnowledgeEntry[] = properties.flatMap((property) => {
  const baseName = property.name.toLowerCase();
  const slug = property.id.toLowerCase();
  const city = property.city;
  const location = property.location;
  const price = property.priceLabel;
  const type = property.type;
  const area = property.areaSqft.toLocaleString();
  const beds = property.bedrooms;
  const baths = property.bathrooms;
  const amenities = property.amenities.slice(0, 4).join(", ");

  const summaryAnswer = `${property.name} is a ${type.toLowerCase()} located at ${location}, ${city}. It spans ${area} sq.ft., offers ${beds} bedrooms and ${baths} bathrooms, and is guided at ${price}. Highlights include ${amenities}.`;

  return [
    {
      keywords: [
        `${baseName}`,
        `${slug}`,
        `tell me about ${baseName}`,
        `${baseName} details`,
        `${baseName} overview`,
      ],
      answer: summaryAnswer,
    },
    {
      keywords: [
        `${baseName} price`,
        `${slug} price`,
        `price of ${baseName}`,
        `cost of ${baseName}`,
        `${baseName} pricing`,
      ],
      answer: `The guide price for ${property.name} in ${location}, ${city} is ${price}. Aggent can negotiate terms and structure payments with the developer or seller once you shortlist it.`,
    },
    {
      keywords: [
        `${baseName} location`,
        `${slug} location`,
        `where is ${baseName}`,
        `${baseName} address`,
        `${baseName} neighbourhood`,
      ],
      answer: `${property.name} sits in ${location}, ${city}. The neighbourhood offers premium social infrastructure and easy connectivity—perfect for our luxury buyers.`,
    },
    {
      keywords: [
        `${baseName} amenities`,
        `${slug} amenities`,
        `${baseName} features`,
        `${baseName} highlights`,
        `${baseName} facilities`,
      ],
      answer: `${property.name} features ${amenities}, curated to deliver a premium living experience that Aggent clients expect.`,
    },
    {
      keywords: [
        `${baseName} layout`,
        `${slug} layout`,
        `${baseName} configuration`,
        `${baseName} size`,
        `${baseName} area`,
      ],
      answer: `${property.name} offers a ${beds}-bed layout spanning ${area} sq.ft. with ${baths} bathrooms, optimised for spacious living and seamless entertaining.`,
    },
  ];
});

const formatPropertyBullet = (property: PropertySummary) =>
  `• ${property.name} (${property.type}) — ${property.priceLabel}\n  ${property.location}, ${property.city} · ${property.bedrooms} beds · ${property.areaSqft.toLocaleString()} sq.ft.`;

const createListAnswer = (intro: string, homes: PropertySummary[]) => {
  const lines = homes.slice(0, 4).map(formatPropertyBullet).join("\n\n");
  const suffix =
    homes.length > 4
      ? `\n\n…and ${homes.length - 4} more listings. Tell me if you’d like the extended list or wish to arrange walkthroughs.`
      : "\n\nTell me if you’d like to book walkthroughs or refine the brief further.";
  return `${intro}\n\n${lines}${suffix}`;
};

const cityMap = new Map<string, PropertySummary[]>();
const locationMap = new Map<string, PropertySummary[]>();
const typeMap = new Map<string, PropertySummary[]>();
const amenityMap = new Map<string, PropertySummary[]>();

properties.forEach((property) => {
  const cityKey = property.city.toLowerCase();
  const locationKey = property.location.toLowerCase();
  const typeKey = property.type.toLowerCase();

  cityMap.set(cityKey, [...(cityMap.get(cityKey) ?? []), property]);
  locationMap.set(locationKey, [...(locationMap.get(locationKey) ?? []), property]);
  typeMap.set(typeKey, [...(typeMap.get(typeKey) ?? []), property]);

  property.amenities.forEach((amenity) => {
    const amenityKey = amenity.toLowerCase();
    amenityMap.set(amenityKey, [...(amenityMap.get(amenityKey) ?? []), property]);
  });
});

const cityEntries: KnowledgeEntry[] = Array.from(cityMap.entries()).map(([cityKey, homes]) => {
  const cityName = homes[0]?.city ?? cityKey;
  return {
    keywords: [
      cityKey,
      `${cityKey} properties`,
      `${cityKey} luxury homes`,
      `properties in ${cityKey}`,
      `${cityKey} real estate`,
      `${cityKey} apartments`,
      `${cityKey} villas`,
    ],
    answer: createListAnswer(`Here are Aggent-certified homes in ${cityName}:`, homes),
  };
});

const locationEntries: KnowledgeEntry[] = Array.from(locationMap.entries()).map(
  ([locationKey, homes]) => ({
    keywords: [
      locationKey,
      `${locationKey} properties`,
      `homes in ${locationKey}`,
      `projects at ${locationKey}`,
      `${locationKey} luxury homes`,
    ],
    answer: createListAnswer(
      `These are standout Aggent picks in ${homes[0]?.location ?? locationKey}:`,
      homes,
    ),
  }),
);

const typeKeywordMap: Record<string, string[]> = {
  apartment: ["apartment", "apartments", "luxury flats", "premium flats"],
  villa: ["villa", "villas", "independent villa", "luxury villa"],
  penthouse: ["penthouse", "penthouses", "sky villa", "sky residence"],
  duplex: ["duplex", "duplexes", "townhome"],
  plot: ["plot", "plots", "land parcel"],
  office: ["office", "office space", "workspace"],
  retail: ["retail", "retail space", "showroom"],
};

const typeEntries: KnowledgeEntry[] = Array.from(typeMap.entries()).flatMap(([typeKey, homes]) => {
  const keywords = typeKeywordMap[typeKey] ?? [typeKey];
  const baseEntry: KnowledgeEntry = {
    keywords: [
      ...keywords,
      `${typeKey} properties`,
      `best ${typeKey}`,
      `luxury ${typeKey}`,
      `${typeKey} options`,
    ],
    answer: createListAnswer(`Top ${typeKey} options in the Aggent portfolio:`, homes),
  };

  const perCityEntries = Array.from(
    homes.reduce((map, property) => {
      const key = property.city.toLowerCase();
      map.set(key, [...(map.get(key) ?? []), property]);
      return map;
    }, new Map<string, PropertySummary[]>()),
  ).map(([cityKey, cityHomes]) => ({
    keywords: keywords
      .map((keyword) => `${keyword} in ${cityKey}`)
      .concat([
        `${cityKey} ${typeKey}`,
        `${cityKey} ${typeKey} projects`,
        `${cityKey} ${typeKey} listings`,
      ]),
    answer: createListAnswer(
      `Here are ${typeKey} choices curated by Aggent in ${cityHomes[0]?.city ?? cityKey}:`,
      cityHomes,
    ),
  }));

  return [baseEntry, ...perCityEntries];
});

const priceSegments = [
  {
    label: "Premium homes under ₹2 Cr",
    min: 0,
    max: 2,
    keywords: ["under 2 cr", "budget luxury", "homes below 2 cr", "affordable luxury"],
  },
  {
    label: "Residences between ₹2 Cr and ₹3.5 Cr",
    min: 2,
    max: 3.5,
    keywords: ["2 cr to 3.5 cr", "mid segment luxury", "homes between 2 and 3.5 cr"],
  },
  {
    label: "Signature homes between ₹3.5 Cr and ₹5 Cr",
    min: 3.5,
    max: 5,
    keywords: ["3.5 cr to 5 cr", "premium bracket", "homes between 3 and 5 cr"],
  },
  {
    label: "Ultra luxury above ₹5 Cr",
    min: 5,
    max: Number.POSITIVE_INFINITY,
    keywords: ["above 5 cr", "ultra luxury", "super luxury", "homes over 5 cr"],
  },
] as const;

const priceEntries = priceSegments.reduce<KnowledgeEntry[]>((acc, segment) => {
  const matching = properties.filter(
    (property) => property.priceCr >= segment.min && property.priceCr < segment.max,
  );
  if (matching.length === 0) {
    return acc;
  }

  acc.push({
    keywords: [...segment.keywords],
    answer: createListAnswer(`${segment.label} in our active portfolio:`, matching),
  });

  return acc;
}, []);

const amenityEntries = Array.from(amenityMap.entries()).reduce<KnowledgeEntry[]>(
  (acc, [amenityKey, homes]) => {
    const cleanAmenity = amenityKey.replace(/[^a-z0-9\s]/g, "").trim();
    if (!cleanAmenity) {
      return acc;
    }

    acc.push({
      keywords: [
        cleanAmenity,
        `${cleanAmenity} homes`,
        `${cleanAmenity} properties`,
        `projects with ${cleanAmenity}`,
        `need ${cleanAmenity}`,
      ],
      answer: createListAnswer(`Homes featuring ${amenityKey} that we recommend:`, homes),
    });

    return acc;
  },
  [],
);

export const knowledgeBase: KnowledgeEntry[] = [
  ...generalEntries,
  ...propertyEntries,
  ...cityEntries,
  ...locationEntries,
  ...typeEntries,
  ...priceEntries,
  ...amenityEntries,
];

