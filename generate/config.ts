import { Config } from "./types";

export const config: Config = {
  customPositions: {
    descriptionTemplate: "Resize focused window to the {titleLowerCase} of the screen.",
    generic: {
      description: "Move focused window to custom position",
      mode: "dropdown",
      title: "Move to Custom Position",
      icon: "window-positions/large_specCharmTemplate.png",
    },
    items: [
      {
        title: "Right 500 PX",
        description: "Resize window to 500 pixels from the right.",
        parameter: "Right 500 PX",
        icon: "window-positions/large_specCharmTemplate.png"
      },
      {
        title: "Left 500 PX",
        description: "Resize window to 500 pixels from the left.",
        parameter: "Left 500 PX",
        icon: "window-positions/large_specCharmTemplate.png"
      },
      {
        title: "Power Point",
        description: "Activate Power Point layout.",
        parameter: "Power Point",
        icon: "window-positions/large_specCharmTemplate.png"
      },
    ], // Include all custom positions as needed
  },
  layouts: {
    descriptionTemplate: "Activate the {titleLowerCase} layout.",
    generic: {
      description: "Activate layout",
      mode: "dropdown",
      title: "Activate Layout",
      icon: "window-positions/large_appToolbarTemplate.png",
    },
    items: [
      {
        title: "Two Displays",
        description: "Arrange windows across two displays.",
        parameter: "Two Displays",
        icon: "window-positions/large_appToolbarTemplate.png"
      },
      {
        title: "Focusmate Display",
        description: "Optimize window layout for Focusmate Display.",
        parameter: "Focusmate Display",
        icon: "window-positions/large_centerTemplate.png"
      },
    ], // Include all layouts as needed
  },
  actions: {
    descriptionTemplate: `Resize focused window to the {titleLowerCase} of the screen.`,
    items: [
      {
        category: "Fill",
        descriptionTemplate: "Resize focused window to fill the empty {direction} space of the screen.",
        items: [
          {
            title: "Fill Left",
            descriptionComponents: { direction: "left" },
            icon: "window-positions/large_fillLeftTemplate.png",
          },
          {
            title: "Fill Right",
            descriptionComponents: { direction: "right" },
            icon: "window-positions/large_fillRightTemplate.png",
          },
          {
            title: "Fill Top Left",
            descriptionComponents: { direction: "top left" },
            icon: "window-positions/large_fillCornersTLLargeTemplate.png",
          },
          {
            title: "Fill Top Right",
            descriptionComponents: { direction: "top right" },
            icon: "window-positions/large_fillCornersTRLargeTemplate.png",
          },
          {
            title: "Fill Bottom Left",
            descriptionComponents: { direction: "bottom left" },
            icon: "window-positions/large_fillCornersBLLargeTemplate.png",
          },
          {
            title: "Fill Bottom Right",
            descriptionComponents: { direction: "bottom right" },
            icon: "window-positions/large_fillCornersBRLargeTemplate.png",
          },
        ],
      },
      {
        category: "Maximize",
        descriptionTemplate: "Maximize {direction}focused window to fit the screen.",
        items: [
          {
            title: "Maximize",
            descriptionComponents: { direction: "" },
            icon: "window-positions/large_maximizeTemplate.png",
          },
          {
            title: "Almost Maximize",
            descriptionComponents: { direction: "" },
            icon: "window-positions/large_almostMaximizeTemplate.png",
          },
          {
            title: "Maximize Height",
            descriptionComponents: { direction: "height of " },
            icon: "window-positions/large_maximizeHeightTemplate.png",
          },
          {
            title: "Fullscreen",
            description: "Toggle fullscreen mode of focused window.",
            icon: "window-positions/fullScreenTemplate.png",
          },
        ],
      },
      {
        category: "Halves",
        items: [
          {
            title: "Left Half",
            icon: "window-positions/large_leftHalfTemplate.png",
          },
          {
            title: "Right Half",
            icon: "window-positions/large_rightHalfTemplate.png",
          },
          {
            title: "Center Half",
            icon: "window-positions/large_halfWidthCenterTemplate.png",
          },
          {
            title: "Top Half",
            icon: "window-positions/large_topHalfTemplate.png",
          },
          {
            title: "Bottom Half",
            icon: "window-positions/large_bottomHalfTemplate.png",
          },
        ],
      },
      {
        category: "Corners",
        items: [
          {
            title: "Top Left",
            icon: "window-positions/large_topLeftTemplate.png",
          },
          {
            title: "Top Right",
            icon: "window-positions/large_topRightTemplate.png",
          },
          {
            title: "Bottom Left",
            icon: "window-positions/large_bottomLeftTemplate.png",
          },
          {
            title: "Bottom Right",
            icon: "window-positions/large_bottomRightTemplate.png",
          },
        ],
      },
      {
        category: "Fourths",
        items: [
          {
            title: "First Fourth",
            icon: "window-positions/large_leftFourthTemplate.png",
          },
          {
            title: "Second Fourth",
            icon: "window-positions/large_centerLeftFourthTemplate.png",
          },
          {
            title: "Third Fourth",
            icon: "window-positions/large_centerRightFourthTemplate.png",
          },
          {
            title: "Last Fourth",
            icon: "window-positions/large_rightFourthTemplate.png",
          },
          {
            title: "First Three Fourths",
            icon: "window-positions/large_firstThreeFourthsTemplate.png",
          },
          {
            title: "Last Three Fourths",
            icon: "window-positions/large_lastThreeFourthsTemplate.png",
          },
        ],
      },
      {
        category: "Sixths",
        items: [
          {
            title: "First Sixth",
            icon: "window-positions/large_leftSixthTemplate.png",
          },
          {
            title: "Last Sixth",
            icon: "window-positions/large_rightSixthTemplate.png",
          },
        ],
      },
      {
        category: "Display",
        descriptionTemplate: "Move focused window to {direction} {type}.",
        items: [
          {
            title: "Next Display",
            descriptionComponents: { direction: "next", type: "display" },
            icon: "window-positions/large_nextDisplayTemplate.png",
          },
          {
            title: "Previous Display",
            descriptionComponents: { direction: "previous", type: "display" },
            icon: "window-positions/large_prevDisplayTemplate.png",
          },
          {
            title: "Next Display Centered",
            descriptionComponents: { direction: "center next", type: "display" },
            parameter: "next-display-ratio",
            icon: "window-positions/large_nextDisplayCenterTemplate.png",
          },
          {
            title: "Previous Display Centered",
            descriptionComponents: { direction: "previous next", type: "display" },
            parameter: "prev-display-ratio",
            icon: "window-positions/large_prevDisplayCenterTemplate.png",
          },
          {
            title: "Next Space",
            descriptionComponents: { direction: "next", type: "space" },
            icon: "window-positions/large_nextSpaceTemplate.png",
          },
          {
            title: "Previous Space",
            descriptionComponents: { direction: "previous", type: "display" },
            parameter: "prev-space",
            icon: "window-positions/large_prevSpaceTemplate.png",
          },
        ],
      },
      {
        category: "Nudge",
        descriptionTemplate: "Move focused window {direction}.",
        items: [
          {
            title: "Nudge Left",
            descriptionComponents: { direction: "left" },
            icon: "window-positions/large_nudgeLeftTemplate.png",
          },
          {
            title: "Nudge Right",
            descriptionComponents: { direction: "right" },
            icon: "window-positions/large_nudgeRightTemplate.png",
          },
          {
            title: "Nudge Up",
            descriptionComponents: { direction: "up" },
            icon: "window-positions/large_nudgeUpTemplate.png",
          },
          {
            title: "Nudge Down",
            descriptionComponents: { direction: "down" },
            icon: "window-positions/large_nudgeDownTemplate.png",
          },
        ],
      },
      {
        category: "Size",
        descriptionTemplate: "Resize focused window to be {size}.",
        items: [
          {
            title: "Larger",
            descriptionComponents: { size: "larger" },
            icon: "window-positions/large_largerTemplate.png",
          },
          {
            title: "Smaller",
            descriptionComponents: { size: "smaller" },
            icon: "window-positions/large_smallerTemplate.png",
          },
        ],
      },
      {
        category: "Other",
        items: [
          {
            title: "Center",
            description: "Center the focused window.",
            icon: "window-positions/large_centerTemplate.png",
          },
          {
            title: "Upper Center",
            description: "Move the focused window to the upper center of the screen.",
            icon: "window-positions/large_upperCenterTemplate.png",
          },
          {
            title: "Restore",
            description: "Restore the focused window to its initial position.",
            icon: "window-positions/large_restoreTemplate.png",
          },
          {
            title: "Last",
            description: "Restore the focused window to its last position.",
            icon: "window-positions/large_restore2Template.png",
          },
        ],
      },
      {
        category: "Multiple Windows",
        items: [
          {
            title: "Reveal Desktop Edge",
            description: "Reveal the desktop edge.",
            icon: "window-positions/revealDesktopEdge.png"
          },
          {
            name: "tiles2x2",
            title: "2x2 Tiles",
            description: "Tile all windows in a 2x2 grid.",
            parameter: "tile-2x2",
            icon: "window-positions/tile2x2.png"
          },
          {
            name: "tiles2x3",
            title: "2x3 Tiles",
            description: "Tile all windows in a 2x3 grid.",
            parameter: "tile-2x3",
            icon: "window-positions/tile2x3.png"
          },
          {
            title: "Cascade All Windows",
            description: "Cascade all windows.",
            parameter: "cascade-all",
            icon: "window-positions/cascadeAll.png"
          },
          {
            title: "Cascade App Windows",
            description: "Cascade focused app windows.",
            parameter: "cascade-app",
            icon: "window-positions/cascadeApp.png"
          },
          {
            title: "App Next Display",
            description: "Move focused app to the next display.",
            icon: "window-positions/large_nextDisplayTemplate.png",
          },
          {
            title: "App Previous Display",
            description: "Move focused app to the previous display.",
            parameter: "app-prev-display",
            icon: "window-positions/large_prevDisplayTemplate.png",
          },
          {
            title: "App Left Half",
            description: "Resize focused app to the left half of the screen.",
            icon: "window-positions/large_leftHalfTemplate.png",
          },
          {
            title: "App Right Half",
            description: "Resize focused app to the right half of the screen.",
            icon: "window-positions/large_rightHalfTemplate.png",
          },
          {
            title: "Tidy",
            description: "Tidy all windows.",
            parameter: "tile-all",
            icon: "window-positions/large_tidyTemplate.png",
          },
        ],
      },
      {
        category: "Stash",
        descriptionTemplate: "Stash focused window to the {direction} of the screen.",
        items: [
          {
            title: "Stash Left",
            descriptionComponents: { direction: "left" },
            icon: "window-positions/large_hideoutLeftTemplate.png"
          },
          {
            title: "Stash Right",
            descriptionComponents: { direction: "right" },
            icon: "window-positions/large_hideoutRightTemplate.png"
          },
          {
            title: "Stash Up",
            descriptionComponents: { direction: "top" },
            icon: "window-positions/large_stashUpTemplate.png"
          },
          {
            title: "Stash Bottom",
            descriptionComponents: { direction: "bottom" },
            parameter: "stash-down",
            icon: "window-positions/large_hideoutBottomTemplate.png"
          },
          {
            title: "Unstash",
            description: "Unstash all stashed windows.",
            icon: "window-positions/large_restoreTemplate.png"
          },
          {
            title: "Stash All",
            description: "Stash all windows.",
            icon: "window-positions/large_stashAllTemplate.png",
          },
          {
            title: "Stash All Except One",
            description: "Stash all windows except focused window.",
            parameter: "stash-all-but-front",
            icon: "window-positions/large_stashAllButFront.png",
          },
          {
            title: "Cycle All Stashed",
            description: "Cycle through all stashed windows.",
            parameter: "cycle-stashed",
            icon: "window-positions/large_cycleStashedTemplate.png",
          },
          {
            title: "Toggle All Stashed",
            description: "Toggle all stashed windows.",
            parameter: "toggle-stashed",
            icon: "window-positions/large_toggleTuckedTemplate.png",
          },
          {
            title: "Unstash All",
            description: "Unstash all windows.",
            icon: "window-positions/unstashAllLargeTemplate.png"
          },
        ],
      },
      {
        category: "Pin",
        items: [
          {
            title: "Pin",
            description: "Pin focused window.",
            icon: "window-positions/pinTemplate.png"
          },
          {
            title: "Reflow Pin",
            description: "Reflow pinned windows.",
            parameter: "reflow-pin",
            icon: "window-positions/toggleAllLargeTemplate.png"
          },
        ],
      },
      {
        category: "Control",
        items: [
          {
            title: "Close",
            description: "Close focused window.",
            icon: "window-positions/closeCharmTemplate.png"
          },
          {
            title: "Hide App",
            description: "Hide focused app.",
            icon: "window-positions/hideCharmTemplate.png"
          },
          {
            title: "Minimize",
            description: "Minimize focused window.",
            icon: "window-positions/minimizeCharmTemplate.png"
          },
          {
            title: "Quit App",
            description: "Quit focused app.",
            icon: "window-positions/quitCharmTemplate.png"
          },
        ],
      },
    ],
  },
};