"use client";
import React from 'react';
import { InlineWidget } from 'react-calendly';

const MeetCalendar: React.FC = () => {
    return (
        <>
            <h1 className="text-4xl font-bold text-gray-100 mb-6 text-center">Schedule a Meeting</h1>
            <InlineWidget
                url="https://calendly.com/matt-wilcox24/30min?month=2025-06"
                styles={{ height: '600px' }}
            />
        </>
    );
};

export default MeetCalendar;