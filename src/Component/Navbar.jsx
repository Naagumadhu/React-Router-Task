import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  let navigate = useNavigate()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:'auto', height:'75px'}}>
  <div className="container-fluid">&npsb;
    <a className="navbar-brand" href="#" style={{textAlign:'center',color:'#d714c6', fontFamily:'serif'}}>React Router Task</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown" style={{marginLeft:'270px'}}>
      <ul className="navbar-nav" >
        <li className="nav-item dropdown" >
        <button className="btn dropdown-toggle" style={{ height:'30px', color:'#d714c6', padding:'2px',marginLeft:'auto'}} data-bs-toggle="dropdown" aria-expanded="false">
          LIVE CLASSES
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><hr className="dropdown-divider" style={{borderColor:"rgb(131 229 183)"}} /></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" style={{borderColor:"rgb(131 229 183)"}} /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className="btn dropdown-toggle" style={{ height:'30px', color:'#d714c6', padding:'2px'}} data-bs-toggle="dropdown" aria-expanded="false">
          PRACTICE
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
          <li><a className="dropdown-item" href="#">Action</a></li>
            <li><hr className="dropdown-divider" style={{borderColor:"rgb(131 229 183)"}} /></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" style={{borderColor:"rgb(131 229 183)"}} /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <button className="btn dropdown-toggle" style={{ height:'30px', color:'#d714c6', padding:'2px'}} data-bs-toggle="dropdown" aria-expanded="false">
            RESOURCES
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
          <li><a className="dropdown-item" href="#">Action</a></li>
            <li><hr className="dropdown-divider" style={{borderColor:"rgb(131 229 183)"}} /></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" style={{borderColor:"rgb(131 229 183)"}} /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <button className="btn dropdown-toggle" style={{ height:'30px', color:'#d714c6', padding:'2px'}} data-bs-toggle="dropdown" aria-expanded="false">
            OUR PRODUCTS
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
          <li><a className="dropdown-item" href="#">Action</a></li>
            <li><hr className="dropdown-divider" style={{borderColor:"rgb(131 229 183)"}} /></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" style={{borderColor:"rgb(131 229 183)"}} /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      
      <div className="d-flex align-items-center" role="search" style={{marginLeft:'40px'}}>
        <input className="form-control me-2" style={{borderColor:'#d714c6', height:'31px'}} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn d-flex align-items-center justify-content-center" style={{ height:'33px', color:'#d714c6', width:'42px',fontSize:'20px'}} type="submit">
          <i className="fa fa-search" style={{marginTop:'0px'}} ></i>
        </button>
      </div>
    </div>
  </div>
</nav>

    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All" onClick={() => navigate('/all') } />
        <Tab label="Ful Stack Development" onClick={() => navigate('/full-stack-development') } />
        <Tab label="Data Science" onClick={() => navigate('/data-science') } />
        <Tab label="Cyber Security" onClick={() => navigate('/cyber-security') } />
        <Tab label="Career" onClick={() => navigate('/career') } />
      </Tabs>
    </Box>


  </>
}

export default Navbar
