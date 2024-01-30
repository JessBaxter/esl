---
title: Introduction to Markdown
nextjs:
  metadata:
    title: 'Week 4: Introduction to Markdown'
    description: ELICOS resources pertaining to science and technology.
---

Last week we talked about Technology, which includes using websites and the internet at large. This week, with our art topic, we're going to combine the two and create our very own online art reviews. We'll do this in a special language called `Markdown`. Let's see what that's all about, shall we?

---

## What is Markdown?

Think of Markdown as a simple way to style your writing on the computer. Just like how you might use a pen to underline or highlight words in a notebook, Markdown lets you format your text in a digital document. You can make words bold or italic, create lists, and more, all by typing certain symbols around your text. It's used for writing things like blog posts, comments on websites, or even your own notes in a simple and easy way.

## Why Are We Using Markdown?

### The layperson’s explanation

Your reviews are going to be added to a website, and in order to do so it needs to be written in a way that a computer understands. The computer reads all of the special symbols in your review, such as **#** and **##**, and understands that you want that text to look like **a heading**. It’s also a useful language to learn if you want to start using note-taking applications like [Obsidian](https://obsidian.md/) to help with your studies.

### The tech-savvy explanation

My site is written using [TailwindCSS](https://tailwindcss.com/) and [Next.js](https://nextjs.org/), which can create these pages just fine, but I want to allow students at all levels to make their own content for the site. Because of this, markdown is an easier language to learn if you are not experienced with coding. Additionally, you get to see _behind the curtains_ and learn a bit about how websites are made, while not being expected to know how to code.

## Basic Markdown Syntax

### Headings

_Like titles and subtitles in a book._

- Use **##** for big, important titles.
- Use **###** for sub-headings.

Looking at the words in this section, this is how they are written in markdown:

```markdown
## Basic Markdown Syntax

### Headings

_Like titles and subtitles in a book._

- Use ## for big, important titles.
- Use ### for sub-headings.

Looking at the words in this section ...
```

### Emphasis

_Like using a highlighter or changing the style of text._

- **Bold:** Use **\*\*** around your text.
- _Italic:_ Use **\_** around your text.

```markdown
This is normal text.
This sentence has **word** in bold.
**This whole sentence is bold.**
This sentence has _word_ in italic.
_This whole sentence is in italic._
```

### Lists

_Like making a shopping list or a to-do list._

**Bullets:** Start lines with **-**.  
**Numbers:** Start lines with **numbers followed by a dot**.

```markdown
- apple
- pear
- banana

1. platypus
2. kangaroo
3. koala
```

The above code looks like this on a web page:

- apple
- pear
- banana

1. platypus
2. kangaroo
3. koala

### Paragraphs

Just write like you normally do. Leave a blank line to start a new paragraph.

```markdown
This is paragraph 1. This is a sentence. Sushi is delicious.

This is paragraph 2. This is another sentence. Lasagne is better.
```
