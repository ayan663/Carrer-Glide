import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../imgages/logo.jpg";
function navbar() {
  return (
   <>
   <Navbar className=''>
      <Navbar.Brand className='mb-3'>
        <img src= {logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Carrer Glide</span>
      </Navbar.Brand>
      {/*<div className="flex md:order-2">
        {/* <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown> 
        <Navbar.Toggle />
      </div>*/}
      <Navbar.Collapse className=''>
        <Navbar.Link href="/" className='text-[16px]' active>
          Home
        </Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/Jobseeker">Jobseeker Dashboard</Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/Resumebuilder">Resume builder </Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/Dashboard">POST JOB </Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/Signin">Sign in</Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/joblist">Job Listing</Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/appli">Applicants</Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/parser">Parser</Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/JobInsightsDashboard">JobInsights Dashboard</Navbar.Link>
        {/* <Navbar. className='text-[16px] whitespace-nowrap'Link href="/Courses">Courses</Navbar.Link> */}
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/Meet">Meet</Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/Resuemeanalyser">Resume Analyser</Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/Udemy">Roadmap</Navbar.Link>
        <Navbar.Link className='text-[16px] whitespace-nowrap' href="/Newsletter">Newsletter</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
   </>
  )
}

export default navbar
