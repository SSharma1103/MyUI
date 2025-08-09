'use client';

// Import the named export from your showcase template
import ComponentShowcasePage from '@/app/components/component-showcase'; // Adjust the import path as needed
import React from 'react';
import Link from 'next/link'; // Import the Link component for navigation
import ButtonPreview from '@/app/components/button001';
import {buttonCodeString} from '@/app/components/button001'
import { buttonCodeString2} from '@/app/components/button002';
import AnimatedButton from '@/app/components/button002';
import AnimatedButton3 from '@/app/components/button003';
import { buttonCodeString3 } from '@/app/components/button003';

// A simple arrow icon for the navigation button
export const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.43 5.92999L20.5 12L14.43 18.07" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

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

      {/* Navigation to the next page using the simpler button */}
      <div className="flex justify-end mt-12">
        <Link 
          href="/docs/loaders" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: Loaders
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}