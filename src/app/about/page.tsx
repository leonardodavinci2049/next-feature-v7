import { cookies } from 'next/headers';
import React from 'react'


const AboutPage = async () => {
  console.log("About Page Server Component !!!!!!!!!!");
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get('theme')?.value || 'No cookie found';


  const currentTime = new Date().toLocaleTimeString();
  return (
    <div>
      <div>Data e Hora Atual {currentTime}</div>
      <div>Cookie Value: {cookieValue}</div>
    </div>
  )
}

export default AboutPage