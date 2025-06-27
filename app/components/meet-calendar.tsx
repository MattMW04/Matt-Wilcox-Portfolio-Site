"use client";
import React from 'react';
import { InlineWidget } from 'react-calendly';

const MeetCalendar: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-100 mb-6 text-center w-full">Schedule a Meeting</h1>
            <div className="w-full h-[1000px] overflow-hidden p-6">
                <InlineWidget
                    url="https://calendly.com/matt-wilcox24/30min?month=2025-06"
                    pageSettings={{
                        backgroundColor: 'transparent',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: '#00a2ff',
                        textColor: '#000000',
                    }}
                    iframeTitle="Schedule a meeting with Matt Wilcox"
                    styles={{ minHeight: '100%', width: '100%', overflow: 'hidden' }}

                />
            </div>
        </div>
    );
};

export default MeetCalendar;