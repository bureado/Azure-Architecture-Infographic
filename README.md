# Interactive Infographic for
## Open Source on Azure Depth and Breadth Marketing
Interactive infographic site built from a collection of .AI files being exported to SVGs.  The site has 5 sub-pages, and needs to be mobile friendly.



# File naming / Directory structure
There are a ton of .svg files used with this site, here is a breakdown of how they are being named / used.


### `img`
Default image directory


### `img/infographic*`
5 of these directories, each one associated with one of the 5 infographic pages


### `img/infographic#/fullwidth--infographic__[A].svg`
These are the full width (960px) images displaying any static content for each of the panels of the infographic


### `img/infographic#/infographic-[A]__icon[B].svg`
These are the inactive states of each of the clickable areas.

* Applying these involves a few steps
  - They are assets taken from the comp
  - Saved as an SVG
  - Placed inline with the class **icon--inactive**
* The inactive state SVG also toggles on :hover
  - The color toggle is achieved by applying **fill: #00bcf2;** to the **path / circle / rect / etc** of the inline SVG
* **Must match the same dimensions as the inactive state SVG, to maintain alignment with the *active state***

## `img/infographic#/infographic-[A]__icon[B]-active.svg`
These are the active states of each of the clickable areas, active being defined as *after a user has clicked*

The active state...
* Is shown using an <img> tag, rather than an inline <svg> like the inactive state
* Matches the same color used on :hover
* Adds a grey vertical line connected the selected icon to the grey panel above
* **Must match the same dimensions as the inactive state SVG, to maintain alignment with the *inactive state***


---

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

