import { ReactElement } from 'react';
import { Hero } from '@/components/homepage/hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Activity, Github, Globe, Link2, PackageOpen } from 'lucide-react';

export default function HomePage(): ReactElement {
  return (
    <main className="px-4 xl:px-0 py-[150px]">
      <div className="relative max-w-5xl mx-auto border bg-background divide-y divide-muted">
        {/* @ts-ignore */}
        <Hero />

        <div className="grid lg:grid-cols-3 bg-muted gap-px">
          <div className="p-8 lg:px-10 lg:py-14 bg-background flex flex-col items-start justify-start gap-6">
            <h2 className="text-4xl font-bold text-muted-foreground">
              <span className="text-foreground">Simplify</span> your middlewares{' '}
              <span className="text-foreground">now</span>!
            </h2>
            {/* @ts-ignore */}
            <Link href="/docs">
              {/* @ts-ignore */}
              <Button className="rounded-full">Get started</Button>
            </Link>
          </div>

          <div className="p-8 lg:px-8 lg:py-12 bg-background flex flex-col items-start justify-start gap-6">
            <h2 className="text-3xl font-bold text-muted-foreground">
              Supports
            </h2>

            <div className="flex items-center justify-start gap-6">
              <Activity className="h-6 w-6 min-w-6 text-muted-foreground" />
              <div>
                <h3 className="text-xl font-medium">Dynamic segments</h3>
                <p className="text-muted-foreground text-sm">
                  Run your middleware for any route or dynamic segment
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-6">
              <Link2 className="h-6 w-6 min-w-6 text-muted-foreground" />
              <div>
                <h3 className="text-xl font-medium">Functions Chaining</h3>
                <p className="text-muted-foreground text-sm">
                  Chain multiple middlewares for single group
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-6">
              <Globe className="h-6 w-6 min-w-6 text-muted-foreground" />
              <div>
                <h3 className="text-xl font-medium">Global middlewares</h3>
                <p className="text-muted-foreground text-sm">
                  Run functions before or after other middlewares
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:px-8 lg:py-12 bg-background flex flex-col items-start justify-start gap-6">
            <div className="flex items-center justify-start gap-6">
              <PackageOpen className="h-6 w-6 min-w-6 text-muted-foreground" />
              <div>
                <h3 className="text-xl font-medium">Open-source</h3>
                <p className="text-muted-foreground text-sm">
                  Something is missing? Just add it or post an issue on GitHub
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-6">
              <Link2 className="h-6 w-6 min-w-6 text-muted-foreground" />
              <div>
                <h3 className="text-xl font-medium">Developer Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Developers are most important to me, this package will be as
                  easy and usefull as possible
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid bg-muted gap-x-px">
          <div className="p-8 lg:px-12 lg:py-12 bg-background flex flex-col md:flex-row items-start md:items-center justify-start gap-6">
            <div className="flex flex-col flex-1 gap-2">
              <h3 className="font-bold text-3xl">
                Want to help with this project?
              </h3>
              <p className="text-muted-foreground max-w-[75vw]">
                Review existing issues, make an PR&apos;s with what&apos;s
                missing!
              </p>
            </div>
            {/* @ts-ignore */}
            <Link
              href="https://github.com/z4nr34l/next-easy-middlewares"
              target="_blank"
            >
              {/* @ts-ignore */}
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full flex items-center justify-center gap-x-4"
              >
                <Github className="w-6 h-6" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <p className="text-muted-foreground text-xs text-right">
          Handcrafted by {/* @ts-ignore */}
          <Link href="https://www.rescale.build">
            {/* @ts-ignore */}
            <Button variant="link" className="p-0">
              Rescale
            </Button>
          </Link>
        </p>
      </div>
    </main>
  );
}
