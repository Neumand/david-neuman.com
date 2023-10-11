export interface GumroadProduct {
  custom_permalink: string | null;
  custom_receipt: string | null;
  custom_summary: string;
  custom_fields: any[];
  customizable_price: any;
  description: string;
  deleted: boolean;
  max_purchase_count: any;
  name: string;
  preview_url: string | null;
  require_shipping: boolean;
  subscription_duration: any;
  published: boolean;
  url: string;
  id: string;
  price: number;
  purchasing_power_parity_prices: {
    [key: string]: number;
  };
  currency: string;
  short_url: string;
  thumbnail_url: string;
  tags: string[];
  formatted_price: string;
  file_info: any;
  shown_on_profile: boolean;
  sales_count?: string;
  sales_usd_cents?: string;
  is_tiered_membership: boolean;
  recurrences: string[] | null;
  variants: {
    title: string;
    options: {
      name: string;
      price_difference: number;
      purchasing_power_parity_prices: {
        [key: string]: number;
      } | null;
      is_pay_what_you_want: boolean;
      recurrence_prices: {
        [key: string]: {
          price_cents: number;
          suggested_price_cents: number | null;
          purchasing_power_parity_prices: {
            [key: string]: number;
          };
        };
      } | null;
    }[];
  }[];
}

export interface ProductsResponse {
  success: boolean;
  products: GumroadProduct[];
}
