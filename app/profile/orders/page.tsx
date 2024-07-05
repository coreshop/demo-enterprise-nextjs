import {getCustomerAddresses} from "@/lib";
import React, {Suspense} from "react";
import ProfileMenu from "@/components/profile/ProfileMenu";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import Loader from "@/components/loader";
import {AddressFragment} from "@/lib/graphql/types.generated";
import Table from "react-bootstrap/Table";

export default async function OrdersPage() {
    const session = await auth();
    let addresses: AddressFragment[] = [];
    if (!session) {
        return (redirect('/'));
    }
    if(session?.accessToken) {
        addresses = await getCustomerAddresses(session?.accessToken);
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
                                <th>Street</th>
                                <th>Number</th>
                                <th>ZIP</th>
                            </tr>
                            </thead>
                            <tbody>
                            {addresses.map(address => (
                                <tr>
                                    <td>{address.street}</td>
                                    <td>{address.number}</td>
                                    <td>{address.postcode}</td>
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