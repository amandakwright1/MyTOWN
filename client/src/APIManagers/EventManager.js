import React from "react";

const baseUrl = '/api/events';

// this fetch grabs all events from the API (purpleVScode) and then uses json to translate it so that it can be read by the webpage. 
export const getAllEvents = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

//grabs a single event id instead of all the events like above.
export const getEventById = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`)
    .then((res) => res.json())
}


export const addEvent = (singleEvent) => { 
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singleEvent),
  });
};


export const editEvent = (event) => {
  return fetch(`${baseUrl}/${event.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
  .then(() => getAllEvents());
}