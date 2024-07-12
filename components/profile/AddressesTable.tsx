'use client';

import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import {AddressFragment, OrderFragment} from "@/lib/graphql/types.generated";
import CreateAddresses from "@/components/forms/CreateAddress";
import {Collapse} from "react-bootstrap";
import UpdateAddress from "@/components/forms/UpdateAddress";
import {deleteCustomerAddressAction} from "@/components/actions";

interface AddressesTableProps {
    sessionToken: string | undefined,
    addresses: AddressFragment[];
    cart: OrderFragment;
}

const AddressesTable: React.FC<AddressesTableProps> = ({ addresses , cart, sessionToken}) => {
    const [open, setOpen] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);

    const handleEdit = (id: number | string | null | undefined) => {
        if (selectedAddressId === id) {
            setSelectedAddressId(null);
        } else {
            setSelectedAddressId(id as string);
        }
    };

    const handleDeleteAddress = async (id: string | null | undefined) => {
        await deleteCustomerAddressAction(null, parseInt(id as string));
    };
    return (
        <>
            <h3>Account Addresses</h3>
            <Table className="mt-3">
                <thead>
                <tr>
                    <th className="text-nowrap">Street Name</th>
                    <th>Number</th>
                    <th>ZIP</th>
                    <th>City</th>
                    <th className="text-nowrap">Country Code</th>
                    <th colSpan={2}></th>

                </tr>
                </thead>
                <tbody>
                {addresses.map((address) => (
                    <React.Fragment key={address.id}>
                        <tr>
                            <td valign="middle">{address.street}</td>
                            <td valign="middle">{address.number}</td>
                            <td valign="middle">{address.postcode}</td>
                            <td valign="middle">{address.city}</td>
                            <td valign="middle">{address.country?.isoCode}</td>
                            <td colSpan={2} className="text-end" valign="middle">
                                <div className="d-inline-flex gap-2">
                                    <CoreButton
                                        text="Edit"
                                        variant={CoreButtontype.Primary}
                                        icon={true}
                                        iconPre={true}
                                        iconType="Pencil"
                                        onClick={() => handleEdit(address.id)}
                                    />

                                    <CoreButton
                                        text="Delete"
                                        variant={CoreButtontype.Secondary}
                                        icon={true}
                                        iconPre={true}
                                        iconType="Trash"
                                        onClick={() => handleDeleteAddress(address.id)}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={7}>
                                <Collapse in={selectedAddressId === address.id}>
                                    <div>
                                        <UpdateAddress
                                            address={address}
                                            formId={parseInt(address.id as string)}
                                        />
                                    </div>
                                </Collapse>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
                </tbody>
            </Table>
            <div className="mt-5">
                <div className="d-flex justify-content-end mb-3">
                    <CoreButton text="Add new Adress" ariaExpanded={open}
                                ariaControls="customer-add-address" variant={CoreButtontype.Primary}
                                icon={true} iconPre={true} iconType="PlusCircle"
                                onClick={() => setOpen(!open)}/>
                </div>
                <Collapse in={open}>
                    <div id="customer-add-address">
                    create new address
                        <CreateAddresses cart={cart}/>
                    </div>
                </Collapse>
            </div>


        </>
    );
};

export default AddressesTable;
