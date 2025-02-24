// export type Shop = {
//     id: number;
//     latitude: number;
//     longitude: number;
//     name: string;
//     googleMapsUrl: string;
// }



export type Shop = {
    id: number;
    name: string;
    slug: string;
    address: string;
    description: string;
    phoneNumber: string;
    email: string;
    isDeleted: boolean;
    isDisabled: boolean;
    openAt: string;
    closeAt: string;
    shopType: string;
    profile: string;
    covers: ImageResponse[];
    owners: string[];
    location: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    latitude: number;
    longitude: number;
};

export type ShopsResponse = {
    payload: {
        list: Shop[];
        pagination: {
            totalPages: number;
            currentPage: number;
            totalElements: number;
            pageSize: number;
            pageNumber: number;
        };
    };
};


export type ImageResponse = {
    url: string;
};

export type ShopCreateRequest = {
    name: string;
    address: string;
    description: string;
    slug: string;
    phoneNumber: string;
    email: string;
    openAt: string;
    closeAt: string;
    shopType: string;
    location: string;
    socialMedias: SocialMedia[];
    profile: string;
};

export type ShopUpdateRequest = {
    name?: string;
    slug?: string;
    address?: string;
    description?: string;
    phoneNumber?: string;
    shopType: string;
    email?: string;
    openAt?: string;
    closeAt?: string;
    location?: string;
    profile?: string;
    covers?: ImageRequest[];
};

export type ImageRequest = {
    url: string;
    alt: string;
};

export type SocialMedia = {
    platform: string;
    url: string;
};
export type Coordinates = {
    lat: number;
    lng: number;
};
