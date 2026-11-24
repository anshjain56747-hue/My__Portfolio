# Ansh Jain | Portfolio

Personal portfolio website of **Ansh Jain**, MBA (Business Analytics) student specialising in Operations, Supply Chain, Logistics and Warehouse Management.

Built with plain HTML, CSS and JavaScript. There is no build step and nothing to install.

GitHub: https://github.com/anshjain56747-hue

---

## Sections

Home, About, Education, Experience, Key Work Areas, Projects, Certifications, Extra-Curricular and Contact.

An optional Photo Gallery section is also included. It stays hidden until you add photos (see below).

---

## Project structure

```
.
├── index.html            # Page shell: empty containers filled in by JavaScript
├── css/
│   ├── styles.css        # Main theme and layout
│   └── extras.css        # Photo fallback, experience cards, certificate styles
├── js/
│   ├── data.js           # ALL your content lives here (edit this file)
│   ├── components.js     # Builds each section's HTML from data.js
│   ├── app.js            # Navigation, carousels, animations, modals
│   └── certificates.js   # Certificate image viewer (only used if enabled)
└── assets/
    ├── profile.png       # Your profile photo (shown in a circle)
    ├── Ansh_Jain_Resume.pdf
    └── certificates/     # Optional certificate images
```

The page loads `data.js`, then `components.js` turns that data into HTML, then `app.js` adds the interactivity. To change what the site says, you almost never need to touch anything except `js/data.js`.

---

## Run it locally

Open `index.html` in a browser. Or, for a closer match to a real website, start a small local server from the project folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

---

## Editing your content

Everything is in `js/data.js`.

| To change | Edit this part of `data.js` |
|---|---|
| Name, role, contact details, photo path, resume path | `personal` |
| About text and highlights | `about` |
| Skills | `skills.categories` |
| Education | `education` |
| Internships and leadership roles | `experience` |
| Key Work Areas cards | `internshipProjects` |
| Projects carousel | `projects` |
| Certifications | `certifications` |
| Extra-curricular activities | `extracurricular` |
| Contact heading and email, phone, LinkedIn, GitHub | `contact` |

Notes:
- **Projects:** set `link` to a real URL to show a "View Project" button. While it is `"#"`, the button reads "Discuss This Project" and jumps to the Contact section.
- **GitHub:** if `personal.github` is `"#"`, the GitHub button in the footer is hidden automatically.
- **Hero numbers:** the three figures under the intro are in `personal.heroStats`.

### Profile photo

Save your photo as `assets/profile.png`, or change `personal.profilePhoto` in `data.js` to your file's path. A square photo with your face near the centre works best, because it is shown in a circle. If the file is missing, your initials are shown instead.

### Certificates

Certificate cards currently show only the name, issuer and year. To show certificate images with a click-to-enlarge viewer:

1. Add the images to `assets/certificates/` and make sure each `image:` path in `data.js` matches the file name.
2. In `data.js`, set:

   ```js
   settings: {
     showCertificateImages: true
   },
   ```

### Photo gallery (optional)

Add this to `data.js` to show a photo carousel. It is hidden when absent:

```js
photoGallery: {
  tag: "05. PROFESSIONAL MOMENTS",
  heading: "PHOTO GALLERY",
  subtitle: "A glimpse into my internships, events and journey.",
  images: [
    { src: "assets/gallery/photo1.jpg", alt: "Short caption" }
  ]
},
```

### Colours and fonts

The colour palette and fonts are defined as variables at the top of `css/styles.css` (the `:root` block). Change them there and the whole site updates.

---

## Deploy with GitHub Pages

1. Make sure `index.html` is at the **root** of your repository (not inside a subfolder), with `css`, `js` and `assets` next to it.
2. In your repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**. Select branch **main** and folder **/ (root)**, then click **Save**.
4. After a minute or two, your site is live at:

   `https://anshjain56747-hue.github.io/<repository-name>/`

   (If the repository is named `anshjain56747-hue.github.io`, the address is just `https://anshjain56747-hue.github.io/`.)

### Troubleshooting a 404 error

- **`index.html` is in a subfolder.** Move the files so `index.html` is at the repository root.
- **Wrong Pages source.** The folder must be `/ (root)`, not `/docs`.
- **Wrong URL.** The repository name in the address must match exactly, including capitals.
- **Still deploying.** Check the **Actions** tab for a green "pages build and deployment" run.
- **Images or styles missing.** File names are case-sensitive on GitHub. `assets/Profile.png` and `assets/profile.png` are different files.

---

## Contact

- Email: jainansh0234@gmail.com
- LinkedIn: https://linkedin.com/in/ansh-jain-25a2aa290
- Location: Ghaziabad, India
