import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';

export default class Dec extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="Dec">
         <div class="col-lg-12" id="pru_dec">
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                    <img
                        src="https://usgbc-react-assets.s3.amazonaws.com/static/images/black-oak-leaves.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                        <Navbar.Brand href="#home"><b>USGBC Store</b></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#product_list">Product list</Nav.Link>
                            <Nav.Link href="#product_slider">Product Slider</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <hr></hr>
                </div>
                <div class="container col-lg-12" style={{padding: "100px"}}>
                    <div class="row">
                    <div className="col-md-6">
                        <div className="container">
                            <h1 className="" style={{ textalign: 'left',fontweight: 600,fontsize:'28px',lineheight:'unset'}}><b> Chartwell School: Case Study </b></h1>
                            {/* <div > */}
                            <img  className="col-lg-4" style={{marginLeft:"50px"}} src="https://www.usgbc.org/sites/default/files/resources-CaseChartwell.jpg"/>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="container col-md-6">
                        <div className="">
                           <p><h2>This case study, on the first-ever LEED Platinum school, brings to life the visioning, design, construction, and operation of Chartwell School, located in Seaside California.</h2></p>
                        </div>
                        <br></br>
                        <h1 style={{textAlign: "center",paddingRight: '120px'}}>$15.00</h1>
                        <button style={{ position: "absolute",top: "55%",left:"25%",paddingLeft:"100px",paddingRight:"100px"}} class="btn btn-primary btn-lg" >ADD TO CART</button>
                    </div>
                    </div>
                    
              </div>
              <hr></hr>
              <div class="container col-lg-12" style={{padding: "100px"}}>
                  <div>
                        <p><h1>Preparing for a LEED Professional Credential?</h1></p>
                        <p><h5>Take a look inside the LEED project planning process, from registration to certification, while earning credential maintenance hours with LEED Stories from Practice.</h5></p>
                        <p><h5>The Chartwell School: Case Study brings to life the visioning, design, construction, and operation of the first LEED Platinum school.</h5></p>
                        <p><h5>Read perspectives from diverse LEED project team members, beginning with successfully encouraging stakeholders to look beyond the politics of green and see LEED strategies as investments, rather than costs.</h5></p>
                    </div>
                    <div>
                        <br></br><br></br>
                        <h5><b>Published On:</b> January 01, 2010</h5>
                        <h5><b>Published by:</b> U.S. Green Building Council</h5>
                    </div>
              </div>
         </div>
      </div>
    );
  }
}

