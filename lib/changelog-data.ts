export const changelogData = {
  "0.1.0": {
    "date": "2026-04-02",
    "title": "Welcome to Alpha Launch",
    "common": {
      "features": [
        "Welcome to Annota! We're excited to have you in our alpha.",
        "Explore the app and its features freely.",
        "During alpha, storage is limited to 50MB per user.",
        "Please expect and report any UI/UX bugs, crashes, or sync issues.",
        "Your feedback is what helps us improve!"
      ],
      "fixes": []
    },
    "desktop": {
      "features": [],
      "fixes": []
    },
    "mobile": {
      "features": [],
      "fixes": []
    }
  },
  "0.1.1": {
    "date": "2026-04-08",
    "title": "Weekly Update",
    "common": {
      "features": [
        "Improved table responsiveness with better minimum cell width",
        "Added zoom support for Mermaid graphs"
      ],
      "fixes": [
        "Fixed PDF preview rendering issues",
        "Fixed infinite loading on slow internet connections",
        "Improved loading indicators when fetching data"
      ]
    },
    "desktop": {
      "features": [
        "Reorder lists using Alt + Cmd + ↑/↓",
        "Added global shortcut Cmd + N to create a new note"
      ],
      "fixes": [
        "Fixed table navigation using Tab",
        "Fixed checkbox alignment in editor",
        "Fixed crash when inserting files",
        "Fixed window control buttons position on some systems",
        "Fixed error when deleting task date/time"
      ]
    },
    "mobile": {
      "features": [],
      "fixes": [
        "Improved image gallery zoom accuracy",
        "Fixed table scrolling when wider than screen",
        "Various UI fixes across editor, tables, and menus"
      ]
    }
  },
  "0.1.2": {
    "date": "2026-04-10",
    "title": "Encryption Update",
    "common": {
      "features": [
        "⚠️ Breaking: Encryption format updated to reduce storage overhead. If a note, folder, or task fails to load on other device, make a small edit to trigger re-encrypt in the new format"
      ],
      "fixes": [
        "Minor editor UI fixes",
        "Improved PDF export to match editor settings"
      ]
    },
    "desktop": {
      "features": [
        "Link right-click context menu"
      ],
      "fixes": []
    },
    "mobile": {
      "features": [],
      "fixes": []
    }
  },
  "0.1.3": {
    "date": "2026-04-14",
    "title": "Major Refactor & Desktop AI Integration",
    "common": {
      "features": [
        "Removed Tasks feature completely to focus on the core note-taking experience"
      ],
      "fixes": [
        "Minor editor bug fixes"
      ]
    },
    "desktop": {
      "features": [
        "Major architecture refactor: Combined dual sidebars into a single sleek navigation panel",
        "Integrated AI chatbot with support for local Ollama and Bring Your Own Key (BYOK)",
        "App now automatically reopens the last active note on startup",
        "Removed Home screen to streamline the user experience"
      ],
      "fixes": [
        "Various bug fixes and stability improvements"
      ]
    },
    "mobile": {
      "features": [
        "Removed Home screen: app now defaults to 'All Notes' view"
      ],
      "fixes": [
        "Minor UI enhancements and polished transitions"
      ]
    }
  }
};
