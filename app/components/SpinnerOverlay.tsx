import React from "react";

export default function SpinnerOverlay() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/70 z-20 rounded-xl">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="sr-only">Sending...</span>
        </div>
    );
}
