import React from 'react';
import './info.css'
function InfoColumn({ title, content }) {
  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>{title}</p>
      <p>{content}</p>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
    <div className="column-left">
      <InfoColumn
      
        title="trivago's global hotel search"
        content="trivago's hotel search allows users to compare hotel prices in just a few clicks from more than 300 booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. We help millions of travelers each year compare deals for hotels and accommodations. Get information for weekend trips to cities like Mumbai or Bengaluru and you can find the right hotel on trivago quickly and easily. Delhi and its surrounding area are great for trips that are a week or longer with the numerous hotels available."
      />
      <InfoColumn
        title="Hotel reviews help you find your ideal hotel"
        content="Over 175 million aggregated hotel ratings and more than 19 million images allow you to find out more about where you're travelling. To get an extended overview of a hotel property, trivago shows the average rating and extensive reviews from other booking sites, e.g. Hotels.com, Expedia, Agoda, leading hotels, etc. trivago makes it easy for you to find information about your trip to Dubai, including the ideal hotel for you."
      />
    </div>
    <div className="column-right">
      <InfoColumn
        title="Find cheap hotels on trivago"
        content="With trivago you can easily find your ideal hotel and compare prices from different websites. Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you. To refine your search results, simply filter by price, distance (e.g. from the beach), star category, facilities and more. From budget hostels to luxury suites, trivago makes it easy to book online. You can search from a large variety of rooms and locations across India, like Shimla and Jaipur to popular cities and holiday destinations abroad!"
      />
      <InfoColumn
        title="How to book"
        content="trivago is a hotel search with an extensive price comparison. The prices shown come from numerous hotels and booking websites. This means that while users decide on trivago which hotel best suits their needs, the booking process itself is completed through the booking sites (which are linked to our website). By clicking on the 'view deal' button, you will be forwarded onto a booking site where you can complete the reservation for the hotel deal found on trivago. Let trivago help you to find the right price from over 300 booking sites!"
      />
    </div>
  </div>
  );
}

export default Info;
