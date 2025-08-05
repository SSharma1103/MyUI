'use client';

// Import the named export from your showcase template
import  ComponentShowcasePage  from '@/app/components/component-showcase'; // Adjust the import path as needed
import React from 'react';
import ButtonPreview from '@/app/components/button001';
import {buttonCodeString} from '@/app/components/button001'
import { buttonCodeString2} from '@/app/components/button002';
import AnimatedButton from '@/app/components/button002';
import AnimatedButton3 from '@/app/components/button003';
import { buttonCodeString3 } from '@/app/components/button003';


export default function ButtonComponentPage() {
  return (
    <div>
    <ComponentShowcasePage
      title="Animated Button"
      description="A button with a swipe animation on hover, providing a modern and interactive feel."
      tags={['Core', 'Interactive', 'Animation']}
      preview={<ButtonPreview />}
      codeString={buttonCodeString}
    />
    <div className='h-5'></div>
    <ComponentShowcasePage
      title="Animated Booking Button"
      description="A button with a fade transition on hover, revealing an emoji."
      tags={['Core', 'Interactive', 'Animation']}
      preview={
        // Display only the single emoji button variant
        <AnimatedButton />
      }
      codeString={buttonCodeString2}
    />
    <div className='h-5'></div>
    <ComponentShowcasePage
      title="Delete Button"
      description="A confirmation button with a swipe-to-reveal icon, ideal for destructive actions."
      tags={['Destructive', 'Interactive', 'Animation']}
      preview={
        // Display only the delete button
        <AnimatedButton3 />
      }
      codeString={buttonCodeString3}
    />
    </div>
  );
}