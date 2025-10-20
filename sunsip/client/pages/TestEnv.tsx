import { useEffect, useState } from 'react';

export default function TestEnv() {
  const [envVars, setEnvVars] = useState<Record<string, string>>({});

  useEffect(() => {
    // Get all environment variables that start with VITE_
    const viteVars = Object.entries(import.meta.env)
      .filter(([key]) => key.startsWith('VITE_'))
      .reduce((acc, [key, value]) => ({
        ...acc,
        [key]: value
      }), {});

    setEnvVars(viteVars);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variables</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {JSON.stringify(envVars, null, 2)}
        </pre>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Stripe Test Card</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="font-medium">Test Card Number:</p>
          <code className="block bg-gray-100 p-2 rounded mt-2">4242 4242 4242 4242</code>
          <p className="mt-2">Any future date, any 3-digit CVC, any ZIP code</p>
        </div>
      </div>
    </div>
  );
}
