/* =========================================================
   PUBLICATIONS
   Chronologically descending (newest first).
   ========================================================= */

export interface Publication {
  date: string;
  venue: string;
  status: 'Accepted' | 'Published';
  /**
   * Short project name or acronym rendered in italics before the colon,
   * e.g. "Visionary" → <em>Visionary</em>: {titleRest}
   * Leave undefined for plain titles.
   */
  titleAbbrev?: string;
  /** Title text after the colon, or the full title when no abbreviation. */
  titleRest: string;
  /** DOI / proceedings URL. Wraps the title in a link when present. */
  href?: string;
  /** Abstract shown on the /work page. */
  abstract: string;
  /**
   * Shorter or differently worded abstract for the homepage preview.
   * Falls back to `abstract` when omitted.
   */
  homeAbstract?: string;
  /** Show this entry in the homepage "From the bibliography" strip. */
  featuredOnHome?: boolean;
}

export const publications: Publication[] = [
  /* ── 2026 ─────────────────────────────────────────── */
  {
    date: 'May 2, 2026',
    venue: 'IEEE International Conference on Multimedia & Expo Workshops — ICMEW 2026, Bangkok',
    status: 'Accepted',
    titleAbbrev: 'Cluster Erase',
    titleRest: 'Zero‑Shot Mass‑Similar and Multi‑Object Removal in a Single Pass',
    abstract: 'A demonstration of a single‑pass removal approach for visually similar object clusters in natural imagery, extending zero‑shot inpainting toward the messy, repetitive scenes that one‑object methods choke on.',
    featuredOnHome: true,
  },
  {
    date: 'Mar 17, 2026',
    venue: 'IEEE International Conference on Multimedia & Expo — ICME 2026, Bangkok',
    status: 'Accepted',
    titleAbbrev: 'PANDORA',
    titleRest: 'Pixel‑wise Attention Dissolution and Latent Guidance for Zero‑Shot Object Removal',
    abstract: 'A zero‑shot object removal method that leverages pixel‑wise attention dissolution and latent guidance within a diffusion framework — achieving clean inpainting without task‑specific fine‑tuning on the target scene.',
    featuredOnHome: true,
  },
  /* ── 2025 ─────────────────────────────────────────── */
  {
    date: 'December 13, 2025',
    venue: 'The 14th International Symposium on Information and Communication Technology (SOICT 2025)',
    status: 'Accepted',
    titleAbbrev: 'Visionary',
    titleRest: 'Optimized Temporal Video Retrieval via Large Language Model‑Enhanced Query Processing',
    abstract: 'Addressing the Ho Chi Minh City AI Challenge 2025, Visionary introduces four key contributions: a novel adaptive keyframe extraction algorithm; an enhanced pre‑processing pipeline using Qwen3‑VL for metadata generation with integrated OCR; a flexible architecture supporting multiple embedding models; and the use of Reciprocal Rank Fusion to synthesise retrieval results for complex, large‑scale video retrieval tasks.',
    homeAbstract: 'Addressing the Ho Chi Minh City AI Challenge 2025, Visionary introduces an adaptive keyframe extraction algorithm, a Qwen3‑VL pre‑processing pipeline for metadata generation with integrated OCR, a flexible architecture supporting multiple embedding models, and Reciprocal Rank Fusion for synthesizing retrieval results across complex, large‑scale video tasks.',
    featuredOnHome: true,
  },
  {
    date: 'December 13, 2025',
    venue: 'The 14th International Symposium on Information and Communication Technology (SOICT 2025)',
    status: 'Accepted',
    titleAbbrev: 'ENAug',
    titleRest: 'ENT Endoscopy Images Classification Using Ensemble and Augmentation Methods',
    abstract: 'A robust classification framework for ENT endoscopy images based on an ensemble of deep learning models. A novel augmentation strategy combining symmetry‑based label flipping with Mixup, Mosaic, and other techniques addresses class imbalance. Evaluated on a curated ENT dataset covering seven anatomical categories, achieving 95.82% accuracy.',
    homeAbstract: 'A practical pipeline for classifying ENT endoscopy imagery that pairs an ensemble of vision backbones with a curated augmentation schedule, designed to remain robust to the imaging variance typical of clinical capture devices.',
    featuredOnHome: true,
  },
  {
    date: 'October 27, 2025',
    venue: 'The 33rd ACM International Conference on Multimedia (ACM MM 2025)',
    status: 'Published',
    titleAbbrev: 'EVENT‑Retriever',
    titleRest: 'Event‑Aware Multimodal Image Retrieval for Realistic Captions',
    href: 'https://dl.acm.org/doi/10.1145/3746027.3762038',
    abstract: 'A multi‑stage retrieval framework combining dense article retrieval, event‑aware language model reranking, and caption‑guided semantic matching. Leverages Qwen3 for article search, Qwen3‑Reranker for contextual alignment, and Qwen2‑VL for image scoring, fused via RRF. Achieved <strong>top‑1 score</strong> on the private test set of Track 2 in the EVENTA 2025 Grand Challenge at ACM MM.',
  },
  {
    date: 'August 16, 2025',
    venue: 'The 2025 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)',
    status: 'Published',
    titleAbbrev: 'SAMURAI',
    titleRest: 'Shape‑Aware Multimodal Retrieval for 3D Object Identification',
    href: 'https://ieeexplore.ieee.org/document/11134001',
    abstract: 'SAMURAI integrates CLIP‑based semantic matching with shape‑guided re‑ranking derived from binary silhouettes of masked regions, alongside a majority voting strategy. A preprocessing pipeline enhances mask quality by extracting the largest connected component and removing background noise, achieving competitive performance on the ROOMELSA private test set.',
  },
  /* ── 2024 ─────────────────────────────────────────── */
  {
    date: 'December 14, 2024',
    venue: 'The 13th International Symposium on Information and Communication Technology (SOICT 2024)',
    status: 'Published',
    titleAbbrev: 'NewsInsight2.0',
    titleRest: 'An Enhanced Version Integrating Large Language Model‑Based Query Optimisation with Advanced Temporal Mechanisms',
    href: 'https://link.springer.com/chapter/10.1007/978-981-96-4291-5_28',
    abstract: 'Built for the Ho Chi Minh AI Challenge 2024, NewsInsight2.0 leverages CLIP trained on a 5 billion‑parameter dataset (DFN‑5B), a refined temporal query mechanism, and an automatic query generator powered by open‑source LLMs for streamlined query optimisation.',
  },
  {
    date: 'December 8, 2024',
    venue: 'The 1st Large Vision–Language Model Learning and Applications Workshop, ACCV 2024',
    status: 'Published',
    titleRest: 'An Approach to Complex Visual Data Interpretation with Vision‑Language Models',
    href: 'https://openaccess.thecvf.com/content/ACCV2024W/LAVA/html/Nguyen_An_Approach_to_Complex_Visual_Data_Interpretation_with_Vision-Language_Models_ACCVW_2024_paper.html',
    abstract: 'Adapted MMMU benchmarks and applied prompt engineering with a voting‑based ensemble method to enhance Large Vision‑Language Models\' performance on complex visual data interpretation, achieving a top score of 0.85 in the LAVA Workshop 2024 challenge.',
  },
  {
    date: 'August 16, 2024',
    venue: 'The 2024 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)',
    status: 'Published',
    titleRest: 'AI‑Enhanced Photo Authenticity: A User‑Focused Approach to Detecting and Analysing Manipulated Images',
    href: 'https://ieeexplore.ieee.org/abstract/document/10661051',
    abstract: 'Development of an AI‑assisted system designed to aid users in identifying and verifying the genuineness of photos, combining deep learning detection models with user‑facing interfaces for practical media literacy.',
  },
  {
    date: 'July 2, 2024',
    venue: 'The 1st Workshop on Security‑Centric Strategies for Combating Information Disorder, ACM AsiaCCS 2024',
    status: 'Published',
    titleRest: 'A Hybrid Approach for Cheapfake Detection Using Reputation Checking and End‑To‑End Network',
    href: 'https://dl.acm.org/doi/10.1145/3660512.3665521',
    abstract: 'Demonstrates the promise of a hybrid method combining online reputation verification with an end‑to‑end neural network for cheapfake detection, making a significant contribution to preserving the integrity of multimedia content.',
  },
  {
    date: 'June 11, 2024',
    venue: 'The 2024 International Conference on Multimedia Retrieval (ACM ICMR 2024)',
    status: 'Published',
    titleRest: 'A Unified Network for Detecting Out‑Of‑Context Information Using Generative Synthetic Data',
    href: 'https://dl.acm.org/doi/abs/10.1145/3652583.3657599',
    abstract: 'Highlights the potential of an end‑to‑end network for cheapfakes detection using generative synthetic training data, contributing to the advancement of multimedia content integrity at scale.',
  },
  /* ── 2024 / MMM ────────────────────────────────────── */
  {
    date: 'February 1, 2024',
    venue: 'The MediaEval 2023 Workshop, MMM 2024',
    status: 'Published',
    titleRest: 'Transparent Tracking of Spermatozoa with YOLOv8',
    href: 'https://ceur-ws.org/Vol-3658/paper21.pdf',
    abstract: 'An efficient method for detection and tracking of spermatozoa using YOLOv8 trained on a COCO‑format dataset, contributing a transparent and reproducible pipeline for biomedical video analysis.',
  },
];
