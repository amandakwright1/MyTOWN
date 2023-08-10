import React from "react";

const baseUrl = '/api/events';

// this fetch grabs all events from the API (purpleVScode) and then uses json to translate it so that it can be read by the webpage. 
export const getAllEvents = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

//grabs a single event id instead of all the events like above.
export const getEventById = (eventsId) => {
  return fetch(`${baseUrl}/${eventsId}`)
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


export const editEvent = (eventOBJ) => {
  return fetch(`${baseUrl}/${eventOBJ.Id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventOBJ),
  })
  .then(() => getAllEvents());
}

export const deleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  })
}