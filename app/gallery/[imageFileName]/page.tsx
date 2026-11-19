import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { basename, join } from 'node:path';
import { statSync } from 'node:fs';
import { SITE_URL } from '@/lib/agent';
import { Button, PageHeader } from '@/components/ui';

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
    <>
      <PageHeader name="Gallery" title={<em>Gallery</em>} dek={image.fileName} />
      <section className="vl-section">
        <div className="vl-shell">
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
            <figcaption className="vl-meta">
              <span>Van-Loc Nguyen · Personal archive</span>
              <a href={image.src} target="_blank" rel="noreferrer">
                Open original <span aria-hidden="true">↗</span>
              </a>
            </figcaption>
          </figure>
          <div className="vl-more" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Button href="/">Back to the front page</Button>
            <span className="vl-meta">Share this URL to share the image</span>
          </div>
        </div>
      </section>
    </>
  );
}
