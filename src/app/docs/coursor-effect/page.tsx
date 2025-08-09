'use client';

// Import the named export from your showcase template
import ComponentShowcasePage  from '@/app/components/component-showcase';
import React from 'react';
import CustomCursor from '@/app/components/cursor001';
import { cursorCodeString } from '@/app/components/cursor001';
import CrosshairPreview from '@/app/components/cursor002';
import { crosshairCodeString } from '@/app/components/cursor002';
import Link from "next/link";
import { ArrowRightIcon } from '@/app/components/icons';


// --- 3. Final page component ---
export default function CustomCursorPage() {
  return (
    <div>
      <ComponentShowcasePage
            title="Wobbly Crosshair Cursor"
            description="A custom crosshair cursor with a smooth, wobbly follow effect and a turbulence distortion on link hover."
            tags={['Effect', 'Animation', 'Framer Motion', 'Cursor']}
            preview={<CrosshairPreview />}
            codeString={crosshairCodeString}
        />
    <div className='h-5'></div>
        <ComponentShowcasePage
      title="Scoped Custom Cursor"
      description="A custom animated trail cursor effect that works anywhere inside the preview area."
      tags={['Effect', 'Animation', 'Scoped', 'UX']}
      preview={<CustomCursor />}
      codeString={cursorCodeString}
    />
    <div className="flex justify-end mt-12">
        <Link 
          href="/docs/cards" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: Cards
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
    
  );
}

