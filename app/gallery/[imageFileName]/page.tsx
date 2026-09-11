import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { basename, join } from 'node:path';
import { statSync } from 'node:fs';
import { SITE_URL } from '@/lib/agent';

const IMAGE_EXTENSIONS = /\.(?:avif|gif|jpe?g|png|webp)$/i;
const IMAGE_DIRECTORY = join(process.cwd(), 'public', 'images');

type GalleryImage = {
  fileName: string;
  src: string;
};

function findGalleryImage(fileName: string): GalleryImage | null {
  if (
    !fileName ||
    fileName === '.' ||
    fileName === '..' ||
    fileName.includes('/') ||
    fileName.includes('\\') ||
    fileName.includes('\0') ||
    basename(fileName) !== fileName ||
    !IMAGE_EXTENSIONS.test(fileName)
  ) {
    return null;
  }

  const filePath = join(IMAGE_DIRECTORY, fileName);
  if (!statSync(filePath, { throwIfNoEntry: false })?.isFile()) return null;

  return {
    fileName,
    src: `/images/${encodeURIComponent(fileName)}`,
  };
}

type GalleryPageProps = {
  params: Promise<{ imageFileName: string }>;
};

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const { imageFileName } = await params;
  const image = findGalleryImage(imageFileName);
  if (!image) notFound();

  const title = `${image.fileName} — Gallery`;
  const imageUrl = `${SITE_URL}${image.src}`;

  return {
    title,
    description: `A photograph shared by Van-Loc Nguyen: ${image.fileName}.`,
    alternates: {
      canonical: `/gallery/${encodeURIComponent(image.fileName)}`,
    },
    openGraph: {
      title,
      description: `A photograph shared by Van-Loc Nguyen: ${image.fileName}.`,
      type: 'website',
      url: `${SITE_URL}/gallery/${encodeURIComponent(image.fileName)}`,
      images: [{ url: imageUrl, alt: `Photograph ${image.fileName}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: `A photograph shared by Van-Loc Nguyen: ${image.fileName}.`,
      images: [imageUrl],
    },
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { imageFileName } = await params;
  const image = findGalleryImage(imageFileName);
  if (!image) notFound();

  return (
    <main className="gallery-page">
      <div className="shell">
        <header className="gallery-head">
          <div className="section-head">
            <div className="number">
              <span className="num">G/01</span>
              <span className="rule" />
              <span className="label">Shared image</span>
            </div>
            <h1>Gallery </h1>
          </div>
          <p className="gallery-file">{image.fileName}</p>
        </header>

        <figure className="gallery-figure">
          <div className="gallery-image-wrap">
            <Image
              src={image.src}
              alt={`Photograph ${image.fileName}`}
              fill
              sizes="(max-width: 980px) 100vw, 1200px"
              preload
            />
          </div>
          <figcaption>
            <span>Van-Loc Nguyen · Personal archive</span>
            <a href={image.src} target="_blank" rel="noreferrer">
              Open original <span aria-hidden="true">↗</span>
            </a>
          </figcaption>
        </figure>

        <nav className="gallery-footer" aria-label="Gallery navigation">
          <Link href="/">← Return to index</Link>
          <span>Share this URL to share the image</span>
        </nav>
      </div>
    </main>
  );
}
