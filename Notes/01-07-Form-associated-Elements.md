# 📝 Form Elements (JSX) — Option-E Notes

Elements for collecting user input, building forms, and managing data submission in React applications.

---

## 🗺️ The Big Map

```
FORM ELEMENTS
│
├── Container & Structure
│     ├── <form>      → form wrapper
│     ├── <fieldset>  → group related inputs
│     └── <legend>    → fieldset title
│
├── Input Elements
│     ├── <input>     → single-line input (20+ types)
│     ├── <textarea>  → multi-line text
│     └── <select>    → dropdown (covered in Interactive)
│
├── Labels & Association
│     ├── <label>     → input labels
│     └── <output>    → calculation results
│
├── Actions
│     └── <button>    → form actions (covered in Interactive)
│
└── Progress & Measurement
      ├── <meter>     → gauge/measurement
      └── <progress>  → progress bar
```

---

## 🎯 LAYER 1 — THE BIG IDEA

### What problem do forms solve?

Every app needs to:
- Collect user data
- Validate that data
- Submit it somewhere
- Show feedback

Without forms, you'd build this manually every time.

### The Three Core Pieces:

1. **Container** (`<form>`) — wraps everything
2. **Inputs** (`<input>`, `<textarea>`, `<select>`) — collect data
3. **Submit** (`<button type="submit">`) — sends data

**Mental Model:**
```
┌─ <form> ─────────────────────┐
│ <label>Name:</label>          │
│ <input type="text" />         │  ← User types here
│                                │
│ <button type="submit">        │  ← User clicks here
│   Submit                       │
│ </button>                      │
└────────────────────────────────┘
       ↓
  Data submitted
```

---

## 📦 PART 1 — CONTAINER & STRUCTURE

### `<form>` — Form Container

**What it is:**
Wraps all form inputs. Handles submission and validation.

**Why use it:**
- Groups related inputs
- Handles submit events
- Native validation
- Keyboard shortcuts (Enter submits)
- Semantic structure

**Core attributes:**
- `onSubmit` — Handle form submission
- `action` — Server endpoint (if not using React)
- `method` — HTTP method (GET/POST)
- `noValidate` — Skip browser validation

**Basic Pattern:**
```jsx
function MyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();              // Stop page reload
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Line-by-line:**
```jsx
<form                              // Form container
  onSubmit={handleSubmit}          // Submit handler
  className="space-y-4"            // Styling
>
  {/* inputs here */}
  <button type="submit">Send</button>
</form>
```

**Key point:** Always `e.preventDefault()` in React to stop page reload.

---

### `<fieldset>` — Group Related Inputs

**What it is:**
Groups related form controls with a border.

**Why use it:**
- Visual grouping
- Semantic grouping
- Can disable entire group
- Better accessibility

**Used with `<legend>` for the title.**

**Example:**
```jsx
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <input name="firstName" placeholder="First Name" />
    <input name="lastName" placeholder="Last Name" />
  </fieldset>

  <fieldset>
    <legend>Contact Details</legend>
    <input name="email" type="email" />
    <input name="phone" type="tel" />
  </fieldset>
</form>
```

**Disabled fieldset:**
```jsx
<fieldset disabled>
  <legend>Unavailable Options</legend>
  <input name="option1" />
  <input name="option2" />
</fieldset>
```

**When to use:**
- Long forms with sections
- Related inputs (address, payment, etc.)
- Radio button groups
- Disable multiple inputs at once

---

### `<legend>` — Fieldset Title

**What it is:**
Caption/title for a `<fieldset>`.

**Must be first child** of `<fieldset>`.

**Example:**
```jsx
<fieldset>
  <legend>Shipping Address</legend>
  {/* inputs */}
</fieldset>
```

---

## 🔤 PART 2 — INPUT ELEMENTS

### `<input>` — Single-Line Input

**What it is:**
The workhorse of forms. One element, 20+ types.

**Core attributes:**
- `type` — Input type (text, email, password, etc.)
- `name` — Field name (for form data)
- `value` — Controlled value (React)
- `defaultValue` — Uncontrolled initial value
- `placeholder` — Hint text
- `required` — Field is required
- `disabled` — Disable input
- `onChange` — Change handler

**The Big Secret:** `type` attribute changes **everything**.

---

#### Input Types (The Essential Ones)

**Text inputs:**
```jsx
// Plain text
<input type="text" name="username" />

// Email (validates email format)
<input type="email" name="email" />

// Password (hides text)
<input type="password" name="password" />

// Search (styling hints)
<input type="search" name="query" />

// URL (validates URL format)
<input type="url" name="website" />

// Phone number
<input type="tel" name="phone" />
```

**Number inputs:**
```jsx
// Number with validation
<input type="number" name="age" min="0" max="120" />

// Range slider
<input type="range" name="volume" min="0" max="100" />
```

**Date/Time inputs:**
```jsx
// Date picker
<input type="date" name="birthday" />

// Time picker
<input type="time" name="appointment" />

// Date + time
<input type="datetime-local" name="event" />

// Month picker
<input type="month" name="startMonth" />

// Week picker
<input type="week" name="week" />
```

**Selection inputs:**
```jsx
// Checkbox (boolean)
<input type="checkbox" name="subscribe" />

// Radio button (pick one from group)
<input type="radio" name="plan" value="free" />
<input type="radio" name="plan" value="pro" />
```

**File inputs:**
```jsx
// File upload
<input type="file" name="avatar" accept="image/*" />

// Multiple files
<input type="file" name="photos" multiple />
```

**Buttons (in input form):**
```jsx
// Submit button (use <button> instead)
<input type="submit" value="Send" />

// Reset button
<input type="reset" value="Clear" />
```

**Other special types:**
```jsx
// Color picker
<input type="color" name="theme" />

// Hidden field
<input type="hidden" name="userId" value="123" />
```

---

#### Controlled vs Uncontrolled

**Controlled (React manages state):**
```jsx
const [name, setName] = useState('');

<input 
  type="text"
  value={name}                    // React controls value
  onChange={(e) => setName(e.target.value)}
/>
```

**Uncontrolled (DOM manages state):**
```jsx
<input 
  type="text"
  defaultValue="John"             // Initial value only
  name="username"
/>
```

**Rule of thumb:** Use controlled for validation/manipulation, uncontrolled for simple forms.

---

#### Common Input Patterns

**Text input with label:**
```jsx
<label>
  Username:
  <input type="text" name="username" required />
</label>
```

**Email with validation:**
```jsx
<input 
  type="email"
  name="email"
  required
  pattern="[^@]+@[^@]+\.[^@]+"
  placeholder="you@example.com"
/>
```

**Controlled input with state:**
```jsx
const [email, setEmail] = useState('');

<input 
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter email"
/>
```

**Number with min/max:**
```jsx
<input 
  type="number"
  name="age"
  min="18"
  max="100"
  required
/>
```

**Checkbox:**
```jsx
const [agreed, setAgreed] = useState(false);

<label>
  <input 
    type="checkbox"
    checked={agreed}
    onChange={(e) => setAgreed(e.target.checked)}
  />
  I agree to terms
</label>
```

**Radio buttons:**
```jsx
const [plan, setPlan] = useState('');

<label>
  <input 
    type="radio"
    name="plan"
    value="free"
    checked={plan === 'free'}
    onChange={(e) => setPlan(e.target.value)}
  />
  Free
</label>

<label>
  <input 
    type="radio"
    name="plan"
    value="pro"
    checked={plan === 'pro'}
    onChange={(e) => setPlan(e.target.value)}
  />
  Pro
</label>
```

**File upload:**
```jsx
const handleFileChange = (e) => {
  const file = e.target.files[0];
  console.log(file);
};

<input 
  type="file"
  onChange={handleFileChange}
  accept="image/*"
/>
```

---

### `<textarea>` — Multi-line Text

**What it is:**
Multi-line text input. For longer content.

**Key difference from input:**
- Multiple lines
- Content goes **between tags**, not in `value` attribute (in HTML)
- In React, use `value` attribute anyway

**Core attributes:**
- `rows` — Visible rows
- `cols` — Visible columns
- `maxLength` — Character limit
- `placeholder` — Hint text
- All standard input attributes

**Examples:**

**Basic textarea:**
```jsx
<textarea 
  name="message"
  rows={5}
  placeholder="Enter your message..."
/>
```

**Controlled textarea:**
```jsx
const [message, setMessage] = useState('');

<textarea 
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  rows={4}
  className="w-full border p-2"
/>
```

**With character count:**
```jsx
const [text, setText] = useState('');
const maxLength = 200;

<div>
  <textarea 
    value={text}
    onChange={(e) => setText(e.target.value)}
    maxLength={maxLength}
    rows={4}
  />
  <p>{text.length} / {maxLength}</p>
</div>
```

**Auto-resize textarea:**
```jsx
const textareaRef = useRef(null);

useEffect(() => {
  if (textareaRef.current) {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = 
      textareaRef.current.scrollHeight + 'px';
  }
}, [text]);

<textarea 
  ref={textareaRef}
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
```

**When to use:**
- Comments
- Descriptions
- Messages
- Long-form content
- Multi-line input

---

## 🏷️ PART 3 — LABELS & ASSOCIATION

### `<label>` — Input Labels

**What it is:**
Describes what an input is for. **Critical for accessibility.**

**Why use it:**
- Screen readers need it
- Clicking label focuses input
- Better UX
- Required for accessibility

**Two ways to associate:**

**1. Wrap input (implicit):**
```jsx
<label>
  Email:
  <input type="email" name="email" />
</label>
```

**2. Use `htmlFor` + `id` (explicit):**
```jsx
<label htmlFor="email-field">Email:</label>
<input id="email-field" type="email" name="email" />
```

**Common patterns:**

**Inline label:**
```jsx
<label className="flex items-center gap-2">
  <input type="checkbox" />
  Remember me
</label>
```

**Block label:**
```jsx
<label className="block">
  <span className="text-gray-700">Username</span>
  <input 
    type="text"
    className="mt-1 block w-full"
  />
</label>
```

**Required indicator:**
```jsx
<label>
  Email <span className="text-red-500">*</span>
  <input type="email" required />
</label>
```

**Best practices:**
- **Always label inputs** (accessibility requirement)
- Use `htmlFor` for clarity
- Keep labels short and clear
- Place labels consistently (above or beside)

---

### `<output>` — Calculation Results

**What it is:**
Displays result of a calculation or user action.

**Why use it:**
- Semantic result display
- Form integration
- Accessibility

**Core attributes:**
- `for` — IDs of inputs used in calculation
- `name` — Field name

**Example:**

**Range with output:**
```jsx
const [value, setValue] = useState(50);

<label>
  Volume: 
  <input 
    type="range"
    id="volume"
    min="0"
    max="100"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
</label>

<output htmlFor="volume">{value}</output>
```

**Calculator:**
```jsx
const [a, setA] = useState(0);
const [b, setB] = useState(0);

<input 
  type="number"
  value={a}
  onChange={(e) => setA(+e.target.value)}
/>
+
<input 
  type="number"
  value={b}
  onChange={(e) => setB(+e.target.value)}
/>
=
<output>{a + b}</output>
```

**When to use:**
- Live calculations
- Form totals
- Dynamic results
- User feedback

---

## 📊 PART 4 — PROGRESS & MEASUREMENT

### `<progress>` — Progress Bar

**What it is:**
Shows completion progress of a task.

**Core attributes:**
- `value` — Current progress
- `max` — Maximum value (default: 1)

**Examples:**

**Determinate progress (known total):**
```jsx
<progress value={70} max={100} />
```

**With percentage:**
```jsx
const [progress, setProgress] = useState(0);

<div>
  <progress value={progress} max={100} />
  <span>{progress}%</span>
</div>
```

**Indeterminate progress (unknown total):**
```jsx
// No value attribute = indeterminate
<progress />
```

**Upload progress:**
```jsx
const [uploadProgress, setUploadProgress] = useState(0);

<div>
  <label>Uploading file...</label>
  <progress value={uploadProgress} max={100} />
  <span>{uploadProgress}%</span>
</div>
```

**When to use:**
- File uploads
- Form submission
- Loading indicators
- Task completion
- Multi-step forms

---

### `<meter>` — Gauge/Measurement

**What it is:**
Shows a scalar measurement within a known range (like a fuel gauge).

**Different from `<progress>`:**
- `<progress>` → task completion (going from 0 to 100)
- `<meter>` → measurement of current state (could go up or down)

**Core attributes:**
- `value` — Current value (required)
- `min` — Minimum value (default: 0)
- `max` — Maximum value (default: 1)
- `low` — Low threshold
- `high` — High threshold
- `optimum` — Optimal value

**Examples:**

**Basic meter:**
```jsx
<meter value={0.6} />
```

**Disk usage:**
```jsx
<label>Disk Usage:</label>
<meter 
  value={75}
  min={0}
  max={100}
  low={33}
  high={66}
  optimum={10}
/>
<span>75 GB / 100 GB</span>
```

**Battery level:**
```jsx
<meter 
  value={battery}
  min={0}
  max={100}
  low={20}
  high={80}
  optimum={100}
/>
```

**Color interpretation:**
- **Green:** value in optimal range
- **Yellow:** value suboptimal but ok
- **Red:** value in bad range

**When to use:**
- Storage/quota display
- Battery levels
- Ratings/scores
- Temperature
- Any measurement with thresholds

**When NOT to use:**
- Task progress (use `<progress>`)
- Unknown maximum
- No meaningful thresholds

---

## 🎯 Complete Form Example

```jsx
function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    bio: '',
    plan: 'free',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <fieldset>
        <legend>Account Information</legend>
        
        <label className="block">
          Username:
          <input 
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>

        <label className="block">
          Email:
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="block">
          Password:
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Profile</legend>
        
        <label className="block">
          Age:
          <input 
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="13"
          />
        </label>

        <label className="block">
          Bio:
          <textarea 
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Plan Selection</legend>
        
        <label>
          <input 
            type="radio"
            name="plan"
            value="free"
            checked={formData.plan === 'free'}
            onChange={handleChange}
          />
          Free
        </label>

        <label>
          <input 
            type="radio"
            name="plan"
            value="pro"
            checked={formData.plan === 'pro'}
            onChange={handleChange}
          />
          Pro
        </label>
      </fieldset>

      <label>
        <input 
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>

      <button type="submit">Create Account</button>
    </form>
  );
}
```

---

## 📋 Quick Reference

| Element | Purpose | Key Attributes |
|---------|---------|----------------|
| `<form>` | Container | `onSubmit` |
| `<input>` | Single input | `type`, `name`, `value` |
| `<textarea>` | Multi-line | `rows`, `cols` |
| `<label>` | Input label | `htmlFor` |
| `<button>` | Submit/action | `type` |
| `<fieldset>` | Group inputs | `disabled` |
| `<legend>` | Group title | - |
| `<select>` | Dropdown | `value`, `onChange` |
| `<progress>` | Progress bar | `value`, `max` |
| `<meter>` | Measurement | `value`, `min`, `max` |
| `<output>` | Result display | `htmlFor` |

---

## 💡 Core Principles

1. **Always use labels** — Accessibility requirement
2. **Controlled components** — React manages state
3. **Prevent default** — Stop page reload on submit
4. **Name your inputs** — Required for form data
5. **Validate early** — Use HTML5 validation attributes
6. **Group related fields** — Use `<fieldset>`

---

## 🚀 Best Practices

✅ Use `<label>` for every input  
✅ Use `type="email"` for emails (free validation)  
✅ Use `required` for required fields  
✅ Show error messages clearly  
✅ Disable submit during processing  
✅ Use controlled components for complex forms  
✅ Use `placeholder` for hints, not instructions  
✅ Group radio buttons by `name`  
✅ Use `<fieldset>` for logical sections  
✅ Always `e.preventDefault()` in React forms

---

