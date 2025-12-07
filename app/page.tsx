'use client';

import React, { useState } from 'react';
import GreetingScreen from '@/components/GreetingScreen';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  const [showGreeting, setShowGreeting] = useState(true);

  const handleGreetingComplete = () => {
    setShowGreeting(false);
  };

  return (
    <>
      {showGreeting && <GreetingScreen onComplete={handleGreetingComplete} />}
      {!showGreeting && <Portfolio />}
    </>
  );
}
