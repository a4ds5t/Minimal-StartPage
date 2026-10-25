# Installation

Minimal-StartPage is a single web page. There is nothing to build, compile or install: you only need a web browser. Pick the option that suits you.

## Option 1: use the online version (easiest)

1. Open [https://start.soholocal.nl/app](https://start.soholocal.nl/app).
2. Make it your homepage. Look for **Homepage** or **Home** in your browser's settings and enter that address.
3. On a phone, open the page in Safari (iPhone) or Chrome (Android) and add it to your home screen:
   - **iPhone:** tap the Share button, then **Add to Home Screen**.
   - **Android:** tap the three dots, then **Add to Home screen**.

This needs an internet connection, but nothing else.

## Option 2: install a copy on your computer

Use this if you want the page to work offline, or if you want to change it yourself. You do not need admin rights or extra software.

**Step 1: download the files.** Go to the [releases page](https://github.com/a4ds5t/Minimal-StartPage/releases/latest) and click **Source code (zip)** under the latest release. That is the tested, stable version. (The green **Code** button on the main page also has a **Download ZIP**, which gives the newest version, but that one may not be released yet.)

**Step 2: unzip the file.**
- **Windows:** right-click the downloaded ZIP and choose **Extract All…**.
- **macOS:** double-click the file. A folder appears next to it.

Move the folder somewhere you will keep it, for example your Documents folder. Keep everything inside it together: the `assets` folder must stay next to `index.html`.

**Step 3: check that it works.** Open the folder and double-click `index.html`. The page opens in your browser. You should see the wallpaper, the clock and a quote.

**Step 4: copy the address.** Drag `index.html` from the folder onto your browser's address bar and let go. The address starts with `file:///` and is filled in for you. Select all of it and copy it.

**Step 5: set it as your homepage.** Paste the address into your browser's homepage setting:
- **Chrome or Edge:** open Settings, search for "homepage", turn on the home button, and choose to enter a custom web address.
- **Firefox:** open Settings, go to **Home**, and under **Homepage and new windows** choose **Custom URLs**.
- **Safari (Mac):** open Settings, go to **General**, and paste the address in the **Homepage** field.

The exact menu names can differ per browser and version. If you cannot find the setting, search the browser's settings for "homepage".

### Updating a copy

Download the ZIP again and replace the old folder with the new one. Your choices (search engine, theme, wallpaper, clock and date format) are stored in your browser, so they stay.

### Troubleshooting

- **No wallpaper, or a page without styling:** the `assets` folder or the other files are missing or were moved. Unzip the ZIP again, keeping all files together.
- **The homepage shows an error:** the address is probably wrong. Repeat step 4 and paste the new address.
- **You still see an old version:** refresh the page. The online version can take a few minutes to show new changes.

## Option 3: use Git (for developers)

If you already work with Git, clone the repository:

```bash
git clone https://github.com/a4ds5t/Minimal-StartPage.git
```

Open `index.html` in the folder, or use the `file:///` address from Option 2 as your homepage. To get the latest changes later, run `git pull` inside the folder.
