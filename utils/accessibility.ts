/**
 * Accessibility utility functions for improving user experience
 * across different assistive technologies and user preferences.
 *
 * @fileoverview Provides helper functions for managing focus, keyboard navigation,
 * screen reader announcements, and other accessibility features.
 *
 * @since 1.0.0
 */

/**
 * Trap focus within a specific element (useful for modals, dropdowns)
 * @param element - The element to trap focus within
 * @returns Function to remove the focus trap
 */
export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);

  // Focus the first element
  firstElement?.focus();

  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
}

/**
 * Announce message to screen readers using aria-live region
 * @param message - Message to announce
 * @param priority - Priority level ('polite' or 'assertive')
 */
export function announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.setAttribute('class', 'sr-only');
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Check if user prefers reduced motion
 * @returns boolean indicating if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check if user prefers high contrast
 * @returns boolean indicating if high contrast is preferred
 */
export function prefersHighContrast(): boolean {
  return window.matchMedia('(prefers-contrast: high)').matches;
}

/**
 * Get the appropriate animation duration based on user preferences
 * @param normalDuration - Normal animation duration in milliseconds
 * @returns Adjusted duration based on user preferences
 */
export function getAnimationDuration(normalDuration: number): number {
  return prefersReducedMotion() ? 0 : normalDuration;
}

/**
 * Handle keyboard navigation for dropdown menus
 * @param event - Keyboard event
 * @param items - Array of menu items
 * @param currentIndex - Currently focused item index
 * @param onSelect - Function to call when item is selected
 * @param onClose - Function to call when menu should close
 * @returns New focus index
 */
export function handleDropdownNavigation(
  event: KeyboardEvent,
  items: HTMLElement[],
  currentIndex: number,
  onSelect: (index: number) => void,
  onClose: () => void
): number {
  let newIndex = currentIndex;

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      newIndex = (currentIndex + 1) % items.length;
      items[newIndex]?.focus();
      break;
    case 'ArrowUp':
      event.preventDefault();
      newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      items[newIndex]?.focus();
      break;
    case 'Home':
      event.preventDefault();
      newIndex = 0;
      items[newIndex]?.focus();
      break;
    case 'End':
      event.preventDefault();
      newIndex = items.length - 1;
      items[newIndex]?.focus();
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      onSelect(currentIndex);
      break;
    case 'Escape':
      event.preventDefault();
      onClose();
      break;
  }

  return newIndex;
}

/**
 * Create a unique ID for form elements and labels
 * @param prefix - Prefix for the ID
 * @returns Unique ID string
 */
export function createUniqueId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Ensure an element is visible to screen readers
 * @param element - Element to make visible to screen readers
 * @param label - Label for the element
 */
export function ensureScreenReaderVisible(
  element: HTMLElement,
  label?: string
): void {
  if (
    !element.getAttribute('aria-label') &&
    !element.getAttribute('aria-labelledby')
  ) {
    if (label) {
      element.setAttribute('aria-label', label);
    }
  }
}

/**
 * Check if an element is currently visible on screen
 * @param element - Element to check
 * @returns boolean indicating if element is visible
 */
export function isElementVisible(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Smoothly scroll to element with respect to user motion preferences
 * @param element - Element to scroll to
 * @param offset - Optional offset from top
 */
export function smoothScrollToElement(element: HTMLElement, offset = 0): void {
  const elementPosition = element.offsetTop - offset;
  const scrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth';

  window.scrollTo({
    top: elementPosition,
    behavior: scrollBehavior,
  });
}

/**
 * Manage focus restoration after modal or dropdown closes
 */
export class FocusManager {
  private previousFocus: HTMLElement | null = null;

  /**
   * Save the currently focused element
   */
  saveFocus(): void {
    this.previousFocus = document.activeElement as HTMLElement;
  }

  /**
   * Restore focus to the previously focused element
   */
  restoreFocus(): void {
    if (this.previousFocus && typeof this.previousFocus.focus === 'function') {
      this.previousFocus.focus();
    }
  }

  /**
   * Set focus to a specific element
   * @param element - Element to focus
   */
  setFocus(element: HTMLElement): void {
    element.focus();
  }
}

/**
 * Validate that interactive elements meet accessibility standards
 * @param element - Element to validate
 * @returns Validation results
 */
export function validateAccessibility(element: HTMLElement): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check for missing alt text on images
  if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
    errors.push('Image missing alt attribute');
  }

  // Check for buttons without accessible names
  if (
    element.tagName === 'BUTTON' &&
    !element.textContent?.trim() &&
    !element.getAttribute('aria-label') &&
    !element.getAttribute('aria-labelledby')
  ) {
    errors.push('Button missing accessible name');
  }

  // Check for sufficient color contrast (basic check)
  const style = window.getComputedStyle(element);
  const color = style.color;
  const backgroundColor = style.backgroundColor;

  if (color && backgroundColor && color === backgroundColor) {
    warnings.push('Text and background colors are identical');
  }

  // Check for minimum touch target size
  const rect = element.getBoundingClientRect();
  if (
    (element.tagName === 'BUTTON' ||
      element.getAttribute('role') === 'button') &&
    (rect.width < 44 || rect.height < 44)
  ) {
    warnings.push('Interactive element may be too small for touch devices');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}
