"use client";

import ComponentShowcasePage from "@/app/components/component-showcase";
import GridLoader from "@/app/components/loader001";
import { loaderCodeString } from "@/app/components/loader001";
import CubeLoader from "@/app/components/loader002";
import { loaderCodeString2 } from "@/app/components/loader002";
import SquareLoader from "@/app/components/loader003";
import { loaderCodeString3 } from "@/app/components/loader003";
import Link from "next/link";
import { ArrowRightIcon } from "@/app/components/icons";


export default function GridLoaderPage() {
  return (
    <div>
      <ComponentShowcasePage
        title="3D Cube Loader"
        description="A loading indicator featuring a 3D cube with a line that continuously traces its circumference."
        tags={["Loader", "Animation", "3D", "SVG"]}
        preview={<CubeLoader />}
        codeString={loaderCodeString2}
      />
      <div className="h-5"></div>

      <ComponentShowcasePage
        title="Grid Loader"
        description="A loading indicator that displays a grid of dots pulsing with a randomized, organic rhythm."
        tags={["Loader", "Animation", "Utility"]}
        preview={<GridLoader />}
        codeString={loaderCodeString}
      />
      <div className="h-5"></div>
      <ComponentShowcasePage
        title="Square Loader"
        description="A loading indicator featuring a 2D square with a line that continuously traces its perimeter."
        tags={["Loader", "Animation", "2D"]}
        preview={<SquareLoader />}
        codeString={loaderCodeString3}
      />
      <div className="h-5"></div>
     
      <div className="flex justify-end mt-12">
        <Link
          href="/docs/coursor-effect"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: Coursor-effect
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
