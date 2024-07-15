import React from "react";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import Table from "react-bootstrap/Table";
import {getOrders} from "@/lib";
import {CoreLink} from "@/stories/Atoms/Link/CoreLink";
import Currency from "@/components/common/currency";
import {CoreBadge} from "@/stories/Atoms/Badge/CoreBadge";
import {CoreBadgetype} from "@/stories/Atoms/Badge/types";

export default async function OrdersPage() {
    const session = await auth();
    if (!session) {
        return (redirect('/'));
    }
    const orders = await getOrders();
    return <>
            <h3>Order history</h3>
            <Table className="mt-3">
                <thead>
                <tr>
                    <th>Order number</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>State</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                { orders && orders.map(order => (
                    <tr key={order?.id}>
                        <td>{order?.orderNumber}</td>
                        <td>{order?.orderDate}</td>
                        <td><Currency amount={order?.totalGross} currencyCode="EUR"/></td>
                        <td>
                            {order.orderState === 'confirmed' ? (
                                <CoreBadge variant={CoreBadgetype.Success} description={order?.orderState} />
                                ) : order.orderState === 'new' ? (
                                    <CoreBadge variant={CoreBadgetype.Info} description={order?.orderState} />
                                ) : (
                                ''
                            )}
                        </td>
                        <td>
                            <CoreLink text="Show Details" href={`/profile/orders/${order?.orderNumber}?token=${order?.token}`} icon={true} iconType="ArrowUpRight" />
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
    </>
}