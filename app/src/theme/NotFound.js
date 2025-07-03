import React, { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    window.location.href = 'https://help.smatechnologies.com/opcon/core/Files/UI/Solution-Manager/Getting-Started';
  }, []);

  return null; // Or a loading spinner if you want
}
