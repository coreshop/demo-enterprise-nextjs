'use client';

import React, {Suspense, useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {getOrderAction} from '@/components/actions';
import {OrderFragment} from "@/lib/graphql/types.generated";
import Loader from "@/components/loader";
import Table from "react-bootstrap/Table";
import Currency from "@/components/common/currency";
import {pimcoreImage} from "@/lib/pimcoreLoader";
import Image from "react-bootstrap/Image";
import {CoreLink} from "@/stories/Atoms/Link/CoreLink";
import {CoreBadge} from "@/stories/Atoms/Badge/CoreBadge";
import {CoreBadgetype} from "@/stories/Atoms/Badge/types";

const OrderDetail = () => {
    const [order, setOrder] = useState<OrderFragment | undefined>(undefined);
    const searchParams = useSearchParams();
    const orderToken = searchParams.get('token');

    useEffect(() => {
        const fetchOrder = async () => {
            if (orderToken) {
                try {
                    const fetchedOrder = await getOrderAction(null, orderToken);
                    setOrder(fetchedOrder);

                    console.log(fetchedOrder);
                } catch (error) {
                    console.error('Error fetching order:', error);
                }
            }
        };

        fetchOrder();
    }, [orderToken]);

    return (
        <>
            <Suspense fallback={<Loader />}>
            {order ? (
                <div className="row">
                    <div className="d-inline-flex justify-content-between mb-3">
                        <h3 className="mb-0">Order number - {order.orderNumber}</h3>
                        <div className="d-inline-flex align-items-center">
                            {order.orderState === 'confirmed' ?
                                <CoreBadge variant={CoreBadgetype.Success} description={order?.orderState} />
                                :
                                ''
                            }
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="bg-light p-4 h-100">
                            <div className="pb-3">
                                <h3>Invoice Address</h3>
                                <div className="py-3">
                                    <div>{order?.invoiceAddress?.salutation} {order?.invoiceAddress?.firstname} {order?.invoiceAddress?.lastname}</div>
                                    <div>{order?.invoiceAddress?.street} {order?.invoiceAddress?.number}</div>
                                    <div>{order?.invoiceAddress?.postcode} {order?.invoiceAddress?.city} {order?.invoiceAddress?.country?.isoCode}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="bg-light p-4 h-100">
                            <div className="pb-3">
                                <h3>Shipping Address</h3>
                                <div className="py-3">
                                    <div>{order?.shippingAddress?.salutation} {order?.shippingAddress?.firstname} {order?.shippingAddress?.lastname}</div>
                                    <div>{order?.shippingAddress?.street} {order?.shippingAddress?.number}</div>
                                    <div>{order?.shippingAddress?.postcode} {order?.shippingAddress?.city} {order?.shippingAddress?.country?.isoCode}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <Table className="mt-3">
                            <thead>
                            <tr>
                                <th className="text-nowrap">Image</th>
                                <th className="text-nowrap">Name</th>
                                <th className="text-nowrap">Quantity</th>
                                <th className="text-nowrap">Price per item</th>
                                <th className="text-nowrap">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {order && order?.items?.map((item) => (
                                <React.Fragment key={item?.id}>
                                    <tr>
                                        <td valign="middle">
                                            {item?.product?.images?.[0]?.fullpath ? (
                                                <Image src={pimcoreImage(item.product.images[0].fullpath)} width={120}/>
                                            ) : (
                                                <></>
                                            )}
                                        </td>
                                        <td valign="middle"><CoreLink text={item?.product?.name ?? ''} href={item?.product?.id ? `/product/${item?.product?.id}` : ''}  icon={false} /></td>
                                        <td valign="middle">{item?.quantity}</td>
                                        <td valign="middle"><Currency amount={item?.itemRetailPriceGross} currencyCode="EUR"/></td>
                                        <td valign="middle"><Currency amount={item?.totalGross} currencyCode="EUR"/></td>

                                    </tr>
                                </React.Fragment>
                            ))}
                            </tbody>
                        </Table>
                        <div className="d-flex justify-content-end">
                            <div>
                                {order?.shippingAddress && <>
                                        <h6>Shipping (incl. VAT):{' '}
                                            {order?.adjustmentItems?.find(item => item?.typeIdentifier === 'shipping') && (
                                                <Currency
                                                    amount={order?.adjustmentItems?.find(item => item?.typeIdentifier === 'shipping')?.pimcoreAmountGross}
                                                    currencyCode="EUR"/>
                                            )}
                                        </h6>
                                        <h6>Shipping (excl. VAT):{' '}
                                            {order?.adjustmentItems?.find(item => item?.typeIdentifier === 'shipping') && (
                                                <Currency
                                                    amount={order?.adjustmentItems?.find(item => item?.typeIdentifier === 'shipping')?.pimcoreAmountNet}
                                                    currencyCode="EUR"/>
                                            )}
                                        </h6>
                                    </>
                                }
                                <h6>Subtotal (incl. VAT): <Currency amount={order?.subtotalGross} currencyCode="EUR"/>
                                </h6>
                                <h6>Subtotal (excl. VAT): <Currency amount={order?.subtotalNet} currencyCode="EUR"/>
                                </h6>
                                {order?.taxes && (
                                    <>
                                        <h6>Taxes</h6>
                                        <ul>
                                            {order?.taxes.map((tax) => (
                                                <li key={tax?.name}>{tax?.name}: {tax?.rate}% - <small><Currency
                                                    amount={tax?.amount} currencyCode="EUR"/></small></li>
                                            ))}
                                        </ul>

                                    </>
                                )}
                                <h6>Total: <Currency amount={order?.totalGross} currencyCode="EUR"/></h6>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Loader/>
            )}
            </Suspense>
        </>
    );
};

export default OrderDetail;
