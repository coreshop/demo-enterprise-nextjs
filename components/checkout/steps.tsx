"use client";

import React, { useState } from 'react';
import {CoreLink} from "@/stories/Atoms/Link/CoreLink";

export default function StepComponent ({ currentStep }: {currentStep: string}) {
    const [steps] = useState(['cart', 'customer', 'address', 'shipping', 'payment', 'summary']);

    const isStepActive = (stepName: string) => {
        const currentStepIndex = steps.indexOf(currentStep);
        const stepIndex = steps.indexOf(stepName);
        return stepIndex === currentStepIndex;
    };

    const isStepDisabled = (stepName: string) => {
        const currentStepIndex = steps.indexOf(currentStep);
        const stepIndex = steps.indexOf(stepName);
        return stepIndex > currentStepIndex;
    };

    const isStepComplete = (stepName: string) => {
        const currentStepIndex = steps.indexOf(currentStep);
        const stepIndex = steps.indexOf(stepName);
        return stepIndex < currentStepIndex;
    };

    return (
        <section className="mt-lg-5">
            <div className="cartprogress">
                {steps.map((stepName) => (
                    <CoreLink key={stepName} text={stepName} href="#" icon={false} cssClass={` ${
                        isStepActive(stepName) ? 'active' : ''} ${
                        isStepComplete(stepName) ? 'completed' : ''} ${
                        isStepDisabled(stepName) ? 'disabled' : ''}`}
                        />
                ))}

            </div>
        </section>
    );
};