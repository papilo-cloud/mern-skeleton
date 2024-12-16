# Mern-Skeleton Frontend

## Strunture
The frontend is developed based on:
- Atomic Design, and
- Component composition

### Atomic Design
Atomic design, developed by Brad Frost and Dave Olsen, is a methodology for crafting design systems with five fundamental building blocks, which, when combined, promote consistency, modularity, and scalability.
- `Atoms`: 
    - Small Components that are the base of the design, Usually they have a single input. A good example; Button, Chip, Tag, Label, Input, Icon, Surface, Typography...
- `Molecules`: 
    - A Combination of `Atoms`; Such as FormField, Tooltip, Card...
    - FormField is a combination of Input and Labels
    - Tooltip is a combination of Surface, Labels, Typography, Icon
    - Card is a combination of Surface, Labels, Typography, Icon, Button, Image.
- `Organisms`:
    - A Group of `Molecules`, `Organisms` are the UI elements that shape both the appearance and functionality of a website. They’re also the elements that start to impact user interface. The way a developer arranges molecules informs the site experience and the complexity of the finished product.
    - Examples:
      - Navigation.
      - Drawers
      - Headers
      - Forms
- `Templates`:
    - Templates are `Organisms` strung together at the page-level or beyond. They Represent the Wireframe.
    - The best example of templates are the layouts and their final parts.
- `Pages`:
    - They are ***Specific Instances*** of the `Templates`
- if you'd like to read more about it, Here's a [summary](https://bradfrost.com/blog/post/atomic-web-design/#molecules) by the Author of Atomic Design.

#### Our Approach
- For simplicity; `Atoms`, `Molecules`, and `Organisms` Will be Referred to as `Core`
  - Reasons:
    - Sometimes it can be difficult for devs to differentiate between first 3-levels
    - Some Atoms have very specific uses inside specific `Molecules`, so it doesn't add much benefit to separate them into `Atoms` Since they won't be reused elsewhere.
- `Templates` here will be refered to as `Views`

### React Component Composition
- The philosophy behind composing components in React is rooted in the principles of software engineering and functional programming. The idea is to break down complex problems into smaller, manageable pieces. In the context of React, these pieces are the components.

- Each component in React has a specific task. It encapsulates the logic required for this task, and it may contain its own state or props. The component's code is responsible for rendering some parts of the UI. When we talk about composing components, we're essentially talking about taking these independent components and combining them to form a new component.
-  If we don't use `Composition`, we will end up with [Apropcalypse](https://fbohorqu.medium.com/a-react-pattern-to-avoid-apropcalypse-b1d58a4639d2)
