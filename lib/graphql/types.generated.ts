import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ActiveOrderInput = {
  order: OrderInput;
};

export type AddOrderVoucherCodeInput = {
  order: OrderInput;
  orderVoucherCode: OrderVoucherCodeInput;
};

export type AddToOrderItemInput = {
  order?: InputMaybe<OrderInputNull>;
  orderItem?: InputMaybe<OrderItemInput>;
};

export type AddressInput = {
  city: Scalars['String']['input'];
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<CountryEnumType>;
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  number: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postcode: Scalars['String']['input'];
  salutation: Scalars['String']['input'];
  street: Scalars['String']['input'];
};

export type AnyDocumentTarget = Document_Email | Document_Folder | Document_Hardlink | Document_Link | Document_Page | Document_Snippet;

export type AnyTarget = Asset | Document_Email | Document_Hardlink | Document_Link | Document_Page | Document_Snippet | Object_CoreShopAddress | Object_CoreShopAttributeColor | Object_CoreShopAttributeGroup | Object_CoreShopAttributeValue | Object_CoreShopCategory | Object_CoreShopCompany | Object_CoreShopCustomer | Object_CoreShopCustomerGroup | Object_CoreShopManufacturer | Object_CoreShopOrder | Object_CoreShopOrderInvoice | Object_CoreShopOrderInvoiceItem | Object_CoreShopOrderItem | Object_CoreShopOrderShipment | Object_CoreShopOrderShipmentItem | Object_CoreShopProduct | Object_CoreShopUser | Object_CoreShopWishlist | Object_CoreShopWishlistItem;

export enum CarrierEnumType {
  Standard = 'Standard'
}

export type CarrierListInput = {
  order?: InputMaybe<OrderInput>;
};

export type CategoryInput = {
  categoryId: Scalars['Int']['input'];
};

export type CategoryListingInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type CheckoutAddressInput = {
  invoiceAddressId: Scalars['Int']['input'];
  invoiceAddressIsShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  order: OrderInput;
  shippingAddressId?: InputMaybe<Scalars['Int']['input']>;
};

export type CheckoutCarrierInput = {
  carrier?: InputMaybe<CarrierEnumType>;
  order?: InputMaybe<OrderInput>;
};

export type CheckoutGuestAddressInput = {
  invoiceAddress: AddressInput;
  invoiceAddressIsShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  order: OrderInput;
  shippingAddress?: InputMaybe<AddressInput>;
};

export type CheckoutGuestRegistrationInput = {
  customer: GuestRegistrationInput;
  order: OrderInput;
};

export type CheckoutOrderInput = {
  order?: InputMaybe<OrderInput>;
};

export type CheckoutPaymentProviderInput = {
  order?: InputMaybe<OrderInput>;
  paymentProvider?: InputMaybe<PaymentProviderEnumType>;
};

export type ContextInput = {
  currency?: InputMaybe<CurrencyInput>;
  locale?: InputMaybe<LocaleInput>;
  order?: InputMaybe<OrderInput>;
};

export type CoreShopActiveOrderResult = {
  __typename?: 'CoreShopActiveOrderResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopActiveOrderUnionResult = CoreShopActiveOrderResult | CoreShopError | CoreShopValidationError;

export type CoreShopAddOrderVoucherCodeResult = {
  __typename?: 'CoreShopAddOrderVoucherCodeResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopAddOrderVoucherCodeUnionResult = CoreShopAddOrderVoucherCodeResult | CoreShopError | CoreShopValidationError;

export type CoreShopAddToOrderResult = {
  __typename?: 'CoreShopAddToOrderResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopAddToOrderUnionResult = CoreShopAddToOrderResult | CoreShopError | CoreShopValidationError;

export type CoreShopAddressListResult = {
  __typename?: 'CoreShopAddressListResult';
  addresses?: Maybe<Array<Maybe<Object_CoreShopAddress>>>;
};

export type CoreShopAddressListUnionResult = CoreShopAddressListResult | CoreShopError | CoreShopValidationError;

export type CoreShopAuthorizeResult = {
  __typename?: 'CoreShopAuthorizeResult';
  activeOrderToken?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type CoreShopAuthorizeUnionResult = CoreShopAuthorizeResult | CoreShopError | CoreShopValidationError;

export type CoreShopCarrierListResult = {
  __typename?: 'CoreShopCarrierListResult';
  carriers?: Maybe<Array<Maybe<CoreShopCarrierPrice>>>;
};

export type CoreShopCarrierListUnionResult = CoreShopCarrierListResult | CoreShopError | CoreShopValidationError;

export type CoreShopCarrierPrice = {
  __typename?: 'CoreShopCarrierPrice';
  carrier?: Maybe<CoreshopCarrier>;
  price_gross: Scalars['Int']['output'];
  price_net: Scalars['Int']['output'];
  tax: Scalars['Int']['output'];
};

export type CoreShopCategoriesResult = {
  __typename?: 'CoreShopCategoriesResult';
  categories?: Maybe<CoreShopCategoryConnection>;
};

export type CoreShopCategoriesUnionResult = CoreShopCategoriesResult | CoreShopError | CoreShopValidationError;

export type CoreShopCategoryConnection = {
  __typename?: 'CoreShopCategoryConnection';
  edges?: Maybe<Array<Maybe<CoreShopCategoryEdge>>>;
  /** The total count of all queryable objects for this schema listing */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CoreShopCategoryEdge = {
  __typename?: 'CoreShopCategoryEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Object_CoreShopCategory>;
};

export type CoreShopCategoryResult = {
  __typename?: 'CoreShopCategoryResult';
  category?: Maybe<Object_CoreShopCategory>;
};

export type CoreShopCategoryUnionResult = CoreShopCategoryResult | CoreShopError | CoreShopValidationError;

export type CoreShopCheckoutAddressResult = {
  __typename?: 'CoreShopCheckoutAddressResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopCheckoutAddressUnionResult = CoreShopCheckoutAddressResult | CoreShopError | CoreShopValidationError;

export type CoreShopCheckoutGuestAddressResult = {
  __typename?: 'CoreShopCheckoutGuestAddressResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopCheckoutGuestAddressUnionResult = CoreShopCheckoutGuestAddressResult | CoreShopError | CoreShopValidationError;

export type CoreShopCheckoutGuestRegistrationResult = {
  __typename?: 'CoreShopCheckoutGuestRegistrationResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopCheckoutGuestRegistrationUnionResult = CoreShopCheckoutGuestRegistrationResult | CoreShopError | CoreShopValidationError;

export type CoreShopCheckoutOrderResult = {
  __typename?: 'CoreShopCheckoutOrderResult';
  response?: Maybe<Scalars['String']['output']>;
};

export type CoreShopCheckoutOrderUnionResult = CoreShopCheckoutOrderResult | CoreShopError | CoreShopValidationError;

export type CoreShopCheckoutPaymentProviderResult = {
  __typename?: 'CoreShopCheckoutPaymentProviderResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopCheckoutPaymentProviderUnionResult = CoreShopCheckoutPaymentProviderResult | CoreShopError | CoreShopValidationError;

export type CoreShopCheckoutShippingResult = {
  __typename?: 'CoreShopCheckoutShippingResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopCheckoutShippingUnionResult = CoreShopCheckoutShippingResult | CoreShopError | CoreShopValidationError;

export type CoreShopCreateAddressResult = {
  __typename?: 'CoreShopCreateAddressResult';
  address?: Maybe<Object_CoreShopAddress>;
};

export type CoreShopCreateAddressUnionResult = CoreShopCreateAddressResult | CoreShopError | CoreShopValidationError;

export type CoreShopCustomerRegistrationResult = {
  __typename?: 'CoreShopCustomerRegistrationResult';
  customer?: Maybe<Object_CoreShopCustomer>;
};

export type CoreShopCustomerRegistrationUnionResult = CoreShopCustomerRegistrationResult | CoreShopError | CoreShopValidationError;

export type CoreShopDeleteAddressResult = {
  __typename?: 'CoreShopDeleteAddressResult';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CoreShopDeleteAddressUnionResult = CoreShopDeleteAddressResult | CoreShopError | CoreShopValidationError;

export type CoreShopError = {
  __typename?: 'CoreShopError';
  message?: Maybe<Scalars['String']['output']>;
};

export type CoreShopFilterKeyValue = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type CoreShopFilterResult = {
  __typename?: 'CoreShopFilterResult';
  objects?: Maybe<CoreShopProductFilterListingConnection>;
};

export type CoreShopFilterUnionResult = CoreShopError | CoreShopFilterResult | CoreShopValidationError;

export type CoreShopLatestProductsResult = {
  __typename?: 'CoreShopLatestProductsResult';
  products?: Maybe<CoreShopProductConnection>;
};

export type CoreShopLatestProductsUnionResult = CoreShopError | CoreShopLatestProductsResult | CoreShopValidationError;

export type CoreShopMeResult = {
  __typename?: 'CoreShopMeResult';
  user?: Maybe<Object_CoreShopUser>;
};

export type CoreShopMeUnionResult = CoreShopError | CoreShopMeResult | CoreShopValidationError;

export type CoreShopOrderListResult = {
  __typename?: 'CoreShopOrderListResult';
  orders?: Maybe<Array<Maybe<Object_CoreShopOrder>>>;
};

export type CoreShopOrderListUnionResult = CoreShopError | CoreShopOrderListResult | CoreShopValidationError;

export type CoreShopOrderResult = {
  __typename?: 'CoreShopOrderResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopOrderUnionResult = CoreShopError | CoreShopOrderResult | CoreShopValidationError;

export type CoreShopPasswordResetRequestResult = {
  __typename?: 'CoreShopPasswordResetRequestResult';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CoreShopPasswordResetRequestUnionResult = CoreShopError | CoreShopPasswordResetRequestResult | CoreShopValidationError;

export type CoreShopPasswordResetRequestValidateResult = {
  __typename?: 'CoreShopPasswordResetRequestValidateResult';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CoreShopPasswordResetRequestValidateUnionResult = CoreShopError | CoreShopPasswordResetRequestValidateResult | CoreShopValidationError;

export type CoreShopPasswordResetResult = {
  __typename?: 'CoreShopPasswordResetResult';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CoreShopPasswordResetUnionResult = CoreShopError | CoreShopPasswordResetResult | CoreShopValidationError;

export type CoreShopPaymentProviderListResult = {
  __typename?: 'CoreShopPaymentProviderListResult';
  paymentProviders?: Maybe<Array<Maybe<CoreShopPaymentProviderPrice>>>;
};

export type CoreShopPaymentProviderListUnionResult = CoreShopError | CoreShopPaymentProviderListResult | CoreShopValidationError;

export type CoreShopPaymentProviderPrice = {
  __typename?: 'CoreShopPaymentProviderPrice';
  paymentProvider?: Maybe<CoreshopPaymentProvider>;
  price: Scalars['Int']['output'];
};

export type CoreShopProductConnection = {
  __typename?: 'CoreShopProductConnection';
  edges?: Maybe<Array<Maybe<CoreShopProductEdge>>>;
  /** The total count of all queryable objects for this schema listing */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CoreShopProductEdge = {
  __typename?: 'CoreShopProductEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Object_CoreShopProduct>;
};

export type CoreShopProductFilterEdgeConnection = {
  __typename?: 'CoreShopProductFilterEdgeConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Object_CoreShopProduct>;
};

export type CoreShopProductFilterListingConnection = {
  __typename?: 'CoreShopProductFilterListingConnection';
  edges?: Maybe<Array<Maybe<CoreShopProductFilterEdgeConnection>>>;
  /** The total count of all queryable objects for this schema listing */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CoreShopProductPriceResult = {
  __typename?: 'CoreShopProductPriceResult';
  discount_gross?: Maybe<Scalars['Int']['output']>;
  discount_net?: Maybe<Scalars['Int']['output']>;
  discount_price_gross?: Maybe<Scalars['Int']['output']>;
  discount_price_net?: Maybe<Scalars['Int']['output']>;
  price_gross?: Maybe<Scalars['Int']['output']>;
  price_net?: Maybe<Scalars['Int']['output']>;
  retail_price_gross?: Maybe<Scalars['Int']['output']>;
  retail_price_net?: Maybe<Scalars['Int']['output']>;
  tax_amount?: Maybe<Scalars['Int']['output']>;
  tax_rate?: Maybe<Scalars['Float']['output']>;
};

export type CoreShopProductPriceUnionResult = CoreShopError | CoreShopProductPriceResult | CoreShopValidationError;

export type CoreShopProductResult = {
  __typename?: 'CoreShopProductResult';
  product?: Maybe<Object_CoreShopProduct>;
};

export type CoreShopProductUnionResult = CoreShopError | CoreShopProductResult | CoreShopValidationError;

export type CoreShopProductsResult = {
  __typename?: 'CoreShopProductsResult';
  products?: Maybe<CoreShopProductConnection>;
};

export type CoreShopProductsUnionResult = CoreShopError | CoreShopProductsResult | CoreShopValidationError;

export type CoreShopRemoveOrderItemResult = {
  __typename?: 'CoreShopRemoveOrderItemResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopRemoveOrderItemUnionResult = CoreShopError | CoreShopRemoveOrderItemResult | CoreShopValidationError;

export type CoreShopRemoveOrderVoucherCodeResult = {
  __typename?: 'CoreShopRemoveOrderVoucherCodeResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopRemoveOrderVoucherCodeUnionResult = CoreShopError | CoreShopRemoveOrderVoucherCodeResult | CoreShopValidationError;

export type CoreShopUpdateAddressResult = {
  __typename?: 'CoreShopUpdateAddressResult';
  address?: Maybe<Object_CoreShopAddress>;
};

export type CoreShopUpdateAddressUnionResult = CoreShopError | CoreShopUpdateAddressResult | CoreShopValidationError;

export type CoreShopUpdateMeResult = {
  __typename?: 'CoreShopUpdateMeResult';
  me?: Maybe<Object_CoreShopCustomer>;
};

export type CoreShopUpdateMeUnionResult = CoreShopError | CoreShopUpdateMeResult | CoreShopValidationError;

export type CoreShopUpdateOrderItemResult = {
  __typename?: 'CoreShopUpdateOrderItemResult';
  order?: Maybe<Object_CoreShopOrder>;
};

export type CoreShopUpdateOrderItemUnionResult = CoreShopError | CoreShopUpdateOrderItemResult | CoreShopValidationError;

export type CoreShopUpdatePasswordResult = {
  __typename?: 'CoreShopUpdatePasswordResult';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CoreShopUpdatePasswordUnionResult = CoreShopError | CoreShopUpdatePasswordResult | CoreShopValidationError;

export type CoreShopValidationError = {
  __typename?: 'CoreShopValidationError';
  message?: Maybe<Scalars['String']['output']>;
  violations?: Maybe<Array<Maybe<CoreShopValidationErrorViolation>>>;
};

export type CoreShopValidationErrorViolation = {
  __typename?: 'CoreShopValidationErrorViolation';
  message?: Maybe<Scalars['String']['output']>;
  propertyPath?: Maybe<Scalars['String']['output']>;
};

export type CoreshopAddressIdentifier = {
  __typename?: 'CoreshopAddressIdentifier';
  active?: Maybe<Scalars['Boolean']['output']>;
  creationDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CoreshopCarrier = {
  __typename?: 'CoreshopCarrier';
  creationDate?: Maybe<Scalars['String']['output']>;
  hideFromCheckout?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  stores?: Maybe<CoreshopStore__List>;
  taxCalculationStrategy?: Maybe<Scalars['String']['output']>;
  trackingUrl?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<CoreshopCarrierTranslation__List>;
};

export type CoreshopCarrierTranslation = {
  __typename?: 'CoreshopCarrierTranslation';
  creationDate?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translatable?: Maybe<CoreshopCarrier>;
};

export type CoreshopCarrierTranslation__List = {
  __typename?: 'CoreshopCarrierTranslation__List';
  items?: Maybe<Array<Maybe<CoreshopCarrierTranslation>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CoreshopCartPriceRule = {
  __typename?: 'CoreshopCartPriceRule';
  active?: Maybe<Scalars['Boolean']['output']>;
  creationDate?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isVoucherRule?: Maybe<Scalars['Boolean']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
};

export type CoreshopCountry = {
  __typename?: 'CoreshopCountry';
  active?: Maybe<Scalars['Boolean']['output']>;
  addressFormat?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<CoreshopCurrency>;
  id?: Maybe<Scalars['Int']['output']>;
  isoCode?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  salutations?: Maybe<Scalars['String']['output']>;
  states?: Maybe<CoreshopState__List>;
  stores?: Maybe<CoreshopStore__List>;
  translations?: Maybe<CoreshopCountryTranslation__List>;
};

export type CoreshopCountryTranslation = {
  __typename?: 'CoreshopCountryTranslation';
  creationDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translatable?: Maybe<CoreshopCountry>;
};

export type CoreshopCountryTranslation__List = {
  __typename?: 'CoreshopCountryTranslation__List';
  items?: Maybe<Array<Maybe<CoreshopCountryTranslation>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CoreshopCountry__List = {
  __typename?: 'CoreshopCountry__List';
  items?: Maybe<Array<Maybe<CoreshopCountry>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CoreshopCurrency = {
  __typename?: 'CoreshopCurrency';
  countries?: Maybe<CoreshopCountry__List>;
  creationDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isoCode?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numericIsoCode?: Maybe<Scalars['Int']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

export type CoreshopFilter = {
  __typename?: 'CoreshopFilter';
  creationDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderDirection?: Maybe<Scalars['String']['output']>;
  orderKey?: Maybe<Scalars['String']['output']>;
  resultsPerPage?: Maybe<Scalars['Int']['output']>;
};

export type CoreshopPaymentProvider = {
  __typename?: 'CoreshopPaymentProvider';
  active?: Maybe<Scalars['Boolean']['output']>;
  creationDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  stores?: Maybe<CoreshopStore__List>;
  translations?: Maybe<CoreshopPaymentProviderTranslation__List>;
};

export type CoreshopPaymentProviderTranslation = {
  __typename?: 'CoreshopPaymentProviderTranslation';
  creationDate?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translatable?: Maybe<CoreshopPaymentProvider>;
};

export type CoreshopPaymentProviderTranslation__List = {
  __typename?: 'CoreshopPaymentProviderTranslation__List';
  items?: Maybe<Array<Maybe<CoreshopPaymentProviderTranslation>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CoreshopProductStoreValues = {
  __typename?: 'CoreshopProductStoreValues';
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  productUnitDefinitionPrices?: Maybe<CoreshopProductUnitDefinitionPrice__List>;
  store?: Maybe<CoreshopStore>;
};

export type CoreshopProductUnit = {
  __typename?: 'CoreshopProductUnit';
  creationDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<CoreshopProductUnitTranslation__List>;
};

export type CoreshopProductUnitDefinition = {
  __typename?: 'CoreshopProductUnitDefinition';
  conversionRate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
  productUnitDefinitions?: Maybe<CoreshopProductUnitDefinitions>;
  unit?: Maybe<CoreshopProductUnit>;
};

export type CoreshopProductUnitDefinitionPrice = {
  __typename?: 'CoreshopProductUnitDefinitionPrice';
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  productStoreValues?: Maybe<CoreshopProductStoreValues>;
  unitDefinition?: Maybe<CoreshopProductUnitDefinition>;
};

export type CoreshopProductUnitDefinitionPrice__List = {
  __typename?: 'CoreshopProductUnitDefinitionPrice__List';
  items?: Maybe<Array<Maybe<CoreshopProductUnitDefinitionPrice>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CoreshopProductUnitDefinition__List = {
  __typename?: 'CoreshopProductUnitDefinition__List';
  items?: Maybe<Array<Maybe<CoreshopProductUnitDefinition>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CoreshopProductUnitDefinitions = {
  __typename?: 'CoreshopProductUnitDefinitions';
  defaultUnitDefinition?: Maybe<CoreshopProductUnitDefinition>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  unitDefinitions?: Maybe<CoreshopProductUnitDefinition__List>;
};

export type CoreshopProductUnitTranslation = {
  __typename?: 'CoreshopProductUnitTranslation';
  creationDate?: Maybe<Scalars['String']['output']>;
  fullLabel?: Maybe<Scalars['String']['output']>;
  fullPluralLabel?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  shortLabel?: Maybe<Scalars['String']['output']>;
  shortPluralLabel?: Maybe<Scalars['String']['output']>;
  translatable?: Maybe<CoreshopProductUnit>;
};

export type CoreshopProductUnitTranslation__List = {
  __typename?: 'CoreshopProductUnitTranslation__List';
  items?: Maybe<Array<Maybe<CoreshopProductUnitTranslation>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CoreshopState = {
  __typename?: 'CoreshopState';
  active?: Maybe<Scalars['Boolean']['output']>;
  country?: Maybe<CoreshopCountry>;
  creationDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isoCode?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
};

export type CoreshopState__List = {
  __typename?: 'CoreshopState__List';
  items?: Maybe<Array<Maybe<CoreshopState>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CoreshopStore = {
  __typename?: 'CoreshopStore';
  baseCountry?: Maybe<CoreshopCountry>;
  countries?: Maybe<CoreshopCountry__List>;
  creationDate?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<CoreshopCurrency>;
  id?: Maybe<Scalars['Int']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  modificationDate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  siteId?: Maybe<Scalars['Int']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  useGrossPrice?: Maybe<Scalars['Boolean']['output']>;
};

export type CoreshopStore__List = {
  __typename?: 'CoreshopStore__List';
  items?: Maybe<Array<Maybe<CoreshopStore>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum CountryEnumType {
  Austria = 'Austria'
}

export type CreateAddressInputType = {
  address: AddressInput;
};

export type CurrencyInput = {
  iso: Scalars['String']['input'];
};

export type CustomerInput = {
  address: AddressInput;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  newsletterActive: Scalars['Boolean']['input'];
  salutation: Scalars['String']['input'];
  user: UserInput;
};

export type DeleteAddressInputType = {
  addressId?: InputMaybe<Scalars['Int']['input']>;
};

export type Document = Document_Email | Document_Hardlink | Document_Link | Document_Page | Document_Snippet;

export type DocumentElement = Document_EditableAreablock | Document_EditableBlock | Document_EditableCheckbox | Document_EditableDate | Document_EditableEmbed | Document_EditableImage | Document_EditableInput | Document_EditableLink | Document_EditableMultiselect | Document_EditableNumeric | Document_EditablePdf | Document_EditableRelation | Document_EditableRelations | Document_EditableScheduledblock | Document_EditableSelect | Document_EditableTable | Document_EditableTextarea | Document_EditableVideo | Document_EditableWysiwyg;

export type ElementProperty = Property_Asset | Property_Checkbox | Property_Document | Property_Object | Property_Select | Property_Text;

export type FilterInput = {
  filterId: Scalars['Int']['input'];
};

export type FilterListingInput = {
  category: CategoryInput;
  filter: FilterInput;
  locale?: InputMaybe<Scalars['String']['input']>;
  parameters?: InputMaybe<Array<InputMaybe<CoreShopFilterKeyValue>>>;
  variantListMode?: InputMaybe<Scalars['String']['input']>;
};

export type GuestRegistrationInput = {
  address: AddressInput;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  salutation: Scalars['String']['input'];
};

export type HotspotCrop = {
  __typename?: 'HotspotCrop';
  cropHeight?: Maybe<Scalars['Float']['output']>;
  cropLeft?: Maybe<Scalars['Float']['output']>;
  cropPercent?: Maybe<Scalars['Boolean']['output']>;
  cropTop?: Maybe<Scalars['Float']['output']>;
  cropWidth?: Maybe<Scalars['Float']['output']>;
};

export type HotspotHotspot = {
  __typename?: 'HotspotHotspot';
  data?: Maybe<Array<Maybe<HotspotMetadata>>>;
  height?: Maybe<Scalars['Float']['output']>;
  left?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  top?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};


export type HotspotHotspotDataArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HotspotMarker = {
  __typename?: 'HotspotMarker';
  data?: Maybe<Array<Maybe<HotspotMetadata>>>;
  left?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  top?: Maybe<Scalars['Float']['output']>;
};


export type HotspotMarkerDataArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HotspotMetadata = Property_Asset | Property_Checkbox | Property_Document | Property_Object | Property_Text | Property_Textarea;

export type KeyValue = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type LocaleInput = {
  locale: Scalars['String']['input'];
};

export type LoginInput = {
  orderToken?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MeInput = {
  defaultAddressId?: InputMaybe<Scalars['Int']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  newsletterActive?: InputMaybe<Scalars['Boolean']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  CoreShopAddOrderVoucherCode?: Maybe<CoreShopAddOrderVoucherCodeUnionResult>;
  CoreShopAddToOrder?: Maybe<CoreShopAddToOrderUnionResult>;
  CoreShopAuthorize?: Maybe<CoreShopAuthorizeUnionResult>;
  CoreShopCheckoutAddress?: Maybe<CoreShopCheckoutAddressUnionResult>;
  CoreShopCheckoutGuestAddress?: Maybe<CoreShopCheckoutGuestAddressUnionResult>;
  CoreShopCheckoutGuestRegistration?: Maybe<CoreShopCheckoutGuestRegistrationUnionResult>;
  CoreShopCheckoutOrder?: Maybe<CoreShopCheckoutOrderUnionResult>;
  CoreShopCheckoutPaymentProvider?: Maybe<CoreShopCheckoutPaymentProviderUnionResult>;
  CoreShopCheckoutShipping?: Maybe<CoreShopCheckoutShippingUnionResult>;
  CoreShopCreateAddress?: Maybe<CoreShopCreateAddressUnionResult>;
  CoreShopCustomerRegistration?: Maybe<CoreShopCustomerRegistrationUnionResult>;
  CoreShopDeleteAddress?: Maybe<CoreShopDeleteAddressUnionResult>;
  CoreShopPasswordReset?: Maybe<CoreShopPasswordResetUnionResult>;
  CoreShopPasswordResetRequest?: Maybe<CoreShopPasswordResetRequestUnionResult>;
  CoreShopPasswordResetRequestValidate?: Maybe<CoreShopPasswordResetRequestValidateUnionResult>;
  CoreShopRemoveOrderItem?: Maybe<CoreShopRemoveOrderItemUnionResult>;
  CoreShopRemoveOrderVoucherCode?: Maybe<CoreShopRemoveOrderVoucherCodeUnionResult>;
  CoreShopUpdateAddress?: Maybe<CoreShopUpdateAddressUnionResult>;
  CoreShopUpdateMe?: Maybe<CoreShopUpdateMeUnionResult>;
  CoreShopUpdateOrderItem?: Maybe<CoreShopUpdateOrderItemUnionResult>;
  CoreShopUpdatePassword?: Maybe<CoreShopUpdatePasswordUnionResult>;
};


export type MutationsCoreShopAddOrderVoucherCodeArgs = {
  addOrderVoucherCode?: InputMaybe<AddOrderVoucherCodeInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopAddToOrderArgs = {
  addToOrder?: InputMaybe<AddToOrderItemInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopAuthorizeArgs = {
  authorize?: InputMaybe<LoginInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopCheckoutAddressArgs = {
  checkoutAddress?: InputMaybe<CheckoutAddressInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopCheckoutGuestAddressArgs = {
  checkoutGuestAddress?: InputMaybe<CheckoutGuestAddressInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopCheckoutGuestRegistrationArgs = {
  checkoutGuestRegistration?: InputMaybe<CheckoutGuestRegistrationInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopCheckoutOrderArgs = {
  checkoutOrder?: InputMaybe<CheckoutOrderInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopCheckoutPaymentProviderArgs = {
  checkoutPaymentProvider?: InputMaybe<CheckoutPaymentProviderInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopCheckoutShippingArgs = {
  checkoutShipping?: InputMaybe<CheckoutCarrierInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopCreateAddressArgs = {
  createAddress?: InputMaybe<CreateAddressInputType>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopCustomerRegistrationArgs = {
  customerRegistration?: InputMaybe<CustomerInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopDeleteAddressArgs = {
  deleteAddress?: InputMaybe<DeleteAddressInputType>;
  locale?: InputMaybe<LocaleInput>;
};


export type MutationsCoreShopPasswordResetArgs = {
  locale?: InputMaybe<LocaleInput>;
  passwordReset?: InputMaybe<PasswordResetInput>;
};


export type MutationsCoreShopPasswordResetRequestArgs = {
  locale?: InputMaybe<LocaleInput>;
  passwordResetRequest?: InputMaybe<PasswordResetRequestInput>;
};


export type MutationsCoreShopPasswordResetRequestValidateArgs = {
  locale?: InputMaybe<LocaleInput>;
  passwordResetRequestValidate?: InputMaybe<PasswordResetRequestValidateInput>;
};


export type MutationsCoreShopRemoveOrderItemArgs = {
  locale?: InputMaybe<LocaleInput>;
  removeOrderItem?: InputMaybe<RemoveOrderItemInput>;
};


export type MutationsCoreShopRemoveOrderVoucherCodeArgs = {
  locale?: InputMaybe<LocaleInput>;
  removeOrderVoucherCode?: InputMaybe<RemoveOrderVoucherCodeInput>;
};


export type MutationsCoreShopUpdateAddressArgs = {
  locale?: InputMaybe<LocaleInput>;
  updateAddress?: InputMaybe<UpdateAddressInputType>;
};


export type MutationsCoreShopUpdateMeArgs = {
  locale?: InputMaybe<LocaleInput>;
  updateMe?: InputMaybe<UpdateMeInputType>;
};


export type MutationsCoreShopUpdateOrderItemArgs = {
  locale?: InputMaybe<LocaleInput>;
  updateOrderItem?: InputMaybe<UpdateOrderItemInput>;
};


export type MutationsCoreShopUpdatePasswordArgs = {
  locale?: InputMaybe<LocaleInput>;
  updatePassword?: InputMaybe<UpdatePasswordInputType>;
};

export type OrderInput = {
  token: Scalars['String']['input'];
};

export type OrderInputNull = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type OrderItemIdInput = {
  id: Scalars['Int']['input'];
};

export type OrderItemInput = {
  productId: Scalars['Int']['input'];
  quantity: Scalars['Float']['input'];
};

export type OrderItemQuantityInput = {
  id: Scalars['Int']['input'];
  quantity: Scalars['Float']['input'];
};

export type OrderVoucherCodeInput = {
  code: Scalars['String']['input'];
};

export type PasswordResetInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type PasswordResetRequestInput = {
  username: Scalars['String']['input'];
};

export type PasswordResetRequestValidateInput = {
  token: Scalars['String']['input'];
};

export enum PaymentProviderEnumType {
  Bankwire = 'Bankwire'
}

export type PaymentProviderListInput = {
  order?: InputMaybe<OrderInput>;
};

export type ProductInput = {
  productId: Scalars['Int']['input'];
};

export type ProductListingInput = {
  category?: InputMaybe<CategoryInput>;
};

export type ProductPriceInput = {
  context: ContextInput;
  productId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  CoreShopActiveOrder?: Maybe<CoreShopActiveOrderUnionResult>;
  CoreShopAddressList?: Maybe<CoreShopAddressListUnionResult>;
  CoreShopCarrierList?: Maybe<CoreShopCarrierListUnionResult>;
  CoreShopCategories?: Maybe<CoreShopCategoriesUnionResult>;
  CoreShopCategory?: Maybe<CoreShopCategoryUnionResult>;
  CoreShopFilter?: Maybe<CoreShopFilterUnionResult>;
  CoreShopLatestProducts?: Maybe<CoreShopLatestProductsUnionResult>;
  CoreShopMe?: Maybe<CoreShopMeUnionResult>;
  CoreShopOrder?: Maybe<CoreShopOrderUnionResult>;
  CoreShopOrderList?: Maybe<CoreShopOrderListUnionResult>;
  CoreShopPaymentProviderList?: Maybe<CoreShopPaymentProviderListUnionResult>;
  CoreShopProduct?: Maybe<CoreShopProductUnionResult>;
  CoreShopProductPrice?: Maybe<CoreShopProductPriceUnionResult>;
  CoreShopProducts?: Maybe<CoreShopProductsUnionResult>;
};


export type QueryCoreShopActiveOrderArgs = {
  activeOrder?: InputMaybe<ActiveOrderInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type QueryCoreShopAddressListArgs = {
  locale?: InputMaybe<LocaleInput>;
};


export type QueryCoreShopCarrierListArgs = {
  carrierList?: InputMaybe<CarrierListInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type QueryCoreShopCategoriesArgs = {
  categoryListing?: InputMaybe<CategoryListingInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type QueryCoreShopCategoryArgs = {
  category?: InputMaybe<CategoryInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type QueryCoreShopFilterArgs = {
  filterListing?: InputMaybe<FilterListingInput>;
  locale?: InputMaybe<LocaleInput>;
};


export type QueryCoreShopLatestProductsArgs = {
  locale?: InputMaybe<LocaleInput>;
};


export type QueryCoreShopMeArgs = {
  locale?: InputMaybe<LocaleInput>;
};


export type QueryCoreShopOrderArgs = {
  locale?: InputMaybe<LocaleInput>;
  order?: InputMaybe<OrderInput>;
};


export type QueryCoreShopOrderListArgs = {
  locale?: InputMaybe<LocaleInput>;
};


export type QueryCoreShopPaymentProviderListArgs = {
  locale?: InputMaybe<LocaleInput>;
  paymentProviderList?: InputMaybe<PaymentProviderListInput>;
};


export type QueryCoreShopProductArgs = {
  locale?: InputMaybe<LocaleInput>;
  product?: InputMaybe<ProductInput>;
};


export type QueryCoreShopProductPriceArgs = {
  locale?: InputMaybe<LocaleInput>;
  productPrice?: InputMaybe<ProductPriceInput>;
};


export type QueryCoreShopProductsArgs = {
  locale?: InputMaybe<LocaleInput>;
  productListing?: InputMaybe<ProductListingInput>;
};

export type RemoveOrderItemInput = {
  order: OrderInput;
  orderItem: OrderItemIdInput;
};

export type RemoveOrderVoucherCodeInput = {
  order: OrderInput;
  orderVoucherCode: OrderVoucherCodeInput;
};

export type UpdateAddressInputType = {
  address: AddressInput;
  addressId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateMeInputType = {
  me: MeInput;
};

export type UpdateOrderItemInput = {
  order: OrderInput;
  orderItem: OrderItemQuantityInput;
};

export type UpdatePasswordInputType = {
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UrlSlug = {
  __typename?: 'UrlSlug';
  siteId?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Asset = Element & {
  __typename?: 'asset';
  _siblings?: Maybe<Array<Maybe<Asset_Tree>>>;
  children?: Maybe<Array<Maybe<Asset_Tree>>>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Dimensions>;
  duration?: Maybe<Scalars['Float']['output']>;
  embeddedMetaInfo?: Maybe<Array<Maybe<Asset_EmbeddedMetaInfo_Item>>>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Int']['output']>;
  fullpath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Array<Maybe<Asset_Metadata_Item>>>;
  mimetype?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Asset_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  resolutions?: Maybe<Array<Maybe<Resolutions>>>;
  srcset?: Maybe<Array<Maybe<Srcset>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  type?: Maybe<Scalars['String']['output']>;
};


export type AssetDataArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};


export type AssetDimensionsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};


export type AssetFullpathArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};


export type AssetMetadataArgs = {
  ignore_language?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
};


export type AssetPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AssetResolutionsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  thumbnail: Scalars['String']['input'];
  types?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};


export type AssetSrcsetArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  thumbnail: Scalars['String']['input'];
};


export type AssetTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Asset_EmbeddedMetaInfo_Item = {
  __typename?: 'asset_embeddedMetaInfo_item';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Asset_Folder = {
  __typename?: 'asset_folder';
  _siblings?: Maybe<Array<Maybe<Asset_Tree>>>;
  children?: Maybe<Array<Maybe<Asset_Tree>>>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  fullpath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Asset_Folder>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
};


export type Asset_FolderFullpathArgs = {
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};


export type Asset_FolderPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Asset_Metadata_Item = {
  __typename?: 'asset_metadata_item';
  data?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Asset_Tree = Asset | Asset_Folder;

export type Dimensions = {
  __typename?: 'dimensions';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Document_EditableAreablock = {
  __typename?: 'document_editableAreablock';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<Document_EditableAreablock_Data>>>;
};

export type Document_EditableAreablock_Data = {
  __typename?: 'document_editableAreablock_data';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Document_EditableBlock = {
  __typename?: 'document_editableBlock';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  indices?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type Document_EditableCheckbox = {
  __typename?: 'document_editableCheckbox';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  checked?: Maybe<Scalars['Boolean']['output']>;
};

export type Document_EditableDate = {
  __typename?: 'document_editableDate';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  formatted?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
};


export type Document_EditableDateFormattedArgs = {
  format: Scalars['String']['input'];
};

export type Document_EditableEmbed = {
  __typename?: 'document_editableEmbed';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Document_EditableImage = {
  __typename?: 'document_editableImage';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  alt?: Maybe<Scalars['String']['output']>;
  crop?: Maybe<HotspotCrop>;
  hotspots?: Maybe<Array<Maybe<HotspotHotspot>>>;
  image?: Maybe<Asset>;
  marker?: Maybe<Array<Maybe<HotspotMarker>>>;
};

export type Document_EditableInput = {
  __typename?: 'document_editableInput';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Document_EditableLink = {
  __typename?: 'document_editableLink';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Document_EditableLink_Data>;
};

export type Document_EditableLink_Data = {
  __typename?: 'document_editableLink_data';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  accesskey?: Maybe<Scalars['String']['output']>;
  anchor?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['String']['output']>;
  class?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  internalId?: Maybe<Scalars['Int']['output']>;
  internalType?: Maybe<Scalars['String']['output']>;
  parameters?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  relation?: Maybe<Scalars['String']['output']>;
  tabindex?: Maybe<Scalars['String']['output']>;
  target?: Maybe<AnyTarget>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  windowTarget?: Maybe<Scalars['String']['output']>;
};

export type Document_EditableMultiselect = {
  __typename?: 'document_editableMultiselect';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  selections?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Document_EditableNumeric = {
  __typename?: 'document_editableNumeric';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
};

export type Document_EditablePdf = {
  __typename?: 'document_editablePdf';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Asset>;
};

export type Document_EditableRelation = {
  __typename?: 'document_editableRelation';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  relation?: Maybe<AnyTarget>;
  subtype?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Document_EditableRelations = {
  __typename?: 'document_editableRelations';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  relations?: Maybe<Array<Maybe<AnyTarget>>>;
};

export type Document_EditableScheduledblock = {
  __typename?: 'document_editableScheduledblock';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<Document_EditableScheduledblock_Data>>>;
};

export type Document_EditableScheduledblock_Data = {
  __typename?: 'document_editableScheduledblock_data';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
};

export type Document_EditableSelect = {
  __typename?: 'document_editableSelect';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Document_EditableTable = {
  __typename?: 'document_editableTable';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Document_EditableTextarea = {
  __typename?: 'document_editableTextarea';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Document_EditableVideo = {
  __typename?: 'document_editableVideo';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  posterAsset?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  videoAsset?: Maybe<Asset>;
};

export type Document_EditableWysiwyg = {
  __typename?: 'document_editableWysiwyg';
  _editableName?: Maybe<Scalars['String']['output']>;
  _editableType?: Maybe<Scalars['String']['output']>;
  frontend?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Document_Email = Element & {
  __typename?: 'document_email';
  _siblings?: Maybe<Array<Maybe<Document_Tree>>>;
  action?: Maybe<Scalars['String']['output']>;
  bcc?: Maybe<Scalars['String']['output']>;
  cc?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Document_Tree>>>;
  controller?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  fullpath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Document_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  published?: Maybe<Scalars['Boolean']['output']>;
  replyTo?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  template?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Document_Translation>>>;
  type?: Maybe<Scalars['String']['output']>;
};


export type Document_EmailPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Document_EmailTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type Document_EmailTranslationsArgs = {
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type Document_Folder = {
  __typename?: 'document_folder';
  _siblings?: Maybe<Array<Maybe<Document_Tree>>>;
  children?: Maybe<Array<Maybe<Document_Tree>>>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  fullpath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Document_Tree>;
  translations?: Maybe<Array<Maybe<Document_Translation>>>;
};


export type Document_FolderTranslationsArgs = {
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type Document_Hardlink = Element & {
  __typename?: 'document_hardlink';
  _siblings?: Maybe<Array<Maybe<Document_Tree>>>;
  action?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Document_Tree>>>;
  childrenFromSource?: Maybe<Scalars['Boolean']['output']>;
  controller?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  fullpath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Document_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  propertiesFromSource?: Maybe<Scalars['Boolean']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  sourceId?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  target?: Maybe<AnyDocumentTarget>;
  template?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Document_Translation>>>;
  type?: Maybe<Scalars['String']['output']>;
};


export type Document_HardlinkPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Document_HardlinkTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type Document_HardlinkTranslationsArgs = {
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type Document_Link = Element & {
  __typename?: 'document_link';
  _siblings?: Maybe<Array<Maybe<Document_Tree>>>;
  action?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Document_Tree>>>;
  controller?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  direct?: Maybe<Scalars['String']['output']>;
  fullpath?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  internal?: Maybe<Scalars['Int']['output']>;
  internalType?: Maybe<Scalars['String']['output']>;
  linktype?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  object?: Maybe<AnyTarget>;
  parent?: Maybe<Document_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  published?: Maybe<Scalars['Boolean']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  template?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Document_Translation>>>;
  type?: Maybe<Scalars['String']['output']>;
};


export type Document_LinkPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Document_LinkTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type Document_LinkTranslationsArgs = {
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type Document_Page = Element & {
  __typename?: 'document_page';
  _siblings?: Maybe<Array<Maybe<Document_Tree>>>;
  action?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Document_Tree>>>;
  controller?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editables?: Maybe<Array<Maybe<DocumentElement>>>;
  elements?: Maybe<Array<Maybe<DocumentElement>>>;
  fullpath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Document_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  published?: Maybe<Scalars['Boolean']['output']>;
  rendered?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  template?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Document_Translation>>>;
  type?: Maybe<Scalars['String']['output']>;
};


export type Document_PageEditablesArgs = {
  getInheritedValues?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Document_PagePropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Document_PageRenderedArgs = {
  attributes?: InputMaybe<Array<InputMaybe<KeyValue>>>;
  options?: InputMaybe<Array<InputMaybe<KeyValue>>>;
  query?: InputMaybe<Array<InputMaybe<KeyValue>>>;
  use_layout?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Document_PageTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type Document_PageTranslationsArgs = {
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type Document_Snippet = Element & {
  __typename?: 'document_snippet';
  _siblings?: Maybe<Array<Maybe<Document_Tree>>>;
  action?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Document_Tree>>>;
  controller?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editables?: Maybe<Array<Maybe<DocumentElement>>>;
  elements?: Maybe<Array<Maybe<DocumentElement>>>;
  fullpath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Document_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  published?: Maybe<Scalars['Boolean']['output']>;
  rendered?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  template?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Document_Translation>>>;
  type?: Maybe<Scalars['String']['output']>;
};


export type Document_SnippetEditablesArgs = {
  getInheritedValues?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Document_SnippetPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Document_SnippetRenderedArgs = {
  attributes?: InputMaybe<Array<InputMaybe<KeyValue>>>;
  options?: InputMaybe<Array<InputMaybe<KeyValue>>>;
  query?: InputMaybe<Array<InputMaybe<KeyValue>>>;
  use_layout?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Document_SnippetTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type Document_SnippetTranslationsArgs = {
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type Document_Translation = {
  __typename?: 'document_translation';
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Document_Tree>;
};

export type Document_Tree = Document_Email | Document_Folder | Document_Hardlink | Document_Link | Document_Page | Document_Snippet;

export type Element = {
  id?: Maybe<Scalars['ID']['output']>;
};

export type Element_Tag = {
  __typename?: 'element_tag';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

export type Fieldcollection_CoreShopAdjustment = {
  __typename?: 'fieldcollection_CoreShopAdjustment';
  label?: Maybe<Scalars['String']['output']>;
  pimcoreAmountGross?: Maybe<Scalars['Int']['output']>;
  pimcoreAmountNet?: Maybe<Scalars['Int']['output']>;
  pimcoreNeutral?: Maybe<Scalars['Boolean']['output']>;
  typeIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Fieldcollection_CoreShopPriceRuleItem = {
  __typename?: 'fieldcollection_CoreShopPriceRuleItem';
  cartPriceRule?: Maybe<CoreshopCartPriceRule>;
  discountGross?: Maybe<Scalars['Int']['output']>;
  discountNet?: Maybe<Scalars['Int']['output']>;
  voucherCode?: Maybe<Scalars['String']['output']>;
};

export type Fieldcollection_CoreShopProposalCartPriceRuleItem = {
  __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem';
  cartPriceRule?: Maybe<CoreshopCartPriceRule>;
  discountGross?: Maybe<Scalars['Int']['output']>;
  discountNet?: Maybe<Scalars['Int']['output']>;
  voucherCode?: Maybe<Scalars['String']['output']>;
};

export type Fieldcollection_CoreShopTaxItem = {
  __typename?: 'fieldcollection_CoreShopTaxItem';
  amount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
};

export type Hotspot_Metadata_Object = Asset | Document_Email | Document_Hardlink | Document_Link | Document_Page | Document_Snippet | Object_CoreShopAddress | Object_CoreShopAttributeColor | Object_CoreShopAttributeGroup | Object_CoreShopAttributeValue | Object_CoreShopCategory | Object_CoreShopCustomer | Object_CoreShopOrder | Object_CoreShopOrderItem | Object_CoreShopProduct | Object_CoreShopUser;

export type Object_CoreShopAddress = Element & {
  __typename?: 'object_CoreShopAddress';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  addressIdentifier?: Maybe<CoreshopAddressIdentifier>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<CoreshopCountry>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  salutation?: Maybe<Scalars['String']['output']>;
  state?: Maybe<CoreshopState>;
  street?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopAddress_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAddressChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAddressPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAddressTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopAttributeColor = Element & {
  __typename?: 'object_CoreShopAttributeColor';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  attributeGroup?: Maybe<Object_CoreShopAttributeColor_AttributeGroup>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  sorting?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  valueColor?: Maybe<Scalars['String']['output']>;
  valueText?: Maybe<Scalars['String']['output']>;
};


export type Object_CoreShopAttributeColor_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAttributeColorChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAttributeColorNameArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopAttributeColorPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAttributeColorTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** pseudo class for field attributeGroup */
export type Object_CoreShopAttributeColor_AttributeGroup = Object_CoreShopAttributeGroup;

export type Object_CoreShopAttributeGroup = Element & {
  __typename?: 'object_CoreShopAttributeGroup';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  showInList?: Maybe<Scalars['Boolean']['output']>;
  sorting?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopAttributeGroup_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAttributeGroupChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAttributeGroupNameArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopAttributeGroupPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAttributeGroupTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopAttributeValue = Element & {
  __typename?: 'object_CoreShopAttributeValue';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  attributeGroup?: Maybe<Object_CoreShopAttributeValue_AttributeGroup>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  sorting?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  valueText?: Maybe<Scalars['String']['output']>;
};


export type Object_CoreShopAttributeValue_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAttributeValueChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAttributeValueNameArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopAttributeValuePropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopAttributeValueTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** pseudo class for field attributeGroup */
export type Object_CoreShopAttributeValue_AttributeGroup = Object_CoreShopAttributeGroup;

export type Object_CoreShopCategory = Element & {
  __typename?: 'object_CoreShopCategory';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<CoreshopFilter>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  parentCategory?: Maybe<Object_CoreShopCategory_ParentCategory>;
  pimcoreMetaDescription?: Maybe<Scalars['String']['output']>;
  pimcoreMetaTitle?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  slug?: Maybe<Array<Maybe<UrlSlug>>>;
  stores?: Maybe<Array<Maybe<CoreshopStore>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopCategory_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCategoryChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCategoryDescriptionArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopCategoryNameArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopCategoryPimcoreMetaDescriptionArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopCategoryPimcoreMetaTitleArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopCategoryPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCategorySlugArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopCategoryTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** pseudo class for field parentCategory */
export type Object_CoreShopCategory_ParentCategory = Object_CoreShopCategory;

export type Object_CoreShopCompany = Element & {
  __typename?: 'object_CoreShopCompany';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopCompany_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCompanyChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCompanyPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCompanyTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopCustomer = Element & {
  __typename?: 'object_CoreShopCustomer';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  defaultAddress?: Maybe<Object_CoreShopCustomer_DefaultAddress>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  localeCode?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  newsletterActive?: Maybe<Scalars['Boolean']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  salutation?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopCustomer_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCustomerChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCustomerPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCustomerTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopCustomerGroup = Element & {
  __typename?: 'object_CoreShopCustomerGroup';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopCustomerGroup_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCustomerGroupChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCustomerGroupPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopCustomerGroupTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** pseudo class for field defaultAddress */
export type Object_CoreShopCustomer_DefaultAddress = Object_CoreShopAddress;

export type Object_CoreShopManufacturer = Element & {
  __typename?: 'object_CoreShopManufacturer';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopManufacturer_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopManufacturerChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopManufacturerPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopManufacturerTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopOrder = Element & {
  __typename?: 'object_CoreShopOrder';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  adjustmentItems?: Maybe<Array<Maybe<Object_CoreShopOrder_AdjustmentItems>>>;
  baseCurrency?: Maybe<CoreshopCurrency>;
  carrier?: Maybe<CoreshopCarrier>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  convertedAdjustmentItems?: Maybe<Array<Maybe<Object_CoreShopOrder_ConvertedAdjustmentItems>>>;
  convertedPaymentTotal?: Maybe<Scalars['Int']['output']>;
  convertedPimcoreAdjustmentTotalGross?: Maybe<Scalars['Int']['output']>;
  convertedPimcoreAdjustmentTotalNet?: Maybe<Scalars['Int']['output']>;
  convertedSubtotalGross?: Maybe<Scalars['Int']['output']>;
  convertedSubtotalNet?: Maybe<Scalars['Int']['output']>;
  convertedTaxes?: Maybe<Array<Maybe<Object_CoreShopOrder_ConvertedTaxes>>>;
  convertedTotalGross?: Maybe<Scalars['Int']['output']>;
  convertedTotalNet?: Maybe<Scalars['Int']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  currency?: Maybe<CoreshopCurrency>;
  customer?: Maybe<Object_CoreShopOrder_Customer>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  invoiceAddress?: Maybe<Object_CoreShopOrder_InvoiceAddress>;
  items?: Maybe<Array<Maybe<Object_CoreShopOrder_Items>>>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  needsRecalculation?: Maybe<Scalars['Boolean']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  orderDate?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  orderState?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  paymentProvider?: Maybe<CoreshopPaymentProvider>;
  paymentTotal?: Maybe<Scalars['Int']['output']>;
  pimcoreAdjustmentTotalGross?: Maybe<Scalars['Int']['output']>;
  pimcoreAdjustmentTotalNet?: Maybe<Scalars['Int']['output']>;
  priceRuleItems?: Maybe<Array<Maybe<Object_CoreShopOrder_PriceRuleItems>>>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  saleState?: Maybe<Scalars['String']['output']>;
  shippingAddress?: Maybe<Object_CoreShopOrder_ShippingAddress>;
  shippingTaxRate?: Maybe<Scalars['Float']['output']>;
  store?: Maybe<CoreshopStore>;
  subtotalGross?: Maybe<Scalars['Int']['output']>;
  subtotalNet?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  taxes?: Maybe<Array<Maybe<Object_CoreShopOrder_Taxes>>>;
  token?: Maybe<Scalars['String']['output']>;
  totalGross?: Maybe<Scalars['Int']['output']>;
  totalNet?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};


export type Object_CoreShopOrder_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopOrderInvoice = Element & {
  __typename?: 'object_CoreShopOrderInvoice';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopOrderInvoice_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderInvoiceChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderInvoicePropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderInvoiceTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopOrderInvoiceItem = Element & {
  __typename?: 'object_CoreShopOrderInvoiceItem';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopOrderInvoiceItem_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderInvoiceItemChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderInvoiceItemPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderInvoiceItemTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopOrderItem = Element & {
  __typename?: 'object_CoreShopOrderItem';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  adjustmentItems?: Maybe<Array<Maybe<Object_CoreShopOrderItem_AdjustmentItems>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  convertedAdjustmentItems?: Maybe<Array<Maybe<Object_CoreShopOrderItem_ConvertedAdjustmentItems>>>;
  convertedCustomItemPrice?: Maybe<Scalars['Int']['output']>;
  convertedItemDiscountGross?: Maybe<Scalars['Int']['output']>;
  convertedItemDiscountNet?: Maybe<Scalars['Int']['output']>;
  convertedItemDiscountPriceGross?: Maybe<Scalars['Int']['output']>;
  convertedItemDiscountPriceNet?: Maybe<Scalars['Int']['output']>;
  convertedItemPriceGross?: Maybe<Scalars['Int']['output']>;
  convertedItemPriceNet?: Maybe<Scalars['Int']['output']>;
  convertedItemRetailPriceGross?: Maybe<Scalars['Int']['output']>;
  convertedItemRetailPriceNet?: Maybe<Scalars['Int']['output']>;
  convertedItemTax?: Maybe<Scalars['Int']['output']>;
  convertedItemWholesalePrice?: Maybe<Scalars['Int']['output']>;
  convertedPimcoreAdjustmentTotalGross?: Maybe<Scalars['Int']['output']>;
  convertedPimcoreAdjustmentTotalNet?: Maybe<Scalars['Int']['output']>;
  convertedSubtotalGross?: Maybe<Scalars['Int']['output']>;
  convertedSubtotalNet?: Maybe<Scalars['Int']['output']>;
  convertedTaxes?: Maybe<Array<Maybe<Object_CoreShopOrderItem_ConvertedTaxes>>>;
  convertedTotalGross?: Maybe<Scalars['Int']['output']>;
  convertedTotalNet?: Maybe<Scalars['Int']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  customItemDiscount?: Maybe<Scalars['Float']['output']>;
  customItemPrice?: Maybe<Scalars['Int']['output']>;
  defaultUnitQuantity?: Maybe<Scalars['Float']['output']>;
  digitalProduct?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  isGiftItem?: Maybe<Scalars['Boolean']['output']>;
  itemDiscountGross?: Maybe<Scalars['Int']['output']>;
  itemDiscountNet?: Maybe<Scalars['Int']['output']>;
  itemDiscountPriceGross?: Maybe<Scalars['Int']['output']>;
  itemDiscountPriceNet?: Maybe<Scalars['Int']['output']>;
  itemPriceGross?: Maybe<Scalars['Int']['output']>;
  itemPriceNet?: Maybe<Scalars['Int']['output']>;
  itemRetailPriceGross?: Maybe<Scalars['Int']['output']>;
  itemRetailPriceNet?: Maybe<Scalars['Int']['output']>;
  itemTax?: Maybe<Scalars['Int']['output']>;
  itemWeight?: Maybe<Scalars['Float']['output']>;
  itemWholesalePrice?: Maybe<Scalars['Int']['output']>;
  mainObjectId?: Maybe<Scalars['Float']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Object_CoreShopOrderItem_Order>;
  parent?: Maybe<Object_Tree>;
  pimcoreAdjustmentTotalGross?: Maybe<Scalars['Int']['output']>;
  pimcoreAdjustmentTotalNet?: Maybe<Scalars['Int']['output']>;
  priceRuleItems?: Maybe<Array<Maybe<Object_CoreShopOrderItem_PriceRuleItems>>>;
  product?: Maybe<Object_CoreShopOrderItem_Product>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  quantity?: Maybe<Scalars['Float']['output']>;
  subtotalGross?: Maybe<Scalars['Int']['output']>;
  subtotalNet?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  taxes?: Maybe<Array<Maybe<Object_CoreShopOrderItem_Taxes>>>;
  totalGross?: Maybe<Scalars['Int']['output']>;
  totalNet?: Maybe<Scalars['Int']['output']>;
  totalWeight?: Maybe<Scalars['Float']['output']>;
  unit?: Maybe<CoreshopProductUnit>;
  unitDefinition?: Maybe<CoreshopProductUnitDefinition>;
  unitIdentifier?: Maybe<Scalars['String']['output']>;
};


export type Object_CoreShopOrderItem_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderItemChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderItemPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderItemTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopOrderItem_AdjustmentItems = Fieldcollection_CoreShopAdjustment;

export type Object_CoreShopOrderItem_ConvertedAdjustmentItems = Fieldcollection_CoreShopAdjustment;

export type Object_CoreShopOrderItem_ConvertedTaxes = Fieldcollection_CoreShopTaxItem;

/** pseudo class for field order */
export type Object_CoreShopOrderItem_Order = Object_CoreShopOrder;

export type Object_CoreShopOrderItem_PriceRuleItems = Fieldcollection_CoreShopPriceRuleItem;

/** pseudo class for field product */
export type Object_CoreShopOrderItem_Product = Object_CoreShopProduct;

export type Object_CoreShopOrderItem_Taxes = Fieldcollection_CoreShopTaxItem;

export type Object_CoreShopOrderShipment = Element & {
  __typename?: 'object_CoreShopOrderShipment';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopOrderShipment_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderShipmentChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderShipmentPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderShipmentTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopOrderShipmentItem = Element & {
  __typename?: 'object_CoreShopOrderShipmentItem';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopOrderShipmentItem_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderShipmentItemChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderShipmentItemPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopOrderShipmentItemTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopOrder_AdjustmentItems = Fieldcollection_CoreShopAdjustment;

export type Object_CoreShopOrder_ConvertedAdjustmentItems = Fieldcollection_CoreShopAdjustment;

export type Object_CoreShopOrder_ConvertedTaxes = Fieldcollection_CoreShopTaxItem;

/** pseudo class for field customer */
export type Object_CoreShopOrder_Customer = Object_CoreShopCustomer;

/** pseudo class for field invoiceAddress */
export type Object_CoreShopOrder_InvoiceAddress = Object_CoreShopAddress;

export type Object_CoreShopOrder_Items = Object_CoreShopOrderItem;

export type Object_CoreShopOrder_PriceRuleItems = Fieldcollection_CoreShopProposalCartPriceRuleItem;

/** pseudo class for field shippingAddress */
export type Object_CoreShopOrder_ShippingAddress = Object_CoreShopAddress;

export type Object_CoreShopOrder_Taxes = Fieldcollection_CoreShopTaxItem;

export type Object_CoreShopProduct = Element & {
  __typename?: 'object_CoreShopProduct';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  active?: Maybe<Scalars['Boolean']['output']>;
  allowedAttributeGroups?: Maybe<Array<Maybe<Object_CoreShopProduct_AllowedAttributeGroups>>>;
  attributes?: Maybe<Array<Maybe<Object_CoreShopProduct_Attributes>>>;
  categories?: Maybe<Array<Maybe<Object_CoreShopProduct_Categories>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  depth?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  digitalProduct?: Maybe<Scalars['Boolean']['output']>;
  ean?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Object_CoreShopProduct_Images>>>;
  index?: Maybe<Scalars['Int']['output']>;
  isTracked?: Maybe<Scalars['Boolean']['output']>;
  itemQuantityFactor?: Maybe<Scalars['Int']['output']>;
  mainVariant?: Maybe<Object_CoreShopProduct_MainVariant>;
  manufacturer?: Maybe<Object_CoreShopProduct_Manufacturer>;
  maximumQuantityToOrder?: Maybe<Scalars['Int']['output']>;
  minimumQuantityToOrder?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  onHand?: Maybe<Scalars['Int']['output']>;
  onHold?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Object_Tree>;
  pimcoreMetaDescription?: Maybe<Scalars['String']['output']>;
  pimcoreMetaTitle?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Array<Maybe<UrlSlug>>>;
  stockAvailability?: Maybe<Scalars['Boolean']['output']>;
  storeValues?: Maybe<Array<Maybe<CoreshopProductStoreValues>>>;
  stores?: Maybe<Array<Maybe<CoreshopStore>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
  unitDefinitions?: Maybe<CoreshopProductUnitDefinitions>;
  weight?: Maybe<Scalars['Float']['output']>;
  wholesalePrice?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};


export type Object_CoreShopProduct_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopProductChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopProductDescriptionArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopProductNameArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopProductPimcoreMetaDescriptionArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopProductPimcoreMetaTitleArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopProductPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopProductShortDescriptionArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopProductSlugArgs = {
  language?: InputMaybe<Scalars['String']['input']>;
};


export type Object_CoreShopProductTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopProduct_AllowedAttributeGroups = Object_CoreShopAttributeGroup;

export type Object_CoreShopProduct_Attributes = Object_CoreShopAttributeColor | Object_CoreShopAttributeValue;

export type Object_CoreShopProduct_Categories = Object_CoreShopCategory;

export type Object_CoreShopProduct_Images = Asset;

/** pseudo class for field mainVariant */
export type Object_CoreShopProduct_MainVariant = Object_CoreShopProduct;

/** pseudo class for field manufacturer */
export type Object_CoreShopProduct_Manufacturer = Object_CoreShopManufacturer;

export type Object_CoreShopUser = Element & {
  __typename?: 'object_CoreShopUser';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  customer?: Maybe<Object_CoreShopUser_Customer>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  loginIdentifier?: Maybe<Scalars['String']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopUser_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopUserChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopUserPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopUserTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** pseudo class for field customer */
export type Object_CoreShopUser_Customer = Object_CoreShopCustomer;

export type Object_CoreShopWishlist = Element & {
  __typename?: 'object_CoreShopWishlist';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopWishlist_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopWishlistChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopWishlistPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopWishlistTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_CoreShopWishlistItem = Element & {
  __typename?: 'object_CoreShopWishlistItem';
  _siblings?: Maybe<Array<Maybe<Object_Tree>>>;
  children?: Maybe<Array<Maybe<Object_Tree>>>;
  childrenSortBy?: Maybe<Scalars['String']['output']>;
  classname?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  modificationDate?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Object_Tree>;
  properties?: Maybe<Array<Maybe<ElementProperty>>>;
  tags?: Maybe<Array<Maybe<Element_Tag>>>;
};


export type Object_CoreShopWishlistItem_SiblingsArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopWishlistItemChildrenArgs = {
  objectTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopWishlistItemPropertiesArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Object_CoreShopWishlistItemTagsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Object_Tree = Object_CoreShopAddress | Object_CoreShopAttributeColor | Object_CoreShopAttributeGroup | Object_CoreShopAttributeValue | Object_CoreShopCategory | Object_CoreShopCustomer | Object_CoreShopOrder | Object_CoreShopOrderItem | Object_CoreShopProduct | Object_CoreShopUser;

export type Property_Asset = {
  __typename?: 'property_asset';
  asset?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Property_Checkbox = {
  __typename?: 'property_checkbox';
  checked?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Property_Document = {
  __typename?: 'property_document';
  document?: Maybe<Document>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Property_Object = {
  __typename?: 'property_object';
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Hotspot_Metadata_Object>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Property_Select = {
  __typename?: 'property_select';
  name?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Property_Text = {
  __typename?: 'property_text';
  name?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Property_Textarea = {
  __typename?: 'property_textarea';
  name?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Resolutions = {
  __typename?: 'resolutions';
  resolution?: Maybe<Scalars['Float']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Srcset = {
  __typename?: 'srcset';
  descriptor?: Maybe<Scalars['String']['output']>;
  resolutions?: Maybe<Array<Maybe<Resolutions>>>;
  url?: Maybe<Scalars['String']['output']>;
};


export type SrcsetResolutionsArgs = {
  types?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type CoreShopCreateAddressMutationVariables = Exact<{
  address: AddressInput;
}>;


export type CoreShopCreateAddressMutation = { __typename?: 'Mutations', CoreShopCreateAddress?: { __typename: 'CoreShopCreateAddressResult' } | { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type AddressFragment = { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null };

export type GetCoreShopAddressListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoreShopAddressListQuery = { __typename?: 'Query', CoreShopAddressList?: { __typename: 'CoreShopAddressListResult', addresses?: Array<{ __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null> | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopValidationError' } | null };

export type CoreShopCheckoutAddressMutationVariables = Exact<{
  invoiceAddress: Scalars['Int']['input'];
  shippingAddress?: InputMaybe<Scalars['Int']['input']>;
  token: Scalars['String']['input'];
  invoiceAddressIsShippingAddress: Scalars['Boolean']['input'];
}>;


export type CoreShopCheckoutAddressMutation = { __typename?: 'Mutations', CoreShopCheckoutAddress?: { __typename: 'CoreShopCheckoutAddressResult', order?: { __typename?: 'object_CoreShopOrder', shippingAddress?: { __typename?: 'object_CoreShopAddress', id?: string | null } | null, invoiceAddress?: { __typename?: 'object_CoreShopAddress', id?: string | null } | null } | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopValidationError' } | null };

export type CoreShopDeleteAddressMutationVariables = Exact<{
  addressId: Scalars['Int']['input'];
}>;


export type CoreShopDeleteAddressMutation = { __typename?: 'Mutations', CoreShopDeleteAddress?: { __typename: 'CoreShopDeleteAddressResult' } | { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type CoreShopUpdateAddressMutationVariables = Exact<{
  addressId: Scalars['Int']['input'];
  address: AddressInput;
}>;


export type CoreShopUpdateAddressMutation = { __typename?: 'Mutations', CoreShopUpdateAddress?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopUpdateAddressResult', address?: { __typename?: 'object_CoreShopAddress', id?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type CoreShopAuthorizeMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  orderToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type CoreShopAuthorizeMutation = { __typename?: 'Mutations', CoreShopAuthorize?: { __typename: 'CoreShopAuthorizeResult', token?: string | null, activeOrderToken?: string | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename?: 'CoreShopValidationError' } | null };

export type GetCoreShopCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoreShopCategoriesQuery = { __typename?: 'Query', CoreShopCategories?: { __typename: 'CoreShopCategoriesResult', categories?: { __typename?: 'CoreShopCategoryConnection', totalCount?: number | null, edges?: Array<{ __typename: 'CoreShopCategoryEdge', node?: { __typename: 'object_CoreShopCategory', id?: string | null, name?: string | null, description?: string | null } | null } | null> | null } | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename?: 'CoreShopValidationError' } | null };

export type CategoryFragment = { __typename: 'object_CoreShopCategory', id?: string | null, name?: string | null, description?: string | null };

export type GetCoreShopCategoryQueryVariables = Exact<{
  categoryId: Scalars['Int']['input'];
}>;


export type GetCoreShopCategoryQuery = { __typename?: 'Query', CoreShopCategory?: { __typename: 'CoreShopCategoryResult', category?: { __typename: 'object_CoreShopCategory', id?: string | null, name?: string | null, description?: string | null } | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename?: 'CoreShopValidationError' } | null };

export type CoreShopCarrierListQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type CoreShopCarrierListQuery = { __typename?: 'Query', CoreShopCarrierList?: { __typename: 'CoreShopCarrierListResult', carriers?: Array<{ __typename?: 'CoreShopCarrierPrice', price_net: number, price_gross: number, tax: number, carrier?: { __typename?: 'CoreshopCarrier', id?: number | null, identifier?: string | null, translations?: { __typename?: 'CoreshopCarrierTranslation__List', items?: Array<{ __typename?: 'CoreshopCarrierTranslation', title?: string | null, description?: string | null } | null> | null } | null } | null } | null> | null } | { __typename: 'CoreShopError' } | { __typename: 'CoreShopValidationError' } | null };

export type CoreShopCheckoutGuestAddressMutationVariables = Exact<{
  invoiceAddress: AddressInput;
  shippingAddress?: InputMaybe<AddressInput>;
  token: Scalars['String']['input'];
  invoiceAddressIsShippingAddress: Scalars['Boolean']['input'];
}>;


export type CoreShopCheckoutGuestAddressMutation = { __typename?: 'Mutations', CoreShopCheckoutGuestAddress?: { __typename: 'CoreShopCheckoutGuestAddressResult', order?: { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type CoreShopCheckoutGuestRegistrationMutationVariables = Exact<{
  guestCustomer: GuestRegistrationInput;
  token: Scalars['String']['input'];
}>;


export type CoreShopCheckoutGuestRegistrationMutation = { __typename?: 'Mutations', CoreShopCheckoutGuestRegistration?: { __typename: 'CoreShopCheckoutGuestRegistrationResult' } | { __typename: 'CoreShopError' } | { __typename: 'CoreShopValidationError' } | null };

export type CoreShopCheckoutPaymentProviderMutationVariables = Exact<{
  token: Scalars['String']['input'];
  paymentProvider: PaymentProviderEnumType;
}>;


export type CoreShopCheckoutPaymentProviderMutation = { __typename?: 'Mutations', CoreShopCheckoutPaymentProvider?: { __typename: 'CoreShopCheckoutPaymentProviderResult', order?: { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type CoreShopPaymentProviderListQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type CoreShopPaymentProviderListQuery = { __typename?: 'Query', CoreShopPaymentProviderList?: { __typename: 'CoreShopError' } | { __typename: 'CoreShopPaymentProviderListResult', paymentProviders?: Array<{ __typename?: 'CoreShopPaymentProviderPrice', price: number, paymentProvider?: { __typename?: 'CoreshopPaymentProvider', identifier?: string | null, translations?: { __typename?: 'CoreshopPaymentProviderTranslation__List', items?: Array<{ __typename?: 'CoreshopPaymentProviderTranslation', title?: string | null, description?: string | null, instructions?: string | null } | null> | null } | null } | null } | null> | null } | { __typename: 'CoreShopValidationError' } | null };

export type CoreShopCheckoutShippingMutationVariables = Exact<{
  token: Scalars['String']['input'];
  carrier: CarrierEnumType;
}>;


export type CoreShopCheckoutShippingMutation = { __typename?: 'Mutations', CoreShopCheckoutShipping?: { __typename: 'CoreShopCheckoutShippingResult', order?: { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type CustomerFragment = { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null };

export type GetCoreShopMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoreShopMeQuery = { __typename?: 'Query', CoreShopMe?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopMeResult', user?: { __typename?: 'object_CoreShopUser', id?: string | null, customer?: { __typename?: 'object_CoreShopCustomer', id?: string | null, salutation?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, gender?: string | null, newsletterActive?: boolean | null, defaultAddress?: { __typename?: 'object_CoreShopAddress', id?: string | null } | null } | null } | null } | { __typename?: 'CoreShopValidationError' } | null };

export type CoreShopPasswordResetRequestMutationVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type CoreShopPasswordResetRequestMutation = { __typename?: 'Mutations', CoreShopPasswordResetRequest?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopPasswordResetRequestResult', success?: boolean | null } | { __typename: 'CoreShopValidationError' } | null };

export type CoreShopUpdateMeMutationVariables = Exact<{
  salutation: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  newsletterActive: Scalars['Boolean']['input'];
  defaultAddressId: Scalars['Int']['input'];
}>;


export type CoreShopUpdateMeMutation = { __typename?: 'Mutations', CoreShopUpdateMe?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopUpdateMeResult', me?: { __typename?: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, firstname?: string | null, lastname?: string | null, newsletterActive?: boolean | null, defaultAddress?: { __typename?: 'object_CoreShopAddress', id?: string | null } | null } | null } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type CoreShopUpdatePasswordMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type CoreShopUpdatePasswordMutation = { __typename?: 'Mutations', CoreShopUpdatePassword?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopUpdatePasswordResult' } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type ErrorFragment = { __typename: 'CoreShopError', message?: string | null };

export type GetCoreShopActiveOrderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoreShopActiveOrderQuery = { __typename?: 'Query', CoreShopActiveOrder?: { __typename: 'CoreShopActiveOrderResult', order?: { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename?: 'CoreShopValidationError' } | null };

export type CoreShopAddToOrderMutationVariables = Exact<{
  productId: Scalars['Int']['input'];
  quantity: Scalars['Float']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type CoreShopAddToOrderMutation = { __typename?: 'Mutations', CoreShopAddToOrder?: { __typename: 'CoreShopAddToOrderResult', order?: { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename?: 'CoreShopValidationError' } | null };

export type CoreShopAddOrderVoucherCodeMutationVariables = Exact<{
  voucherCode: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type CoreShopAddOrderVoucherCodeMutation = { __typename?: 'Mutations', CoreShopAddOrderVoucherCode?: { __typename: 'CoreShopAddOrderVoucherCodeResult', order?: { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null } | { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type GetCoreShopOrderQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type GetCoreShopOrderQuery = { __typename?: 'Query', CoreShopOrder?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopOrderResult', order?: { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null } | { __typename?: 'CoreShopValidationError' } | null };

export type CoreShopCheckoutOrderMutationVariables = Exact<{
  order: OrderInput;
}>;


export type CoreShopCheckoutOrderMutation = { __typename?: 'Mutations', CoreShopCheckoutOrder?: { __typename: 'CoreShopCheckoutOrderResult' } | { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type OrderFragment = { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null };

export type OrderItemFragment = { __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null };

export type CoreShopOrderListQueryVariables = Exact<{ [key: string]: never; }>;


export type CoreShopOrderListQuery = { __typename?: 'Query', CoreShopOrderList?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopOrderListResult', orders?: Array<{ __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null> | null } | { __typename?: 'CoreShopValidationError' } | null };

export type CoreShopRemoveOrderItemMutationVariables = Exact<{
  orderItemId: Scalars['Int']['input'];
  token: Scalars['String']['input'];
}>;


export type CoreShopRemoveOrderItemMutation = { __typename?: 'Mutations', CoreShopRemoveOrderItem?: { __typename: 'CoreShopError', message?: string | null } | { __typename?: 'CoreShopRemoveOrderItemResult', order?: { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null } | { __typename?: 'CoreShopValidationError' } | null };

export type CoreShopRemoveOrderVoucherCodeMutationVariables = Exact<{
  voucherCode: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type CoreShopRemoveOrderVoucherCodeMutation = { __typename?: 'Mutations', CoreShopRemoveOrderVoucherCode?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopRemoveOrderVoucherCodeResult', order?: { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null } | { __typename: 'CoreShopValidationError', message?: string | null } | null };

export type CoreShopUpdateOrderItemMutationVariables = Exact<{
  orderItemId: Scalars['Int']['input'];
  quantity: Scalars['Float']['input'];
  token: Scalars['String']['input'];
}>;


export type CoreShopUpdateOrderItemMutation = { __typename?: 'Mutations', CoreShopUpdateOrderItem?: { __typename: 'CoreShopError', message?: string | null } | { __typename?: 'CoreShopUpdateOrderItemResult', order?: { __typename?: 'object_CoreShopOrder', id?: string | null, orderNumber?: string | null, orderDate?: string | null, orderState?: string | null, token?: string | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, carrier?: { __typename: 'CoreshopCarrier', identifier?: string | null } | null, currency?: { __typename: 'CoreshopCurrency', isoCode?: string | null } | null, paymentProvider?: { __typename: 'CoreshopPaymentProvider', identifier?: string | null } | null, items?: Array<{ __typename?: 'object_CoreShopOrderItem', id?: string | null, quantity?: number | null, totalGross?: number | null, totalNet?: number | null, subtotalGross?: number | null, subtotalNet?: number | null, itemRetailPriceGross?: number | null, itemRetailPriceNet?: number | null, itemDiscountNet?: number | null, itemDiscountGross?: number | null, itemDiscountPriceGross?: number | null, itemDiscountPriceNet?: number | null, product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null, customer?: { __typename: 'object_CoreShopCustomer', salutation?: string | null, gender?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, localeCode?: string | null } | null, taxes?: Array<{ __typename?: 'fieldcollection_CoreShopTaxItem', name?: string | null, rate?: number | null, amount?: number | null } | null> | null, priceRuleItems?: Array<{ __typename?: 'fieldcollection_CoreShopProposalCartPriceRuleItem', voucherCode?: string | null, discountNet?: number | null, discountGross?: number | null, cartPriceRule?: { __typename?: 'CoreshopCartPriceRule', name?: string | null, isVoucherRule?: boolean | null } | null } | null> | null, adjustmentItems?: Array<{ __typename?: 'fieldcollection_CoreShopAdjustment', typeIdentifier?: string | null, label?: string | null, pimcoreAmountNet?: number | null, pimcoreAmountGross?: number | null } | null> | null, shippingAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null, invoiceAddress?: { __typename: 'object_CoreShopAddress', id?: string | null, firstname?: string | null, lastname?: string | null, salutation?: string | null, company?: string | null, street?: string | null, number?: string | null, postcode?: string | null, city?: string | null, phoneNumber?: string | null, addressIdentifier?: { __typename?: 'CoreshopAddressIdentifier', name?: string | null } | null, country?: { __typename?: 'CoreshopCountry', isoCode?: string | null } | null } | null } | null } | { __typename?: 'CoreShopValidationError' } | null };

export type GetCoreShopLatestProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoreShopLatestProductsQuery = { __typename?: 'Query', CoreShopLatestProducts?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopLatestProductsResult', products?: { __typename: 'CoreShopProductConnection', edges?: Array<{ __typename: 'CoreShopProductEdge', node?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null } | null } | { __typename?: 'CoreShopValidationError' } | null };

export type GetCoreShopProductPriceQueryVariables = Exact<{
  productId: Scalars['Int']['input'];
}>;


export type GetCoreShopProductPriceQuery = { __typename?: 'Query', CoreShopProductPrice?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopProductPriceResult', price_net?: number | null, price_gross?: number | null, retail_price_net?: number | null, retail_price_gross?: number | null, discount_price_net?: number | null, discount_price_gross?: number | null, discount_net?: number | null, discount_gross?: number | null, tax_amount?: number | null, tax_rate?: number | null } | { __typename?: 'CoreShopValidationError' } | null };

export type ProductFragment = { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null };

export type GetCoreShopProductQueryVariables = Exact<{
  productId: Scalars['Int']['input'];
}>;


export type GetCoreShopProductQuery = { __typename?: 'Query', CoreShopProduct?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopProductResult', product?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | { __typename?: 'CoreShopValidationError' } | null };

export type GetCoreShopProductsInCategoryQueryVariables = Exact<{
  categoryId: Scalars['Int']['input'];
}>;


export type GetCoreShopProductsInCategoryQuery = { __typename?: 'Query', CoreShopProducts?: { __typename: 'CoreShopError', message?: string | null } | { __typename: 'CoreShopProductsResult', products?: { __typename?: 'CoreShopProductConnection', totalCount?: number | null, edges?: Array<{ __typename?: 'CoreShopProductEdge', node?: { __typename: 'object_CoreShopProduct', id?: string | null, name?: string | null, ean?: string | null, isTracked?: boolean | null, stockAvailability?: boolean | null, shortDescription?: string | null, categories?: Array<{ __typename: 'object_CoreShopCategory', name?: string | null } | null> | null, images?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesCartProduct?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesGrid?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetail?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, imagesProductDetailPreview?: Array<{ __typename?: 'asset', fullpath?: string | null, dimensions?: { __typename?: 'dimensions', width?: number | null, height?: number | null } | null } | null> | null, allowedAttributeGroups?: Array<{ __typename?: 'object_CoreShopAttributeGroup', id?: string | null, name?: string | null, children?: Array<{ __typename: 'object_CoreShopAddress' } | { __typename: 'object_CoreShopAttributeColor', id?: string | null, name?: string | null, valueText?: string | null, valueColor?: string | null } | { __typename: 'object_CoreShopAttributeGroup' } | { __typename: 'object_CoreShopAttributeValue', id?: string | null, name?: string | null, valueText?: string | null } | { __typename: 'object_CoreShopCategory' } | { __typename: 'object_CoreShopCustomer' } | { __typename: 'object_CoreShopOrder' } | { __typename: 'object_CoreShopOrderItem' } | { __typename: 'object_CoreShopProduct' } | { __typename: 'object_CoreShopUser' } | null> | null } | null> | null, attributes?: Array<{ __typename?: 'object_CoreShopAttributeColor', id?: string | null } | { __typename?: 'object_CoreShopAttributeValue', id?: string | null } | null> | null, mainVariant?: { __typename?: 'object_CoreShopProduct', id?: string | null } | null } | null } | null> | null } | null } | { __typename?: 'CoreShopValidationError' } | null };

export type Validation_ErrorFragment = { __typename: 'CoreShopValidationError', message?: string | null };

export const Category = gql`
    fragment category on object_CoreShopCategory {
  __typename
  id
  name
  description
}
    `;
export const Error = gql`
    fragment error on CoreShopError {
  __typename
  message
}
    `;
export const Product = gql`
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
}
    `;
export const OrderItem = gql`
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
    ${Product}`;
export const Customer = gql`
    fragment customer on object_CoreShopCustomer {
  __typename
  salutation
  gender
  email
  firstname
  lastname
  localeCode
}
    `;
export const Address = gql`
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
    `;
export const Order = gql`
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
${Address}`;
export const Validation_Error = gql`
    fragment validation_error on CoreShopValidationError {
  __typename
  message
}
    `;
export const CoreShopCreateAddress = gql`
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
    ${Error}
${Validation_Error}`;
export const GetCoreShopAddressList = gql`
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
${Error}`;
export const CoreShopCheckoutAddress = gql`
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
    ${Error}`;
export const CoreShopDeleteAddress = gql`
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
    ${Error}
${Validation_Error}`;
export const CoreShopUpdateAddress = gql`
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
    ${Error}
${Validation_Error}`;
export const CoreShopAuthorize = gql`
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
    `;
export const GetCoreShopCategories = gql`
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
${Error}`;
export const GetCoreShopCategory = gql`
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
${Error}`;
export const CoreShopCarrierList = gql`
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
    `;
export const CoreShopCheckoutGuestAddress = gql`
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
${Error}
${Validation_Error}`;
export const CoreShopCheckoutGuestRegistration = gql`
    mutation CoreShopCheckoutGuestRegistration($guestCustomer: GuestRegistrationInput!, $token: String!) {
  CoreShopCheckoutGuestRegistration(
    checkoutGuestRegistration: {customer: $guestCustomer, order: {token: $token}}
  ) {
    __typename
  }
}
    `;
export const CoreShopCheckoutPaymentProvider = gql`
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
${Error}
${Validation_Error}`;
export const CoreShopPaymentProviderList = gql`
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
    `;
export const CoreShopCheckoutShipping = gql`
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
${Error}
${Validation_Error}`;
export const GetCoreShopMe = gql`
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
    ${Error}`;
export const CoreShopPasswordResetRequest = gql`
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
    ${Error}`;
export const CoreShopUpdateMe = gql`
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
    ${Error}
${Validation_Error}`;
export const CoreShopUpdatePassword = gql`
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
    ${Error}
${Validation_Error}`;
export const GetCoreShopActiveOrder = gql`
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
${Error}`;
export const CoreShopAddToOrder = gql`
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
${Error}`;
export const CoreShopAddOrderVoucherCode = gql`
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
${Error}
${Validation_Error}`;
export const GetCoreShopOrder = gql`
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
${Error}`;
export const CoreShopCheckoutOrder = gql`
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
    ${Error}
${Validation_Error}`;
export const CoreShopOrderList = gql`
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
${Error}`;
export const CoreShopRemoveOrderItem = gql`
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
${Error}`;
export const CoreShopRemoveOrderVoucherCode = gql`
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
${Error}
${Validation_Error}`;
export const CoreShopUpdateOrderItem = gql`
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
${Error}`;
export const GetCoreShopLatestProducts = gql`
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
${Error}`;
export const GetCoreShopProductPrice = gql`
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
    ${Error}`;
export const GetCoreShopProduct = gql`
    query getCoreShopProduct($productId: Int!) {
  CoreShopProduct(product: {productId: $productId}) {
    ... on CoreShopProductResult {
      __typename
      product {
        ...product
      }
    }
    ... on CoreShopError {
      ...error
    }
  }
}
    ${Product}
${Error}`;
export const GetCoreShopProductsInCategory = gql`
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
${Error}`;