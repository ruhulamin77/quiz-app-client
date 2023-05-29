import { useState } from 'react';
import Button from './Button';
import Form from './Form';
import Input from './Input';
import { Link, Outlet } from 'react-router-dom';

const DashboardMain = () => {
  return (
    <div className="dashboard_main">
      <aside className="dash_menu_item">
        <ul>
          <li>
            <Link to="/dashboard/add-quiz">Add Quiz</Link>
          </li>
          <li>
            <Link to="/dashboard/remove-quiz">Remove Quiz</Link>
          </li>
          <li>
            <Link to="/dashboard/add-answer">Add Answer</Link>
          </li>
          <li>
            <a href="">Remove Answer</a>
          </li>
        </ul>
      </aside>
      <div className="dashboard_content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMain;
