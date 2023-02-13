import { useQuery } from "urql";

const Home = () => {
  const [{ data, fetching }] = useQuery({
    variables: {
      where: {
        appId: {
          _eq: "bbd5bf91-b6e1-4371-ada8-aa0119bb86cc",
        },
      },
    },
    query: `query getProducts($limit: Int = 20, $offset: Int = 0, $where: ProductBoolExp) {
      pagination: productAggregate(where: $where) {
        aggregate {
          count
        }
      }
      product(limit: $limit, offset: $offset, where: $where, orderBy: {createdAt: DESC}) {
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
          typeId
          accountId
        }
      }
    }
    `,
  });

  console.log("fetching", fetching);
  console.log("data", data);
  return <></>;
};

export default Home;
