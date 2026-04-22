# 📊 Lists & Tables (JSX) — Option-E Notes

Elements for organizing data into lists and tabular structures. Essential for displaying ordered content, definitions, and structured data.

---

## 🗺️ The Big Map

```
LISTS & TABLES
│
├── Lists
│     ├── Unordered Lists
│     │     ├── <ul>  → bullet list container
│     │     └── <li>  → list item
│     │
│     ├── Ordered Lists
│     │     ├── <ol>  → numbered list container
│     │     └── <li>  → list item
│     │
│     └── Description Lists
│           ├── <dl>  → definition list container
│           ├── <dt>  → term/title
│           └── <dd>  → definition/description
│
└── Tables
      ├── Structure
      │     ├── <table>   → table container
      │     ├── <caption> → table title
      │     ├── <thead>   → header section
      │     ├── <tbody>   → body section
      │     └── <tfoot>   → footer section
      │
      ├── Rows & Cells
      │     ├── <tr>      → table row
      │     ├── <th>      → header cell
      │     └── <td>      → data cell
      │
      └── Columns (Advanced)
            ├── <colgroup> → column group
            └── <col>      → column definition
```

---

## 🎯 LAYER 1 — THE BIG IDEA

### Why do we need lists and tables?

**Problem:** Data needs structure.

Without structure:
- Hard to scan
- No hierarchy
- Poor readability
- Bad for screen readers

**Lists solve:**
- Ordered sequences (steps, rankings)
- Unordered collections (features, ingredients)
- Term definitions (glossaries, FAQs)

**Tables solve:**
- Comparing data across rows/columns
- Structured datasets
- Relationships between data points

**Mental Model:**
```
Lists = Vertical structure
Tables = Grid structure

List:           Table:
• Item 1        ┌─────┬─────┐
• Item 2        │ A   │ B   │
• Item 3        ├─────┼─────┤
                │ 1   │ 2   │
                └─────┴─────┘
```

---

## 📝 PART 1 — LISTS

### The Three List Types

```
1. <ul> → Unordered (bullets)
2. <ol> → Ordered (numbers)
3. <dl> → Description (term + definition)
```

---

### `<ul>` — Unordered List (Bullets)

**What it is:**
Container for bullet-point lists. Order doesn't matter.

**Contains:** `<li>` elements only.

**When to use:**
- Shopping lists
- Features
- Navigation menus
- Any unordered collection

**Basic pattern:**
```jsx
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>
```

**Renders as:**
```
• Apples
• Bananas
• Oranges
```

**Styled example:**
```jsx
<ul className="list-disc pl-5 space-y-2">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

**Nested lists:**
```jsx
<ul>
  <li>Fruits
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrots</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>
```

**Renders as:**
```
• Fruits
  ◦ Apples
  ◦ Bananas
• Vegetables
  ◦ Carrots
  ◦ Broccoli
```

---

### `<ol>` — Ordered List (Numbers)

**What it is:**
Container for numbered lists. Order **matters**.

**Contains:** `<li>` elements only.

**When to use:**
- Step-by-step instructions
- Rankings
- Sequences
- Ordered procedures

**Basic pattern:**
```jsx
<ol>
  <li>Mix ingredients</li>
  <li>Bake for 30 minutes</li>
  <li>Let cool</li>
</ol>
```

**Renders as:**
```
1. Mix ingredients
2. Bake for 30 minutes
3. Let cool
```

**Key attributes:**
- `type` — Numbering style
- `start` — Starting number
- `reversed` — Count backwards

**Numbering types:**
```jsx
// Default: numbers (1, 2, 3)
<ol type="1">

// Uppercase letters (A, B, C)
<ol type="A">

// Lowercase letters (a, b, c)
<ol type="a">

// Uppercase Roman (I, II, III)
<ol type="I">

// Lowercase Roman (i, ii, iii)
<ol type="i">
```

**Start from different number:**
```jsx
<ol start={5}>
  <li>Fifth item</li>
  <li>Sixth item</li>
  <li>Seventh item</li>
</ol>
```

**Renders as:**
```
5. Fifth item
6. Sixth item
7. Seventh item
```

**Reversed counting:**
```jsx
<ol reversed>
  <li>Third</li>
  <li>Second</li>
  <li>First</li>
</ol>
```

**Renders as:**
```
3. Third
2. Second
1. First
```

**Nested ordered lists:**
```jsx
<ol>
  <li>Main step 1
    <ol type="a">
      <li>Sub-step a</li>
      <li>Sub-step b</li>
    </ol>
  </li>
  <li>Main step 2</li>
</ol>
```

**Renders as:**
```
1. Main step 1
   a. Sub-step a
   b. Sub-step b
2. Main step 2
```

---

### `<li>` — List Item

**What it is:**
Individual item inside `<ul>` or `<ol>`.

**Must be direct child** of `<ul>` or `<ol>`.

**Can contain:**
- Text
- Links
- Other elements
- Nested lists

**Examples:**

**Plain text:**
```jsx
<ul>
  <li>Simple item</li>
</ul>
```

**With links:**
```jsx
<ul>
  <li><a href="/home">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
```

**With rich content:**
```jsx
<ul>
  <li>
    <strong>Title:</strong> Description text here
  </li>
  <li>
    <strong>Another:</strong> More content
  </li>
</ul>
```

**Custom value (for `<ol>`):**
```jsx
<ol>
  <li>First</li>
  <li value={10}>Tenth (skips to 10)</li>
  <li>Eleventh</li>
</ol>
```

**Renders as:**
```
1. First
10. Tenth
11. Eleventh
```

---

### `<dl>` — Description List

**What it is:**
List of term-definition pairs. Like a glossary or dictionary.

**Contains:** `<dt>` (term) and `<dd>` (definition).

**When to use:**
- Glossaries
- FAQs
- Metadata
- Key-value pairs
- Term definitions

**Pattern:**
```
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

**Basic example:**
```jsx
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>

  <dt>JS</dt>
  <dd>JavaScript</dd>
</dl>
```

**Renders as:**
```
HTML
    HyperText Markup Language
CSS
    Cascading Style Sheets
JS
    JavaScript
```

**Multiple definitions for one term:**
```jsx
<dl>
  <dt>React</dt>
  <dd>A JavaScript library</dd>
  <dd>Created by Facebook</dd>
  <dd>Used for building UIs</dd>
</dl>
```

**Multiple terms for one definition:**
```jsx
<dl>
  <dt>Frontend</dt>
  <dt>Client-side</dt>
  <dd>The part users see and interact with</dd>
</dl>
```

**Styled example:**
```jsx
<dl className="space-y-4">
  <div>
    <dt className="font-bold text-lg">Question 1</dt>
    <dd className="text-gray-600 ml-4">Answer to question 1</dd>
  </div>
  
  <div>
    <dt className="font-bold text-lg">Question 2</dt>
    <dd className="text-gray-600 ml-4">Answer to question 2</dd>
  </div>
</dl>
```

---

### `<dt>` — Description Term

**What it is:**
The term/name/question in a description list.

**Must be inside `<dl>`.**

**Example:**
```jsx
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

---

### `<dd>` — Description Definition

**What it is:**
The description/definition/answer for a term.

**Must be inside `<dl>`.**

**Typically indented** by browsers.

**Example:**
```jsx
<dl>
  <dt>React</dt>
  <dd>A JavaScript library for building user interfaces</dd>
</dl>
```

---

## 📊 PART 2 — TABLES

### The Big Picture

**A table is a grid:**
```
┌──────────┬──────────┬──────────┐
│ Header 1 │ Header 2 │ Header 3 │  ← <thead>
├──────────┼──────────┼──────────┤
│ Data 1   │ Data 2   │ Data 3   │  ← <tbody>
│ Data 4   │ Data 5   │ Data 6   │
├──────────┼──────────┼──────────┤
│ Footer 1 │ Footer 2 │ Footer 3 │  ← <tfoot>
└──────────┴──────────┴──────────┘
```

**Structure:**
```
<table>
  <caption>Title</caption>
  <thead>
    <tr>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
    </tr>
  </tbody>
</table>
```

---

### `<table>` — Table Container

**What it is:**
Wraps all table content.

**Contains (in order):**
1. `<caption>` (optional)
2. `<colgroup>` (optional)
3. `<thead>` (optional but recommended)
4. `<tbody>` (optional but recommended)
5. `<tfoot>` (optional)

**Basic table:**
```jsx
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>30</td>
  </tr>
</table>
```

**Styled table:**
```jsx
<table className="w-full border-collapse border">
  <thead>
    <tr>
      <th className="border p-2">Name</th>
      <th className="border p-2">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-2">John</td>
      <td className="border p-2">25</td>
    </tr>
  </tbody>
</table>
```

---

### `<caption>` — Table Title

**What it is:**
Title/description for the table.

**Must be first child** of `<table>`.

**Example:**
```jsx
<table>
  <caption>Student Grades</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>A</td>
    </tr>
  </tbody>
</table>
```

**Styled caption:**
```jsx
<caption className="text-lg font-bold mb-2">
  Employee Directory
</caption>
```

**When to use:**
- Table needs a title
- Context for screen readers
- Print-friendly tables

---

### `<thead>` — Table Header Section

**What it is:**
Groups header rows. Contains column labels.

**Contains:** `<tr>` with `<th>` cells.

**Example:**
```jsx
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$999</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
```

**Why use it:**
- Semantic structure
- Styling hook
- Screen reader navigation
- Print: repeats on each page

---

### `<tbody>` — Table Body Section

**What it is:**
Groups body/data rows.

**Contains:** `<tr>` with `<td>` cells.

**Example:**
```jsx
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>95</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>87</td>
    </tr>
    <tr>
      <td>Charlie</td>
      <td>92</td>
    </tr>
  </tbody>
</table>
```

**Multiple tbody sections:**
```jsx
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td colSpan={2} className="font-bold">Team A</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>95</td>
    </tr>
  </tbody>
  
  <tbody>
    <tr>
      <td colSpan={2} className="font-bold">Team B</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>87</td>
    </tr>
  </tbody>
</table>
```

---

### `<tfoot>` — Table Footer Section

**What it is:**
Groups footer rows. Often contains summaries/totals.

**Contains:** `<tr>` with `<td>` or `<th>` cells.

**Can appear before `<tbody>`** in HTML (browsers move it to bottom).

**Example:**
```jsx
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item 1</td>
      <td>$10</td>
    </tr>
    <tr>
      <td>Item 2</td>
      <td>$20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <td>$30</td>
    </tr>
  </tfoot>
</table>
```

**When to use:**
- Totals/summaries
- Column aggregations
- Footnotes

---

### `<tr>` — Table Row

**What it is:**
A horizontal row in the table.

**Contains:** `<th>` or `<td>` cells.

**Example:**
```jsx
<tr>
  <td>Cell 1</td>
  <td>Cell 2</td>
  <td>Cell 3</td>
</tr>
```

**With styling:**
```jsx
<tr className="hover:bg-gray-100">
  <td>John</td>
  <td>25</td>
</tr>
```

**Dynamic rows:**
```jsx
{users.map(user => (
  <tr key={user.id}>
    <td>{user.name}</td>
    <td>{user.email}</td>
  </tr>
))}
```

---

### `<th>` — Table Header Cell

**What it is:**
Header cell. Labels a column or row.

**Default styling:** Bold, centered.

**Key attributes:**
- `scope` — What the header labels ("col", "row", "colgroup", "rowgroup")
- `colSpan` — Span multiple columns
- `rowSpan` — Span multiple rows

**Column headers:**
```jsx
<thead>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Age</th>
    <th scope="col">City</th>
  </tr>
</thead>
```

**Row headers:**
```jsx
<tbody>
  <tr>
    <th scope="row">John</th>
    <td>25</td>
    <td>NYC</td>
  </tr>
</tbody>
```

**Spanning columns:**
```jsx
<thead>
  <tr>
    <th colSpan={3}>Student Information</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Grade</th>
  </tr>
</thead>
```

**Spanning rows:**
```jsx
<tbody>
  <tr>
    <th rowSpan={2}>Team A</th>
    <td>Alice</td>
    <td>95</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>87</td>
  </tr>
</tbody>
```

---

### `<td>` — Table Data Cell

**What it is:**
Data cell. Contains actual table data.

**Key attributes:**
- `colSpan` — Span multiple columns
- `rowSpan` — Span multiple rows
- `headers` — IDs of related header cells

**Basic usage:**
```jsx
<tr>
  <td>John Doe</td>
  <td>Developer</td>
  <td>$80,000</td>
</tr>
```

**Column span:**
```jsx
<tr>
  <td colSpan={3}>No data available</td>
</tr>
```

**Row span:**
```jsx
<tr>
  <td rowSpan={2}>Section 1</td>
  <td>Data A</td>
</tr>
<tr>
  <td>Data B</td>
</tr>
```

**With headers attribute (accessibility):**
```jsx
<table>
  <thead>
    <tr>
      <th id="name">Name</th>
      <th id="age">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td headers="name">John</td>
      <td headers="age">25</td>
    </tr>
  </tbody>
</table>
```

---

### `<colgroup>` & `<col>` — Column Styling

**What they are:**
Define styling for entire columns without repeating on each cell.

**`<colgroup>`** — Groups columns
**`<col>`** — Represents a column

**Must come after `<caption>`, before `<thead>`.**

**Example:**

**Style single column:**
```jsx
<table>
  <colgroup>
    <col style={{ backgroundColor: '#f0f0f0' }} />
    <col />
    <col style={{ backgroundColor: '#e0e0e0' }} />
  </colgroup>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>NYC</td>
    </tr>
  </tbody>
</table>
```

**Span multiple columns:**
```jsx
<colgroup>
  <col span={2} className="bg-blue-100" />
  <col className="bg-green-100" />
</colgroup>
```

**With classes:**
```jsx
<colgroup>
  <col className="w-1/4" />
  <col className="w-1/2" />
  <col className="w-1/4" />
</colgroup>
```

**When to use:**
- Column-wide styling
- Column widths
- Background colors
- Borders

**Limitations:**
- Only certain CSS properties work (width, background, border)
- Modern CSS Grid/Flexbox often better for layout

---

## 📋 Complete Examples

### List Example: Navigation Menu
```jsx
<nav>
  <ul className="space-y-2">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li>
      <a href="/products">Products</a>
      <ul className="ml-4 mt-2 space-y-1">
        <li><a href="/products/software">Software</a></li>
        <li><a href="/products/hardware">Hardware</a></li>
      </ul>
    </li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

### Table Example: User Directory
```jsx
<table className="w-full border-collapse">
  <caption className="text-xl font-bold mb-2">
    Employee Directory
  </caption>
  
  <thead className="bg-gray-100">
    <tr>
      <th className="border p-2 text-left">Name</th>
      <th className="border p-2 text-left">Department</th>
      <th className="border p-2 text-left">Email</th>
      <th className="border p-2 text-right">Salary</th>
    </tr>
  </thead>
  
  <tbody>
    <tr className="hover:bg-gray-50">
      <td className="border p-2">John Doe</td>
      <td className="border p-2">Engineering</td>
      <td className="border p-2">john@example.com</td>
      <td className="border p-2 text-right">$80,000</td>
    </tr>
    <tr className="hover:bg-gray-50">
      <td className="border p-2">Jane Smith</td>
      <td className="border p-2">Design</td>
      <td className="border p-2">jane@example.com</td>
      <td className="border p-2 text-right">$75,000</td>
    </tr>
  </tbody>
  
  <tfoot className="bg-gray-100 font-bold">
    <tr>
      <td className="border p-2" colSpan={3}>Total</td>
      <td className="border p-2 text-right">$155,000</td>
    </tr>
  </tfoot>
</table>
```

### Dynamic Table from Data
```jsx
function UserTable({ users }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => editUser(user.id)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

---

## 🎯 Quick Reference

### Lists

| Element | Purpose | Contains |
|---------|---------|----------|
| `<ul>` | Unordered list | `<li>` |
| `<ol>` | Ordered list | `<li>` |
| `<li>` | List item | Any content |
| `<dl>` | Description list | `<dt>`, `<dd>` |
| `<dt>` | Term/title | Text |
| `<dd>` | Definition | Text |

### Tables

| Element | Purpose | Contains |
|---------|---------|----------|
| `<table>` | Table container | All table elements |
| `<caption>` | Table title | Text |
| `<thead>` | Header section | `<tr>` |
| `<tbody>` | Body section | `<tr>` |
| `<tfoot>` | Footer section | `<tr>` |
| `<tr>` | Table row | `<th>`, `<td>` |
| `<th>` | Header cell | Content |
| `<td>` | Data cell | Content |
| `<colgroup>` | Column group | `<col>` |
| `<col>` | Column def | Empty |

---

## 💡 Core Principles

1. **Lists need `<li>`** — Don't put text directly in `<ul>` or `<ol>`
2. **Use semantic lists** — Choose list type by meaning, not appearance
3. **Tables are for data** — Not for layout (use CSS Grid/Flexbox)
4. **Use `<thead>`, `<tbody>`** — Better structure and styling
5. **Scope your headers** — `scope="col"` or `scope="row"`
6. **Caption your tables** — Accessibility and context

---

## 🚀 Best Practices

### Lists
✅ Use `<ul>` when order doesn't matter  
✅ Use `<ol>` for sequential steps  
✅ Use `<dl>` for term-definition pairs  
✅ Nest lists properly (inside `<li>`)  
✅ Don't use lists just for indentation  

### Tables
✅ Use tables for tabular data only  
✅ Include `<thead>`, `<tbody>`, `<tfoot>`  
✅ Add `<caption>` for context  
✅ Use `<th scope="col">` for column headers  
✅ Use `<th scope="row">` for row headers  
✅ Make tables responsive (horizontal scroll or stacking)  
✅ Provide alternative formats for complex tables  

---
