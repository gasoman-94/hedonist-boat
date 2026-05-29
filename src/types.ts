export type PriceType = 'flat' | 'hourly' | 'per_person' | 'tiered';

export interface Pricing {
  type: PriceType;
  amount: number;
  duration?: string;
  description?: string;
  minPrice?: number;
}

export interface Service {
  id: string;
  title: string;
  type: 'rental' | 'tour' | 'taxi' | 'package';
  boatId: string;
  pricing: Pricing[];
  description: string;
  features?: string[];
  duration?: string;
  isPopular?: boolean;
  highlights?: string[];
  fullDescription?: string;
  includes?: string[];
  meetingPoint?: string;
  whatToBring?: string[];
  knowBeforeYouGo?: string[];
  availableMonths?: string;
  availableWeekdays?: string;
  activityLanguages?: string[];
  hourlyPackages?: HourlyPackage[];
}

export interface HourlyPackage {
  hours?: number;
  durationLabel?: string;
  price: number;
  name: string;
  locations: string;
  inclusions: string[];
}

export interface Boat {
  id: string;
  name: string;
  tagline: string;
  type: string;
  length: string;
  capacity: number;
  imageUrl: string;
  description: string;
  specs: { label: string; value: string }[];
  included: string[];
  pricingDetails?: {
    fullDay?: number;
    halfDay?: number;
    hourly?: number;
    skipperFullDay?: number;
    skipperHalfDay?: number;
    skipperIncluded?: boolean;
    fuelIncluded?: boolean;
    sailorIncluded?: boolean;
  };
  services: Service[];
}
