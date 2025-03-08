
import { GraphQLClient } from "graphql-request";
import { shopifyConfig } from "@/config/shopify";

const endpoint = `https://${shopifyConfig.storeUrl}/api/2024-01/graphql.json`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": shopifyConfig.storefrontAccessToken,
  },
});

// Type definitions for GraphQL responses
interface UserError {
  message: string;
  field: string[];
}

interface CartCreateResponse {
  cartCreate: {
    cart: {
      id: string;
      checkoutUrl: string;
    };
    userErrors: UserError[];
  }
}

interface CartLinesAddResponse {
  cartLinesAdd: {
    cart: {
      id: string;
      checkoutUrl: string;
    };
    userErrors: UserError[];
  }
}

const createCartMutation = `
  mutation cartCreate {
    cartCreate {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        message
        field
      }
    }
  }
`;

const cartLinesAddMutation = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// For multiple items
export const createCheckoutWithMultipleItems = async (items: {variantId: string, quantity: number}[]) => {
  try {
    // First create a cart
    const cartData = await graphQLClient.request<CartCreateResponse>(createCartMutation);

    if (cartData.cartCreate.userErrors && cartData.cartCreate.userErrors.length > 0) {
      throw new Error(cartData.cartCreate.userErrors[0].message);
    }

    const cartId = cartData.cartCreate.cart.id;

    // Then add items to the cart
    const variables = {
      cartId,
      lines: items.map((item) => ({
        merchandiseId: item.variantId,
        quantity: item.quantity || 1,
      })),
    };

    const addToCartData = await graphQLClient.request<CartLinesAddResponse>(
      cartLinesAddMutation,
      variables
    );

    if (addToCartData.cartLinesAdd.userErrors && addToCartData.cartLinesAdd.userErrors.length > 0) {
      throw new Error(addToCartData.cartLinesAdd.userErrors[0].message);
    }

    return addToCartData.cartLinesAdd.cart.checkoutUrl;
  } catch (error) {
    console.error("Error creating checkout:", error);
    return null;
  }
};
