import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

interface SessionInfo {
  id?: string;
  amount_total?: number | null;
  currency?: string | null;
  customer_email?: string | null;
  mode?: string | null;
  status?: string | null;
  payment_status?: string | null;
  error?: string;
}

export default function Thanks() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [info, setInfo] = useState<SessionInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const amountDisplay = useMemo(() => {
    if (!info?.amount_total || !info.currency) return null;
    const dollars = (info.amount_total / 100).toFixed(2);
    return `${new Intl.NumberFormat(undefined, { style: 'currency', currency: info.currency.toUpperCase() }).format(Number(dollars))}`;
  }, [info]);

  useEffect(() => {
    const run = async () => {
      if (!sessionId) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`);
        const data = await res.json();
        if (!res.ok) {
          setError(data?.error || "Could not verify your donation.");
        } else {
          setInfo(data);
        }
      } catch (e: any) {
        setError(e?.message || "Network error");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Thank You
          </h1>
          <p className="text-lg text-gray-600">
            Your generosity helps deliver clean, safe water to communities who need it most.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-8 mb-8">
          {loading && (
            <p className="text-gray-700">Verifying your donation...</p>
          )}
          {!loading && error && (
            <p className="text-red-600">{error}</p>
          )}
          {!loading && !error && (
            <div className="space-y-3 text-gray-800">
              <p className="text-lg">
                {amountDisplay ? (
                  <>
                    Weve received your gift of <span className="font-semibold">{amountDisplay}</span>.
                  </>
                ) : (
                  <>Your gift has been received.</>
                )}
              </p>
              <p>
                Every drop makes a difference. Your donation helps:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Bring clean water to families and children</li>
                <li>Fund sustainable wells and filtration systems</li>
                <li>Train local teams to maintain water access for years</li>
              </ul>
              {info?.customer_email && (
                <p className="text-sm text-gray-600">
                  A confirmation has been sent to <span className="font-medium">{info.customer_email}</span>.
                </p>
              )}
              <p className="text-sm text-gray-500">
                Session ID: {info?.id}
              </p>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link to="/" className="inline-block bg-[#1e3a8a] text-white px-6 py-3 font-semibold hover:bg-[#1e3a8a]/90">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
