
export default function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-sm border-t border-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-gray-300">© 2025 Matthew Wilcox.</p>
                <p className="text-gray-300 mt-2">Images on this Site were generated using OpenAI tools <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" className=" text-gray-300 underline hover:text-blue-300" aria-label="Click this to go to Chat GPT"> (ChatGPT/ DALL-E) </a>.</p>
            </div>
        </footer>
    )
};