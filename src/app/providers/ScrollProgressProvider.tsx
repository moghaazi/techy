'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

export default function Providers({ children }) {
  return (
    <>
      {children}
      <Next13ProgressBar height="15px" color="#d8771b" options={{ showSpinner: true }} showOnShallow />
    </>
  );
};

