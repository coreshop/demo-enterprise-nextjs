"use strict";(self.webpackChunkcoreshop_demo=self.webpackChunkcoreshop_demo||[]).push([[9072],{"./mockdata/mockCartItem.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,["D",0,{__typename:"object_CoreShopOrder",id:"173",token:"bQac39j2kTPIe6oLLxxX",totalGross:840,totalNet:700,subtotalGross:240,subtotalNet:200,carrier:{__typename:"CoreshopCarrier",identifier:"Standard"},currency:{__typename:"CoreshopCurrency",isoCode:"EUR"},paymentProvider:null,items:[{id:"175",quantity:1,totalGross:240,totalNet:200,subtotalGross:240,subtotalNet:200,itemRetailPriceGross:240,itemRetailPriceNet:200,itemDiscountNet:0,itemDiscountGross:0,itemDiscountPriceGross:0,itemDiscountPriceNet:0,product:{__typename:"object_CoreShopProduct",id:"31",name:"Durable Aluminum Chair",ean:"2437285029187",images:[{fullpath:"/demo/products/Computer/image_664e018f406f93.44055687.jpg",dimensions:{width:1e3,height:1e3}},{fullpath:"/demo/products/Computer/image_664e018f462bd4.00195991.jpg",dimensions:{width:1e3,height:1e3}},{fullpath:"/demo/products/Computer/image_664e018f4a1cb5.40510853.jpg",dimensions:{width:1e3,height:1e3}}],imagesCartPreview:[{fullpath:"/demo/products/Computer/5/image-thumb__5__coreshop_productCartPreview/image_664e018f406f93.44055687.03091f0f.jpg",dimensions:{width:100,height:100}},{fullpath:"/demo/products/Computer/6/image-thumb__6__coreshop_productCartPreview/image_664e018f462bd4.00195991.03091f0f.jpg",dimensions:{width:100,height:100}},{fullpath:"/demo/products/Computer/7/image-thumb__7__coreshop_productCartPreview/image_664e018f4a1cb5.40510853.694f04ee.jpg",dimensions:{width:100,height:100}}],imagesCartProduct:[{fullpath:"/demo/products/Computer/5/image-thumb__5__coreshop_productCart/image_664e018f406f93.44055687.d2785850.jpg",dimensions:{width:200,height:200}},{fullpath:"/demo/products/Computer/6/image-thumb__6__coreshop_productCart/image_664e018f462bd4.00195991.d2785850.jpg",dimensions:{width:200,height:200}},{fullpath:"/demo/products/Computer/7/image-thumb__7__coreshop_productCart/image_664e018f4a1cb5.40510853.3fd1ebe8.jpg",dimensions:{width:200,height:200}}],imagesGrid:[{fullpath:"/demo/products/Computer/5/image-thumb__5__coreshop_productGrid/image_664e018f406f93.44055687.c7f07179.jpg",dimensions:{width:240,height:240}},{fullpath:"/demo/products/Computer/6/image-thumb__6__coreshop_productGrid/image_664e018f462bd4.00195991.c7f07179.jpg",dimensions:{width:240,height:240}},{fullpath:"/demo/products/Computer/7/image-thumb__7__coreshop_productGrid/image_664e018f4a1cb5.40510853.8742d0b0.jpg",dimensions:{width:240,height:240}}],imagesProductDetail:[{fullpath:"/demo/products/Computer/5/image-thumb__5__coreshop_productDetail/image_664e018f406f93.44055687.ada478f7.jpg",dimensions:{width:330,height:330}},{fullpath:"/demo/products/Computer/6/image-thumb__6__coreshop_productDetail/image_664e018f462bd4.00195991.ada478f7.jpg",dimensions:{width:330,height:330}},{fullpath:"/demo/products/Computer/7/image-thumb__7__coreshop_productDetail/image_664e018f4a1cb5.40510853.3024f1e2.jpg",dimensions:{width:330,height:330}}],imagesProductDetailPreview:[{fullpath:"/demo/products/Computer/5/image-thumb__5__coreshop_productDetailThumbnail/image_664e018f406f93.44055687.947a4678.jpg",dimensions:{width:150,height:150}},{fullpath:"/demo/products/Computer/6/image-thumb__6__coreshop_productDetailThumbnail/image_664e018f462bd4.00195991.947a4678.jpg",dimensions:{width:150,height:150}},{fullpath:"/demo/products/Computer/7/image-thumb__7__coreshop_productDetailThumbnail/image_664e018f4a1cb5.40510853.47e52f1c.jpg",dimensions:{width:150,height:150}}],isTracked:null,stockAvailability:!0,shortDescription:"Quibusdam distinctio exercitationem nobis corrupti et eius. Rem commodi enim qui commodi. Laboriosam quis vel dolorem adipisci. Rerum incidunt earum omnis quia. Laudantium in necessitatibus illum."}}],customer:null,taxes:[{name:"20AT",rate:20,amount:140}],priceRuleItems:null,adjustmentItems:[{typeIdentifier:"shipping",label:"",pimcoreAmountNet:500,pimcoreAmountGross:600}],shippingAddress:null,invoiceAddress:null}])},"./stories/Molecules/CartWidget/CartWidget.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:()=>CoreCartWidget});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),icons_cart=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/react-bootstrap-icons/dist/icons/cart.js")),export_mocks_link=__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/link/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const Price=({amount=0,className,currencyCode="EUR",currencyCodeClassName})=>(0,jsx_runtime.jsxs)("span",{suppressHydrationWarning:!0,className,children:[`${null!=amount?new Intl.NumberFormat(void 0,{style:"currency",currency:currencyCode,currencyDisplay:"narrowSymbol"}).format(amount/100):""}`,(0,jsx_runtime.jsx)("span",{className:(0,clsx.A)("ml-1 inline",currencyCodeClassName),children:`${currencyCode}`})]}),currency=Price;Price.__docgenInfo={description:"",methods:[],displayName:"Price",props:{amount:{required:!1,tsType:{name:"union",raw:"number|undefined|null",elements:[{name:"number"},{name:"undefined"},{name:"null"}]},description:"",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},currencyCode:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'EUR'",computed:!1}},currencyCodeClassName:{required:!1,tsType:{name:"string"},description:""}}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),cartwidget=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[4]!./stories/Molecules/CartWidget/cartwidget.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(cartwidget.A,options);cartwidget.A&&cartwidget.A.locals&&cartwidget.A.locals;var ListGroup=__webpack_require__("./node_modules/react-bootstrap/esm/ListGroup.js"),CoreButton=__webpack_require__("./stories/Atoms/Button/CoreButton.tsx"),types=__webpack_require__("./stories/Atoms/Button/types.tsx"),headers=__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/headers/index.js"),printer=__webpack_require__("./node_modules/graphql/language/printer.mjs"),lib=__webpack_require__("./node_modules/graphql-tag/lib/index.js");const Category=lib.Ay`
    fragment category on object_CoreShopCategory {
  __typename
  id
  name
  description
}
    `,types_generated_Error=lib.Ay`
    fragment error on CoreShopError {
  __typename
  message
}
    `,Product=lib.Ay`
    fragment product on object_CoreShopProduct {
  __typename
  id
  name
  ean
  categories {
    __typename
    ... on object_CoreShopCategory {
      name
    }
  }
  images {
    ... on asset {
      fullpath
      dimensions {
        width
        height
      }
    }
  }
  imagesCartPreview: images {
    ... on asset {
      fullpath(thumbnail: "coreshop_productCartPreview")
      dimensions(thumbnail: "coreshop_productCartPreview") {
        width
        height
      }
    }
  }
  imagesCartProduct: images {
    ... on asset {
      fullpath(thumbnail: "coreshop_productCart")
      dimensions(thumbnail: "coreshop_productCart") {
        width
        height
      }
    }
  }
  imagesGrid: images {
    ... on asset {
      fullpath(thumbnail: "coreshop_productGrid")
      dimensions(thumbnail: "coreshop_productGrid") {
        width
        height
      }
    }
  }
  imagesProductDetail: images {
    ... on asset {
      fullpath(thumbnail: "coreshop_productDetail")
      dimensions(thumbnail: "coreshop_productDetail") {
        width
        height
      }
    }
  }
  imagesProductDetailPreview: images {
    ... on asset {
      fullpath(thumbnail: "coreshop_productDetailThumbnail")
      dimensions(thumbnail: "coreshop_productDetailThumbnail") {
        width
        height
      }
    }
  }
  isTracked
  stockAvailability
  shortDescription
  allowedAttributeGroups {
    ... on object_CoreShopAttributeGroup {
      id
      name
      children {
        __typename
        ... on object_CoreShopAttributeValue {
          id
          name
          valueText
        }
        ... on object_CoreShopAttributeColor {
          id
          name
          valueText
          valueColor
        }
      }
    }
  }
  attributes {
    ... on object_CoreShopAttributeValue {
      id
    }
    ... on object_CoreShopAttributeColor {
      id
    }
  }
  mainVariant {
    ... on object_CoreShopProduct {
      id
    }
  }
  variantAttributeIndex {
    ... on CoreShopVariantAttributeIndex {
      url
      productId
      attributes {
        ... on CoreShopVariantAttributeIndexAttribute {
          groupId
          attributeId
        }
      }
    }
  }
}
    `,OrderItem=lib.Ay`
    fragment orderItem on object_CoreShopOrderItem {
  id
  quantity
  totalGross
  totalNet
  subtotalGross
  subtotalNet
  itemRetailPriceGross
  itemRetailPriceNet
  itemDiscountNet
  itemDiscountGross
  itemDiscountPriceGross
  itemDiscountPriceNet
  itemRetailPriceNet
  itemRetailPriceGross
  product {
    ...product
  }
}
    ${Product}`,Customer=lib.Ay`
    fragment customer on object_CoreShopCustomer {
  __typename
  salutation
  gender
  email
  firstname
  lastname
  localeCode
}
    `,Address=lib.Ay`
    fragment address on object_CoreShopAddress {
  __typename
  id
  firstname
  lastname
  salutation
  company
  street
  number
  postcode
  city
  phoneNumber
  addressIdentifier {
    name
  }
  country {
    ... on CoreshopCountry {
      isoCode
    }
  }
}
    `,Order=lib.Ay`
    fragment order on object_CoreShopOrder {
  id
  orderNumber
  orderDate
  orderState
  token
  totalGross
  totalNet
  subtotalGross
  subtotalNet
  carrier {
    __typename
    identifier
  }
  currency {
    __typename
    isoCode
  }
  paymentProvider {
    __typename
    identifier
  }
  items {
    ...orderItem
  }
  customer {
    ...customer
  }
  taxes {
    ... on fieldcollection_CoreShopTaxItem {
      name
      rate
      amount
    }
  }
  priceRuleItems {
    ... on fieldcollection_CoreShopProposalCartPriceRuleItem {
      cartPriceRule {
        ... on CoreshopCartPriceRule {
          name
          description
          isVoucherRule
        }
      }
      voucherCode
      discountNet
      discountGross
    }
  }
  adjustmentItems {
    ... on fieldcollection_CoreShopAdjustment {
      typeIdentifier
      label
      pimcoreAmountNet
      pimcoreAmountGross
    }
  }
  shippingAddress {
    ...address
  }
  invoiceAddress {
    ...address
  }
}
    ${OrderItem}
${Customer}
${Address}`,Validation_Error=lib.Ay`
    fragment validation_error on CoreShopValidationError {
  __typename
  message
}
    `,CoreShopAuthorize=(lib.Ay`
    mutation CoreShopCreateAddress($address: AddressInput!) {
  CoreShopCreateAddress(createAddress: {address: $address}) {
    ... on CoreShopCreateAddressResult {
      __typename
    }
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${types_generated_Error}
${Validation_Error}`,lib.Ay`
    query GetCoreShopAddressList {
  CoreShopAddressList {
    __typename
    ... on CoreShopAddressListResult {
      addresses {
        ...address
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Address}
${types_generated_Error}`,lib.Ay`
    mutation CoreShopCheckoutAddress($invoiceAddress: Int!, $shippingAddress: Int, $token: String!, $invoiceAddressIsShippingAddress: Boolean!) {
  CoreShopCheckoutAddress(
    checkoutAddress: {shippingAddressId: $shippingAddress, invoiceAddressId: $invoiceAddress, invoiceAddressIsShippingAddress: $invoiceAddressIsShippingAddress, order: {token: $token}}
  ) {
    __typename
    ... on CoreShopCheckoutAddressResult {
      order {
        shippingAddress {
          ... on object_CoreShopAddress {
            id
          }
        }
        invoiceAddress {
          ... on object_CoreShopAddress {
            id
          }
        }
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${types_generated_Error}`,lib.Ay`
    mutation CoreShopDeleteAddress($addressId: Int!) {
  CoreShopDeleteAddress(deleteAddress: {addressId: $addressId}) {
    __typename
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${types_generated_Error}
${Validation_Error}`,lib.Ay`
    mutation CoreShopUpdateAddress($addressId: Int!, $address: AddressInput!) {
  CoreShopUpdateAddress(updateAddress: {addressId: $addressId, address: $address}) {
    __typename
    ... on CoreShopUpdateAddressResult {
      address {
        id
        street
        number
        postcode
        city
        country {
          isoCode
        }
      }
    }
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${types_generated_Error}
${Validation_Error}`,lib.Ay`
    mutation CoreShopAuthorize($username: String!, $password: String!, $orderToken: String) {
  CoreShopAuthorize(
    authorize: {username: $username, password: $password, orderToken: $orderToken}
  ) {
    ... on CoreShopAuthorizeResult {
      __typename
      token
      activeOrderToken
    }
    ... on CoreShopError {
      __typename
      message
    }
  }
}
    `),CoreShopRemoveOrderItem=(lib.Ay`
    query getCoreShopCategories {
  CoreShopCategories(categoryListing: {}) {
    ... on CoreShopCategoriesResult {
      __typename
      categories {
        totalCount
        edges {
          __typename
          node {
            ...category
          }
        }
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Category}
${types_generated_Error}`,lib.Ay`
    query getCoreShopCategory($categoryId: Int!) {
  CoreShopCategory(category: {categoryId: $categoryId}) {
    ... on CoreShopCategoryResult {
      __typename
      category {
        ...category
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Category}
${types_generated_Error}`,lib.Ay`
    query CoreShopCarrierList($token: String!) {
  CoreShopCarrierList(carrierList: {order: {token: $token}}) {
    __typename
    ... on CoreShopCarrierListResult {
      carriers {
        carrier {
          id
          identifier
          translations {
            items {
              title
              description
            }
          }
        }
        price_net
        price_gross
        tax
      }
    }
  }
}
    `,lib.Ay`
    mutation CoreShopCheckoutGuestAddress($invoiceAddress: AddressInput!, $shippingAddress: AddressInput, $token: String!, $invoiceAddressIsShippingAddress: Boolean!) {
  CoreShopCheckoutGuestAddress(
    checkoutGuestAddress: {shippingAddress: $shippingAddress, invoiceAddress: $invoiceAddress, order: {token: $token}, invoiceAddressIsShippingAddress: $invoiceAddressIsShippingAddress}
  ) {
    ... on CoreShopCheckoutGuestAddressResult {
      __typename
      order {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${Order}
${types_generated_Error}
${Validation_Error}`,lib.Ay`
    mutation CoreShopCheckoutGuestRegistration($guestCustomer: GuestRegistrationInput!, $token: String!) {
  CoreShopCheckoutGuestRegistration(
    checkoutGuestRegistration: {customer: $guestCustomer, order: {token: $token}}
  ) {
    __typename
  }
}
    `,lib.Ay`
    mutation CoreShopCheckoutPaymentProvider($token: String!, $paymentProvider: PaymentProviderEnumType!) {
  CoreShopCheckoutPaymentProvider(
    checkoutPaymentProvider: {order: {token: $token}, paymentProvider: $paymentProvider}
  ) {
    ... on CoreShopCheckoutPaymentProviderResult {
      __typename
      order {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${Order}
${types_generated_Error}
${Validation_Error}`,lib.Ay`
    query CoreShopPaymentProviderList($token: String!) {
  CoreShopPaymentProviderList(paymentProviderList: {order: {token: $token}}) {
    __typename
    ... on CoreShopPaymentProviderListResult {
      paymentProviders {
        paymentProvider {
          identifier
          translations {
            items {
              title
              description
              instructions
            }
          }
        }
        price
      }
    }
  }
}
    `,lib.Ay`
    mutation CoreShopCheckoutShipping($token: String!, $carrier: CarrierEnumType!) {
  CoreShopCheckoutShipping(
    checkoutShipping: {order: {token: $token}, carrier: $carrier}
  ) {
    ... on CoreShopCheckoutShippingResult {
      __typename
      order {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${Order}
${types_generated_Error}
${Validation_Error}`,lib.Ay`
    query getCoreShopMe {
  CoreShopMe {
    ... on CoreShopMeResult {
      __typename
      user {
        id
        ... on object_CoreShopUser {
          customer {
            ... on object_CoreShopCustomer {
              id
              salutation
              firstname
              lastname
              email
              gender
              newsletterActive
              defaultAddress {
                ... on object_CoreShopAddress {
                  id
                }
              }
            }
          }
        }
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${types_generated_Error}`,lib.Ay`
    mutation CoreShopPasswordResetRequest($username: String!) {
  CoreShopPasswordResetRequest(passwordResetRequest: {username: $username}) {
    __typename
    ... on CoreShopPasswordResetRequestResult {
      success
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${types_generated_Error}`,lib.Ay`
    mutation CoreShopUpdateMe($salutation: String!, $gender: String!, $firstname: String!, $lastname: String!, $newsletterActive: Boolean!, $defaultAddressId: Int!) {
  CoreShopUpdateMe(
    updateMe: {me: {salutation: $salutation, gender: $gender, firstname: $firstname, lastname: $lastname, newsletterActive: $newsletterActive, defaultAddressId: $defaultAddressId}}
  ) {
    __typename
    ... on CoreShopUpdateMeResult {
      me {
        salutation
        gender
        firstname
        lastname
        newsletterActive
        defaultAddress {
          ... on object_CoreShopAddress {
            id
          }
        }
      }
    }
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${types_generated_Error}
${Validation_Error}`,lib.Ay`
    mutation CoreShopUpdatePassword($password: String) {
  CoreShopUpdatePassword(updatePassword: {password: $password}) {
    __typename
    ... on CoreShopUpdatePasswordResult {
      __typename
    }
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${types_generated_Error}
${Validation_Error}`,lib.Ay`
    query GetCoreShopActiveOrder {
  CoreShopActiveOrder {
    ... on CoreShopActiveOrderResult {
      __typename
      order {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Order}
${types_generated_Error}`,lib.Ay`
    mutation CoreShopAddToOrder($productId: Int!, $quantity: Float!, $token: String) {
  CoreShopAddToOrder(
    addToOrder: {order: {token: $token}, orderItem: {productId: $productId, quantity: $quantity}}
  ) {
    ... on CoreShopAddToOrderResult {
      __typename
      order {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Order}
${types_generated_Error}`,lib.Ay`
    mutation CoreShopAddOrderVoucherCode($voucherCode: String!, $token: String!) {
  CoreShopAddOrderVoucherCode(
    addOrderVoucherCode: {order: {token: $token}, orderVoucherCode: {code: $voucherCode}}
  ) {
    ... on CoreShopAddOrderVoucherCodeResult {
      __typename
      order {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${Order}
${types_generated_Error}
${Validation_Error}`,lib.Ay`
    query GetCoreShopOrder($token: String!) {
  CoreShopOrder(order: {token: $token}) {
    ... on CoreShopOrderResult {
      __typename
      order {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Order}
${types_generated_Error}`,lib.Ay`
    mutation CoreShopCheckoutOrder($order: OrderInput!) {
  CoreShopCheckoutOrder(checkoutOrder: {order: $order}) {
    ... on CoreShopCheckoutOrderResult {
      __typename
    }
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${types_generated_Error}
${Validation_Error}`,lib.Ay`
    query CoreShopOrderList {
  CoreShopOrderList {
    ... on CoreShopOrderListResult {
      __typename
      orders {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Order}
${types_generated_Error}`,lib.Ay`
    mutation CoreShopRemoveOrderItem($orderItemId: Int!, $token: String!) {
  CoreShopRemoveOrderItem(
    removeOrderItem: {order: {token: $token}, orderItem: {id: $orderItemId}}
  ) {
    ... on CoreShopRemoveOrderItemResult {
      order {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Order}
${types_generated_Error}`),CoreShopUpdateOrderItem=(lib.Ay`
    mutation CoreShopRemoveOrderVoucherCode($voucherCode: String!, $token: String!) {
  CoreShopRemoveOrderVoucherCode(
    removeOrderVoucherCode: {order: {token: $token}, orderVoucherCode: {code: $voucherCode}}
  ) {
    ... on CoreShopRemoveOrderVoucherCodeResult {
      __typename
      order {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
    ... on CoreShopValidationError {
      ...validation_error
    }
  }
}
    ${Order}
${types_generated_Error}
${Validation_Error}`,lib.Ay`
    mutation CoreShopUpdateOrderItem($orderItemId: Int!, $quantity: Float!, $token: String!) {
  CoreShopUpdateOrderItem(
    updateOrderItem: {order: {token: $token}, orderItem: {id: $orderItemId, quantity: $quantity}}
  ) {
    ... on CoreShopUpdateOrderItemResult {
      order {
        ...order
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Order}
${types_generated_Error}`);lib.Ay`
    query getCoreShopLatestProducts {
  CoreShopLatestProducts {
    ... on CoreShopLatestProductsResult {
      __typename
      products {
        __typename
        edges {
          __typename
          node {
            ...product
          }
        }
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Product}
${types_generated_Error}`,lib.Ay`
    query getCoreShopProductPrice($productId: Int!) {
  CoreShopProductPrice(productPrice: {productId: $productId, context: {}}) {
    ... on CoreShopProductPriceResult {
      __typename
      price_net
      price_gross
      retail_price_net
      retail_price_gross
      discount_price_net
      discount_price_gross
      discount_net
      discount_gross
      tax_amount
      tax_rate
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${types_generated_Error}`,lib.Ay`
    query getCoreShopProduct($productId: Int!) {
  CoreShopProduct(product: {productId: $productId}) {
    ... on CoreShopProductResult {
      __typename
      product {
        ...product
        variantAttributeIndex {
          ... on CoreShopVariantAttributeIndex {
            url
            productId
            attributes {
              ... on CoreShopVariantAttributeIndexAttribute {
                groupId
                attributeId
              }
            }
          }
        }
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Product}
${types_generated_Error}`,lib.Ay`
    query getCoreShopProductsInCategory($categoryId: Int!) {
  CoreShopProducts(productListing: {category: {categoryId: $categoryId}}) {
    ... on CoreShopProductsResult {
      __typename
      products {
        totalCount
        edges {
          node {
            ...product
          }
        }
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Product}
${types_generated_Error}`;var next_auth=__webpack_require__("./node_modules/next-auth/index.js");const authConfig={pages:{signIn:"/login"},callbacks:{jwt:({token,user,account})=>(account&&(token.accessToken=user.access_token),token),session:({session,token})=>(session.accessToken=token.accessToken,session),authorized({auth,request:{nextUrl}}){const isLoggedIn=!!auth?.user;return!nextUrl.pathname.startsWith("/dashboard")||isLoggedIn}},providers:[],cookies:{sessionToken:{name:"authjs.session-token",options:{httpOnly:!0,sameSite:"lax",path:"/",secure:!0,maxAge:3600}}}};var credentials=__webpack_require__("./node_modules/@auth/core/providers/credentials.js");const{auth,signIn,signOut}=(0,next_auth.Ay)({...authConfig,events:{async signIn({user}){user.active_order&&(await(0,headers.UL)()).set("cartToken",user.active_order)}},providers:[(0,credentials.A)({credentials:{email:{label:"Email",type:"email"},password:{label:"Password",type:"password"},orderToken:{type:"hidden"}},async authorize(credentials,req){if(void 0===credentials)return null;try{const result=await async function authorize({username,password,orderToken=null}){const res=await coreShopFetch({query:(0,printer.y)(CoreShopAuthorize),variables:{username,password,orderToken},cache:"no-cache"});if("CoreShopAuthorizeResult"===res.data?.CoreShopAuthorize?.__typename&&res.data.CoreShopAuthorize)return console.log(res),res.data.CoreShopAuthorize;return null}({username:credentials.email,password:credentials.password,orderToken:credentials.orderToken});return result?{id:credentials.email,email:credentials.email,access_token:result.token,active_order:result.activeOrderToken}:null}catch(e){return null}}})]});var console=__webpack_require__("./node_modules/console-browserify/index.js");const endpoint=`${{NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}.API_URL}`;async function coreShopFetch({query,variables,headers,cache="reload"}){const session=await auth(),authHeader={};session?.accessToken&&(authHeader.Authorization=`Bearer ${session.accessToken}`);const response=await fetch(endpoint,{method:"POST",headers:{"content-type":"application/json",...authHeader,...headers},body:JSON.stringify({query,variables}),cache});if(200!==response.status)throw new Error("Network Error");return await response.json()}var cache=__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/cache/index.js");__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.js");async function updateItemQuantity(state,{orderItemId,quantity}){const token=(await(0,headers.UL)()).get("cartToken")?.value;token&&(0===quantity?await async function removeOrderItem({token,orderItemId}){const res=await coreShopFetch({query:(0,printer.y)(CoreShopRemoveOrderItem),variables:{token,orderItemId},cache:"no-cache"});return"CoreShopRemoveOrderItemResult"===res.data?.CoreShopRemoveOrderItem?.__typename?res.data.CoreShopRemoveOrderItem.order:null}({token,orderItemId}):await async function updateOrderItem({token,orderItemId,quantity}){const res=await coreShopFetch({query:(0,printer.y)(CoreShopUpdateOrderItem),variables:{token,orderItemId,quantity},cache:"no-cache"});return"CoreShopUpdateOrderItemResult"===res.data?.CoreShopUpdateOrderItem?.__typename?res.data.CoreShopUpdateOrderItem.order:null}({token,orderItemId,quantity}),(0,cache.updateTag)("cart"))}var react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js");function CartItemRemove({cartItem}){const[message,formAction]=(0,react_dom.useFormState)(updateItemQuantity,null),action=formAction.bind(null,{orderItemId:parseInt(cartItem.id??0),quantity:0});return(0,jsx_runtime.jsx)("form",{action,children:(0,jsx_runtime.jsx)(CoreButton.M,{text:"Remove",type:"submit",variant:types.c.Link,icon:!0,iconType:"Trash",iconPre:!0})})}CartItemRemove.__docgenInfo={description:"",methods:[],displayName:"CartItemRemove",props:{cartItem:{required:!0,tsType:{name:"OrderItemFragment"},description:""}}};const CoreCartWidget=({cart})=>(0,jsx_runtime.jsxs)("div",{id:"cart",className:"cart-widget btn-group btn-block",children:[(0,jsx_runtime.jsxs)("button",{type:"button",className:`btn btn-link ${cart&&cart.items&&cart.items.length>0&&"dropdown-toggle"}`,"data-bs-toggle":"dropdown","aria-expanded":"false",children:[(0,jsx_runtime.jsx)("span",{className:"cart-number",children:cart&&cart.items?cart.items.length:0}),(0,jsx_runtime.jsx)(icons_cart.A,{className:"me-2",size:18})]}),cart&&cart.items&&cart.items.length>0&&(0,jsx_runtime.jsx)("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"dropdownMenuButton",children:(0,jsx_runtime.jsxs)("div",{className:"pt-1 px-3",children:[(0,jsx_runtime.jsx)("div",{className:"mb-2",children:(0,jsx_runtime.jsx)(ListGroup.A,{as:"ul",children:cart.items.map((item,index)=>item&&(0,jsx_runtime.jsxs)(ListGroup.A.Item,{as:"li",className:"cart-widget-item",children:[(0,jsx_runtime.jsx)("div",{children:item.product&&(0,jsx_runtime.jsx)(export_mocks_link.Ay,{href:`/product/${item.product.id}`,target:"_blank",children:item.product.name})}),(0,jsx_runtime.jsxs)("div",{children:["x",item.quantity," - ",(0,jsx_runtime.jsx)(currency,{amount:item.totalGross?item.totalGross:0,currencyCode:"EUR"})]}),(0,jsx_runtime.jsx)("div",{className:"cart-close-item",children:(0,jsx_runtime.jsx)(CartItemRemove,{cartItem:item})})]},item?.product?.id))})}),(0,jsx_runtime.jsxs)("div",{className:"my-1",children:["Subtotal: ",(0,jsx_runtime.jsx)(currency,{amount:cart?.subtotalGross??0,currencyCode:"EUR"})]}),(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:["Total: ",(0,jsx_runtime.jsx)(currency,{amount:cart?.totalGross??0,currencyCode:"EUR"})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-2",children:[(0,jsx_runtime.jsx)(CoreButton.M,{variant:types.c.Secondary,buttonType:"a",text:"Cart",href:"/cart",icon:!1}),(0,jsx_runtime.jsx)(CoreButton.M,{variant:types.c.Primary,buttonType:"a",text:"Checkout",href:"/checkout/customer",icon:!1})]})]})})]});CoreCartWidget.__docgenInfo={description:"",methods:[],displayName:"CoreCartWidget",props:{cart:{required:!0,tsType:{name:"union",raw:"OrderFragment | null",elements:[{name:"OrderFragment"},{name:"null"}]},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[4]!./stories/Molecules/CartWidget/cartwidget.scss"(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".cart-widget-item:not(:last-child){padding-bottom:.5rem;margin-bottom:.5rem;border-bottom:1px solid var(--coreshop-gray-400)}.cart-widget-item>div:first-child{text-overflow:ellipsis;overflow:hidden;width:calc(100% - 1.5rem)}.cart-close-item{position:absolute;top:0;right:0;cursor:pointer}.cart-close-item a.icon-only{padding:0}.cart-close-item a.icon-only svg{font-size:1.375rem;fill:var(--coreshop-primary)}.cart-number{position:absolute;top:2px;left:1.5rem;font-size:0.625rem;width:1rem;height:1rem;background-color:var(--coreshop-gray-800);color:var(--coreshop-white);border-radius:100%;line-height:1.5}","",{version:3,sources:["webpack://./stories/Molecules/CartWidget/cartwidget.scss"],names:[],mappings:"AAMkB,mCACI,oBAAA,CACA,mBAAA,CACA,gDAAA,CAEV,kCACI,sBAAA,CACA,eAAA,CACA,yBAAA,CAKZ,iBACI,iBAAA,CACA,KAAA,CACA,OAAA,CACA,cAAA,CAEA,6BACI,SAAA,CAEA,iCACI,kBAAA,CACA,4BAAA,CAKZ,aACI,iBAAA,CACA,OAAA,CACA,WAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,yCAAA,CACA,2BAAA,CACA,kBAAA,CACA,eAAA",sourcesContent:["@import '../../assets/scss/breakpoints.scss';\n@import '../../assets/scss/mixins.scss';\n\n.cart {\n    &-widget {\n        &-item {\n                  &:not(:last-child) {\n                      padding-bottom: 0.5rem;\n                      margin-bottom: 0.5rem;\n                      border-bottom: 1px solid var(--coreshop-gray-400);\n                  }\n            > div:first-child {\n                text-overflow: ellipsis;\n                overflow: hidden;\n                width: calc(100% - 1.5rem);\n            }\n        }\n    }\n\n    &-close-item {\n        position: absolute;\n        top: 0;\n        right: 0;\n        cursor: pointer;\n\n        a.icon-only {\n            padding: 0;\n\n            svg {\n                font-size: rem(22px);\n                fill: var(--coreshop-primary);\n            }\n        }\n    }\n\n    &-number {\n        position: absolute;\n        top: 2px;\n        left: rem(24px);\n        font-size: rem(10px);\n        width: rem(16px);\n        height: rem(16px);\n        background-color: var(--coreshop-gray-800);\n        color: var(--coreshop-white);\n        border-radius: 100%;\n        line-height: 1.5;\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___;__webpack_require__.d(__webpack_exports__,["A",0,__WEBPACK_DEFAULT_EXPORT__])}}]);
//# sourceMappingURL=9072.f81a208f.iframe.bundle.js.map