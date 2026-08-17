export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <h1 className="text-8xl font-bold">404</h1>

            <h2 className="mt-4 text-2xl font-semibold">
                Page Not Found
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
                Sorry, the page you're looking for doesn't exist. <br /> click on Home Page......
            </p>

            <a
                href="/"
                className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
            >
                Go Home
            </a>
        </div>
    );
}