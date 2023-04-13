import React from 'react'
import './Sidebar.css'
import { Box, ChevronDown, ChevronRight, GearFill, PeopleFill, PersonCircle, PersonFill, Speedometer } from 'react-bootstrap-icons'
import { Accordion } from 'react-bootstrap';
import CustomToggle from '../../CustomToggle/CustomToggle';

function Sidebar() {
  return (
    <>
      <div className='sidebar vh-100 p-2 bg-primary' >
        <div className='logo p-2'>
          <h2 className='text-center'>
            <a href='#' className='text-white text-decoration-none'>
              Mitesh
            </a>
          </h2>
        </div>
        <nav>
          <h6 className='text-secondary'>
            Menu
          </h6>
          <ul className='list-unstyled'>
            <Accordion defaultActiveKey='0'>
              <li className='p-2'>
                <a href='#' className='text-decoration-none d-flex align-items-center navlink'>
                  <div className='icon col-1'>
                    <Speedometer />
                  </div>
                  <div className='content col ms-2'>
                    <span>
                      Dashboard
                    </span>
                  </div>
                  <div className='arrow'>
                    <ChevronRight />
                  </div>
                </a>
              </li>
              <li className='p-2'>
                <CustomToggle eventkey='0'>
                  <a href='#' className='text-decoration-none d-flex align-items-center navlink text-white position-relative'>
                    <div className='icon col-1'>
                      <PeopleFill />
                    </div>
                    <div className='content col ms-2'>
                      <span>
                        Users
                      </span>
                    </div>
                    <div className='arrow'>
                      <ChevronDown />
                    </div>
                  </a>
                </CustomToggle>
                <Accordion.Collapse eventkey='1'>
                  <ul className='dropdownMenu list-unstyled p-3'>
                    <li className='p-2'>
                      <a href='#' className='text-decoration-none d-flex align-items-center navlink'>
                        <div className='icon col-1'>
                          <PersonCircle />
                        </div>
                        <div className='content col ms-2'>
                          <span>
                            Admin
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className='p-2'>
                      <a href='#' className='text-decoration-none d-flex align-items-center navlink'>
                        <div className='icon col-1'>
                          <PersonFill />
                        </div>
                        <div className='content col ms-2'>
                          <span>
                            User
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </Accordion.Collapse>
              </li>
              <li className='p-2'>
                <a href='#' className='text-decoration-none d-flex align-items-center navlink'>
                  <div className='icon col-1'>
                    <Box />
                  </div>
                  <div className='content col ms-2'>
                    <span>
                      Product
                    </span>
                  </div>
                </a>
              </li>
              <li className='p-2'>
                <a href='#' className='text-decoration-none d-flex align-items-center navlink'>
                  <div className='icon col-1'>
                    <GearFill />
                  </div>
                  <div className='content col ms-2'>
                    <span>
                      Setting
                    </span>
                  </div>
                </a>
              </li>
            </Accordion>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar