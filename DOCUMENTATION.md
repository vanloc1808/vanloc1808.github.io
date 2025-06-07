# Documentation Guidelines

This document outlines the documentation standards and conventions for this portfolio website project.

## Table of Contents

- [Overview](#overview)
- [JSDoc Standards](#jsdoc-standards)
- [TypeScript Documentation](#typescript-documentation)
- [Component Documentation](#component-documentation)
- [API Documentation](#api-documentation)
- [Code Comments](#code-comments)
- [Examples](#examples)

## Overview

This project follows strict documentation standards to ensure code maintainability, readability, and ease of onboarding for new developers. All public APIs, components, functions, and types must be properly documented using JSDoc comments.

## JSDoc Standards

### Required Elements

All functions, classes, interfaces, and types must include:

1. **Description**: A clear, concise description of what the item does
2. **Parameters**: All parameters with types and descriptions
3. **Returns**: Return value type and description
4. **Examples**: Usage examples when helpful
5. **Since**: Version when the item was added (optional)
6. **Author**: Author information (optional)

### JSDoc Template

````typescript
/**
 * Brief description of the function.
 *
 * Longer description if needed. This can span multiple lines
 * and provide additional context about the function's purpose,
 * behavior, or usage patterns.
 *
 * @param {Type} paramName - Description of the parameter
 * @param {Type} [optionalParam] - Description of optional parameter
 * @returns {Type} Description of the return value
 * @throws {ErrorType} Description of when this error is thrown
 * @example
 * ```typescript
 * const result = functionName(param1, param2);
 * console.log(result);
 * ```
 * @since 1.0.0
 * @author Author Name
 */
function functionName(paramName: Type, optionalParam?: Type): ReturnType {
  // Implementation
}
````

## TypeScript Documentation

### Interfaces

```typescript
/**
 * Represents a user profile with personal information.
 *
 * This interface defines the structure for user data
 * throughout the application.
 *
 * @interface UserProfile
 * @since 1.0.0
 */
interface UserProfile {
  /** Unique identifier for the user */
  id: string;

  /** User's full name */
  name: string;

  /** User's email address */
  email: string;

  /** Optional profile picture URL */
  avatar?: string;
}
```

### Type Aliases

```typescript
/**
 * Represents the possible theme options for the application.
 *
 * @typedef {('light' | 'dark' | 'auto')} ThemeMode
 * @since 1.0.0
 */
type ThemeMode = 'light' | 'dark' | 'auto';
```

### Enums

```typescript
/**
 * Defines the available user roles in the system.
 *
 * @enum {string}
 * @readonly
 * @since 1.0.0
 */
enum UserRole {
  /** Standard user with basic permissions */
  USER = 'user',

  /** Administrator with full system access */
  ADMIN = 'admin',

  /** Moderator with limited administrative permissions */
  MODERATOR = 'moderator',
}
```

## Component Documentation

### React Components

````typescript
/**
 * Properties for the Button component.
 *
 * @interface ButtonProps
 */
interface ButtonProps {
  /** The text content of the button */
  children: React.ReactNode;

  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'danger';

  /** Whether the button is disabled */
  disabled?: boolean;

  /** Click event handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A reusable button component with various styling options.
 *
 * This component provides a consistent button interface across
 * the application with support for different variants and states.
 *
 * @component
 * @param {ButtonProps} props - The component properties
 * @returns {JSX.Element} The rendered button element
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * <Button variant="danger" disabled>
 *   Delete
 * </Button>
 * ```
 *
 * @since 1.0.0
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
````

### Custom Hooks

````typescript
/**
 * Configuration options for the useLocalStorage hook.
 *
 * @interface UseLocalStorageOptions
 */
interface UseLocalStorageOptions<T> {
  /** Serializer function for complex objects */
  serializer?: {
    read: (value: string) => T;
    write: (value: T) => string;
  };
}

/**
 * Custom hook for managing localStorage with React state.
 *
 * This hook provides a simple interface for persisting state
 * in localStorage while keeping it synchronized with React state.
 *
 * @template T - The type of the stored value
 * @param {string} key - The localStorage key
 * @param {T} initialValue - The initial value if none exists in localStorage
 * @param {UseLocalStorageOptions<T>} [options] - Additional configuration options
 * @returns {[T, (value: T | ((val: T) => T)) => void]} The current value and setter function
 *
 * @example
 * ```typescript
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 * ```
 *
 * @example
 * ```typescript
 * const [user, setUser] = useLocalStorage('user', null, {
 *   serializer: {
 *     read: (value) => JSON.parse(value),
 *     write: (value) => JSON.stringify(value)
 *   }
 * });
 * ```
 *
 * @since 1.0.0
 */
function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options?: UseLocalStorageOptions<T>
): [T, (value: T | ((val: T) => T)) => void] {
  // Implementation
}
````

## API Documentation

### API Routes

````typescript
/**
 * Request body for creating a new user.
 *
 * @interface CreateUserRequest
 */
interface CreateUserRequest {
  /** User's full name */
  name: string;

  /** User's email address */
  email: string;

  /** User's password */
  password: string;
}

/**
 * Response data for successful user creation.
 *
 * @interface CreateUserResponse
 */
interface CreateUserResponse {
  /** The created user's information */
  user: UserProfile;

  /** Success message */
  message: string;
}

/**
 * Creates a new user account.
 *
 * This endpoint handles user registration with validation
 * and returns the created user information.
 *
 * @route POST /api/users
 * @param {NextRequest} request - The Next.js request object
 * @returns {Promise<NextResponse<CreateUserResponse>>} The created user data
 * @throws {400} When validation fails
 * @throws {409} When user already exists
 * @throws {500} When server error occurs
 *
 * @example
 * ```typescript
 * const response = await fetch('/api/users', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({
 *     name: 'John Doe',
 *     email: 'john@example.com',
 *     password: 'securepassword'
 *   })
 * });
 * ```
 *
 * @since 1.0.0
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<CreateUserResponse>> {
  // Implementation
}
````

## Code Comments

### Inline Comments

Use inline comments sparingly and only when the code's purpose isn't immediately clear:

```typescript
// Calculate the compound interest using the formula: A = P(1 + r/n)^(nt)
const futureValue =
  principal * Math.pow(1 + rate / frequency, frequency * time);

// TODO: Optimize this algorithm for better performance
const result = expensiveOperation(data);

// FIXME: This temporary workaround needs to be replaced
const temp = hackyWorkaround();

// NOTE: This follows the OAuth 2.0 specification
const authHeader = `Bearer ${accessToken}`;
```

### Block Comments

Use block comments for complex algorithms or business logic:

```typescript
/*
 * This function implements the Luhn algorithm for credit card validation.
 *
 * The algorithm works by:
 * 1. Starting from the rightmost digit, double every second digit
 * 2. If doubling results in a two-digit number, add the digits together
 * 3. Sum all the digits
 * 4. If the total is divisible by 10, the number is valid
 */
function validateCreditCard(cardNumber: string): boolean {
  // Implementation
}
```

## Best Practices

1. **Be Concise**: Write clear, concise descriptions without unnecessary words
2. **Use Active Voice**: Prefer "Returns the user data" over "The user data is returned"
3. **Include Examples**: Provide usage examples for complex functions or components
4. **Keep Updated**: Update documentation when code changes
5. **Use Proper Grammar**: Write in complete sentences with proper punctuation
6. **Be Consistent**: Follow the same patterns throughout the codebase
7. **Document Edge Cases**: Mention important edge cases or limitations
8. **Include Error Information**: Document when and why functions might throw errors

## Tools and Commands

### Generate Documentation

```bash
npm run docs:generate
```

### Check Documentation Coverage

```bash
npm run lint
```

### Format Documentation

```bash
npm run format
```

## Maintenance

- Review and update documentation during code reviews
- Run documentation generation regularly to catch issues
- Update examples when APIs change
- Remove outdated documentation promptly

---

For questions about documentation standards, please refer to this guide or reach out to the development team.
