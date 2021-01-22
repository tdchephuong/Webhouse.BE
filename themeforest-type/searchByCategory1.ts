declare module namespace {

    export interface CategoryRootCount {
        key?: any;
        count: number;
        description?: any;
    }

    export interface Category {
        key: string;
        count: number;
        description?: any;
        name: string;
    }

    export interface PlatformRootCount {
        key?: any;
        count: number;
        description?: any;
    }

    export interface Platform {
        key: string;
        count: number;
        description?: any;
    }

    export interface InternalSoftwareVersion {
        key: string;
        count: number;
        description?: any;
    }

    export interface Tag {
        key: string;
        count: number;
        description?: any;
    }

    export interface Rating {
        key: string;
        count: number;
        description?: any;
    }

    export interface Date {
        key: string;
        count: number;
        description?: any;
    }

    export interface DateUpdated {
        key: string;
        count: number;
        description?: any;
    }

    export interface SalesCount {
        key: string;
        count: number;
        description?: any;
    }

    export interface Cost {
        count: number;
        min: number;
        max: number;
        avg: number;
        sum: number;
    }

    export interface CompatibleWith {
        key: string;
        count: number;
        description?: any;
    }

    export interface Aggregations {
        category_root_count: CategoryRootCount;
        category: Category[];
        platform_root_count: PlatformRootCount;
        platform: Platform[];
        __internal_software_versions: InternalSoftwareVersion[];
        file_formats?: any;
        files_included?: any;
        tags: Tag[];
        colors?: any;
        rating: Rating[];
        date: Date[];
        date_updated: DateUpdated[];
        size?: any;
        sizes?: any;
        sales_count: SalesCount[];
        cost: Cost;
        length?: any;
        tempo?: any;
        alpha?: any;
        looped?: any;
        resolution?: any;
        vocals_in_audio?: any;
        frame_rate?: any;
        compatible_with: CompatibleWith[];
        orientation?: any;
        requires_plugins?: any;
        include_pro_affiliated?: any;
        discount_count?: any;
    }

    export interface Rating2 {
        rating: number;
        count: number;
    }

    export interface IconWithLandscapePreview {
        icon_url: string;
        landscape_url: string;
    }

    export interface LiveSite {
        url: string;
    }

    export interface ImageUrl {
        name?: any;
        url: string;
        width: number;
        height: number;
    }

    export interface LandscapePreview {
        landscape_url: string;
        image_urls: ImageUrl[];
    }

    export interface Previews {
        icon_with_landscape_preview: IconWithLandscapePreview;
        live_site: LiveSite;
        landscape_preview: LandscapePreview;
    }

    export interface Attribute {
        name: string;
        value: any;
    }

    export interface Discount {
        original_price_cents: number;
        sale_price_cents: number;
        sale_starts_at: Date;
        sale_ends_at: Date;
        discount_cents: number;
        discount_percent_rounded: number;
    }

    export interface Match {
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

    export interface Item {
    }

    export interface Metadata {
        title: string;
        description: string;
        heading: string;
    }

    export interface SearchIngestedContent {
    }

    export interface RootObject {
        author_exists?: any;
        aggregations: Aggregations;
        suggestions?: any;
        matches: Match[];
        total_hits: number;
        item: Item;
        metadata: Metadata;
        searchIngestedContent: SearchIngestedContent;
        matching_author?: any;
    }
    
// uri : https://themeforest.net/shopfront-api/search?category=ecommerce&page=1&page_size=30&site=themeforest.net&sort_by=sales&tags=responsive%2Cecommerce%2Cfashion

}

