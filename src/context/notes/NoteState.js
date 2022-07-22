import { useState } from "react";
import NoteContext from "./NoteContext.js";

const NoteState = (props) => {
  const notes = [
    {
      _id: "62da040fc8203ec7d72d90b6",
      user: "62d8acfabfedb24eaa88cd55",
      title: "Good Morning",
      description:
        "Wake up to reality nothing ever goes as planned in this accursed world",
      tag: "Morning",
      date: "2022-07-22T01:57:35.482Z",
      __v: 0,
    },
    {
      _id: "62da0413c8203ec7d72d90b8",
      user: "62d8acfabfedb24eaa88cd55",
      title: "Good Morning",
      description:
        "Wake up to reality nothing ever goes as planned in this accursed world",
      tag: "Morning",
      date: "2022-07-22T01:57:39.510Z",
      __v: 0,
    },
    {
      _id: "62da040fc8203ec7d72d90b6",
      user: "62d8acfabfedb24eaa88cd55",
      title: "Good Morning",
      description:
        "Wake up to reality nothing ever goes as planned in this accursed world",
      tag: "Morning",
      date: "2022-07-22T01:57:35.482Z",
      __v: 0,
    },
    {
      _id: "62da0413c8203ec7d72d90b8",
      user: "62d8acfabfedb24eaa88cd55",
      title: "Good Morning",
      description:
        "Wake up to reality nothing ever goes as planned in this accursed world",
      tag: "Morning",
      date: "2022-07-22T01:57:39.510Z",
      __v: 0,
    },
    {
      _id: "62da040fc8203ec7d72d90b6",
      user: "62d8acfabfedb24eaa88cd55",
      title: "Good Morning",
      description:
        "Wake up to reality nothing ever goes as planned in this accursed world",
      tag: "Morning",
      date: "2022-07-22T01:57:35.482Z",
      __v: 0,
    },
    {
      _id: "62da0413c8203ec7d72d90b8",
      user: "62d8acfabfedb24eaa88cd55",
      title: "Good Morning",
      description:
        "Wake up to reality nothing ever goes as planned in this accursed world",
      tag: "Morning",
      date: "2022-07-22T01:57:39.510Z",
      __v: 0,
    },
    {
      _id: "62da040fc8203ec7d72d90b6",
      user: "62d8acfabfedb24eaa88cd55",
      title: "Good Morning",
      description:
        "Wake up to reality nothing ever goes as planned in this accursed world",
      tag: "Morning",
      date: "2022-07-22T01:57:35.482Z",
      __v: 0,
    },
    {
      _id: "62da0413c8203ec7d72d90b8",
      user: "62d8acfabfedb24eaa88cd55",
      title: "Good Morning",
      description:
        "Wake up to reality nothing ever goes as planned in this accursed world",
      tag: "Morning",
      date: "2022-07-22T01:57:39.510Z",
      __v: 0,
    },
  ];
  return (
    <NoteContext.Provider value={notes}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
