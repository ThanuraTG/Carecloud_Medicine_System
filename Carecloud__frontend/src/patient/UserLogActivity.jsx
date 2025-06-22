import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import VerticalMenu from '../Components/verticalmenu';
import { getAllAuditLogs } from './api'; // Import the API utility
import './css/UserLogActivity.css';

export default function UserLogActivity() {
  const [logs, setLogs] = useState([]); // State for logs
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Fetch all audit logs on component mount
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await getAllAuditLogs();
        setLogs(data);
      } catch (error) {
        console.error('Error fetching audit logs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  // Filter logs based on search query
  const filteredLogs = logs.filter((log) =>
    log.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='log-list'>
      <VerticalMenu />
      <Header />

      <div className='box-log'>
        <div className='header-log'>
          <h2>SYSTEM USER REPORTS</h2>
        </div>

        <div className='search-log'>
          <label htmlFor='search'>Search:</label>
          <input
            type='text'
            id='search'
            placeholder='Search user log...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <main className='main_boxs'>
            <section className='box_bodys'>

                <table className='log-table'>
                <thead>
                    <tr>
                    <td>No</td>
                    <td>Username</td>
                    <td>Role</td>
                    <td>Action</td>
                    <td>Details</td>
                    <td>Timestamp</td>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                    <tr>
                        <td colSpan={6} className='nodata-log'>
                        Loading...
                        </td>
                    </tr>
                    ) : filteredLogs.length > 0 ? (
                    filteredLogs.map((log, index) => (
                        <tr key={log.id}>
                        <td>{index + 1}</td>
                        <td>{log.username}</td>
                        <td>{log.userRole}</td>
                        <td>{log.action}</td>
                        <td>{log.details}</td>
                        <td>{new Date(log.timestamp).toLocaleString()}</td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan={6} className='nodata-log'>
                        No user logs found
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </section>
        </main>

        <div className='paginitation-log'>
          <span>Showing {filteredLogs.length} of {logs.length} logs</span>
        </div>
      </div>
    </div>
  );
}