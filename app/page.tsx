'use client'
import axios from 'axios';
import React from 'react';

interface Data {
  message: string;
  version: string;
  details: string
}
export default async function Home() {
  const response = await fetch("https://remanagerapi.vercel.app/");
  const data: Data = await response.json();

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Gestão de Revisão</h1>
        <p className="mt-4 text-lg">Site em produçãos. Acompanhe as novidades em breve!</p>
        <p>{data.message}</p>
        <p>{data.version}</p>
        <p>{data.details}</p>
      </div>
    </div>
  );
}
