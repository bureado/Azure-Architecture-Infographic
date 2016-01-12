# Interactive Infographic
### Open Source on Azure Depth and Breadth Marketing

Interactive infographic site built from a collection of .AI files being exported to SVGs.  The site has 5 sub-pages, and needs to be mobile friendly.



## File naming / Directory structure

*There are a ton of .svg files used with this site, here is a breakdown of how they are being named / used.*


###### `/img/`

*Default image directory*



###### `/img/infographic*/`

*5 of these directories, each one associated with one of the 5 infographic pages*



###### `/img/infographic#/infographic--[A]__fullwidth.svg`

*These are the full width (960px) images displaying any static content for each of the panels of the infographic*


###### `/img/infographic#/infographic--[A]__icon[B].svg`
*These files contain the SVG code for the clickable icons in 3 states (inactive, hovered, active)*

Creating an icon / image is done by...
- Copy & Pasting the vector art from the comp into a new file
- Converting all type to outlines
- Saved as an SVG
  - SVG Profiles: SVG 1.1
  - CSS Properties: Style Attributes
- Minify the SVG file using the Sublime Minify plugin
- Copy & Paste the minified code into the corresponding .icons



---
---
---
---

## Links to project
* *PWA link* - N/A

* *Live Site* - N/A

## Customer
Microsoft
* Sponsor - Unknown
* Technical contact - TBD

## Indigo Slate Personnel
* Project Manager - Cindy Christensen
* Other guy - Jeff Roach
* Development Team - Matt Michaels
* Designer - Sarah Xanathis

---

## Deployments
* Unknown host location currently, but will be hosted by the client

### Production
* Azure subscription - N/A
* Azure resource group - Unknown
* Deployment strategy - Continuous deployment from this repository to the client azure-hosted site

### Staging/Development
* Azure subscription - Unknown
* Azure resource group = Unknown
* Deployment strategy - Unknown
