import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

// Static data for blood donation metrics
const monthlyData = [
  { name: 'Jan', donors: 45, pints: 120 },
  { name: 'Feb', donors: 68, pints: 180 },
  { name: 'Mar', donors: 72, pints: 210 },
  { name: 'Apr', donors: 86, pints: 240 },
  { name: 'May', donors: 94, pints: 280 },
  { name: 'Jun', donors: 112, pints: 320 },
  { name: 'Jul', donors: 98, pints: 310 },
];

const bloodTypesData = [
  { type: 'O+', donors: 42, percentage: '38%' },
  { type: 'A+', donors: 31, percentage: '28%' },
  { type: 'B+', donors: 18, percentage: '16%' },
  { type: 'AB+', donors: 8, percentage: '7%' },
  { type: 'O-', donors: 6, percentage: '5%' },
  { type: 'A-', donors: 4, percentage: '4%' },
  { type: 'B-', donors: 2, percentage: '2%' },
  { type: 'AB-', donors: 1, percentage: '1%' },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Blood Donation Dashboard</h1>
          <div className="stats-summary">
            <div className="stat-box">
              <h2>28</h2>
              <p>Active Blood Drives</p>
            </div>
            <div className="stat-box">
              <h2>48%</h2>
              <p>Donor Increase</p>
            </div>
            <div className="stat-box">
              <h2>1,240</h2>
              <p>Pints Collected</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Monthly Donation Chart */}
        <div className="dashboard-card wide-card">
          <h3>Monthly Donation Activity</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#222',
                    borderColor: '#ff3e3e',
                    color: '#fff'
                  }} 
                />
                <Legend />
                <Bar dataKey="donors" fill="#ff3e3e" name="Donors" />
                <Bar dataKey="pints" fill="#ff6b6b" name="Pints Collected" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="dashboard-card">
          <h3>Today's Snapshot</h3>
          <div className="stat-item">
            <p>New Donors</p>
            <h4>12</h4>
          </div>
          <div className="stat-item">
            <p>Pints Collected</p>
            <h4>42</h4>
          </div>
          <div className="stat-item">
            <p>Appointments</p>
            <h4>28</h4>
          </div>
          <div className="card-footer">
            <span>updated 5 min ago</span>
          </div>
        </div>

        {/* Blood Type Distribution */}
        <div className="dashboard-card">
          <h3>Blood Type Distribution</h3>
          <ul className="blood-type-list">
            {bloodTypesData.map((item) => (
              <li key={item.type}>
                <div className="blood-type-info">
                  <span className="blood-type">{item.type}</span>
                  <span className="blood-percentage">{item.percentage}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ 
                      width: item.percentage,
                      backgroundColor: item.type.includes('+') ? '#ff3e3e' : '#ff6b6b'
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Blood Drives */}
        <div className="dashboard-card wide-card">
          <h3>Upcoming Blood Drives</h3>
          <div className="drive-list">
            <div className="drive-item">
              <h4>Community Center</h4>
              <p>Tomorrow, 9AM-4PM</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '65%' }}></div>
              </div>
              <p>65 of 100 slots filled</p>
            </div>
            <div className="drive-item">
              <h4>City Hospital</h4>
              <p>Friday, 8AM-3PM</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '42%' }}></div>
              </div>
              <p>42 of 100 slots filled</p>
            </div>
            <div className="drive-item">
              <h4>University Campus</h4>
              <p>Next Monday, 10AM-6PM</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '28%' }}></div>
              </div>
              <p>28 of 100 slots filled</p>
            </div>
          </div>
        </div>

        {/* Urgent Needs */}
        <div className="dashboard-card">
          <h3>Urgent Blood Needs</h3>
          <ul className="urgent-list">
            <li className="critical">O- (Critical Shortage)</li>
            <li className="urgent">B- (Urgent Need)</li>
            <li>AB+ (Low Supply)</li>
            <li>A- (Moderate Supply)</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <h3>Quick Actions</h3>
          <ul className="action-list">
            <li>Schedule New Drive</li>
            <li>Send Donor Reminders</li>
            <li>Generate Donor Certificates</li>
            <li>View Donation History</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;