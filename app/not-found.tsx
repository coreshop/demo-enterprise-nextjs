import React, {FC} from 'react';
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";

const Custom404: FC = () => {
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-center py-5 mb-5">
                <div className="text-center">
                    <h1 style={{fontSize: '6rem'}}>404</h1>
                    <h2 className="h3">Page not found</h2>
                    <div className="row my-5">
                        <div className="col-12 col-lg-8 offset-lg-2 d-flex justify-content-center">
                            <CoreButton buttonType="a" text="Go to Home" variant={CoreButtontype.Primary} icon={true} iconPre={true} iconType="House" href="/" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Custom404;