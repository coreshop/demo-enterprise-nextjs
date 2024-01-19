"use client";

import React, { useState } from 'react';

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
        <div className="row bs-wizard" style={{ borderBottom: 0 }}>
            {steps.map((stepName) => (
                <div
                    key={stepName}
                    className={`col-sm-2 bs-wizard-step ${
                        isStepActive(stepName) ? 'active' : ''} ${
                        isStepComplete(stepName) ? 'complete' : ''} ${
                        isStepDisabled(stepName) ? 'disabled' : ''}`}
                >
                    <div className="text-center bs-wizard-stepnum">{stepName}</div>
                    <div className="progress">
                        <div className="progress-bar"></div>
                    </div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center"></div>
                </div>
            ))}
        </div>
    );
};