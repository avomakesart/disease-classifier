import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartIcon, HomeIcon, LightningIcon } from '../../assets/Icons';

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = () => {
  const location = useLocation();

  return (
    <>
      <aside className='z-10 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0'>
        <div className='py-4 text-gray-500 dark:text-gray-400'>
          <Link
            className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200'
            to='/'
          >
            <img
              src='https://auxita.com/wp-content/uploads/auxita-logo-horizontal.png'
              className='max-w-full w-36 ml-4'
              alt='Auxita logo'
            />
          </Link>
          <ul className='mt-6'>
            <li className='relative px-6 py-3'>
              {location.pathname === '/' && (
                <span
                  className='absolute inset-y-0 left-0 w-1
                    bg-purple-600
                     rounded-tr-lg rounded-br-lg'
                  aria-hidden='true'
                />
              )}
              <Link
                className={`inline-flex items-center w-full text-sm font-semibold ${location.pathname ===
                  '/' &&
                  'text-gray-800'} transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100`}
                to='/'
              >
                <HomeIcon />
                <span className='ml-4'>Dashboard</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li className='relative px-6 py-3'>
              {location.pathname === '/blood-pressure' && (
                <span
                  className='absolute inset-y-0 left-0 w-1
                    bg-purple-600
                     rounded-tr-lg rounded-br-lg'
                  aria-hidden='true'
                />
              )}
              <Link
                className={`inline-flex items-center w-full text-sm font-semibold ${location.pathname ===
                  '/blood-pressure' &&
                  'text-gray-800'}  transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`}
                to='/blood-pressure'
              >
                <HeartIcon />
                <span className='ml-4'>Blood Pressure Data</span>
              </Link>
            </li>
            <li className='relative px-6 py-3'>
              {location.pathname === '/kidney-disease' && (
                <span
                  className='absolute inset-y-0 left-0 w-1
                    bg-purple-600
                     rounded-tr-lg rounded-br-lg'
                  aria-hidden='true'
                />
              )}
              <Link
                className={`inline-flex items-center w-full text-sm font-semibold ${location.pathname ===
                  '/kidney-disease' &&
                  'text-gray-800'} transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`}
                to='/kidney-disease'
              >
                <LightningIcon />
                <span className='ml-4'>Kidney Disease Data</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
