import React from "react";

export default function SuccessMessage({ message }: { message: string }) {
    return (
        <div className="mb-4 rounded-lg bg-green-800/80 border border-green-500 text-green-100 px-4 py-3 text-center shadow">
            <span className="font-semibold">Success:</span> {message}
        </div>
    );
}
