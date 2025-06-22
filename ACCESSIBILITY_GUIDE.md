# Accessibility Guide

This guide outlines the accessibility features implemented in the Van-Loc Nguyen portfolio website and how to test them.

## Implemented Accessibility Features

### 1. Keyboard Navigation

- **Tab Navigation**: All interactive elements can be accessed using the Tab key
- **Escape Key**: Press Escape to close modals and dropdowns
- **Arrow Keys**: Navigate through dropdown menus using arrow keys
- **Enter/Space**: Activate buttons and links using Enter or Spacebar
- **Skip Links**: Press Tab from the top of the page to access skip navigation links

### 2. Screen Reader Support

- **ARIA Labels**: All buttons, links, and interactive elements have descriptive labels
- **Semantic HTML**: Proper use of headings, landmarks, and semantic elements
- **Alt Text**: All images have appropriate alternative text
- **Live Regions**: Dynamic content changes are announced to screen readers
- **Screen Reader Only Content**: Important context provided for screen reader users

### 3. Focus Management

- **Visible Focus Indicators**: Clear visual focus indicators for all interactive elements
- **Focus Trapping**: Modal dialogs and dropdowns trap focus appropriately
- **Focus Restoration**: Focus returns to the trigger element when closing modals
- **Skip Links**: Quick navigation to main content and navigation

### 4. Visual Accessibility

- **High Contrast Support**: Website adapts to high contrast preferences
- **Reduced Motion**: Respects user's motion sensitivity preferences
- **Color Contrast**: Text maintains sufficient contrast ratios
- **Touch Target Size**: All interactive elements meet minimum size requirements (44px)

### 5. Responsive Design

- **Mobile Accessibility**: All features work on mobile devices
- **Zoom Support**: Website remains functional at 200% zoom
- **Portrait/Landscape**: Works in all orientations

## How to Test Accessibility

### Keyboard Testing

1. **Tab Through Everything**: Start from the top and tab through all elements
2. **Test Skip Links**: Press Tab from the top to reveal skip links
3. **Navigate Dropdowns**: Use arrow keys in the theme selector
4. **Close with Escape**: Test that Escape closes all overlays
5. **Activate with Enter/Space**: Test button and link activation

### Screen Reader Testing

**Using NVDA (Windows - Free)**:

1. Download from [nvaccess.org](https://www.nvaccess.org/)
2. Start NVDA and navigate to the website
3. Use arrow keys to read through content
4. Use H key to jump between headings
5. Use L key to navigate links
6. Use B key to navigate buttons

**Using JAWS (Windows - Paid)**:

1. Similar to NVDA but with different key commands
2. Use Insert+F7 to open elements list
3. Use semicolon to navigate headings

**Using VoiceOver (Mac - Built-in)**:

1. Enable with Cmd+F5
2. Use VO+A to read everything
3. Use VO+H to navigate headings
4. Use VO+L to navigate links

### Browser Accessibility Tools

**Chrome DevTools**:

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run Accessibility audit
4. Check Elements tab > Accessibility panel

**Firefox Developer Tools**:

1. Open DevTools (F12)
2. Go to Accessibility tab
3. Enable accessibility features
4. Check for issues

**axe DevTools Extension**:

1. Install axe DevTools browser extension
2. Open extension on any page
3. Run full accessibility scan
4. Review and fix issues

### Manual Testing Checklist

#### Basic Navigation

- [ ] Can navigate entire site using only keyboard
- [ ] All interactive elements are focusable
- [ ] Focus indicators are clearly visible
- [ ] Tab order follows logical sequence
- [ ] Skip links work properly

#### Screen Reader Compatibility

- [ ] All images have appropriate alt text
- [ ] Form fields have proper labels
- [ ] Buttons have descriptive names
- [ ] Headings are properly structured (H1 → H2 → H3)
- [ ] Page has descriptive title

#### Visual Design

- [ ] Text contrast meets WCAG AA standards (4.5:1)
- [ ] Content reflows properly at 200% zoom
- [ ] No information conveyed by color alone
- [ ] Focus indicators have sufficient contrast

#### Mobile Accessibility

- [ ] Touch targets are at least 44px
- [ ] Content is accessible in portrait/landscape
- [ ] Zoom functionality works properly
- [ ] All features work with touch navigation

## Testing Tools

### Automated Testing

- **axe-core**: JavaScript accessibility testing library
- **Pa11y**: Command line accessibility testing
- **Lighthouse**: Built into Chrome DevTools
- **WAVE**: Web accessibility evaluation tool

### Manual Testing

- **Keyboard**: Test all functionality without a mouse
- **Screen Readers**: Test with NVDA, JAWS, or VoiceOver
- **Color Contrast**: Use WebAIM Color Contrast Checker
- **Zoom**: Test at 200% browser zoom

## Common Issues to Watch For

### Critical Issues

- Images without alt text
- Buttons without accessible names
- Form inputs without labels
- Poor color contrast
- Keyboard traps
- Missing focus management

### Warning Issues

- Small touch targets
- Redundant alt text
- Missing heading structure
- Unclear link purposes
- Auto-playing media

## Accessibility Standards

This website aims to meet **WCAG 2.1 AA** standards, which include:

### Perceivable

- Text alternatives for images
- Captions for media
- Sufficient color contrast
- Resizable text

### Operable

- Keyboard accessible
- No seizure-inducing content
- Adequate time limits
- Clear navigation

### Understandable

- Readable text
- Predictable functionality
- Input assistance
- Error identification

### Robust

- Compatible with assistive technologies
- Valid HTML markup
- Progressive enhancement

## Getting Help

### Resources

- [WebAIM](https://webaim.org/) - Web accessibility resources
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11Y Project](https://www.a11yproject.com/) - Community-driven accessibility resources
- [Deque University](https://dequeuniversity.com/) - Accessibility training

### Testing Communities

- [WebAIM Mailing List](https://webaim.org/discussion/)
- [A11Y Slack Community](https://web-a11y.slack.com/)
- [Accessibility Twitter Community](https://twitter.com/hashtag/a11y)

## Reporting Issues

If you find accessibility issues with this website:

1. **Document the Issue**: What happened, what browser/assistive technology
2. **Steps to Reproduce**: Detailed steps to encounter the problem
3. **Expected Behavior**: What should have happened
4. **Impact Level**: How does this affect users

Contact: [your-email@example.com] with accessibility concerns.

---

Remember: Accessibility is not a one-time implementation but an ongoing commitment to inclusive design!
