import {signOut} from "@/auth";
import {cookies} from "next/headers";
import Form from "react-bootstrap/Form";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import React from "react";

export function Logout() {

    return (
        <Form action={async () => {
            "use server";
            (await cookies()).delete('cartToken');
            await signOut();
        }}>
            <CoreButton type="submit" variant={CoreButtontype.Secondary} text="Logout" icon={false} />
        </Form>
    );
}