# Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/485158ec-68ae-42c3-b5ad-31dc02d3c8e1/deploy-status)](https://app.netlify.com/sites/planner-docs/deploys)

# General
- Eleventy
- Serve with "npm run serve"
- All src in "src", with site being generated to "_site".

### Goals
- Automatic, from content
- Ordered how I want (sections and pages within those sections)
- Ability to use markdown
- Only 2 levels, custom template for TOC generation

## How it's put together
- Using PrettyDocs as a base:
    - https://themes.3rdwavemedia.com/bootstrap-templates/startup/prettydocs-free-bootstrap-theme-for-developers-and-startups/
    
- markdown-it-attrs is in, so you can write things like {.foo} to add class="foo" to the output.

- TOC is built using two levels, and tags on the documents
    - Top level docs have:
        - a 'docs' tag.
        - a 'submenuSlug' tag, eg:

            submenuSlug: docs-concepts

    - Sublevel docs have a 'submenuSlug' tag.

# TOC & Page Ordering
Partial slugs (must match start, e.g: like page-slug.startsWith(thing))

The page slug is lowercased. examples:
- Advanced = advanced
- global_vs_plans = global-vs-plans

You need only specify the start match. So a list containing:
- advanced
- global

would match global-vs-plans, global-plans, and also global.

- Toplevel ordering is done via the 'menuSortOrder' variable on main.njk
- Sublevel ordering is defined per page, e.g: see concepts.md

# Eleventy plugins
Markdown attributes: https://github.com/arve0/markdown-it-attrs

## Custom shortcodes
section: creates a section header, wraps content

