import {getCustomerAddresses} from "@/lib";
import React, {Suspense} from "react";
import ProfileMenu from "@/components/profile/ProfileMenu";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import Loader from "@/components/loader";
import {AddressFragment, OrderFragment} from "@/lib/graphql/types.generated";
import Table from "react-bootstrap/Table";

export default async function OrdersPage() {
    const session = await auth();
    let orders: OrderFragment[] = [];
    if (!session) {
        return (redirect('/'));
    }
    if(session?.accessToken) {
        //orders = await getOrders(session?.accessToken);
    }
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
                                <th>Order</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.map(order => (
                                <tr>
                                    <td>asd</td>
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