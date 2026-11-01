export type SectionId = 'top' | 'cover' | 'services' | 'quote' | 'partners' | 'support';

export type CoverageCategory = Readonly<{
	title: string;
	description: string;
	icon: string;
	previewTitle: string;
	previewImage: string;
}>;

export type ProductCard = Readonly<{
	title: string;
	body: string;
	image: string;
}>;

export type MetricCard = Readonly<{
	value: string;
	label: string;
	body: string;
	image?: string;
	tone: 'photo' | 'orange' | 'blue' | 'gold';
}>;

export const coverages: readonly CoverageCategory[] = [
	{
		title: 'Life Insurance',
		description: 'Financial support to beneficiaries after the insured person dies.',
		icon: '6897 1.svg',
		previewTitle: 'Life Insurance',
		previewImage: 'Screenshot 2026-04-27 at 21.35.44 1.svg'
	},
	{
		title: 'Education Insurance',
		description: "Plan ahead for a child's future education expenses.",
		icon: '6897 2.svg',
		previewTitle: 'Education Insurance',
		previewImage: 'education.jpg'
	},
	{
		title: 'Health Insurance',
		description: 'Medical expenses such as hospital visits, treatments, and medicines.',
		icon: '6897 4.svg',
		previewTitle: 'Medical Insurance',
		previewImage: 'Screenshot 2026-04-27 at 21.39.26 1.svg'
	},
	{
		title: 'Personal Accident Insurance',
		description: "Coverage for injuries, disabilities, or death resulting from accidents.",
		icon: '6897 5.svg',
		previewTitle: 'Personal Accident Insurance',
		previewImage: 'personal_accident.jpg'
	},
	{
		title: 'Home Insurance',
		description: 'Damage or loss to a house and belongings due to fire, theft, or disasters.',
		icon: '6897 6.svg',
		previewTitle: 'Home Insurance',
		previewImage: 'home_insurance.jpg'
	},
	{
		title: 'Marine Insurance',
		description: 'Ships, cargo, and goods transported by sea or waterways.',
		icon: '6897 7.svg',
		previewTitle: 'Marine Insurance',
		previewImage: 'marine-cargo.jpg'
	},
	{
		title: 'Travel Insurance',
		description: 'Trip cancellations, medical emergencies, and lost luggage.',
		icon: '6897 2.svg',
		previewTitle: 'Travel Insurance',
		previewImage: 'travel_insurance.jpg'
	},
	{
		title: 'Motor Insurance',
		description: 'Coverage for private cars, commercial fleets, and daily movement.',
		icon: '6897 8.svg',
		previewTitle: 'Motor Insurance',
		previewImage: 'car-guy.png'
	}
];

export const products: readonly ProductCard[] = [
	{
		title: 'Business',
		body: 'Get your SMEs, Mid-size & Corporate businesses insured today.',
		image: 'family.jpg'
	},
	{
		title: 'Life',
		body: 'Protection designed around your family, business, and long-term peace of mind.',
		image: 'Screenshot 2026-04-27 at 21.35.44 1.svg'
	},
	{
		title: 'Medical',
		body: 'Compare cover options clearly and make confident decisions in minutes.',
		image: 'Screenshot 2026-04-27 at 21.39.26 1.svg'
	},
	{
		title: 'Motor',
		body: 'Trusted cover for private cars, commercial fleets, and daily movement.',
		image: 'car-guy.png'
	},
	{
		title: 'Travel',
		body: 'We cover trip cancellations, medical emergencies, and lost luggage.',
		image: 'travel_insurance.jpg'
	}
];

export const supportFeatures = [
	{
		title: '24x7 Support System',
		body: 'Available at any time of the day and any day of the week.',
		image: 'Sun.svg'
	},
	{
		title: 'Easy Claim System',
		body: 'Streamlined pay out processes within reasonable timelines.',
		image: 'Folder.svg'
	},
	{
		title: 'Digital FootPrint',
		body: 'All services made available online for ease of access.',
		image: 'moon.svg'
	}
] as const;

export const metrics: readonly MetricCard[] = [
	{
		value: '10+',
		label: 'Insurance Partners',
		body: 'Access quotes from a trusted network of providers.',
		image: 'african.jpg',
		tone: 'photo'
	},
	{
		value: '10K+',
		label: 'Policies Matched',
		body: 'Helping customers secure reliable coverage every single year.',
		tone: 'orange'
	},
	{
		value: '20%',
		label: 'Cost Savings',
		body: 'Compare rates side by side and discover better value in minutes.',
		tone: 'blue'
	},
	{
		value: '24/7',
		label: 'Expert Support',
		body: 'Dedicated agent ready to guide you through every step of your insurance journey.',
		image: 'Rectangle 17.svg',
		tone: 'gold'
	},
	{
		value: '98%',
		label: 'Customer Satisfaction',
		body: 'Fast, transparent, and stress-free insurance services that customers trust.',
		image: 'customer.jpg',
		tone: 'photo'
	}
];

export const partners = [
	{ name: 'Sanlam', logo: 'image 1.svg' },
	{ name: 'CIC Insurance', logo: 'cic-insurance.png' },
	{ name: 'Fidelity Insurance', logo: 'fidelity.svg' },
	{ name: 'Takaful Insurance', logo: 'Vector (2).svg' },
	{ name: 'Jubilee', logo: 'image 5.svg' },
	{ name: 'APA', logo: 'apa.png' },
	{ name: 'Mayfair Insurance', logo: 'mayfair.png' },
	{ name: 'Pioneer Insurance', logo: 'pioneer-insurance.png' }
] as const;

export const testimonials = [
	{
		title: 'I Love Having Affordable Coverage!',
		body: 'Comparing insurance quotes was quick and stress-free. I found a policy that fits my budget perfectly.',
		tone: 'rose'
	},
	{
		title: 'Reliable Support Whenever I Need It',
		body: 'The customer service team was incredibly responsive and helpful throughout the whole process.',
		tone: 'cream'
	},
	{
		title: 'The Best Insurance Experience So Far',
		body: 'The platform made everything simple to understand and helped me choose the right coverage.',
		tone: 'mint'
	},
	{
		title: 'Fast Quotes & Amazing Savings!',
		body: 'I compared multiple providers in minutes and ended up with better coverage at a lower price.',
		tone: 'white'
	}
] as const;

export const faqs = [
	{
		question: 'Who am I buying my policy from?',
		answer:
			'You buy directly from the licensed insurer shown in your selected quote. I-Sec helps you compare, understand, and complete the process.'
	},
	{
		question: 'Can I compare several insurance covers?',
		answer:
			'Yes. The experience is designed to compare different providers and coverage types side by side before you commit.'
	},
	{
		question: 'Does I-Sec help after I buy?',
		answer:
			'Yes. Support agents can guide you through policy questions, renewals, documents, and claim steps.'
	},
	{
		question: 'How fast can I get a quote?',
		answer: 'Most simple covers can be matched in minutes once the required details are available.'
	},
	{
		question: 'Are the quotes binding?',
		answer:
			'Quotes depend on eligibility, provider review, and final policy terms. The final policy document is the binding reference.'
	},
	{
		question: 'Can businesses use I-Sec?',
		answer:
			'Yes. The platform can support individual customers, families, SMEs, and larger organizations.'
	}
] as const;
