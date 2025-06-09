import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center">
          <ExclamationTriangleIcon className="h-16 w-16 text-yellow-500 dark:text-yellow-400" />
        </div>
        <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Page Not Found
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;