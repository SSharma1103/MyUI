'use client';

// Import the named export from your showcase template
import  ComponentShowcasePage  from '@/app/components/component-showcase'; // Adjust the import path as needed
import React from 'react';
import ButtonPreview from '@/app/components/button001';
import {buttonCodeString} from '@/app/components/button001'
// --- 2. Define the code string for the component ---

export default function ButtonComponentPage() {
  return (
    <ComponentShowcasePage
      title="Animated Button"
      description="A button with a swipe animation on hover, providing a modern and interactive feel."
      tags={['Core', 'Interactive', 'Animation']}
      preview={<ButtonPreview />}
      codeString={buttonCodeString}
    />
  );
}