---
layout: ../../layouts/BlogPost.astro
title: "From Manual Typing to Full Automation: Type-Safe REST Integrations with
  TSOA and Orval"
description: Build scalable, type-safe React applications with zero manual API
  code. This guide shows how TSOA, Orval, and TanStack Query work together to
  create an automated, API-first development workflow.
publishDate: 2025-10-07T10:17:00.092Z
heroImage: https://orval.dev/images/og-image.png
---
# Stop Doing Boilerplate: Building Scalable React Apps with TanStack Query and Orval

Every frontend developer knows the pain: writing endless Axios calls, maintaining type definitions by hand, and keeping frontend services in sync with backend changes. It’s repetitive, error-prone, and slows down development.

Fortunately, tools like **TSOA**, **TanStack Query**, and **Orval** make it possible to automate nearly the entire process — from backend endpoint generation to frontend data fetching hooks — all while keeping your app **type-safe**, **modular**, and **maintainable**.

---

## 🚀 The Stack

- **Backend:** TSOA + Express  
- **Frontend:** React + TanStack Query + Orval  

This setup enables an **API-first**, **type-safe**, and **auto-synced** development flow. Here’s how it works:

---

## 🧩 How It Works

1. **TSOA** automatically generates an **OpenAPI specification** from your backend controllers and models.  
2. **Orval** uses that OpenAPI spec to generate:
   - TypeScript **models**
   - Fully typed **React hooks**
   - Built-in **TanStack Query** integration  
3. The frontend instantly gets reusable, type-safe hooks such as:

        const { data, isLoading } = useGetUserList();

   No need to write Axios calls, handle responses manually, or maintain separate type definitions.

---

## ⚡ Benefits

- **Zero manual type management** — all models come directly from your backend.  
- **Auto-generated data hooks** — no need for custom service layers.  
- **Instant backend–frontend sync** — any change in your backend automatically reflects in the frontend.  
- **Reduced cognitive load** — focus on UI and business logic, not plumbing.  

Development time drops dramatically, and consistency across your stack improves significantly.

---

## 🧠 Works Great with AI-Assisted Development

If you’re using AI-powered tools like **Cursor** or **GitHub Copilot**, this setup becomes even more powerful.  
Because Orval provides strong, predictable types and models, your AI assistant doesn’t have to *guess* what you mean — it *knows*.  

You can simply prompt:  
> “Create a form using the `UserModel`”  
or  
> “Fetch data using `useGetOrders` and render it in a table.”

The AI will generate accurate, working code because your project already defines everything clearly.

---

## 🧱 Similar to Apollo Codegen (but for REST)

If you’ve used **Apollo Codegen** with GraphQL, you’ll feel right at home.  
Orval + TSOA provides the same experience for **REST APIs** — fully automated, strongly typed, and easy to maintain.

---

## 📘 Getting Started

You can explore Orval’s official React documentation here:  
👉 [https://orval.dev/guides/react-query](https://orval.dev/guides/react-query)

---

## 🧭 Final Thoughts

If you’re still manually writing types, API calls, and hooks, it’s time to upgrade your workflow.  
With **TSOA + Orval + TanStack Query**, you’ll:
- Save hours of boilerplate coding,
- Eliminate type mismatches,
- And keep your frontend perfectly aligned with your backend.

Stop writing glue code — start writing real features.
