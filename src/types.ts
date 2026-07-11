export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface Facility {
  id: string;
  title: string;
  iconName: string;
  description: string;
}

export interface WhyChooseUsReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  role: string;
  avatarUrl?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Curated high-resolution cinematic gym images from Unsplash
export const PROGRAMS_DATA: Program[] = [
  {
    id: "strength-training",
    title: "Strength Training",
    description: "Build exceptional structural strength, increase muscular density, and improve physical resilience with custom barbell and compound lifiting protocols.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    iconName: "Dumbbell"
  },
  {
    id: "bodybuilding",
    title: "Bodybuilding",
    description: "Sculpt and shape your physique with expert hypertrophy training, targeted isolation movements, and comprehensive nutrition plans.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    iconName: "Flame"
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "Burn calories efficiently and optimize body composition using specialized high-intensity metabolic conditioning and sustainable lifestyle habits.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
    iconName: "TrendingDown"
  },
  {
    id: "muscle-gain",
    title: "Muscle Gain",
    description: "Target clean muscle growth and mass optimization using proven progressive overload systems and caloric-surplus guidance.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    iconName: "Zap"
  },
  {
    id: "functional-training",
    title: "Functional Training",
    description: "Enhance mobility, balance, core stability, and raw power to optimize your physical performance in daily activities and athletic sports.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    iconName: "Activity"
  },
  {
    id: "cardio-training",
    title: "Cardio Training",
    description: "Improve aerobic and anaerobic cardiovascular capacity with custom rowing, cycling, and assault-runner high-performance regimens.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&auto=format&fit=crop",
    iconName: "HeartPulse"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "Receive fully individualized 1-on-1 coaching, form corrections, daily accountability, and bespoke goal-setting with Karachi's premier trainers.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    iconName: "Award"
  },
  {
    id: "womens-fitness",
    title: "Women's Fitness",
    description: "Dedicated training frameworks, core sculpting, and body conditioning tailored in a highly empowering and motivating environment.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
    iconName: "User"
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: "modern-machines",
    title: "Modern Machines",
    iconName: "Cpu",
    description: "Bio-mechanically correct resistance machines to safely isolate and target specific muscle groups."
  },
  {
    id: "free-weights",
    title: "Free Weights",
    iconName: "Dumbbell",
    description: "Expansive dumbbell racks, solid Olympic barbells, kettlebells, and bumper plates for multi-joint compound exercises."
  },
  {
    id: "cardio-area",
    title: "Cardio Area",
    iconName: "HeartPulse",
    description: "High-end commercial treadmills, cross-trainers, stair climbers, and stationary bikes."
  },
  {
    id: "stretching-zone",
    title: "Stretching Zone",
    iconName: "Grid",
    description: "Dedicated cushioned floor area equipped with foam rollers, resistance bands, and stability balls."
  },
  {
    id: "locker-area",
    title: "Locker Area",
    iconName: "Lock",
    description: "Secure lockable cabinets to store personal belongings safely during training sessions."
  },
  {
    id: "clean-washrooms",
    title: "Clean Washrooms",
    iconName: "Sparkles",
    description: "Pristinely cleaned, hygienic, and sanitized washrooms and changing rooms."
  },
  {
    id: "air-conditioned",
    title: "Air Conditioned Environment",
    iconName: "Wind",
    description: "Full temperature control system to ensure a highly comfortable, fresh, and breathable training floor."
  },
  {
    id: "professional-trainers",
    title: "Professional Trainers",
    iconName: "Award",
    description: "Always on-floor, certified coaching support to guide form, prevent injuries, and boost motivation."
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsReason[] = [
  {
    id: "prof-guidance",
    title: "Professional Guidance",
    description: "Experienced trainers on-site to teach correct posture and design custom workout paths.",
    iconName: "GraduationCap"
  },
  {
    id: "clean-env",
    title: "Clean Environment",
    description: "Rigorous daily sanitation protocols across all weights, benches, handles, and washrooms.",
    iconName: "Sparkles"
  },
  {
    id: "affordable-fees",
    title: "Affordable Fees",
    description: "Premium fitness access and guidance without premium costs, offering unbeatable local value.",
    iconName: "Coins"
  },
  {
    id: "supportive-comm",
    title: "Supportive Community",
    description: "A high-energy culture of mutual encouragement and growth that makes every session exciting.",
    iconName: "Users"
  },
  {
    id: "modern-equip",
    title: "Modern Equipment",
    description: "Regularly inspected and maintained, high-performance strength and conditioning machinery.",
    iconName: "Wrench"
  },
  {
    id: "motivating-atm",
    title: "Motivating Atmosphere",
    description: "Cinematic industrial lighting, heart-pumping playlist audio, and zero distractions.",
    iconName: "Volume2"
  },
  {
    id: "personal-att",
    title: "Personal Attention",
    description: "Bespoke feedback during lifts to maximize efficiency and target key growth milestones.",
    iconName: "UserCheck"
  },
  {
    id: "friendly-staff",
    title: "Friendly Staff",
    description: "Welcoming reception and staff committed to making Fitnesstaan Gym your favorite daily ritual.",
    iconName: "Smile"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Elite Free Weights Station",
    category: "Free Weights",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlGVdlFrQiKuFnbUuK3yy5kKO_XJGN9C1pfW5c91l9BSCGubMelK_rq18wf7IHt_iBY-LxGCABzHJNHtpDdcVM9xohTC6hyLn9gLFJCY2KGOqpio_KP1UXWbFY4kT0dk5SwEKOD=s800"
  },
  {
    id: "gal-2",
    title: "Heavy Strength & Machine Zone",
    category: "Machines",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmPouA1HS_6jbF1i2A5AFwxexsecHvrf3VB7Ml8vBhSiobtuKc00i8Zq2hhd76tpML-6BP0bC0PkECXLwTeSY8JC33eTi8GzdU764t2vg07P22jpuTT-0SZ6bxwgPqTocychvPg=s800"
  },
  {
    id: "gal-3",
    title: "Cardio & Endurance Section",
    category: "Machines",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl_vj4j2x0oowxus1GVPeZ-57SkcaMdY0Bhlz6kCGcMuAP7btYmlMEagttsWJ_DWFaFs31VgvuqIIMcSRSVjSXtCP9sn3zgoRFqd5sbLCKVfkcOKeIT8mTAe-Iq53_mmbgL4pLy=s800"
  },
  {
    id: "gal-4",
    title: "Spacious Training Arena",
    category: "Gym Interior",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlTnGH1TPV77QQZXyVkt02qIoXwpptmEFmKFsOXxIBHb2ZHBq1cXMUwJelDpimwbFSBCG0qVZ_wEQP7dzJQF1ETFCLYPGepVZlcS40UU7ugTZOJFvPDTZ4TF9vI_z5Ot42Ikb7mFA=s800"
  },
  {
    id: "gal-5",
    title: "1-on-1 Guidance & Members Coaching",
    category: "Personal Training",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn4slNjc3tj5KjMeUf11fPBLkBdqdkZ2Axj4nqR--dBFsRx8Tjg0UoIf9tTOcfUizhi1nDlctqvNKtme65rbrAquugFzEuu2Tns3a_DjXqG89aDuCWXBao0sHNJVB3IZunsfUy=s800"
  },
  {
    id: "gal-6",
    title: "Fitnesstaan Gym Entrance & Branding",
    category: "Gym Interior",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlfyxHGELa_akpaGNlb5YlSyFlxQnQQ6l9qjRYbbxYutWQ9037CVo4Dbx8bNlGdUCuGk9FRYF8HMS08Y4uUseDuBIEGx3Ky1RHuTef-d8MBTFJSnaY_51UcKvYPv7oMapmHgOu6aQ=s800"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-1",
    name: "Muhammad Ali",
    rating: 5,
    role: "Regular Member • 8 Months",
    text: "I've had a great experience at Fitnesstaan Gym. The environment is clean, motivating, and well-maintained. The trainers are supportive and always available to help."
  },
  {
    id: "t-2",
    name: "Zainab Fatima",
    rating: 5,
    role: "Fitness Enthusiast • 1 Year",
    text: "The coaching is excellent, and the atmosphere is comfortable. Everything is explained clearly, making it perfect for beginners and experienced members alike."
  },
  {
    id: "t-3",
    name: "Ahmed Raza",
    rating: 5,
    role: "Bodybuilder • 6 Months",
    text: "One of the best gyms in Shah Faisal Colony. The staff keeps the equipment organized, and the overall experience is outstanding."
  },
  {
    id: "t-4",
    name: "Bilal Sheikh",
    rating: 5,
    role: "Weight Loss Success • 4 Months",
    text: "Lost over 12kg with their metabolic conditioning and customized cardio suggestions! Highly recommended if you want genuine results in Karachi."
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: "plan-basic",
    name: "Basic Access",
    price: "Rs. 2,500",
    period: "month",
    features: [
      "Access to Gym Floor",
      "Standard Free Weights Area",
      "Basic Locker Room Access",
      "On-Floor Trainer Support",
      "Open Gym Hours Access",
    ]
  },
  {
    id: "plan-standard",
    name: "Standard Fit",
    price: "Rs. 3,500",
    period: "month",
    features: [
      "Full Gym & Cardio Access",
      "Advanced Weight Areas",
      "Air-Conditioned Atmosphere",
      "Dedicated Locker Access",
      "Custom Workout Chart",
      "Weekly Progress Review",
    ],
    isPopular: true
  },
  {
    id: "plan-premium",
    name: "Premium Coach",
    price: "Rs. 6,000",
    period: "month",
    features: [
      "All Standard Access Features",
      "Custom Macro & Diet Guidance",
      "Priority Coach Dynamic Form Check",
      "Dedicated Personal Space Range",
      "Bespoke Muscle Target Routing",
      "Complimentary Energy Shakes (Monthly limit)",
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are your opening hours?",
    answer: "Fitnesstaan Gym is open daily for your fitness convenience. Our operating hours end at 12:00 AM midnight, giving you plenty of time to work out whether you are an early bird or prefer late-night sessions."
  },
  {
    id: "faq-2",
    question: "Do you offer personal training?",
    answer: "Yes! We offer 1-on-1 Personal Training with highly certified male and female coaches. Your personal trainer will design a custom exercise program, provide meal blueprints, and monitor your posture to prevent injury."
  },
  {
    id: "faq-3",
    question: "Can beginners join?",
    answer: "Absolutely! We welcome all fitness levels, from absolute beginners to professional athletes. Our trainers are on-floor to assist with initial assessments and introduce you to all machine mechanics safely."
  },
  {
    id: "faq-4",
    question: "Do you have women's fitness training?",
    answer: "Yes, we offer specialized weight-loss, posture correction, strength, and core training tailored for women. We provide an exceptionally safe, supportive, and comfortable training environment."
  },
  {
    id: "faq-5",
    question: "How can I register?",
    answer: "Registration is extremely easy! You can visit Fitnesstaan Gym in Shah Faisal Colony, Karachi, fill out our membership sheet, and select your preferred package. Alternatively, tap 'Join Now' on this website to query or call us at +92 333 3156396 for instant setup."
  }
];
