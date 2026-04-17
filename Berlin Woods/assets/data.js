const heroImages = {
  main: "https://bookingenginecdn.hostaway.com/listing/58297-214149-UluOzaL2WTUaTn1i8s2cJS0HOfaNZdm--T22bPF2asf4-6685fcf89f68f?format=webp&quality=70&v=2&width=1200",
  secondary: "https://bookingenginecdn.hostaway.com/listing/58297-214157-l8SiBoQIND--w2IK16zYGWrOZ5oalse--sWXvPnM1oQCY-655b74eeb0934?format=webp&quality=70&v=2&width=1200"
};

const galleryItems = [
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214149-UluOzaL2WTUaTn1i8s2cJS0HOfaNZdm--T22bPF2asf4-6685fcf89f68f?format=webp&quality=70&v=2&width=1200",
    title: "Arrival through the trees",
    copy: "Walkways bring you in at tree level, setting the tone before you even unlock the door."
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214157-l8SiBoQIND--w2IK16zYGWrOZ5oalse--sWXvPnM1oQCY-655b74eeb0934?format=webp&quality=70&v=2&width=1200",
    title: "Private wooded setting",
    copy: "Each stay is tucked into its own pocket of the property, quiet, wooded, and set apart."
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214173-4HG3uwv6a4aLj9zPytHKHU--1hf5ea-LNi3YoI7sRa98-655b664331e70?format=webp&quality=70&v=2&width=1200",
    title: "Room for longer stays",
    copy: "The larger stays give families and small groups more room to settle in and stay awhile."
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214172-X5BnTVsvRwu8BHzB0v1LS7wBg7pZq8vlqxhfPTFUxOM-655b65ebe0ef2?format=webp&quality=70&v=2&width=1200",
    title: "Skyview treehouse stay",
    copy: "Skyview treehouses open up to longer views across the tree line and a different feel on the property."
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214166-1sAgDD4eSk3t71m---Ta-YFOO-OXYu9qUjpJXOEjL9lA-655b64b730d9f?format=webp&quality=70&v=2&width=1200",
    title: "Skyview Treehouse A",
    copy: "The Skyview treehouses sit higher up and open to longer views across the tree line — a different feel than the standard treehouses below."
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214159-kp-z3NB0Vi3u2n-XIF7uNHvK9KbMw6--iZlhu6IRX66g-655b8f922abcc?format=webp&quality=70&v=2&width=1200",
    title: "Closer exterior detail",
    copy: "Warm cedar exteriors, wide decks, and thoughtful details give the property its signature look."
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214150-Pj3zmw78-7bYCbUFt-T2JISd249rG8Kx2kkxK0jJ2oM-655b614f7639c?format=webp&quality=70&v=2&width=1200",
    title: "Thoughtful interiors throughout",
    copy: "Full kitchens, warm wood finishes, and comfortable spaces make each stay feel as good inside as the view looks outside."
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214172---gS3DppbQZQruB0r4svdcinV4i95N1SsX--fYOubeVCo-655b65eeaac46?format=webp&quality=70&v=2&width=1200",
    title: "Premium outdoor atmosphere",
    copy: "Covered porches, wooded views, and hot tubs on select stays help guests slow down once they arrive."
  }
];

const faqs = [
  {
    question: "How do I book a stay at Berlin Woods?",
    answer: "Every page on this website links directly to the Amish Country Lodging booking engine, so guests can book the exact treehouse or A-frame they want in just a few clicks. You can also call (330) 893-2100 for help."
  },
  {
    question: "How close is Berlin Woods to downtown Berlin?",
    answer: "The property sits less than a mile from the shops and restaurants in downtown Berlin. Guests can enjoy the full Amish Country experience while returning to a private, wooded setting each evening."
  },
  {
    question: "Are the treehouses really elevated?",
    answer: "Yes. The treehouses are approximately 30 feet off the ground. Guests should expect a true elevated treehouse experience, accessed by stairs and walkways, with a natural amount of gentle movement you would expect from a tree-supported structure."
  },
  {
    question: "What amenities are included with each stay?",
    answer: "Depending on the unit, guests can enjoy full kitchens, wood-burning or gas fireplaces, covered porches, two-person jetted tubs, outdoor hot tubs on select stays, smart TVs, complimentary WiFi, and spacious wooded views. Linens, towels, and basic kitchen essentials are provided."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellation terms are shown at the time of booking and may vary by stay and season. For specific details about your reservation or to make a change, please call (330) 893-2100."
  },
  {
    question: "Is Berlin Woods pet-friendly?",
    answer: "The Berlin Woods treehouses are not pet-friendly, but several pet-friendly options are available at other Amish Country Lodging properties. Pet-friendly stays include all Blessings Lodge suites, both Berlin Tiny Stays, all Premier Cottages, and the Dogwood, Briarwood, Fox, and Rabbit's Nest cabins at Coblentz Country Cabins. Call (330) 893-2100 or visit amishcountrylodging.com for details."
  },
  {
    question: "Is there WiFi and cell service at the property?",
    answer: "Yes. All stays include complimentary WiFi. Most major carriers have cell coverage in the Berlin area, though signal strength can vary slightly depending on your carrier and the specific unit."
  },
  {
    question: "Is Berlin Woods accessible for guests with mobility limitations?",
    answer: "Because the treehouses are elevated approximately 30 feet off the ground and reached by stairs and walkways, they are not ideal for guests with significant mobility limitations. Please call (330) 893-2100 to discuss your needs and find the best option across the Amish Country Lodging family of properties."
  },
  {
    question: "What is the best time of year to visit Berlin Woods?",
    answer: "Berlin Woods is beautiful year-round. Fall brings incredible foliage and is the busiest season in Amish Country. Spring and summer offer lush green surroundings and the full use of outdoor spaces, while winter is especially cozy with fireplaces and quiet, snow-covered woods."
  },
  {
    question: "Is Berlin Woods good for couples, families, or both?",
    answer: "Both. The smaller one-king-bed treehouses are especially popular for anniversaries, honeymoons, and romantic getaways, while the 3-story treehouses and the Skyview A-Frame comfortably host families and small groups of up to 10 guests."
  },
  {
    question: "How far is Berlin Woods from Cleveland or Columbus?",
    answer: "Berlin Woods is roughly 90 minutes from Cleveland and about two hours from Columbus, making it an easy weekend trip from most of Ohio and the surrounding states."
  },
  {
    question: "Can guests use outdoor grills, fire pits, or dining areas?",
    answer: "Many of the stays include covered porches and outdoor seating. Grill and fire pit availability can vary by unit — please review your specific listing at booking or call (330) 893-2100 with any questions."
  }
];

const featuredUnitNames = [
  "Skyview A-Frame",
  "Treehouse #0",
  "Treehouse #1",
  "Treehouse #2",
  "Treehouse #3",
  "Treehouse #4",
  "Treehouse #5",
  "Treehouse #6",
  "Treehouse #7",
  "Treehouse #8",
  "Skyview Treehouse A",
  "Skyview Treehouse B",
  "Skyview Treehouse D"
];

const units = [
  {
    name: "Treehouse #0",
    guests: "Up to 2 guests",
    beds: "1 king bed",
    type: "Romantic treehouse",
    highlight: "A single-level treehouse for two with a king bed, full kitchen, and private hot tub.",
    amenities: ["Outdoor hot tub", "Full kitchen", "Fireplace", "Jacuzzi", "Smart TV", "30' up, single level"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214159",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214159-ByjU0U-ZxglTDm9o1qV7KZbjTgHufuMqLbz7BMNUdvs-655b74fd11f76?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Treehouse #1",
    guests: "Up to 6 guests",
    beds: "2 king beds, 2 twin beds",
    type: "Family-friendly treehouse",
    highlight: "A 3-story treehouse that sleeps up to 6 with two king beds, two twin beds, and two full bathrooms.",
    amenities: ["2 king beds, 2 twin beds", "Full kitchen", "2 full bathrooms", "30' up, 3-stories", "Fireplace", "Smart TV"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214149",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214149-UluOzaL2WTUaTn1i8s2cJS0HOfaNZdm--T22bPF2asf4-6685fcf89f68f?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Treehouse #2",
    guests: "Up to 6 guests",
    beds: "2 king beds, 2 twin beds",
    type: "Family-friendly treehouse",
    highlight: "A 3-story treehouse that sleeps up to 6 with two king beds, two twin beds, and two full bathrooms.",
    amenities: ["2 king beds, 2 twin beds", "Full kitchen", "2 full bathrooms", "30' up, 3-stories", "Fireplace", "Smart TV"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214150",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214150-MJZPQtkgbI1aLLwQ5zm--l3kGO5idg0BBZqBgKv3FkvQ-6685fd4eb5fd3?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Treehouse #3",
    guests: "Up to 6 guests",
    beds: "2 king beds, 2 twin beds",
    type: "Family-friendly treehouse",
    highlight: "A larger treehouse that sleeps up to 6 with 3 bedrooms, 2 bathrooms, and a full kitchen.",
    amenities: ["3 bedrooms", "2 bathrooms", "Full kitchen", "Fireplace", "Smart TV", "Sleeps 6"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214151",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214151-C--d-6D3oFkR-k-rKnaWip7LDHldY7uXg07CNRUpDVJM-6685fd7bc074c?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Treehouse #4",
    guests: "Up to 2 guests",
    beds: "1 king bed",
    type: "Couples treehouse",
    highlight: "A single-level treehouse for two with a king bed, full kitchen, and one bathroom.",
    amenities: ["King bed", "Full kitchen", "1 bathroom", "30' up, single level", "Fireplace", "Smart TV"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214152",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214152-DPtJIjaRL2HGxDfV3j72CW5L9KS1dFSUZaqYlRMp7DY-657489c08e174?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Treehouse #5",
    guests: "Up to 2 guests",
    beds: "1 king bed",
    type: "Couples treehouse",
    highlight: "A single-level treehouse for two with a king bed, full kitchen, and one bathroom.",
    amenities: ["King bed", "Full kitchen", "1 bathroom", "30' up, single level", "Fireplace", "Smart TV"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214141",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214141-yi0J8zN2ct6Isvd2WBb5uAh1MXPdQHNO1N1OgBvw6Vc-655b5f0bd2da1?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Treehouse #6",
    guests: "Up to 2 guests",
    beds: "1 king bed",
    type: "Luxury treehouse",
    highlight: "A single-level treehouse for two with a king bed, full kitchen, and one bathroom.",
    amenities: ["King bed", "Full kitchen", "1 bathroom", "30' up, single level", "Fireplace", "Smart TV"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214153",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214153-jW72Mm4uENqPnDtATMT8cOaLbcTn2YXkDz3hI9toyhg-655b620753efc?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Treehouse #7",
    guests: "Up to 2 guests",
    beds: "1 king bed",
    type: "Hot tub treehouse",
    highlight: "A single-level treehouse for two with a king bed, full kitchen, and private hot tub.",
    amenities: ["Outdoor hot tub", "Full kitchen", "Fireplace", "Jacuzzi", "Smart TV", "30' up, single level"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214158",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214158-FfmnlAhn--zzMksZYQrhx-ocWBk9DNiOcxFw92O393YI-655b6302a51e8?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Treehouse #8",
    guests: "Up to 2 guests",
    beds: "1 king bed",
    type: "Hot tub treehouse",
    highlight: "A single-level treehouse for two with a king bed, full kitchen, and private hot tub.",
    amenities: ["Outdoor hot tub", "Full kitchen", "Fireplace", "Jacuzzi", "Smart TV", "30' up, single level"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214157",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214157-l8SiBoQIND--w2IK16zYGWrOZ5oalse--sWXvPnM1oQCY-655b74eeb0934?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Skyview Treehouse A",
    guests: "Up to 6 guests",
    beds: "2 king beds, 2 twin beds",
    type: "Skyview treehouse",
    highlight: "A 3-story Skyview treehouse that sleeps up to 6 with two king beds, two twin beds, and a hot tub.",
    amenities: ["Hot tub", "Full kitchen", "Fireplace", "Jacuzzi", "2 king beds, 2 twin beds", "2 bathrooms"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214166",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214166-1sAgDD4eSk3t71m---Ta-YFOO-OXYu9qUjpJXOEjL9lA-655b64b730d9f?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Skyview Treehouse B",
    guests: "Up to 6 guests",
    beds: "2 king beds, 2 twin beds",
    type: "Skyview treehouse",
    highlight: "A 3-story Skyview treehouse that sleeps up to 6 with two king beds, two twin beds, and a hot tub.",
    amenities: ["Hot tub", "Full kitchen", "Fireplace", "Jacuzzi", "2 king beds, 2 twin beds", "2 bathrooms"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214165",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214165-tJPsf9gKLGZlmn3jzqAG6xUgsRH0ccCZSWjR3quVEJ4-655b647474e44?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Skyview Treehouse D",
    guests: "Up to 6 guests",
    beds: "2 king beds, 2 twin beds",
    type: "Skyview treehouse",
    highlight: "A 3-story Skyview treehouse that sleeps up to 6 with two king beds, two twin beds, and a hot tub.",
    amenities: ["Hot tub", "Full kitchen", "Fireplace", "Jacuzzi", "2 king beds, 2 twin beds", "2 bathrooms"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214172",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214172-X5BnTVsvRwu8BHzB0v1LS7wBg7pZq8vlqxhfPTFUxOM-655b65ebe0ef2?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Skyview A-Frame",
    guests: "Up to 10 guests",
    beds: "3 king beds, 4 twin bunk beds",
    type: "A-frame cabin",
    highlight: "The largest stay at Berlin Woods, sleeping up to 10 with panoramic views and an 8-person outdoor hot tub.",
    amenities: ["Sleeps 10", "8-person hot tub", "Full kitchen", "Fireplace", "3 king beds, 4 twin bunks", "2 bathrooms"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214173",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214173-4HG3uwv6a4aLj9zPytHKHU--1hf5ea-LNi3YoI7sRa98-655b664331e70?format=webp&quality=70&v=2&width=1200"
  }
];
