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
    date: 'July 7, 2026',
    venue: 'IEEE International Conference on Multimedia & Expo Workshops — ICMEW 2026, Bangkok',
    status: 'Accepted',
    titleRest: 'Zero-Shot Mass-Similar and Multi-Object Removal in Single Pass',
    abstract: 'Removing objects from natural images remains a significant challenge due to strict visual consistency requirements and limited user interaction flexibility. Existing systems typically rely on single-modality interactions, struggling to adapt to complex, multi-object scenarios. In this demonstration, we present Clutter Erase, an interactive system for seamless multi-object removal. The system is powered by PANDORA, our zero-shot, diffusion-based object removal model. Clutter Erase supports diverse interaction modalities, including manual masking, prompt-based selection, click-based segmentation, and similar object search, enabling highly flexible and intuitive editing. By eliminating the need for iterative passes, the system empowers users to efficiently navigate and edit complex scenarios, such as removing dense or mass-similar objects, while iteratively exploring multiple optimal results.',
    featuredOnHome: true,
    href: 'https://store.computer.org/csdl/proceedings-article/icmew/2026/11720737/2kzQktHNd9m',
  },
  {
    date: 'July 7, 2026',
    venue: 'IEEE International Conference on Multimedia & Expo — ICME 2026, Bangkok',
    status: 'Accepted',
    titleAbbrev: 'PANDORA',
    titleRest: 'Pixel-wise Attention Dissolution and Latent Guidance for Zero-Shot Object Removal',
    abstract: 'Removing objects from natural images is challenging due to difficulty of synthesizing semantically coherent content while preserving background integrity. Existing methods often rely on fine-tuning, prompt engineering, or inference-time optimization, yet still suffer from texture inconsistency, rigid artifacts, weak foreground–background disentanglement, and poor scalability for multi-object removal. We propose a novel zero-shot object removal framework, namely PANDORA, that operates directly on pre-trained text-to-image diffusion models, requiring no fine-tuning, prompts, or optimization. We propose Pixel-wise Attention Dissolution to remove object by nullifying the most correlated attention keys for masked pixels, effectively eliminating the object from self-attention flow and allowing background context to dominate reconstruction. We further introduce Localized Attentional Disentanglement Guidance to steer denoising toward latent manifolds favorable to clean object removal. Together, these components enable precise, non-rigid, prompt-free, and scalable multi-object erasure in a single pass. Experiments demonstrate superior visual fidelity and semantic plausibility compared to state-of-the-art methods.',
    featuredOnHome: true,
    href: 'https://arxiv.org/pdf/2603.27555',
  },
  /* ── 2025 ─────────────────────────────────────────── */
  {
    date: 'December 13, 2025',
    venue: 'The 14th International Symposium on Information and Communication Technology (SOICT 2025)',
    status: 'Accepted',
    titleAbbrev: 'Visionary',
    titleRest: 'Optimized Temporal Video Retrieval via Large Language Model-Enhanced Query Processing',
    abstract: 'The rapid growth of video content necessitates efficient, real-time event retrieval systems. Addressing the Ho Chi Minh City AI Challenge 2025, we present Visionary, a new generation of the NewsInsight systems. Our system introduces four key contributions: (1) a novel adaptive keyframe extraction algorithm; (2) an enhanced pre-processing pipeline using the Qwen3-VL model for metadata generation and integrated optical character recognition; (3) a flexible architecture supporting multiple embedding models; and (4) the use of Reciprocal Rank Fusion to synthesize retrieval results. These enhancements aim to substantially improve retrieval accuracy and overall performance for complex, large-scale video retrieval tasks.',
    homeAbstract: 'Addressing the Ho Chi Minh City AI Challenge 2025, Visionary introduces an adaptive keyframe extraction algorithm, a Qwen3-VL pre-processing pipeline for metadata generation with integrated OCR, a flexible architecture supporting multiple embedding models, and Reciprocal Rank Fusion for synthesizing retrieval results across complex, large-scale video tasks.',
    featuredOnHome: true,
    href: 'https://link.springer.com/chapter/10.1007/978-981-92-2587-3_32',
  },
  {
    date: 'December 13, 2025',
    venue: 'The 14th International Symposium on Information and Communication Technology (SOICT 2025)',
    status: 'Accepted',
    titleAbbrev: 'EnAug',
    titleRest: 'ENT Endoscopy Images Classification Using Ensemble and Augmentation Methods',
    abstract: 'Ear, nose, and throat (ENT) endoscopy is a key diagnostic tool for detecting a variety of head and neck conditions. However, automated analysis of endoscopic images remains challenging due to inconsistent image quality, limited labeled data, and the inherent variability in human interpretation. In this work, we present a robust classification framework based on an ensemble of deep learning models, designed specifically for ENT endoscopy images. To address class imbalance and improve generalization, we employ a novel data augmentation strategy that combines symmetry-based label flipping with Mixup, Mosaic, and other augmentation techniques. Our approach is evaluated on a curated ENT dataset covering seven anatomical categories, achieving an accuracy of 95.82%, which surpasses several competitive baselines. In addition to strong overall performance, our method demonstrates improved robustness on underrepresented classes, showing its potential for real-world deployment in clinical settings. This work highlights the effectiveness of deep learning ensembles and thoughtful augmentation in building scalable AI tools for medical imaging.',
    homeAbstract: 'A practical pipeline for classifying ENT endoscopy imagery that pairs an ensemble of vision backbones with a curated augmentation schedule, designed to remain robust to the imaging variance typical of clinical capture devices.',
    featuredOnHome: true,
    href: 'https://link.springer.com/chapter/10.1007/978-981-92-2587-3_39',
  },
  {
    date: 'October 27, 2025',
    venue: 'The 33rd ACM International Conference on Multimedia (ACM MM 2025)',
    status: 'Published',
    titleAbbrev: 'EVENT-Retriever',
    titleRest: 'Event-Aware Multimodal Image Retrieval for Realistic Captions',
    href: 'https://dl.acm.org/doi/10.1145/3746027.3762038',
    abstract: 'Event-based image retrieval from free-form captions presents a significant challenge: models must understand not only visual features but also latent event semantics, context, and real-world knowledge. Conventional vision-language retrieval approaches often fall short when captions describe abstract events, implicit causality, temporal context, or contain long, complex narratives. To tackle these issues, we introduce a multi-stage retrieval framework combining dense article retrieval, event-aware language model reranking, and efficient image collection, followed by caption-guided semantic matching and rank-aware selection. We leverage Qwen3 for article search, Qwen3-Reranker for contextual alignment, and Qwen2-VL for precise image scoring. To further enhance performance and robustness, we fuse outputs from multiple configurations using Reciprocal Rank Fusion (RRF). Our system achieves the <strong>top-1 score</strong> on the private test set of Track 2 in the EVENTA 2025 Grand Challenge, demonstrating the effectiveness of combining language-based reasoning and multimodal retrieval for complex, real-world image understanding.',
  },
  {
    date: 'August 16, 2025',
    venue: 'The 2025 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)',
    status: 'Published',
    titleAbbrev: 'SAMURAI',
    titleRest: 'Shape-Aware Multimodal Retrieval for 3D Object Identification',
    href: 'https://ieeexplore.ieee.org/document/11134001',
    abstract: 'Retrieving 3D objects in complex indoor environments using only a masked 2D image and a natural language description presents significant challenges. The ROOMELSA challenge limits access to full 3D scene context, complicating reasoning about object appearance, geometry, and semantics. These challenges are intensified by distorted viewpoints, textureless masked regions, ambiguous language prompts, and noisy segmentation masks. To address this, we propose SAMURAI: Shape-Aware Multimodal Retrieval for 3D Object Identification. SAMURAI integrates CLIP-based semantic matching with shape-guided re-ranking derived from binary silhouettes of masked regions, alongside a robust majority voting strategy. A dedicated preprocessing pipeline enhances mask quality by extracting the largest connected component and removing background noise. Our hybrid retrieval framework leverages both language and shape cues, achieving competitive performance on the ROOMELSA private test set. These results highlight the importance of combining shape priors with language understanding for robust open-world 3D object retrieval.',
  },
  /* ── 2024 ─────────────────────────────────────────── */
  {
    date: 'December 14, 2024',
    venue: 'The 13th International Symposium on Information and Communication Technology (SOICT 2024)',
    status: 'Published',
    titleAbbrev: 'NewsInsight2.0',
    titleRest: 'An Enhanced Version Integrating Large Language Model-based Query Optimization with Advanced Temporal Mechanisms',
    href: 'https://link.springer.com/chapter/10.1007/978-981-96-4291-5_28',
    abstract: 'We introduce NewsInsight2.0, a cutting-edge evolution of the NewsInsight system, specifically designed for the Ho Chi Minh AI Challenge 2024. Building on the strengths of ViewsInsight, NewsInsight2.0 addresses previous performance limitations with significant enhancements. Our optimized architecture is tailored to deliver exceptional search capabilities for AIC 2024. At its core, NewsInsight2.0 leverages the CLIP (Contrastive Language-Image Pre-training) model, trained on a vast dataset of 5 billion parameters (DFN-5B). Additionally, we have refined our temporal query mechanism with a more efficient algorithm and an intuitive user interface. Furthermore, NewsInsight2.0 features an automatic query generator powered by open-source large language models, streamlining the process of optimizing user input queries.',
  },
  {
    date: 'December 8, 2024',
    venue: 'The 1st Large Vision–Language Model Learning and Applications Workshop, ACCV 2024',
    status: 'Published',
    titleRest: 'An Approach to Complex Visual Data Interpretation with Vision-Language Models',
    href: 'https://openaccess.thecvf.com/content/ACCV2024W/LAVA/html/Nguyen_An_Approach_to_Complex_Visual_Data_Interpretation_with_Vision-Language_Models_ACCVW_2024_paper.html',
    abstract: 'The LAVA Workshop 2024 challenge aimed to assess the capability of Large Vision-Language Models (VLMs) to interpret and understand complex visual data accurately. This includes intricate visual formats such as data flow diagrams, class diagrams, Gantt charts, and architectural blueprints. In response to this challenge, our research focuses on adapting the MMMU (Massive Multi-discipline Multimodal Understanding) benchmarks to better align with the requirements of visual data interpretation. We propose a comprehensive approach that leverages advanced prompt engineering techniques and incorporates a voting-based ensemble method for aggregating model predictions. This method improves the model’s ability to generalize across different types of visual inputs. Our approach was rigorously evaluated within the context of the challenge, resulting in a total score of 0.85, ultimately securing the <strong>top position</strong> in the competition. This result demonstrates the effectiveness of combining prompt engineering with simple yet powerful ensemble strategies for enhancing the performance of VLMs on complex multimodal tasks.',
  },
  {
    date: 'August 16, 2024',
    venue: 'The 2024 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)',
    status: 'Published',
    titleRest: 'AI-Enhanced Photo Authenticity: A User-Focused Approach to Detecting and Analyzing Manipulated Images',
    href: 'https://ieeexplore.ieee.org/abstract/document/10661051',
    abstract: 'In the digital age, the authenticity of photographs is increasingly questioned due to the rise of sophisticated AI and human manipulation techniques. This paper presents the development of an AI-assisted system designed to aid users in identifying and verifying the genuineness of photos. Unlike fully automated solutions, our approach emphasizes user empowerment, providing tools to enhance human expertise in photo authentication. The system integrates advanced algorithms to detect potential manipulations and localize regions of interest, directing users’ attention to specific areas that warrant closer examination. Users can conduct more efficient and effective authenticity checks without scrutinizing the entire image by focusing on these targeted regions. Our goal is to augment, not replace, the critical role of human judgment in verifying photo authenticity. The system’s design and implementation are discussed, along with case studies demonstrating its practical application in various scenarios. This research aims to contribute to the growing field of digital forensics by providing a robust, user-friendly tool that bridges the gap between AI capabilities and human expertise in photo verification.',
  },
  {
    date: 'July 2, 2024',
    venue: 'The 1st Workshop on Security-Centric Strategies for Combating Information Disorder, ACM AsiaCCS 2024',
    status: 'Published',
    titleRest: 'A Hybrid Approach for Cheapfake Detection Using Reputation Checking and End-To-End Network',
    href: 'https://dl.acm.org/doi/10.1145/3660512.3665521',
    abstract: 'In today’s era dominated by digital manipulations, the identification of Cheapfakes, especially those involving out-of-context visuals, is imperative for upholding the integrity of information dissemination and fostering trust in multimedia content. This research introduces an innovative approach to detect cheapfakes, utilizing a hybrid methodology that merges real-time online verification with extensive training on a unified end-to-end network, augmented by generative synthetic data. This combined strategy offers a promising avenue for enhancing the accuracy and efficiency of cheapfake detection, thus addressing the pressing need to combat misinformation in the digital landscape. We focus our solutions on two problems of Contextual Integrity Prediction and Image-Caption Authenticity Analysis. Our experiments reveal that this innovative network achieves an impressive 85.70% accuracy on a public test dataset through training solely on synthetic data for Contextual Integrity Prediction, also proving its effectiveness in Image-Caption Authenticity Analysis. This research highlights the immense promise of using our proposed hybrid method in the fight against Cheapfakes, making a significant contribution to preserving the integrity of multimedia content.',
  },
  {
    date: 'June 11, 2024',
    venue: 'The 2024 International Conference on Multimedia Retrieval (ACM ICMR 2024)',
    status: 'Published',
    titleRest: 'A Unified Network for Detecting Out-Of-Context Information Using Generative Synthetic Data',
    href: 'https://dl.acm.org/doi/abs/10.1145/3652583.3657599',
    abstract: 'In our modern world, the manipulation of digital content, especially the usage of out-of-context images known as Cheapfakes, has become a significant challenge for the endorsement of integrity and trustworthiness for information on the Internet. This highlights an urgent need for effective detection of the misuse of images and their accompanied captions. Motivated by this issue, our research presents an innovative approach to the solution of this problem. Participating in the ACM ICMR 2024 Grand Challenge on Detecting Cheapfakes, we leverage a unified end-to-end network, integrated with generative synthetic data for training. After complete evaluation, our proposed network demonstrated a remarkable accuracy of 95.60% on the public test dataset for Task 1, as well as efficiency in Task 2. This paper highlights the notable potential of employing an end-to-end network for Cheapfakes detection, which composes a significant contribution to the advancement of multimedia content integrity.',
  },
  /* ── 2024 / MMM ────────────────────────────────────── */
  {
    date: 'February 1, 2024',
    venue: 'The MediaEval 2023 Workshop, MMM 2024',
    status: 'Published',
    titleRest: 'Transparent Tracking of Spermatozoa with YOLOv8',
    href: 'https://ceur-ws.org/Vol-3658/paper21.pdf',
    abstract: 'Accurate spermatozoa tracking is crucial for understanding fertilization and reproductive health and developing novel sperm-based diagnostics and therapies. This paper explores the application of YOLOv8, a state-of-the-art object detection model, for automated and robust spermatozoa tracking in microscopic videos. Our approach employs transfer learning, fine-tuning the pre-trained YOLOv8 model on the VISEM-Tracking dataset of labeled spermatozoa images. We evaluate the performance of the proposed method on a specific part of the dataset, which does not participate in the training step. By providing a reliable and efficient tool for automated spermatozoa tracking, this work paves the way for further research, advancements, and applications in the field of reproductive medicine.',
  },
];
