import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-4xl text-green-500 pb-2 '>We Come To Dashboard</h1>
                <Outlet></Outlet>
                
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to="/dashboard">My Appointment</NavLink></li>
                    <li><NavLink to="/dashboard/myReview">MyReview</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;