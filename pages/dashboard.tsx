import CustomNavbar from '@/components/pagecomponents/navbar';
import CardComponent from '@/components/ui/card';
import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Icon from '../images/icon.svg';
import Icon1 from '../images/icon1.svg';
import Icon2 from '../images/icon2.svg';
import Icon3 from '../images/icon3.svg';
import Icon4 from '../images/icon4.svg';
import { ChevronRight } from '@mui/icons-material';
import CustomBadges from '@/components/ui/badges';
import { Recentorder } from '@/components/data/recentOrder';
import DoughoutChart from '@/components/pagecomponents/DoughoutChart';
import BarChart from '@/components/pagecomponents/Barchart';

const Dashboard = () => {

  const DoughoutData={
    data:[40, 30, 30],
    backgroundColor:['#5570F1', '#34D399', '#FBBF24'],
  }
  const BarChartData={
    data:[78, 61, 30, 90, 43, 20, 38],
    labels:[
        'sept 10',
        'sept 11',
        'sept 12',
        'sept 13',
        'sept 14',
        'sept 15',
        'sept 16',
      ],
      backgroundColors:['#5570F1'],
  }
  return (
    <div className='w-full text-sm h-screen overflow-x-hidden overflow-y-scroll'>
      <CustomNavbar title='Dashboard' />
      <div className='p-2'>
        <Grid container spacing={1}>
          <Grid item xs={12} className='' lg={3.5}>
            <CardComponent>
              <div className='flex justify-between items-center'>
                <Image src={Icon} alt='sales' />
                <p className='text-gray-400'>
                  This week{' '}
                  <span>
                    {' '}
                    <ChevronRight className='rotate-90' />
                  </span>
                </p>
              </div>
              <div className='mt-12 w-full flex justify-start items-start gap-3'>
                <div className='w-[50%]'>
                  <p className='text-gray-500 '>Sales</p>
                  <p className='text-xl text-black font-semibold'>
                    4,000,000.00
                  </p>
                </div>
                <div className='w-[50%]'>
                  <p className='text-gray-500 '>Volume</p>
                  <p className='text-xl text-black items-center flex gap-2 font-semibold'>
                    450{' '}
                    <span className='text-sm text-green-500 font-normal'>
                      +20.00%
                    </span>
                  </p>
                </div>
              </div>
            </CardComponent>
          </Grid>
          <Grid item xs={12} className='' lg={3.5}>
            <CardComponent>
              <div className='flex justify-between items-center'>
                <Image src={Icon1} alt='customers' />
                <p className='text-gray-400'>
                  This week{' '}
                  <span>
                    {' '}
                    <ChevronRight className='rotate-90' />
                  </span>
                </p>
              </div>
              <div className='mt-12 w-full flex justify-start items-start gap-3'>
                <div className='w-[50%]'>
                  <p className='text-gray-500 '>Customers</p>
                  <p className='text-xl items-center flex gap-2 text-black font-semibold'>
                    1,250{' '}
                    <span className='text-sm text-green-500 font-normal'>
                      +15.80%
                    </span>
                  </p>
                </div>
                <div className='w-[50%]'>
                  <p className='text-gray-500 '>Active</p>
                  <p className='text-xl text-black items-center flex gap-2 font-semibold'>
                    1,180{' '}
                    <span className='text-sm text-green-500 font-normal'>
                      +85%
                    </span>
                  </p>
                </div>
              </div>
            </CardComponent>
          </Grid>
          <Grid item xs={12} className='' lg={5}>
            <CardComponent>
              <div className='flex justify-between items-center'>
                <Image src={Icon2} alt='orders' />
                <p className='text-gray-400'>
                  This week{' '}
                  <span>
                    {' '}
                    <ChevronRight className='rotate-90' />
                  </span>
                </p>
              </div>
              <div className='mt-12 w-full flex justify-start items-start gap-3'>
                <div className='w-[33%]'>
                  <p className='text-gray-500 '>All Orders</p>
                  <p className='text-xl text-black font-semibold'>450</p>
                </div>
                <div className='w-[33%]'>
                  <p className='text-gray-500 '>Pending</p>
                  <p className='text-xl text-black items-center flex gap-2 font-semibold'>
                    5
                  </p>
                </div>
                <div className='w-[33%]'>
                  <p className='text-gray-500 '>Completed</p>
                  <p className='text-xl text-black items-center flex gap-2 font-semibold'>
                    445
                  </p>
                </div>
              </div>
            </CardComponent>
          </Grid>
          <Grid
            item
            xs={12}
            className='flex flex-wrap min-h-fit justify-start items-start'
            lg={7}
          >
            <Grid xs={12} lg={6}>
              <div className='mr-1 '>
                <CardComponent>
                  <div className='flex justify-between items-center'>
                    <p className='text-lg text-gray-700'>Marketing</p>
                    <p className='text-gray-400'>
                      This week{' '}
                      <span>
                        {' '}
                        <ChevronRight className='rotate-90' />
                      </span>
                    </p>
                  </div>
                  <div className='flex justify-between items-center py-3 my-7'>
                    <p>Acquisiton</p>
                    <p>Purchase</p>
                    <p>Retention</p>
                  </div>
                  <div className='py-4 '>
                    <DoughoutChart DoughoutData={DoughoutData} />
                  </div>
                </CardComponent>
              </div>
            </Grid>
            <Grid xs={12} lg={6} className='h-fit'>
              <div className='ml-1 flex justify-start flex-col '>
                <CardComponent className='!bg-[#5570F1] !text-white'>
                  <div className='flex justify-between items-center'>
                    <Image src={Icon3} alt='customers' />
                  </div>
                  <div className='mt-12 w-full flex justify-start items-start gap-3'>
                    <div className='w-[50%]'>
                      <p className='text-white '>Customers</p>
                      <p className='text-xl items-center flex gap-2 text-white font-semibold'>
                        45{' '}
                      </p>
                    </div>
                    <div className='w-[50%]'>
                      <p className='text-white '>Active</p>
                      <p className='text-xl text-white items-center flex gap-2 font-semibold'>
                        32{' '}
                        <span className='text-sm text-white font-normal'>
                          +24%
                        </span>
                      </p>
                    </div>
                  </div>
                </CardComponent>
                <CardComponent>
                  <div className='flex justify-between items-center'>
                    <Image src={Icon4} alt='customers' />
                    <p className='text-gray-400'>
                      This week{' '}
                      <span>
                        {' '}
                        <ChevronRight className='rotate-90' />
                      </span>
                    </p>
                  </div>
                  <div className='mt-12 w-full flex justify-start items-start gap-3'>
                    <div className='w-[50%]'>
                      <p className='text-red-500 '>Abandoned Cart</p>
                      <p className='text-xl items-center flex gap-2 text-black font-semibold'>
                        20%{' '}
                        <span className='text-sm text-green-500 font-normal'>
                          +0.00%
                        </span>
                      </p>
                    </div>
                    <div className='w-[50%]'>
                      <p className='text-gray-500 '>Customers</p>
                      <p className='text-xl text-black items-center flex gap-2 font-semibold'>
                        30{' '}
                      </p>
                    </div>
                  </div>
                </CardComponent>
              </div>
            </Grid>
            <Grid xs={12}>
              <CardComponent>
              <div className='flex justify-between items-center'>
                    <p className='text-lg text-gray-700'>Summary</p>
                    <p className='text-gray-400'>
                      last 7 days{' '}
                      <span>
                        {' '}
                        <ChevronRight className='rotate-90' />
                      </span>
                    </p>
                  </div>
              <div className='py-4 '>
              < BarChart BarChartData={BarChartData} />
                  </div>
              </CardComponent>
            </Grid>
          </Grid>
          <Grid item xs={12} className='min-h-fit' lg={5}>
            <CardComponent>
              <p className='text-lg text-gray-700'>Recent Orders</p>
              {Recentorder?.map((recentorder, index) => (
                <div
                  key={recentorder?.id}
                  className='flex justify-between items-center py-3 border-b-2 border-gray-100 border-solid'
                >
                  <div className='flex justify-start items-center gap-3'>
                    <Image src={recentorder?.image} alt={'phone'} />
                    <div className=''>
                      <p className='text-sm text-gray-700'>
                        {recentorder?.product}
                      </p>
                      <p className='text-base font-semibold'>
                        {recentorder?.price}
                      </p>
                    </div>
                  </div>
                  <div className='text-right'>
                    <p className='text-gray-400'>{recentorder?.date}</p>
                    <CustomBadges status={recentorder?.status} />
                  </div>
                </div>
              ))}
            </CardComponent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
