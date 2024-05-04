# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# ultimate.ai Frontend-Challenge

Hello! We're excited about your interest in joining Ultimate. We also really appreciate you taking the time to
go through this task, so if you have any questions regarding this task, please don't hesitate to reach out to us!

We would like you to spend not more than a few hours on this exercise. We are primarily interested in getting a feel to
how you structure your code, and that the solution fulfills the basic requirements below. We would like to see a simple
solution to a simple problem. It doesn't need to be perfect, nor overly complex.

## Some Background Information

Most of our clients use our AI as a customer service bot in chats on their websites.
When one of their users writes a message in the chat, our AI analyzes that message to understand the user's intent and
gives the appropriate reply, for example:

---

> User: "Hello"

_AI understands that this is a Greeting_

> AI: "Hello :) How can I help you?"

---

In order to understand what the user wants, our AI is trained to recognize different intents.

For each intent, the AI gets a list of user messages (we call them expressions) as training data to learn
how users express that intent.
For every intent there will also be a reply that the AI Bot should return, once it recognized a specific intent.
For the above example the intent would look like this:

---

```
Intent: Greeting
- Training Expressions: "Hello", "Hi", "Hey there!", "Good morning!", ...
- Reply: "Hello :) How can I help you?"
```

---

Most of the intents are specific to the client's business. An airline will have different intents than an eCommerce
platform.

Some intents, however, are used by almost all of our clients. So when a client creates a new AI bot in our software, we
offer them a list of already pretrained intents as part of the bot creation process. They can choose to make use of
these pretrained intents in their AI Bot, and so save time and effort.

## Your Challenge

Attached you find a JSON file with pretrained intents.

Each item in the JSON contains the following:

- `id`: The unique ID that identifies the intent.
- `name`: The name of that intent.
- `description`: A string describing what the intent is used for.
- `trainingData`: The training data that is used to train the AI. It contains:
  - `expressionCount`: the total number of training expressions for this intent
  - `expressions`: An array with three example expressions for this intent, each with a unique `id` and a `text` field
    with the expression.
- `reply`: The reply that the bot will give when the intent is recognized, containing again a unique `id` and a `text`
  field with the actual reply.

**Your challenge is to build a page, in which our clients can see the pretrained intents and select the ones they want
to use in their AI bot.**

**This page would be one step of a wizard in the above-mentioned bot creation process
(No need to build the actual wizard of course ;)).**

We did not include a design or mockups, so you are free to solve that challenge in the way you see appropriate. The
design should be functional. It doesn't have to be very pretty. It's more important for us to see
well-structured code, tests and flawless functionality than a pretty UI.

## Minimum Requirements

- Your page allows users to get an overview over all the pretrained intents that are available (see intents.json).
- Users can see at least one example expression without any extra clicks.
- Users can select/unselect intents individually or all at once.
- There is no need to persist the selection upon reloading the page.
- A README file that explains how to start the application locally.

- Please implement as React application. You may use `create-react-app` or similar if you like.
- You are free to use any additional libraries you like.
- Your solution should work on a desktop with a modern browser.
- We want to see at least one meaningful set of tests. We prefer a primitive design with meaningful testing, rather than no tests at all.

## What we look for:

- Clean code that is easy to read and written with reusability and testability in mind.
- Well-structured components, with architecture features, as well as React features used in a reasonable manner.
- You can show off the latest library or have a go on it if you want. But please make sure this doesn't introduce more complexity.
- Comment the code only if absolutely necessary. We prefer code that is readable with as little comments as possible.
- A simple UI that is easy to understand and intuitive to use.

## Sharing your solution with us:

The simplest way to share a solution with us is via a zip file, containing all the relevant source code. Please ensure
to remove all resolved dependencies like the `node_modules` folder, as well as any `.git` folder or any other files which are not
related to the solution. We recommend that you look into the contents of the zip file before sending, to ensure it is
clean of any personal or unrelated data.

If you prefer, creating a private GitHub repository and sharing it with a few of our engineers is also an option. In
this case, please make sure to allow access to the following GitHub handles:

```
amiiit
JosephCaseUltimate
Seoudi
jaseeva
atcampbell
```

## After Thoughts

If you have any after thoughts, or a list of things that you would add if you had more time, feel free to add to the README,
we would love to read your thoughts about the challenge.

We're looking forward to receiving your solution, good luck!

The Ultimate Frontend Team.
