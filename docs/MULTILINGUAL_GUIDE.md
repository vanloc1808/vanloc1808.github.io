# Multilingual System Guide

This guide explains how the multilingual system works and how to extend it for future translations.

## Overview

The website supports both English and Vietnamese languages. When users switch languages:
- All UI text is translated
- Data content (experiences, education, projects, etc.) is switched
- The name changes from "Van-Loc Nguyen" to "Nguyễn Văn Lộc" in Vietnamese

## Architecture

### 1. Translation Context (`app/context/I18nContext.tsx`)
- Manages the current locale state
- Provides translation function `t()`
- Stores all UI text translations

### 2. Data Files (`utils/data/`)
- Each data file supports multiple languages
- Helper functions like `getPersonalData(locale)` return localized data
- Follows the pattern: `{ en: [...], vi: [...] }`

### 3. Components
- Use `useTranslation()` hook to get locale and translation function
- Call helper functions with current locale to get localized data

## Adding New Translations

### Step 1: Update I18nContext
Add new translation keys to both `en` and `vi` objects:

```typescript
// app/context/I18nContext.tsx
const translations: Record<Locale, Translation> = {
  en: {
    // ... existing translations
    newSection: {
      title: 'New Section',
      description: 'Description text',
    },
  },
  vi: {
    // ... existing translations
    newSection: {
      title: 'Phần mới',
      description: 'Văn bản mô tả',
    },
  },
};
```

### Step 2: Update Data Files (if needed)
If adding new data that needs translation:

```typescript
// utils/data/new-data.ts
interface MultilingualNewData {
  en: NewDataItem[];
  vi: NewDataItem[];
}

export const newData: MultilingualNewData = {
  en: [
    { id: 1, title: 'English Title', description: 'English description' }
  ],
  vi: [
    { id: 1, title: 'Tiêu đề tiếng Việt', description: 'Mô tả tiếng Việt' }
  ],
};

export const getNewData = (locale: 'en' | 'vi' = 'en') => {
  return newData[locale];
};
```

### Step 3: Update Components
Use translations and localized data in components:

```typescript
// app/components/new-section/index.tsx
import { useTranslation } from '@/app/context/I18nContext';
import { getNewData } from '@/utils/data/new-data';

const NewSection: FC = () => {
  const { locale, t } = useTranslation();
  const data = getNewData(locale);

  return (
    <div>
      <h2>{t('newSection.title')}</h2>
      <p>{t('newSection.description')}</p>
      {/* Use localized data */}
    </div>
  );
};
```

## Adding New Languages

To add a new language (e.g., French):

### Step 1: Update Type Definition
```typescript
type Locale = 'en' | 'vi' | 'fr';
```

### Step 2: Add Translations
Add `fr` object to all translation objects in I18nContext and data files.

### Step 3: Update Language Switcher
Add French option to the LanguageSwitcher component.

## Best Practices

1. **Consistent Keys**: Use descriptive, hierarchical keys like `section.subsection.item`
2. **Fallbacks**: Always provide English as fallback
3. **Context**: Include context in translation keys (e.g., `button.save` vs `form.save`)
4. **Data Separation**: Keep UI translations separate from content data
5. **Helper Functions**: Always create helper functions for data access

## File Structure

```
app/
├── context/
│   └── I18nContext.tsx          # Translation context and UI text
├── components/
│   ├── LanguageSwitcher.tsx     # Language switcher UI
│   └── [components using translations]
utils/
└── data/
    ├── personal-data.ts         # Personal info in multiple languages
    ├── experience.ts            # Experience data in multiple languages
    ├── educations.ts           # Education data in multiple languages
    ├── projects-data.ts        # Projects data in multiple languages
    └── [other data files]
```

## Current Implementation Status

✅ **Completed:**
- Basic I18nContext with comprehensive translations
- Personal data (name changes to Vietnamese format)
- Experience data with Vietnamese translations
- Education data with Vietnamese translations
- Projects data with Vietnamese translations
- Hero section with translations
- About section with translations
- Navigation bar with translations

🔄 **Partially Completed:**
- Experience section (using new multilingual data)

⏳ **To Do:**
- Skills section
- Publications section
- News section
- Contact section
- Footer section
- Projects page
- Publications page
- Experiences page

## Quick Reference

### Common Translation Patterns

```typescript
// Get translation function and locale
const { locale, t } = useTranslation();

// Get localized data
const personalData = getPersonalData(locale);
const experiences = getExperiences(locale);
const educations = getEducations(locale);
const projects = getProjectsData(locale);

// Use translations in JSX
<h1>{t('section.title')}</h1>
<p>{t('section.description')}</p>
```

### Adding New Content

1. Add translations to I18nContext
2. Create/update data file with multilingual structure
3. Create helper function to get localized data
4. Update component to use translations and localized data
5. Test both languages work correctly