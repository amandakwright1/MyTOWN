import React from "react";

const baseUrl = '/api/location';

// this fetch grabs all events from the API (purpleVScode) and then uses json to translate it so that it can be read by the webpage. 
export const getAllLocations = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

// grabs a single location id instead of all the locations like above.
// export const getLocationById = (LocationTypeId) => {
//   return fetch(`${baseUrl}/${LocationTypeIdId}`)
//     .then((res) => res.json())
// }