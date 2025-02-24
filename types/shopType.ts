export interface ShopType {
          name: string;
          slug: string;
          icon: string | null;
        }
        
        export interface ShopTypesResponse {
          payload: {
            list: ShopType[];
          };
        }
      