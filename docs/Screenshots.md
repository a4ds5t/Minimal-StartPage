# Screenshots

The settings and data windows, for a quick look at what the page can do. The live app is at [start.soholocal.nl/app](https://start.soholocal.nl/app); the start page itself is linked at the top of the [README](../README.md).

The marketing landing page (`homepage.html`) uses `assets/quickstart-search.png` in the Search section: a beige frame around the live search bar, with the engine icon and thin vertical rail (variant D). Regenerate it with `node screenshots.js` from the `tests` folder after search-bar changes.

## Backgrounds

The page has three kinds of background: a picture, or no picture with a soft colour. The round button bottom right goes through the pictures you switched on under Manage data, and the button bottom left changes the colour behind them. Pick the pictures you like and leave the rest off; the page never shows a picture you did not choose.

<table>
  <tr>
    <td align="center" width="50%">
      <img src="../assets/screenshot_light.webp" width="340" alt="Misty forest"/>
      <br/>
      <sub><b>Misty forest</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="../assets/screenshot_dunes.webp" width="340" alt="Pink dunes"/>
      <br/>
      <sub><b>Pink dunes</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="../assets/screenshot_mountains.webp" width="340" alt="Mountain haze"/>
      <br/>
      <sub><b>Mountain haze</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="../assets/screenshot_tint_blue.webp" width="340" alt="No image, blue tint"/>
      <br/>
      <sub><b>No image, blue tint</b></sub>
    </td>
  </tr>
</table>

## Basic settings

The first view: the three pages (Minimal, Standard and Personal), the Advanced link, Manage data and IP details. The reset options are not here; they sit at the bottom of Advanced.

![Basic settings](images/settings-basic.png)

## Advanced settings

Every option, in groups. Weather, Show, Time format, Date, Search, AI shortcuts, Background and Language sit above the reset options. The reset section is at the bottom, in red: a backup comes first, through Manage data.

![Advanced settings](images/settings-advanced.png)

## Manage data

Your links, time zones, AI shortcuts, weather places and backgrounds, each on its own tab. Each list shows its add form; at the limit that form says so in the field, for example "5 of 5 · full", and the add button is greyed out.

![Manage data](images/manage-data.png)

The last tab, Backup, holds export and import. Export saves your settings and data to a file on your computer; import loads such a file and either merges it with what you have or replaces everything.

![Backup tab](images/manage-backup.png)
