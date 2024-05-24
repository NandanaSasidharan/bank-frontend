import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {Link, useParams} from 'react-router-dom'




function View() {



  return (
    <div>
      <h3 className='text-center m-4'>View Details</h3>
      <div className="row container mt-3 p-5">
        <div className="col-8">
          {/* card */}
          <MDBCard className='shadow bg-light'>
      <MDBCardBody>
        <MDBCardTitle className='text-center m-2'>Id View</MDBCardTitle>
        <MDBCardText>
          {
                    <MDBListGroup style={{ minWidth: '22rem' }} light className='bg-light'>
                   
                    <MDBListGroupItem  className='px-3'>
                      Contact Name : 
                    </MDBListGroupItem>
                   
                    <MDBListGroupItem className='px-3'>
                      Email : 
                    </MDBListGroupItem>
                    
                  </MDBListGroup>
          }

        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

        </div>
        <div className="col-4">
          {/* image */}
          <img width={'380px'} height={'380px'} src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="" />
        </div>
      </div>
      <div className='text-center'>
          <Link to={'/'}>
          <MDBBtn className='m-3'>Go Back</MDBBtn>
          </Link>
        </div>
    </div>
  )
}

export default View