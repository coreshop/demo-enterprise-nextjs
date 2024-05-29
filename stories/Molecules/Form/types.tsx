import { useState, ChangeEvent } from 'react';
export interface CoreFormProps {
    bg?: boolean;
}

export const useDynamicTextarea = () => {
    const [textareaValue, setTextareaValue] = useState('');

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);
    };

    return { textareaValue, handleTextareaChange };
};

export const calculateTextareaHeight = (textareaValue: string) => {
    const lines = textareaValue.split('\n').length;
    return `${20 * lines + 40}px`;
};