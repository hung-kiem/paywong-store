import * as Urql from "urql";
import gql from "graphql-tag";

export enum AppTypeEnum {
  Merchant = "MERCHANT",
  Platform = "PLATFORM",
  Shopify = "SHOPIFY",
  Store = "STORE",
  Wix = "WIX",
  Woocommerce = "WOOCOMMERCE",
}

export const ProductFragmentDoc = gql`
  fragment Product on Product {
    appId
    currencyId
    description
    id
    imageUrl
    isEnabled
    name
    price
    sku
    createdAt
    currency {
      id
      name
      isFiat
      priceUSD
      symbol
    }
    app {
      id
      accountId
      typeId
    }
  }
`;

export type ProductFragment = {
  __typename?: "Product";
  appId: string;
  currencyId: string;
  description?: string | null | undefined;
  id: any;
  imageUrl?: string | null | undefined;
  isEnabled: boolean;
  name: string;
  price: number;
  sku?: string | null | undefined;
  createdAt: string;
  currency: {
    __typename?: "Currency";
    id: string;
    name: string;
    isFiat: boolean;
    priceUSD?: number | null | undefined;
    symbol?: string | null | undefined;
  };
  app: {
    __typename?: "App";
    id: string;
    accountId: string;
    typeId: AppTypeEnum;
  };
};

export type GetProductsQueryVariables = {
  limit?: number;
  offset?: number;
  where?: any;
};

export type GetProductsQuery = {
  __typename?: "query_root";
  pagination: {
    __typename?: "ProductAggregate";
    aggregate?:
      | { __typename?: "ProductAggregateFields"; count: number }
      | null
      | undefined;
  };
  product: Array<{ __typename?: "Product" } & ProductFragment>;
};

export const GetProductsDocument = gql`
  query getProducts(
    $limit: Int = 20
    $offset: Int = 0
    $where: ProductBoolExp
  ) {
    pagination: productAggregate(where: $where) {
      aggregate {
        count
      }
    }
    product(
      limit: $limit
      offset: $offset
      where: $where
      orderBy: { createdAt: DESC }
    ) {
      appId
      currencyId
      description
      id
      imageUrl
      isEnabled
      name
      price
      sku
      createdAt
      currency {
        id
        name
        isFiat
        priceUSD
        symbol
      }
      app {
        id
        accountId
        typeId
      }
    }
  }
  ${ProductFragmentDoc}
`;

export function useGetProductsQuery(
  options?: Omit<Urql.UseQueryArgs<GetProductsQueryVariables>, "query">
) {
  return Urql.useQuery<GetProductsQuery, GetProductsQueryVariables>({
    query: GetProductsDocument,
    ...options,
  });
}
