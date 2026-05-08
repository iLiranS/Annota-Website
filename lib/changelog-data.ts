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
  },
  "0.1.4": {
    "date": "2026-04-17",
    "title": "Search & Navigation Improvements",
    "common": {
      "features": [
        "Better search behavior for notes"
      ],
      "fixes": []
    },
    "desktop": {
      "features": [
        "Preserved note context when navigating between folders"
      ],
      "fixes": [
        "Fixed minor UI issues"
      ]
    },
    "mobile": {
      "features": [
        "Better and more reliable navigation system"
      ],
      "fixes": []
    }
  },
  "0.1.5": {
    "date": "2026-04-20",
    "title": "Organization & AI Enhancements",
    "common": {
      "features": [
        "Improved blockquotes rendering and behavior",
        "Added optional note counts for folders",
        "Bulk note management with move and delete options"
      ],
      "fixes": [
        "Minor editor UI improvements"
      ]
    },
    "desktop": {
      "features": [
        "AI chat now supports text selections as context",
        "Support for newer AI models",
        "Drag and drop a note into a folder",
        "IDE-style Tab indentation in the editor"
      ],
      "fixes": []
    },
    "mobile": {
      "features": [
        "Cleaned up UI by removing folder arrow buttons"
      ],
      "fixes": [
        "Fixed 'Search in note' functionality"
      ]
    }
  },
  "0.2.0": {
    "date": "2026-04-24",
    "title": "Advanced Search & Mobile AI",
    "common": {
      "features": [
        "Better Search system using SQL FTS for faster performance and better handling of large data",
        "Enhanced search with misspelling handling for multi-word queries",
        "AI chatbot with smart context and folder/note selection",
        "Improved inline code styling"
      ],
      "fixes": [
        "Fixed indent and outdent behavior in the editor"
      ]
    },
    "desktop": {
      "features": [
        "Redesigned and improved Note floating menu",
        "New shortcuts: Cmd + P for global search, Cmd + F for in-note search",
        "Advanced AI context system: supports folder/note selections with a smart scoring system to prioritize relevant context and minimize token usage",
        "Three AI context modes: Manual Selection, Active Note, and Global"
      ],
      "fixes": [
        "Fixed note count indicator positioning for RTL layouts"
      ]
    },
    "mobile": {
      "features": [
        "Full AI Chat support with Bring Your Own Key (BYOK)",
        "Native look and feel for drop-down menus"
      ],
      "fixes": []
    }
  },
  "0.2.1": {
    "date": "2026-05-02",
    "title": "Flashcards & UI Polish",
    "common": {
      "features": [
        "New global: 'Flashcards' block in editor",
        "Better AI context management"
      ],
      "fixes": []
    },
    "desktop": {
      "features": [
        "Better sleek sidebar implementation",
        "Improved editor selection reliability",
        "New: can reorder toolbar buttons"
      ],
      "fixes": []
    },
    "mobile": {
      "features": [],
      "fixes": [
        "Minor UI fixes"
      ]
    }
  },
  "0.3.0": {
    "date": "2026-05-04",
    "title": "AI Editor & Security Update",
    "common": {
      "features": [
        "In-editor AI integration for seamless content generation and editing",
        "All local data is now encrypted at rest using SQLCipher for enhanced security"
      ],
      "fixes": []
    },
    "desktop": {
      "features": [],
      "fixes": []
    },
    "mobile": {
      "features": [],
      "fixes": [
        "Minor UI issues fixes"
      ]
    }
  },
  "0.3.1": {
    "date": "2026-05-08",
    "title": "Sync & UI Refinement",
    "common": {
      "features": [
        "Dynamic image resizing with interactive drag handles",
        "More consistent login and session persistence"
      ],
      "fixes": [
        "Enhanced sync reliability with better error handling",
        "Fixed search misses on desktop with automatic index healing"
      ]
    },
    "desktop": {
      "features": [],
      "fixes": [
        "Fixed navigation issues when returning from settings",
        "Corrected sidebar resize handle alignment",
        "Improved Tab shortcut and indentation behavior",
        "Fixed sidebar tab jittering"
      ]
    },
    "mobile": {
      "features": [
        "Added pull-to-sync with a visual spinner"
      ],
      "fixes": [
        "Fixed swipe-back gesture for notes opened from Quick Access",
        "Centered the New Note button icon",
        "Improved folder name display in limited space",
        "Fixed search input glitches"
      ]
    }
  }
};
