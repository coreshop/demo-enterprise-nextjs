import React, {Suspense} from "react";
import ProfileMenu from "@/components/profile/ProfileMenu";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import Loader from "@/components/loader";
import Table from "react-bootstrap/Table";
import {getOrders} from "@/lib";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import {CoreLink} from "@/stories/Atoms/Link/CoreLink";
import Currency from "@/components/common/currency";

export default async function OrdersPage() {
    const session = await auth();
    if (!session) {
        return (redirect('/'));
    }
    const orders = await getOrders();
    return <>
        <section className="container">
            <div className="row">
                <Suspense fallback={<Loader/>}>
                    <div className="col-12 col-lg-3 mb-3">
                        <ProfileMenu active="addresses"/>
                    </div>
                    <div className="col-12 col-lg-9">
                        <Table>
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
                                <tr>
                                    <td>{order?.orderNumber}</td>
                                    <td>{order?.orderDate}</td>
                                    <td><Currency amount={order?.totalGross} currencyCode="EUR"/></td>
                                    <td>{order?.orderState}</td>
                                    <td>
                                        <CoreLink text="Show Details" href={`/profile/orders/${order?.orderNumber}`} icon={true} iconType="ArrowUpRight" target="_blank" />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                </Suspense>
            </div>
        </section>
    </>
}