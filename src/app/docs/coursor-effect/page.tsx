'use client';

// Import the named export from your showcase template
import ComponentShowcasePage  from '@/app/components/component-showcase';
import React from 'react';
import CustomCursor from '@/app/components/cursor001';
import { cursorCodeString } from '@/app/components/cursor001';
import CrosshairPreview from '@/app/components/cursor002';
import { crosshairCodeString } from '@/app/components/cursor002';


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
    </div>
  );
}

