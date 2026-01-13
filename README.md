# ToDooo – Learning Todo App

A small todo application written in **vanilla JavaScript**.  
This project was created **primarily as a learning exercise**, focused on understanding functional programming basics, closures, and simple state management without frameworks.

[🇨🇿 verze dole](#česky)

---

## About

ToDooo is a simple todo application built with plain HTML, CSS, and JavaScript.

This project represents a **first functional version (v1.0)**, created primarily for learning purposes.  
The focus was on understanding core concepts rather than building a complete or highly optimized solution.

While working on this project, I focused on:
- writing small, readable functions
- separating data logic, state, and UI
- understanding how application state can be handled using closures
- avoiding frameworks to better understand the fundamentals

The code is intentionally written in a clear and approachable way, reflecting my learning process as a junior developer.


---

## What I Learned

- Functional approach to data manipulation (immutable updates)
- Using closures to manage application state
- Separating responsibilities (model, state manager, UI, storage)
- Working with DOM events and event delegation
- Using data attributes to connect JavaScript logic with CSS styling
- Structuring a small project in a maintainable way

---

## Features

- Add, edit, delete, and complete todo items
- Inline editing of todo text
- Filtering by status (all / active / done)
- Filtering by category
- Category and priority visualization via CSS
- Local data storage (browser-based)
- Responsive layout (desktop & mobile)
- No frameworks, no external libraries

---

## Project Structure

The project is structured to stay simple but readable:

- `model` – pure functions working with todo data
- `store` – state management using closures
- `ui` – DOM rendering only
- `storage` – saving and loading data
- `constants` – shared enums and configuration
- `utils` – small helper functions

This structure helped me better understand how different parts of an application communicate with each other.

---

## Technologies

- HTML5
- CSS3 (custom properties, responsive layout)
- Vanilla JavaScript (ES modules, closures)

---

## Usage

Open the `index.html` file in a modern web browser.

---

## Česky

ToDooo je jednoduchá todo aplikace napsaná v čistém HTML, CSS a JavaScriptu.  
Projekt vznikl **výhradně jako učební projekt**, jehož cílem bylo lépe pochopit základy funkcionálního přístupu, closures a práci se stavem aplikace bez použití frameworků.

Projekt představuje **základní funkční verzi (v1.0)**, zaměřenou především na učení a pochopení principů, nikoli na tvorbu finální nebo produkční aplikace.

Při tvorbě projektu jsem se soustředil zejména na:
- oddělení logiky, stavu a uživatelského rozhraní
- práci se stavem pomocí closures
- pochopení základních architektonických principů menší aplikace

Projekt není zamýšlen jako produkční řešení, ale jako dokumentace mého učebního procesu a způsobu přemýšlení nad kódem.  
Zároveň slouží jako součást mého portfolia.

