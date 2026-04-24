# 🌳 REACT SYNTAX MASTER TREE (VISUAL MODEL)

```jsx
React Syntax
│
├── 1. JSX Syntax
│     ├── 1.1) JSX Elements
│     │     ├── <div> … </div>
│     │     ├── <h1> … </h1>
│     │     ├── <p> … </p>
│     │     ├── <button> … </button>
│     │     ├── <img />
│     │     ├── <input />
│     │     ├── <select> … </select>
│     │     └── <Component />
│     │
│     ├── 1.2) JSX Attributes
│     │     ├── className=""
│     │     ├── id=""
│     │     ├── src=""
│     │     ├── alt=""
│     │     ├── type=""
│     │     ├── placeholder=""
│     │     └── onClick={}
│     │
│     ├── 1.3) JSX Children
│     │     ├── Nested tags
│     │     ├── Text content
│     │     └── Expressions { }
│     │
│     ├── 1.4) Self-closing tags
│     │     ├── <img />
│     │     ├── <input />
│     │     └── <br />
│     │
│     └── 1.5) Expressions in JSX
│           ├── { variable }
│           ├── { functionCall() }
│           ├── { condition && <UI /> }
│           ├── { isTrue ? A : B }
│           └── { array.map(...) }
│
├── 2. Component Function Syntax
│     ├── Function component
│     │     └── function ComponentName() { return (...) }
│     │
│     ├── Arrow component
│     │     └── const ComponentName = () => { return (...) }
│     │
│     ├── Return rules
│     │     ├── Must return ONE parent element
│     │     ├── return ( ... )
│     │     └── return <UI />
│     │
│     └── Props syntax
│           ├── (props)
│           ├── props.name
│           └── ({ name })
│
├── 3. Input & Event Syntax
│     ├── Input Elements
│     │     ├── <input type="text" />
│     │     ├── <input type="password" />
│     │     ├── <input type="email" />
│     │     └── <textarea />
│     │
│     ├── Form Elements
│     │     ├── <form> … </form>
│     │     ├── <select> … </select>
│     │     └── <option> … </option>
│     │
│     └── Event Handlers
│           ├── onClick={handler}
│           ├── onChange={handler}
│           ├── onSubmit={handler}
│           └── onInput={handler}
│
├── 4. State & Logic Syntax
│     ├── useState
│     │     └── const [value, setValue] = useState(default)
│     │
│     ├── setState
│     │     └── setValue(newValue)
│     │
│     ├── Conditional UI
│     │     ├── { condition && <UI /> }
│     │     ├── { condition ? A : B }
│     │     └── if (...) { ... } (outside return)
│     │
│     └── List Rendering
│           └── items.map(item => <UI key={...} />)
│
├── 5. Styling Syntax
│     ├── Inline style
│     │     └── style={{ key: "value" }}
│     │
│     ├── className
│     │     └── className="my-style"
│     │
│     ├── CSS Modules
│     │     └── import styles from "./file.module.css"
│     │          <div className={styles.box} />
│     │
│     └── Tailwind classes
│           └── className="p-4 bg-blue-500"
│
└── 6. Import/Export Syntax
      ├── Default export
      │     ├── export default Component
      │     └── import Component from "./Component"
      │
      └── Named export
            ├── export function Helper() {}
            └── import { Helper } from "./file"

```jsx

