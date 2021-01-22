import { Rating2, Previews, Attribute, Discount } from "./ThemeModel";

export interface ThemeItem {
    id: number;
    name: string;
    description: string;
    site: string;
    classification: string;
    price_cents: number;
    number_of_sales: number;
    author_username: string;
    author_url: string;
    url: string;
    summary: string;
    rating: Rating2;
    updated_at: Date;
    trending: boolean;
    previews: Previews;
    attributes: Attribute[];
    key_features: string[];
    image_urls: any[];
    tags: string[];
    discounts: Discount[];
}