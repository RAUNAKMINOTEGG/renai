# RenAI — Complete Frontend Workspace

**BEYOND INTELLIGENCE. BEYOND LIMITS.**

This is a responsive, multi-section RenAI front-end starter. It replaces the current static demo UI with a complete navigable workspace and working local interactions.

## Included
- Home dashboard and AI chat workspace
- Explore AI, Deep Research, AI Studio, Image Studio, Coding, Writing, Voice Assistant
- Projects, My Files, History, Saved Items
- Profile, Settings, Help & Support, Plans
- Responsive desktop/tablet/mobile layout
- Dark/light theme, animated navigation, local preview persistence
- Local file selection, project creation, saved responses, chat history

## Important: what is and is not live
This package is a **front-end build**. It does not yet call ChatGPT/Gemini APIs, perform live web research, generate images, record voice, upload files to cloud storage, or sync data to Supabase. Those need the later secure backend/API integration. The UI labels these areas honestly; no fake AI responses are generated.

Current local interactions (navigation, local chats, projects, saved items, selected-file list, theme and settings) work in the browser using localStorage. Do not use this preview storage for sensitive data.

## Deploy to the existing Render Static Site
1. Download and unzip this package.
2. Open your existing GitHub repository `RAUNAKMINOTEGG/renai`.
3. Make a backup/download of the current repository first if you want to preserve the old demo.
4. Replace the repository's deployed root files with the contents of this ZIP. The `index.html`, `styles.css`, `app.js`, and `README.md` must be at the repository root (not inside an extra nested folder).
5. Commit the changes to the same branch currently used by Render (`main`, according to the shared dashboard screenshot).
6. Render should auto-deploy after the GitHub commit. Wait for the deploy status to become **Live**, then open the existing Render URL.

Render Static Site settings should use:
- Build command: leave blank (no build step required)
- Publish directory: `.` (repository root)

If your Render settings differ, do not change them blindly; check the service settings first.

## File map
- `index.html` — app shell and navigation
- `styles.css` — responsive design system and animations
- `app.js` — page rendering and front-end interactions

## Next production phase
1. Create a separate secure backend service on Render.
2. Connect Supabase Auth, Postgres tables, Row Level Security and Storage.
3. Add server-side provider adapters for OpenAI and Gemini; keep API keys only in backend environment variables.
4. Connect chat streaming, history sync, memory, file processing, research, image and voice services.
5. Add automated tests, error handling, rate limits, usage controls and privacy controls before public production use.

Never put provider secret keys or Supabase service-role keys in `app.js` or any browser-visible file.
