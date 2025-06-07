import React from "react";

export default function ErrorMessage({ error }: { error: string }) {
    return (
        <div className="mb-4 rounded-lg bg-red-800/80 border border-red-500 text-red-100 px-4 py-3 text-center shadow">
            <span className="font-semibold">Error:</span> {error}
        </div>
    );
}
