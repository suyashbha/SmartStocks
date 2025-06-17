import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StockView() {
  const { symbol } = useParams();
  const [data, setData] = useState(null);
  const token = localStorage.getItem('token');

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/recommend/${symbol}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData(res.data);
    } catch (err) {
      alert('Could not fetch stock data');
    }
  };

  useEffect(() => {
    fetchData();
  }, [symbol]);

  if (!data) return <p className="loading">Loading stock details...</p>;

  return (
    <div className="stockview">
      <h2>{data.symbol} Fundamentals</h2>
      <p className="verdict"><strong>Verdict:</strong> {data.verdict}</p>
      <table>
        <tbody>
          {Object.entries(data).map(([key, value]) => {
            if (key.endsWith('_raw')) {
              const baseKey = key.replace('_raw', '');
              return (
                <tr key={baseKey}>
                  <td>{baseKey.replace(/_/g, ' ')}</td>
                  <td>{value || '-'}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StockView;
