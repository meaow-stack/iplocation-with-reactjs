import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import moment from 'moment';
import 'moment-timezone';
import { Form, Label, Button } from 'semantic-ui-react';

const Location = () => {
   const [Iplocation, setIplocation] = useState({});
   const [ip, setIp] = useState('');
   const [country, setCountry] = useState('');
   const [city, setCity] = useState('');
   const [state, setState] = useState('');
   const [zip, setZip] = useState('');
   const [lat, setLat] = useState('');
   const [lon, setLon] = useState('');
   const [timezone, setTimezone] = useState('');
   const [formattedTime, setFormattedTime] = useState('');
   const [error, setError] = useState('');

   const finder = async () => {
      try {
         const response = await axios.get("https://ipinfo.io/152.58.162.22?token=66777b0d375f7e");
         setIplocation(response.data);
         setError('');
      } catch (err) {
         setError(err.message);
         alert("An error occurred");
      }
   };

   useEffect(() => {
      if (Object.keys(Iplocation).length !== 0) {
         setCountry(Iplocation.country || '');
         setCity(Iplocation.city || '');
         setState(Iplocation.region || '');
         setZip(Iplocation.postal || '');
         setLat(Iplocation.loc ? Iplocation.loc.split(',')[0] : '');
         setLon(Iplocation.loc ? Iplocation.loc.split(',')[1] : '');
         setTimezone(Iplocation.timezone || '');
      }
   }, [Iplocation]);

   useEffect(() => {
      if (timezone) {
         const time = moment().tz(timezone).format('DD-MM-YYYY HH:mm:ss');
         setFormattedTime(time);
      }
   }, [timezone]);

   const handleIpChange = (e) => {
      setIp(e.target.value);
   };

   const validateIp = (ip) => {
      const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      return regex.test(ip);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (ip && validateIp(ip)) {
         finder();
      } else {
         alert("Please enter a valid IP address");
         setError("Enter a Valid IP address");
      }
   };

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-6">
               <h1>IP Location Finder</h1>
               <Form onSubmit={handleSubmit}>
                  <Form.Field>
                     <Label>
                        IP
                     </Label>
                     <input
                        type="text"
                        value={ip}
                        onChange={handleIpChange}
                        placeholder="Enter the IP address"
                     />
                  </Form.Field>

                  <Button className="btn btn-block" type="submit">Find the IP</Button>
               </Form>
               {error && <p>{error}</p>}
               {Object.keys(Iplocation).length !== 0 && (
                  <div className='card'>
                     <div className='card-body'>
                        <p className='card-text'>Country: {country}</p>
                        <p className='card-text'>City: {city}</p>
                        <p className='card-text'>State: {state}</p>
                        <p className='card-text'>ZIP: {zip}</p>
                        <p className='card-text'>Latitude: {lat}</p>
                        <p className='card-text'>Longitude: {lon}</p>
                        <p className='card-text'>Timezone: {formattedTime}</p>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Location;
