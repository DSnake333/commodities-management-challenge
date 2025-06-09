import { useAuth } from '../context/AuthContext';

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Manager Dashboard</h1>

        {user && (
          <div className="mb-4">
            <p className="text-gray-700 dark:text-gray-300">Welcome, <span className="font-semibold">{user.email}</span></p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Role: {user.role}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Total Products</h2>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">42</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Low Stock</h2>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">7</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Recent Activity</h2>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">5</p>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Updates</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Product "Steel Rods" updated</li>
            <li className="border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">New product "Copper Wires" added</li>
            <li className="text-gray-700 dark:text-gray-300">Inventory check completed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;