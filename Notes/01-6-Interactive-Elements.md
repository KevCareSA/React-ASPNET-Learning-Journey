# 🎮 Interactive Elements (JSX)

Elements that enable user interaction, input, and dynamic content manipulation. These handle clicks, selections, expandable content, modals, and other interactive behaviors in your React application.

---

## 🗺️ Complete Overview

```
INTERACTIVE ELEMENTS
│
├── Navigation & Actions
│     ├── <a>        → hyperlinks (covered in Text Elements)
│     └── <button>   → clickable buttons
│
├── Expandable Content
│     ├── <details>  → collapsible container
│     └── <summary>  → details toggle header
│
├── Modals & Dialogs
│     └── <dialog>   → modal/dialog boxes
│
└── Selections
      ├── <select>   → dropdown menu
      └── <option>   → dropdown choices
```

---

## 🔘 1. Navigation & Actions

### `<button>` — Clickable Buttons

**What it is:**
An interactive element that performs an action when clicked. The primary action trigger in web interfaces.

**Why use it:**
- Form submissions
- Action triggers
- UI interactions
- State changes
- Event handlers
- Better accessibility than styled divs

**Critical attributes:**
- `type` — Button behavior ("button", "submit", "reset")
- `disabled` — Disable interaction
- `onClick` — Click event handler
- `form` — Associates button with form
- `name`, `value` — For form submission

**Button types:**
- `type="button"` — Generic button (default in React, does nothing unless you add onClick)
- `type="submit"` — Submits parent form
- `type="reset"` — Resets parent form fields

**Real JSX Examples:**

```jsx
// Basic button with onClick
<button 
  onClick={() => console.log('Clicked!')}
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  Click Me
</button>

// Submit button in form
<form onSubmit={handleSubmit}>
  <input type="text" name="username" />
  <button type="submit">
    Submit
  </button>
</form>

// Disabled button
<button 
  disabled
  className="bg-gray-300 cursor-not-allowed"
>
  Loading...
</button>

// Button with state
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

// Button with loading state
function SaveButton() {
  const [loading, setLoading] = useState(false);
  
  const handleSave = async () => {
    setLoading(true);
    await saveData();
    setLoading(false);
  };
  
  return (
    <button 
      onClick={handleSave}
      disabled={loading}
    >
      {loading ? 'Saving...' : 'Save'}
    </button>
  );
}

// Icon button
<button 
  onClick={handleDelete}
  aria-label="Delete item"
  className="p-2 hover:bg-red-100 rounded"
>
  🗑️
</button>

// Button with custom event data
<button 
  onClick={(e) => {
    e.preventDefault();
    handleClick(itemId);
  }}
>
  Delete Item
</button>
```

**Line-by-line breakdown:**
```jsx
<button                                 // Button element
  type="button"                         // Button type (not submit)
  onClick={() => handleClick()}         // Click event handler
  disabled={isLoading}                  // Conditional disable
  className="bg-blue-500 text-white"    // Styling
  aria-label="Save changes"             // Accessibility label
>
  Save                                  // Button text/content
</button>
```

**Best practices:**
- **Always specify `type`** (prevents accidental form submission)
- Use `type="button"` for non-form buttons
- Use `type="submit"` for form submissions
- Provide clear, action-oriented text
- Add `aria-label` for icon-only buttons
- Show loading states during async operations
- Disable during processing to prevent double-clicks
- Use semantic `<button>`, not styled `<div>`

**Common patterns:**

**Primary action button:**
```jsx
<button 
  type="submit"
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
>
  Create Account
</button>
```

**Secondary/Cancel button:**
```jsx
<button 
  type="button"
  onClick={onCancel}
  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded"
>
  Cancel
</button>
```

**Danger/Delete button:**
```jsx
<button 
  type="button"
  onClick={handleDelete}
  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
>
  Delete
</button>
```

**Icon button:**
```jsx
<button 
  type="button"
  onClick={handleClose}
  aria-label="Close modal"
  className="p-2 hover:bg-gray-100 rounded-full"
>
  ✕
</button>
```

**When to use:**
- Any clickable action
- Form submissions
- Modal triggers
- State changes
- Navigation with JavaScript logic

**When NOT to use:**
- Simple page navigation (use `<a>` instead)
- No JavaScript interaction needed (use `<a>`)

**Accessibility considerations:**
- Always keyboard accessible (Space/Enter trigger)
- Provide clear focus styles
- Use `aria-label` for icon-only buttons
- Include `disabled` state styling
- Announce loading states with `aria-live`

---

## 📂 2. Expandable Content

### `<details>` — Collapsible Container

**What it is:**
Creates a disclosure widget where content can be shown or hidden. Native HTML accordion/collapsible element.

**Why use it:**
- FAQs
- Expandable sections
- Progressive disclosure
- Accordion menus
- Collapsible content
- No JavaScript required (native behavior)

**Critical attributes:**
- `open` — Initially expanded state (boolean)
- `onToggle` — Event when opened/closed

**How it works:**
- Contains a `<summary>` element (the clickable header)
- Everything else inside is the collapsible content
- Browser handles open/close automatically
- Can control with `open` attribute

**Real JSX Examples:**

```jsx
// Basic collapsible content
<details>
  <summary>Click to expand</summary>
  <p>This content is hidden by default.</p>
</details>

// Initially open
<details open>
  <summary>Already expanded</summary>
  <p>This is visible on load.</p>
</details>

// FAQ item
<details className="border-b border-gray-200 py-4">
  <summary className="cursor-pointer font-semibold">
    What is React?
  </summary>
  <p className="mt-2 text-gray-600">
    React is a JavaScript library for building user interfaces.
  </p>
</details>

// Multiple details (FAQ list)
<div className="space-y-2">
  <details>
    <summary>How do I install React?</summary>
    <p>Run <code>npx create-react-app my-app</code></p>
  </details>
  
  <details>
    <summary>What is JSX?</summary>
    <p>JSX is a syntax extension for JavaScript.</p>
  </details>
  
  <details>
    <summary>How do I style components?</summary>
    <p>You can use CSS, CSS modules, or CSS-in-JS.</p>
  </details>
</div>

// Controlled details with React state
function ControlledDetails() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <details 
      open={isOpen}
      onToggle={(e) => setIsOpen(e.target.open)}
    >
      <summary>Toggle me (controlled)</summary>
      <p>Current state: {isOpen ? 'Open' : 'Closed'}</p>
    </details>
  );
}

// Details with rich content
<details className="bg-gray-50 p-4 rounded">
  <summary className="text-lg font-bold cursor-pointer">
    Advanced Configuration
  </summary>
  <div className="mt-4">
    <h4>Settings</h4>
    <ul>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
    </ul>
    <button>Save Settings</button>
  </div>
</details>

// Nested details
<details>
  <summary>Main Category</summary>
  <div className="ml-4">
    <details>
      <summary>Subcategory 1</summary>
      <p>Subcategory content</p>
    </details>
    <details>
      <summary>Subcategory 2</summary>
      <p>More content</p>
    </details>
  </div>
</details>
```

**Line-by-line breakdown:**
```jsx
<details                                // Collapsible container
  open={isOpen}                         // Controlled open state
  onToggle={(e) => handleToggle(e)}     // Toggle event handler
  className="border rounded p-4"        // Styling
>
  <summary>Click here</summary>         // Clickable header (required)
  <p>Hidden content here</p>            // Content to show/hide
</details>
```

**Event handling:**
```jsx
<details 
  onToggle={(e) => {
    console.log('Open:', e.target.open);  // boolean
  }}
>
  <summary>Toggle</summary>
  <p>Content</p>
</details>
```

**Best practices:**
- Always include exactly one `<summary>` element
- Use semantic, descriptive summary text
- Style the summary with `cursor: pointer`
- Consider keyboard accessibility (Enter/Space work natively)
- Use for progressive disclosure, not primary content
- Test with screen readers

**Styling the marker (arrow/triangle):**
```css
/* Hide default marker */
details summary {
  list-style: none;
}

/* Remove WebKit marker */
details summary::-webkit-details-marker {
  display: none;
}

/* Custom icon */
summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.2s;
}

details[open] summary::before {
  transform: rotate(90deg);
}
```

**Common use cases:**
1. **FAQ sections**
2. **Accordion menus**
3. **Settings panels**
4. **Documentation sections**
5. **Product details**
6. **Expandable filters**

**When to use:**
- Simple show/hide content
- No complex animations needed
- Native browser behavior preferred
- Accessibility important
- No JavaScript dependencies wanted

**When NOT to use:**
- Complex animations required
- Need fine control over transitions
- Need multiple items open simultaneously
- Need programmatic control from other components

**Accessibility:**
- Keyboard accessible by default (Enter/Space)
- Screen readers announce expanded/collapsed state
- Native focus management
- ARIA attributes handled automatically

---

### `<summary>` — Details Toggle Header

**What it is:**
The clickable heading/label for a `<details>` element. Acts as the toggle control.

**Why use it:**
- Provides the clickable interface
- Labels the collapsible content
- Required for `<details>` to function properly
- Can contain rich content (icons, formatting)

**Critical rules:**
- **Must be first child** of `<details>`
- **Exactly one** per `<details>` element
- Acts as button (keyboard accessible)

**Real JSX Examples:**

```jsx
// Simple text summary
<details>
  <summary>Click to expand</summary>
  <p>Content here</p>
</details>

// Rich formatted summary
<details>
  <summary className="font-bold text-lg flex items-center gap-2">
    <span>🔍</span>
    <span>Search Filters</span>
  </summary>
  <div>Filter content</div>
</details>

// Summary with icon that rotates
<details className="group">
  <summary className="flex items-center gap-2 cursor-pointer">
    <span className="transform transition-transform group-open:rotate-90">
      ▶
    </span>
    <span>Expandable Section</span>
  </summary>
  <p>Content</p>
</details>

// Custom styled summary
<details>
  <summary className="bg-blue-100 p-4 rounded hover:bg-blue-200 cursor-pointer">
    <strong>Important Information</strong>
  </summary>
  <div className="p-4">
    <p>Detailed information goes here.</p>
  </div>
</details>

// Summary with count/badge
<details>
  <summary className="flex justify-between items-center">
    <span>Notifications</span>
    <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">
      5
    </span>
  </summary>
  <ul>
    <li>Notification 1</li>
    <li>Notification 2</li>
  </ul>
</details>
```

**Line-by-line breakdown:**
```jsx
<summary                                // Summary toggle element
  className="cursor-pointer font-bold"  // Make it look clickable
  onClick={(e) => {                     // Optional additional handler
    // Custom logic before toggle
  }}
>
  Click to expand                       // Summary text/content
</summary>
```

**Best practices:**
- Make it visually obvious it's clickable (cursor, styling)
- Keep summary text concise and descriptive
- Can contain icons, badges, or other elements
- Style focus state for keyboard users
- Use flexbox for icon/text layouts

**Common patterns:**

**With icon:**
```jsx
<summary className="flex items-center gap-2">
  <span>📄</span>
  <span>Document Details</span>
</summary>
```

**With rotating chevron:**
```jsx
<summary className="flex items-center gap-2">
  <svg className="w-4 h-4 transform transition-transform group-open:rotate-180">
    {/* chevron down icon */}
  </svg>
  <span>Options</span>
</summary>
```

**Full-width clickable:**
```jsx
<summary className="w-full p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer">
  Click anywhere on this bar
</summary>
```

---

## 💬 3. Modals & Dialogs

### `<dialog>` — Modal/Dialog Boxes

**What it is:**
A native HTML element for modal dialogs, alerts, and popup windows. Provides built-in modal behavior without JavaScript libraries.

**Why use it:**
- Native modal functionality
- Automatic backdrop
- Focus trapping
- ESC key to close
- Accessibility built-in
- No external dependencies

**Critical methods:**
- `showModal()` — Open as modal (with backdrop)
- `show()` — Open as non-modal
- `close()` — Close the dialog

**Critical attributes:**
- `open` — Boolean, dialog is visible
- `onClose` — Fired when dialog closes

**Real JSX Examples:**

```jsx
// Basic dialog with show/hide
function BasicDialog() {
  const dialogRef = useRef(null);
  
  return (
    <>
      <button onClick={() => dialogRef.current.showModal()}>
        Open Dialog
      </button>
      
      <dialog ref={dialogRef}>
        <h2>Dialog Title</h2>
        <p>This is a modal dialog.</p>
        <button onClick={() => dialogRef.current.close()}>
          Close
        </button>
      </dialog>
    </>
  );
}

// Dialog with form (form method="dialog")
function FormDialog() {
  const dialogRef = useRef(null);
  
  return (
    <>
      <button onClick={() => dialogRef.current.showModal()}>
        Open Form
      </button>
      
      <dialog ref={dialogRef} className="p-6 rounded-lg">
        <form method="dialog">
          <h2>Enter Information</h2>
          <input type="text" placeholder="Name" className="border p-2 mb-4 w-full" />
          <div className="flex gap-2">
            <button type="submit">Submit</button>
            <button type="submit" value="cancel">Cancel</button>
          </div>
        </form>
      </dialog>
    </>
  );
}

// Dialog with return value
function ConfirmDialog() {
  const dialogRef = useRef(null);
  const [result, setResult] = useState('');
  
  const handleClose = () => {
    setResult(dialogRef.current.returnValue);
  };
  
  return (
    <>
      <button onClick={() => dialogRef.current.showModal()}>
        Confirm Action
      </button>
      
      <dialog ref={dialogRef} onClose={handleClose}>
        <h2>Are you sure?</h2>
        <p>This action cannot be undone.</p>
        <form method="dialog">
          <button value="confirm">Confirm</button>
          <button value="cancel">Cancel</button>
        </form>
      </dialog>
      
      {result && <p>You chose: {result}</p>}
    </>
  );
}

// Styled dialog with backdrop
function StyledDialog() {
  const dialogRef = useRef(null);
  
  return (
    <>
      <button onClick={() => dialogRef.current.showModal()}>
        Open Styled Dialog
      </button>
      
      <dialog 
        ref={dialogRef}
        className="backdrop:bg-black backdrop:bg-opacity-50 p-0 rounded-lg shadow-xl"
      >
        <div className="bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Modal Title</h2>
            <button 
              onClick={() => dialogRef.current.close()}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Modal content goes here.
          </p>
          <div className="flex justify-end gap-2">
            <button 
              onClick={() => dialogRef.current.close()}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button 
              onClick={() => dialogRef.current.close()}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Confirm
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

// Dialog with click-outside to close
function ClickOutsideDialog() {
  const dialogRef = useRef(null);
  
  const handleBackdropClick = (e) => {
    const dialog = dialogRef.current;
    const rect = dialog.getBoundingClientRect();
    
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      dialog.close();
    }
  };
  
  return (
    <>
      <button onClick={() => dialogRef.current.showModal()}>
        Open Dialog
      </button>
      
      <dialog 
        ref={dialogRef}
        onClick={handleBackdropClick}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <h2>Click outside to close</h2>
          <p>Or press ESC</p>
        </div>
      </dialog>
    </>
  );
}

// Non-modal dialog (doesn't block page)
function NonModalDialog() {
  const dialogRef = useRef(null);
  
  return (
    <>
      <button onClick={() => dialogRef.current.show()}>
        Open Non-Modal
      </button>
      
      <dialog ref={dialogRef}>
        <p>This is a non-modal dialog (page still interactive)</p>
        <button onClick={() => dialogRef.current.close()}>
          Close
        </button>
      </dialog>
    </>
  );
}
```

**Line-by-line breakdown:**
```jsx
const dialogRef = useRef(null);         // Create ref for dialog

<button 
  onClick={() => dialogRef.current.showModal()}  // Open as modal
>
  Open Dialog
</button>

<dialog                                 // Dialog element
  ref={dialogRef}                       // Attach ref
  onClose={handleClose}                 // Handle close event
  className="backdrop:bg-black backdrop:bg-opacity-50"  // Style backdrop
>
  <h2>Dialog Title</h2>                 // Dialog content
  <button onClick={() => dialogRef.current.close()}>  // Close dialog
    Close
  </button>
</dialog>
```

**Key differences: showModal() vs show():**

| Method | Backdrop | Focus Trap | ESC Key | Page Interaction |
|--------|----------|------------|---------|------------------|
| `showModal()` | ✅ Yes | ✅ Yes | ✅ Closes | ❌ Blocked |
| `show()` | ❌ No | ❌ No | ❌ No effect | ✅ Allowed |

**Form method="dialog":**
When a form inside dialog has `method="dialog"`, submitting it automatically closes the dialog and sets `returnValue` to the submit button's value:

```jsx
<dialog ref={dialogRef}>
  <form method="dialog">
    <button value="yes">Yes</button>      // Sets returnValue to "yes"
    <button value="no">No</button>        // Sets returnValue to "no"
  </form>
</dialog>

// After form submission:
console.log(dialogRef.current.returnValue);  // "yes" or "no"
```

**Styling the backdrop:**
```css
/* Using ::backdrop pseudo-element */
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

/* In Tailwind (JSX) */
className="backdrop:bg-black backdrop:bg-opacity-50 backdrop:backdrop-blur-sm"
```

**Best practices:**
- Use `useRef` to access dialog methods in React
- Use `showModal()` for true modals (most common)
- Include close button for accessibility
- ESC key closes modal by default (good UX)
- Style the backdrop with `::backdrop`
- Use `form method="dialog"` for form submissions
- Trap focus within modal (automatic with `showModal()`)
- Announce dialog opening to screen readers

**Common patterns:**

**Confirmation dialog:**
```jsx
<dialog ref={dialogRef}>
  <h2>Confirm Delete</h2>
  <p>This action cannot be undone.</p>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Delete</button>
  </form>
</dialog>
```

**Alert/notification:**
```jsx
<dialog ref={dialogRef}>
  <h2>Success!</h2>
  <p>Your changes have been saved.</p>
  <button onClick={() => dialogRef.current.close()}>
    OK
  </button>
</dialog>
```

**Form input:**
```jsx
<dialog ref={dialogRef}>
  <form onSubmit={handleSubmit}>
    <h2>Add Item</h2>
    <input type="text" name="name" />
    <button type="submit">Add</button>
  </form>
</dialog>
```

**When to use:**
- Confirmation prompts
- Alerts and notifications
- Forms that need focus
- Important messages
- User decisions required

**When NOT to use:**
- Tooltips (use tooltip components)
- Dropdowns (use `<select>` or custom dropdown)
- Slide-out panels (use aside/drawer pattern)
- Inline error messages

**Accessibility:**
- Focus trapped inside modal (automatic with `showModal()`)
- ESC key closes (automatic)
- Return focus to trigger element after close
- Backdrop prevents interaction with page
- Screen reader announces dialog opening
- Use `aria-labelledby` to connect title to dialog

**Browser support:**
- Modern browsers: ✅ Full support
- Older browsers: May need polyfill
- Check caniuse.com for current support

---

## 📋 4. Selections

### `<select>` — Dropdown Menu

**What it is:**
A form control that provides a dropdown list of options. User selects one (or multiple) options from the list.

**Why use it:**
- Pick from predefined choices
- Save space (collapsed by default)
- Native form integration
- Keyboard navigation
- Mobile-optimized (native pickers)
- Accessible by default

**Critical attributes:**
- `name` — Form field name
- `value` — Selected value (controlled)
- `defaultValue` — Initial value (uncontrolled)
- `multiple` — Allow multiple selections
- `size` — Number of visible options
- `disabled` — Disable the select
- `required` — Required field
- `onChange` — Change event handler

**Real JSX Examples:**

```jsx
// Basic uncontrolled select
<select name="country">
  <option value="">Select a country</option>
  <option value="za">South Africa</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>

// Controlled select with React state
function CountrySelect() {
  const [country, setCountry] = useState('');
  
  return (
    <select 
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      className="border rounded p-2"
    >
      <option value="">Choose a country</option>
      <option value="za">South Africa</option>
      <option value="ng">Nigeria</option>
      <option value="ke">Kenya</option>
    </select>
  );
}

// Select with grouped options
<select name="food">
  <option value="">Select a food</option>
  
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="orange">Orange</option>
  </optgroup>
  
  <optgroup label="Vegetables">
    <option value="carrot">Carrot</option>
    <option value="broccoli">Broccoli</option>
    <option value="spinach">Spinach</option>
  </optgroup>
</select>

// Multiple selection
<select 
  multiple 
  size={5}
  name="skills"
  className="border p-2"
>
  <option value="js">JavaScript</option>
  <option value="py">Python</option>
  <option value="java">Java</option>
  <option value="cpp">C++</option>
  <option value="go">Go</option>
</select>

// With default selected value
<select defaultValue="medium" name="size">
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>
</select>

// Disabled select
<select disabled className="bg-gray-100">
  <option>Loading...</option>
</select>

// Required select in form
<form onSubmit={handleSubmit}>
  <label>
    Choose a plan:
    <select name="plan" required>
      <option value="">-- Select --</option>
      <option value="free">Free</option>
      <option value="pro">Pro</option>
      <option value="enterprise">Enterprise</option>
    </select>
  </label>
  <button type="submit">Continue</button>
</form>

// Dynamic options from data
function DynamicSelect() {
  const countries = [
    { code: 'za', name: 'South Africa' },
    { code: 'us', name: 'United States' },
    { code: 'uk', name: 'United Kingdom' }
  ];
  
  const [selected, setSelected] = useState('');
  
  return (
    <select 
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      <option value="">Select country</option>
      {countries.map(country => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

// Styled select
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

**Line-by-line breakdown:**
```jsx
<select                                 // Select dropdown element
  name="country"                        // Form field name
  value={selectedValue}                 // Controlled value
  onChange={(e) => handleChange(e)}     // Change handler
  required                              // Required field
  className="border rounded p-2"        // Styling
>
  <option value="">Select...</option>   // Placeholder option
  <option value="za">South Africa</option>  // Selectable option
  <option value="us">United States</option>
</select>
```

**Getting the selected value:**
```jsx
function handleChange(event) {
  const selectedValue = event.target.value;
  console.log('Selected:', selectedValue);
  
  // For multiple select
  const selectedOptions = Array.from(event.target.selectedOptions)
    .map(option => option.value);
  console.log('Multiple selected:', selectedOptions);
}
```

**Best practices:**
- Always include a placeholder/default option
- Use controlled components in React (value + onChange)
- Provide meaningful option values (not just 1, 2, 3)
- Keep option text concise
- Use `<optgroup>` for logical grouping
- Style focus states for accessibility
- Consider custom dropdown for complex UIs

**Controlled vs Uncontrolled:**

**Controlled (React manages state):**
```jsx
const [value, setValue] = useState('');

<select value={value} onChange={(e) => setValue(e.target.value)}>
  <option value="a">Option A</option>
</select>
```

**Uncontrolled (DOM manages state):**
```jsx
<select defaultValue="a" name="choice">
  <option value="a">Option A</option>
</select>
```

**Multiple selection:**
```jsx
// Hold Ctrl/Cmd to select multiple
<select multiple size={4} name="choices">
  <option value="1">Choice 1</option>
  <option value="2">Choice 2</option>
  <option value="3">Choice 3</option>
</select>

// Getting multiple values:
const values = Array.from(event.target.selectedOptions).map(opt => opt.value);
```

**Common patterns:**

**With label:**
```jsx
<label className="block">
  <span className="text-gray-700">Country:</span>
  <select className="mt-1 block w-full">
    <option>United States</option>
    <option>Canada</option>
  </select>
</label>
```

**With validation:**
```jsx
<select 
  required
  className={error ? 'border-red-500' : 'border-gray-300'}
>
  <option value="">Select...</option>
  <option value="1">Option 1</option>
</select>
{error && <span className="text-red-500">Please select an option</span>}
```

**When to use:**
- Limited, predefined choices
- Single selection from list
- Form inputs
- Filters and sorting
- Configuration options

**When NOT to use:**
- Very long lists (consider autocomplete/search)
- Complex selections (use custom component)
- Need rich content in options (images, etc.)
- Mobile-first design priorities (native select is limited)

**Styling limitations:**
- Options can't be styled much (browser controlled)
- Arrow icon hard to customize
- For custom styling, use libraries:
  - React Select
  - Headless UI
  - Radix UI
  - Custom dropdown components

**Accessibility:**
- Keyboard navigation (Arrow keys, Home, End)
- Type to search options
- Space to open dropdown
- Enter to select
- Screen reader announces options
- Use `<label>` for proper labeling

---

### `<option>` — Dropdown Choices

**What it is:**
Defines a selectable option within a `<select>` dropdown. Each option represents one choice.

**Why use it:**
- Defines available choices
- Associates display text with values
- Can be grouped with `<optgroup>`
- Can be disabled individually

**Critical attributes:**
- `value` — Value sent to server/state (if omitted, uses text content)
- `selected` — Initially selected (use defaultValue on `<select>` instead)
- `disabled` — Disable this option
- `label` — Alternative display text

**Real JSX Examples:**

```jsx
// Basic options
<select>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>

// Option with value different from display text
<select>
  <option value="za">South Africa</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>

// Disabled option
<select>
  <option value="">Select a plan</option>
  <option value="free">Free Plan</option>
  <option value="pro" disabled>Pro Plan (Coming Soon)</option>
  <option value="enterprise">Enterprise</option>
</select>

// Option without explicit value (uses text content)
<select>
  <option>Small</option>     {/* value will be "Small" */}
  <option>Medium</option>    {/* value will be "Medium" */}
  <option>Large</option>     {/* value will be "Large" */}
</select>

// Options with label attribute
<select>
  <option value="1" label="First">Option One</option>
  <option value="2" label="Second">Option Two</option>
</select>

// Placeholder option (not selectable)
<select defaultValue="">
  <option value="" disabled>-- Choose an option --</option>
  <option value="a">Option A</option>
  <option value="b">Option B</option>
</select>

// Grouped options with optgroup
<select>
  <optgroup label="North America">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
  </optgroup>
  
  <optgroup label="Europe">
    <option value="uk">United Kingdom</option>
    <option value="de">Germany</option>
    <option value="fr">France</option>
  </optgroup>
</select>

// Options from array
function CountryOptions() {
  const countries = [
    { code: 'za', name: 'South Africa' },
    { code: 'ng', name: 'Nigeria' },
    { code: 'ke', name: 'Kenya' }
  ];
  
  return (
    <select>
      <option value="">Select country</option>
      {countries.map(country => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

// Conditional disabled options
<select>
  {items.map(item => (
    <option 
      key={item.id} 
      value={item.id}
      disabled={!item.available}
    >
      {item.name} {!item.available && '(Out of stock)'}
    </option>
  ))}
</select>
```

**Line-by-line breakdown:**
```jsx
<option                                 // Option element
  value="za"                            // Value (what gets submitted)
  disabled={isDisabled}                 // Conditionally disabled
  label="South Africa"                  // Optional alt display
>
  South Africa 🇿🇦                       // Display text (what user sees)
</option>
```

**Value vs display text:**
```jsx
// Value is "us", display is "United States"
<option value="us">United States</option>

// If no value attribute, text content is used as value
<option>United States</option>  // value will be "United States"
```

**Best practices:**
- Always provide meaningful `value` attributes
- Keep option text concise and clear
- Use `disabled` for unavailable options (don't hide them)
- Use placeholder option as first option
- Make placeholder option `disabled` so it can't be reselected
- Use `<optgroup>` for logical grouping

**Common patterns:**

**Placeholder pattern:**
```jsx
<select defaultValue="">
  <option value="" disabled>Choose...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

**With emojis/symbols:**
```jsx
<select>
  <option value="high">🔴 High Priority</option>
  <option value="med">🟡 Medium Priority</option>
  <option value="low">🟢 Low Priority</option>
</select>
```

**Conditional options:**
```jsx
<select>
  <option value="">Select size</option>
  <option value="s">Small</option>
  <option value="m">Medium</option>
  {premiumUser && <option value="xl">Extra Large (Premium)</option>}
</select>
```

**When to use:**
- Every selectable choice in a `<select>`
- Each item in a dropdown list

**Styling limitations:**
- Very limited styling options
- Can't add icons or images (text only)
- Can't customize colors much
- For rich options, use custom dropdown components

**Accessibility:**
- Screen readers announce option text
- Options automatically numbered
- Disabled options announced as unavailable
- Group labels announced with `<optgroup>`

---

### `<optgroup>` — Option Grouping

**What it is:**
Groups related options within a `<select>` dropdown with a visual label.

**Why use it:**
- Organize long option lists
- Create visual hierarchy
- Improve scannability
- Logical grouping

**Critical attributes:**
- `label` — Group heading (required)
- `disabled` — Disable entire group

**Real JSX Example:**

```jsx
<select>
  <option value="">Select a location</option>
  
  <optgroup label="Major Cities">
    <option value="jnb">Johannesburg</option>
    <option value="cpt">Cape Town</option>
    <option value="dbn">Durban</option>
  </optgroup>
  
  <optgroup label="Provinces">
    <option value="gt">Gauteng</option>
    <option value="wc">Western Cape</option>
    <option value="kzn">KwaZulu-Natal</option>
  </optgroup>
  
  <optgroup label="International" disabled>
    <option value="ldn">London</option>
    <option value="nyc">New York</option>
  </optgroup>
</select>
```

**Best practices:**
- Use descriptive group labels
- Don't nest optgroups (not supported)
- Keep groups logical and consistent
- Use sparingly (only when needed)

---

## 🎯 Quick Reference Table

| Element | Category | Primary Use | Key Attributes |
|---------|----------|-------------|----------------|
| `<button>` | Action | Clickable actions | `type`, `onClick`, `disabled` |
| `<details>` | Expandable | Collapsible content | `open`, `onToggle` |
| `<summary>` | Expandable | Toggle header | (none specific) |
| `<dialog>` | Modal | Modal dialogs | `open`, `onClose`, ref methods |
| `<select>` | Selection | Dropdown menu | `value`, `onChange`, `multiple` |
| `<option>` | Selection | Dropdown choice | `value`, `disabled` |
| `<optgroup>` | Selection | Option grouping | `label` |

---

## 💡 Core Principles

### 1. Semantic HTML
- Use `<button>` for actions, not styled divs
- Use proper form elements for inputs
- Use native elements when possible (accessibility)

### 2. Controlled Components
- Manage state with React (`value` + `onChange`)
- Consistent, predictable behavior
- Easy to validate and manipulate

### 3. Accessibility First
- Keyboard navigation works by default
- Screen reader support built-in
- Focus management automatic
- Use ARIA attributes when needed

### 4. Progressive Enhancement
- Native elements work without JavaScript
- `<details>` expands/collapses natively
- `<dialog>` provides backdrop and ESC behavior
- Form validation works without JS

### 5. Mobile Considerations
- Native `<select>` uses device picker
- Buttons large enough for touch (44x44px minimum)
- Test on actual devices
- Consider mobile-specific patterns

---

## 🚀 Best Practices Summary

### Buttons
✅ Always specify `type` attribute  
✅ Use semantic `<button>`, not styled divs  
✅ Show loading states during async operations  
✅ Disable during processing  
✅ Provide clear, action-oriented labels  
✅ Include `aria-label` for icon-only buttons  

### Details/Summary
✅ Use for progressive disclosure  
✅ Make summary visually clickable  
✅ Consider custom icons over default marker  
✅ Test keyboard navigation  
✅ Use for FAQs and collapsible sections  

### Dialog
✅ Use `useRef` for dialog control  
✅ Use `showModal()` for true modals  
✅ Style the backdrop  
✅ Include close button  
✅ Use `form method="dialog"` for forms  
✅ Return focus after closing  

### Select/Option
✅ Use controlled components in React  
✅ Always include placeholder option  
✅ Provide meaningful values  
✅ Use `<optgroup>` for grouping  
✅ Keep option text concise  
✅ Consider custom components for complex needs  

---

## 🎨 Common Patterns

### Loading Button
```jsx
<button 
  disabled={loading}
  onClick={handleSave}
>
  {loading ? 'Saving...' : 'Save'}
</button>
```

### Confirm Dialog
```jsx
<dialog ref={dialogRef}>
  <h2>Confirm Delete</h2>
  <p>Are you sure?</p>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Delete</button>
  </form>
</dialog>
```

### FAQ Section
```jsx
<details>
  <summary>How do I reset my password?</summary>
  <p>Click "Forgot Password" on the login page.</p>
</details>
```

### Controlled Select
```jsx
const [value, setValue] = useState('');

<select value={value} onChange={(e) => setValue(e.target.value)}>
  <option value="">Choose...</option>
  <option value="a">Option A</option>
</select>
```

### Icon Button
```jsx
<button 
  onClick={handleDelete}
  aria-label="Delete item"
>
  🗑️
</button>
```
